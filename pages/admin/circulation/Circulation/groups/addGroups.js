import React, {useState} from 'react'
import AdminLayout from '@/components/adminLayout'
import Card from "@/components/ui/card/card";
import Grid from "@/components/ui/Grid/grid";
import GridElement from "@/components/ui/Grid/GridElement";
import TextBox from "@/components/ui/TextBox";
import SelectBox from "@/components/ui/SelectBox";

import Checkbox from "@/components/ui/Checkbox";
import Button from "@/components/ui/Button";
import {useMutation, useQuery} from "@apollo/react-hooks";
import {ALL_BORROWERS} from "@/graphql/queries/admin/Ciruclation/Borrowers.query";
import Circulation from "@/components/admin/Circulations/Body/Body";
import CirculationHeader from "@/components/admin/Circulations/Hedar/CirculationHeader";

// todo add Mebmer filter rapide
const addGroups = () => {
    const { loading, error, data } = useQuery(ALL_BORROWERS);


    const [AddGroup, setAddGroup] = useState('')
    const [nameGroup, setNameGroup] = useState('')
    const [message, setMessage] = useState('')
    const [responsable, setResponsableGroup] = useState('')
    const [addResponsableToGroup, setAddResponsableToGroup] = useState(true)
    const [sendMailReservationToResponsable, setSendMailReservationToResponsable] = useState(false)
    const [sendMailRappelToResponsable, setSendMailRappelToResponsable] = useState(false)
    const [sendLetterRappelToResponsable, setSendLetterRappelToResponsable] = useState(false)
    const [sendLetterReservationToResponsable, setSendLetterReservationToResponsable] = useState(false)
    const [imprimeNameGroupOneLetter, setImprimeNameGroupOneLetter] = useState(false)
    const [imprimeNameGroupOneLetterReservation, setImprimeNameGroupOneLetterReservation] = useState(false)

    console.log(AddGroup)
    console.log("name group",nameGroup)
    console.log("Message",message)
    console.log("respo",responsable)
    console.log("add respo to group ",addResponsableToGroup)
    console.log("send Mail Reservation To Responsable",sendMailReservationToResponsable)
    console.log("send Mail Rappel To Responsable",sendMailRappelToResponsable)
    console.log("send Letter Rappel To Responsable ",sendLetterRappelToResponsable)
    console.log("send letter reservation",sendLetterReservationToResponsable)
    console.log("imrime name group",imprimeNameGroupOneLetter)
    console.log("imprim name group2:",imprimeNameGroupOneLetterReservation)

    const onSubmitHandler = ()=>{
        console.log(AddGroup)
        console.log("name group",nameGroup)
        console.log("Message",message)
        console.log("respo",responsable)
        console.log("add respo to group ",addResponsableToGroup)
        console.log("send mail to respo",send)
        console.log("send mail rappel to respo",sendMailRappelToResponsable)
        console.log("send letter rappel ",sendLetterRappelToResponsable)
        console.log("send letter reservation",sendLetterReservationToResponsable)
        console.log("imrime name group",imprimeNameGroupOneLetter)
        console.log("imprim name group2:",imprimeNameGroupOneLetterReservation)

        /*addSuggestion({
            variables: {
                TitreOrDescriptionFile: titreOrDescriptionFile,
                Editeur: editeur,
                Auteur: auteur,
                ISBN: isbn,
                Prix: prix,
                URLAssocier: url,
                DateDePublication: datepub,
                Commentaires: commentaires,
                CommentairesGestion: commentairesGestion,
            }
        });*/
    }

    /*const [addSuggestion,{error}] = useMutation(ADD_SUGGESTION,{
        onCompleted(data) {
            const {_id} = data
            console.log("id user is:", _id)
            // Router.push("/");
        }
    });
    const onSubmitHandler = ()=>{
        console.log(titreOrDescriptionFile)

        addSuggestion({
            variables: {
                TitreOrDescriptionFile: titreOrDescriptionFile,
                Editeur: editeur,
                Auteur: auteur,
                ISBN: isbn,
                Prix: prix,
                URLAssocier: url,
                DateDePublication: datepub,
                Commentaires: commentaires,
                CommentairesGestion: commentairesGestion,
            }
        });
    }*/
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return <Circulation className="container">
                <CirculationHeader CirculationModule="Add New Groups"/>
                    <form>
                        <Card>
                            <div className="card-content pb-0">
                                <div className="row">
                                    <Grid>
                                        <GridElement s={12} style={{ display: "flex"}}>
                                            {/*todo check Name Group  if is used  or not*/}
                                            <TextBox Multiline={"input"} label="Nom du Group"
                                                     type="text"
                                                     onChange={e => setNameGroup(e.target.value)}
                                                     value={nameGroup}/>
                                            <SelectBox label={"Responsable du Groups"}>
                                                {data.GetAllBro.map((items)=>(
                                                    <option key={items._id} value={items.fullname}>{items.fullname}</option>
                                                ))}
                                            </SelectBox>
                                    </GridElement>

                                    {/*todo Send Message to Respo Groups*/}
                                    <GridElement s={12}>
                                        <TextBox Multiline label="Message" data-length="120"
                                                 type="text"
                                                 onChange={e => setMessage(e.target.value)}
                                                 value={message}/>
                                    </GridElement>

                                    {/*todo Send Message to Respo Groups*/}
                                    <Grid>
                                        <GridElement s={12}>
                                            <Checkbox label={"Ajouter le responsable au groupe "}
                                                      checked={addResponsableToGroup}
                                                      onChange={() => setAddResponsableToGroup(!addResponsableToGroup)}
                                            />
                                        </GridElement>
                                        <GridElement s={12}>
                                            <Checkbox label={"Adresser les lettres de rappel individuelles au responsable de ce groupe ?"}
                                                      checked={sendLetterRappelToResponsable}
                                                      onChange={() => setSendLetterRappelToResponsable(!sendLetterRappelToResponsable)}
                                            />
                                        </GridElement>
                                        <GridElement s={12}>
                                            <Checkbox label={"Adresser les mails de rappel individuels au responsable de ce groupe ?"}
                                                      checked={sendMailRappelToResponsable}
                                                      onChange={() => setSendMailRappelToResponsable(!sendMailRappelToResponsable)}
                                            />
                                        </GridElement>
                                        <GridElement s={12}>
                                            <Checkbox label={"Adresser les lettres de réservation individuelles au responsable de ce groupe ?"}
                                                      checked={sendLetterReservationToResponsable}
                                                      onChange={() => setSendLetterReservationToResponsable(!sendLetterReservationToResponsable)}
                                            />
                                        </GridElement>
                                        <GridElement s={12}>
                                            <Checkbox label={"Adresser les mails de réservation individuels au responsable de ce groupe ?"}
                                                      checked={sendMailReservationToResponsable}
                                                      onChange={() => setSendMailReservationToResponsable(!sendMailReservationToResponsable)}
                                            />
                                        </GridElement>
                                        <GridElement s={12}>
                                            <Checkbox label={"Imprimer le nom de ce groupe sur les lettres de rappel individuelles ?"}
                                                      checked={imprimeNameGroupOneLetter}
                                                      onChange={() => setImprimeNameGroupOneLetter(!imprimeNameGroupOneLetter)}
                                            />
                                        </GridElement>
                                        <GridElement s={12}>
                                            <Checkbox label={"Imprimer le nom de ce groupe sur les lettres de réservation individuelles ?"}
                                                      checked={imprimeNameGroupOneLetterReservation}
                                                      onChange={() => setImprimeNameGroupOneLetterReservation(!imprimeNameGroupOneLetterReservation)}
                                            />
                                        </GridElement>
                                    </Grid>



                                </Grid>
                                <br/>
                                <Button rounded={4}>Anullé</Button>
                                <Button rounded={4} onClick={onSubmitHandler}>Submit</Button>

                            </div>
                        </div>
                    </Card>
                </form>
    </Circulation>
}
addGroups.Layout = AdminLayout
export default addGroups
