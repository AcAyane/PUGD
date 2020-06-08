import React, {useState} from 'react'
import AdminLayout from 'components/adminLayout'
import Card from "components/ui/card/card";
import Grid from "components/ui/Grid/grid";
import GridElement from "components/ui/Grid/GridElement";
import TextBox from "components/ui/TextBox";
import SelectBox from "components/ui/SelectBox";

import Checkbox from "components/ui/Checkbox";
import Button from "components/ui/Button";
import {useMutation, useQuery} from "@apollo/react-hooks";
import {ALL_BORROWERS} from "graphql/queries/admin/Ciruclation/Borrowers.query";
import Circulation from "components/admin/Circulations/Body/Body";
import CirculationHeader from "components/admin/Circulations/Hedar/CirculationHeader";
import {splitfunction} from "../../../../../shared/_herlpersCirculation/_helpers";
import {ADD_GROUP} from "../../../../../graphql/mutations/admin/circulation/Groups.mutation";

/*// todo add Mebmer filter rapide
class AddGroup extends  React.Component{
    state ={

    }
    render() {
        return <Circulation>
            <CirculationHeader Title="Add New Groups"/>
            <form>
                <Card>
                    <div className="card-content pb-0">
                        <div className="row">
                            <Grid>
                                <GridElement s={12} style={{display: "flex"}}>
                                    {/!*todo check Name Group  if is used  or not*!/}
                                    <TextBox Multiline={"input"} label="Nom du Group"
                                             type="text"
                                             onChange={e => setName(e.target.value)}
                                             value={name}/>

                                    <SelectBox label={"Responsable du Groups"}
                                               value={responsable}
                                               onChange={e => setResponsableGroup(e.target.value)}
                                    >
                                        {data.getAllBorrowers.map((item) => (
                                            <option key={item._id} value={splitfunction(item._id)}>
                                                {item.first_name + " " + item.last_name}

                                            </option>
                                        ))}
                                    </SelectBox>
                                </GridElement>

                                {/!*todo Send Message to Respo Groups*!/}
                                <GridElement s={12}>
                                    <TextBox Multiline label="Message" data-length="120"
                                             type="text"
                                             onChange={e => setMessage(e.target.value)}
                                             value={message}/>
                                </GridElement>

                                {/!*todo Send Message to Respo Groups*!/}
                                <Grid>
                                    <GridElement s={12}>
                                        <Checkbox label={"Ajouter le responsable au groupe "}
                                                  checked={addResponsableToGroup}
                                                  value={responsable}
                                                  onChange={() => setAddResponsableToGroup(!addResponsableToGroup)}
                                        />
                                    </GridElement>
                                    <GridElement s={12}>
                                        <Checkbox
                                            label={"Adresser les lettres de rappel individuelles au responsable de ce groupe ?"}
                                            checked={sendLetterRappelToResponsable}
                                            onChange={() => setSendLetterRappelToResponsable(!sendLetterRappelToResponsable)}
                                        />
                                    </GridElement>
                                    <GridElement s={12}>
                                        <Checkbox
                                            label={"Adresser les mails de rappel individuels au responsable de ce groupe ?"}
                                            checked={sendMailRappelToResponsable}
                                            onChange={() => setSendMailRappelToResponsable(!sendMailRappelToResponsable)}
                                        />
                                    </GridElement>
                                    <GridElement s={12}>
                                        <Checkbox
                                            label={"Adresser les lettres de réservation individuelles au responsable de ce groupe ?"}
                                            checked={sendLetterReservationToResponsable}
                                            onChange={() => setSendLetterReservationToResponsable(!sendLetterReservationToResponsable)}
                                        />
                                    </GridElement>
                                    <GridElement s={12}>
                                        <Checkbox
                                            label={"Adresser les mails de réservation individuels au responsable de ce groupe ?"}
                                            checked={sendMailReservationToResponsable}
                                            onChange={() => setSendMailReservationToResponsable(!sendMailReservationToResponsable)}
                                        />
                                    </GridElement>
                                    <GridElement s={12}>
                                        <Checkbox
                                            label={"Imprimer le nom de ce groupe sur les lettres de rappel individuelles ?"}
                                            checked={imprimeNameGroupOneLetter}
                                            onChange={() => setImprimeNameGroupOneLetter(!imprimeNameGroupOneLetter)}
                                        />
                                    </GridElement>
                                    <GridElement s={12}>
                                        <Checkbox
                                            label={"Imprimer le nom de ce groupe sur les lettres de réservation individuelles ?"}
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
}*/
const addGroups = () => {




    const {loading, error, data} = useQuery(ALL_BORROWERS);

    { data !== undefined ?
        data.getAllBorrowers.map(t =>{
            console.log( t.first_name)
        }) :  "error"
    }





    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [responsable, setResponsableGroup] = useState('')
    const [members, setMembers] = useState([])
    const [addResponsableToGroup, setAddResponsableToGroup] = useState(false)
    const [sendMailReservationToResponsable, setSendMailReservationToResponsable] = useState(false)
    const [sendMailRappelToResponsable, setSendMailRappelToResponsable] = useState(false)
    const [sendLetterRappelToResponsable, setSendLetterRappelToResponsable] = useState(false)
    const [sendLetterReservationToResponsable, setSendLetterReservationToResponsable] = useState(false)
    const [imprimeNameGroupOneLetter, setImprimeNameGroupOneLetter] = useState(false)
    const [imprimeNameGroupOneLetterReservation, setImprimeNameGroupOneLetterReservation] = useState(false)



    const updateMembers = (member) => {

        if (members.includes(member)) {
            setMembers(members.filter(tool => tool.value !== member));
        } else {
            setMembers([...members, member]);// or push
        }
    };

    const checkHandler = e => {
        const value = e.target.value; //Checkbox value
        console.log("value :",value)
        updateMembers(value);
    };

    console.log("add respo to group ->:", addResponsableToGroup)
    console.log("respo ->:", responsable)
    console.log("Mebmber  ->:", responsable)
    const [AddGroup] = useMutation(ADD_GROUP,{
        onCompleted(data) {
            const {_id} = data
            console.log("id user is:", _id)
            // Router.push("/");
        }
    });
    const onSubmitHandler = ()=>{
        console.log("name group", name)

        console.log("add respo to group ", addResponsableToGroup)
        console.log("send Mail Reservation To Responsable", sendMailReservationToResponsable)
        console.log("send Mail Rappel To Responsable", sendMailRappelToResponsable)
        console.log("send Letter Rappel To Responsable ", sendLetterRappelToResponsable)
        console.log("send letter reservation", sendLetterReservationToResponsable)
        console.log("imrime name group", imprimeNameGroupOneLetter)
        console.log("imprim name group2:", imprimeNameGroupOneLetterReservation)

        AddGroup({
            variables: {
                name: name,
                message: message,
                responsable: responsable,
                addResponsableToGroup: addResponsableToGroup,
                sendMailReservationToResponsable: sendMailReservationToResponsable,
                sendMailRappelToResponsable: sendMailRappelToResponsable,
                sendLetterRappelToResponsable: sendLetterRappelToResponsable,
                sendLetterReservationToResponsable: sendLetterReservationToResponsable,
                imprimeNameGroupOneLetter: imprimeNameGroupOneLetter,
                imprimeNameGroupOneLetterReservation: imprimeNameGroupOneLetterReservation,
            }
        });
    }


    if (loading) return <di>
        <div className="spinner-layer spinner-red">
            <div className="circle-clipper left">
                <div className="circle"/>
            </div>
            <div className="gap-patch">
                <div className="circle"/>
            </div>
            <div className="circle-clipper right">
                <div className="circle"/>
            </div>
        </div>
    </di>;
    if (error) return `Error! ${error.message}`;


    return <Circulation>
        <CirculationHeader Title="Add New Groups"/>
        <form>
            <Card>
                <div className="card-content pb-0">
                    <div className="row">
                        <Grid>
                            <GridElement s={12} style={{display: "flex"}}>
                                {/*todo check Name Group  if is used  or not*/}
                                <TextBox Multiline={"input"} label="Nom du Group"
                                         type="text"
                                         onChange={e => setName(e.target.value)}
                                         value={name}/>

                                <SelectBox label={"Responsable du Groups"}
                                           value={responsable}
                                           onChange={e => setResponsableGroup(e.target.value)}
                                >
                                    {data.getAllBorrowers.map((item) => (
                                        <option key={item._id} value={splitfunction(item._id)}>
                                            {item.first_name + " " + item.last_name}

                                        </option>
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
                                              value={responsable}
                                              onChange={() => setAddResponsableToGroup(!addResponsableToGroup)}
                                    />
                                </GridElement>
                                <GridElement s={12}>
                                    <Checkbox
                                        label={"Adresser les lettres de rappel individuelles au responsable de ce groupe ?"}
                                        checked={sendLetterRappelToResponsable}
                                        onChange={() => setSendLetterRappelToResponsable(!sendLetterRappelToResponsable)}
                                    />
                                </GridElement>
                                <GridElement s={12}>
                                    <Checkbox
                                        label={"Adresser les mails de rappel individuels au responsable de ce groupe ?"}
                                        checked={sendMailRappelToResponsable}
                                        onChange={() => setSendMailRappelToResponsable(!sendMailRappelToResponsable)}
                                    />
                                </GridElement>
                                <GridElement s={12}>
                                    <Checkbox
                                        label={"Adresser les lettres de réservation individuelles au responsable de ce groupe ?"}
                                        checked={sendLetterReservationToResponsable}
                                        onChange={() => setSendLetterReservationToResponsable(!sendLetterReservationToResponsable)}
                                    />
                                </GridElement>
                                <GridElement s={12}>
                                    <Checkbox
                                        label={"Adresser les mails de réservation individuels au responsable de ce groupe ?"}
                                        checked={sendMailReservationToResponsable}
                                        onChange={() => setSendMailReservationToResponsable(!sendMailReservationToResponsable)}
                                    />
                                </GridElement>
                                <GridElement s={12}>
                                    <Checkbox
                                        label={"Imprimer le nom de ce groupe sur les lettres de rappel individuelles ?"}
                                        checked={imprimeNameGroupOneLetter}
                                        onChange={() => setImprimeNameGroupOneLetter(!imprimeNameGroupOneLetter)}
                                    />
                                </GridElement>
                                <GridElement s={12}>
                                    <Checkbox
                                        label={"Imprimer le nom de ce groupe sur les lettres de réservation individuelles ?"}
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
