import React, {Fragment, useState} from 'react'
import AdminLayout from '@/components/adminLayout'
import Card from "@/components/ui/Card\Card";
import {useMutation} from "@apollo/react-hooks";

import {ADD_SUGGESTION} from "@/graphql/mutations/admin/circulation/Suggestion.mutation";
import Button from "@/components/ui/Button";
import DatePicker from "@/components/ui/DatePicker/DatePicker";
import CirculationHeader from "@/components/admin/Circulations/Hedar/CirculationHeader";
import CirculationBody from "@/components/admin/Circulations/Body/Body";
import Circulation from "@/components/admin/Circulations/Body/Body";


const Suggestion = () => {
    const [titreOrDescriptionFile, setTitreOrDescriptionFile] = useState('')
    const [auteur, setAuteur] = useState('')
    const [editeur, setEditeur] = useState('')
    const [isbn, setIsbn] = useState('')
    const [prix, setPrix] = useState('')
    const [url, setUrl] = useState('')
    const [datepub, setDatepub] = useState()
    const [pice, setPice] = useState('')
    const [commentaires, setCommentaires] = useState('')
    const [commentairesGestion, setCommentairesGestion] = useState('')

    const [addSuggestion,{error}] = useMutation(ADD_SUGGESTION,{
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
    }
    return <Circulation>
                <CirculationHeader CirculationModule="Suggestion" />
                <Card>
                    <div className="card-header">
                        <h4 className="card-title">Suggestion</h4>
                    </div>
                    <p>Creation de Suggestion</p>
                    <div id="sidebar-list" className="row contact-sidenav ml-0 mr-0">
                        <div className="col s12 m12 l8 contact-form margin-top-contact">
                            <div className="row">
                                <form className="col s12" >
                                    <div className="row">
                                        <div className="input-field col m6 s12">
                                            <input className="validate"
                                                   id="tireOrDesc"
                                                   type="text"
                                                   onChange={e => setTitreOrDescriptionFile(e.target.value)}
                                                   value={titreOrDescriptionFile}
                                            />
                                            <label htmlFor="tireOrDesc">Titre/Description du fichier</label>
                                        </div>
                                        <div className="input-field col m6 s12">
                                            <input className="validate"
                                                   id="editeur" type="text"
                                                   onChange={e => setEditeur(e.target.value)}
                                                   value={editeur}
                                            />
                                            <label htmlFor="editeur">Editeur</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col m6 s12">
                                            <input  className="validate"
                                                    id="auteur"
                                                    type="text"
                                                    onChange={e => setAuteur(e.target.value)}
                                                    value={auteur}
                                            />
                                            <label htmlFor="auteur">Auteur</label>
                                        </div>
                                        <div className="input-field col m6 s12">
                                            <input className="validate"
                                                   id="isbn" type="text"
                                                   onChange={e => setIsbn(e.target.value)}
                                                   value={isbn}
                                            />
                                            <label htmlFor="isbn">ISBN</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col m6 s12">
                                            <input className="validate" id="prix"
                                                   type="number"
                                                   onChange={e => setPrix(e.target.value)}
                                                   value={prix}
                                            />
                                            <label htmlFor="prix">Prix</label>
                                        </div>
                                        <div className="input-field col m6 s12">
                                            <input className="validate"
                                                   id="URL" type="text"
                                                   onChange={e => setUrl(e.target.value)}
                                                   value={url}
                                            />
                                            <label htmlFor="URL">URL Associéel</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="">
                                            <DatePicker label="Date de publication"
                                                        onChange={e => setDatepub(new Date(e.target.value))}
                                                        value={datepub}
                                            />

                                            {/*<DatePicker
                                                label="Date de publication"
                                                value={Authority.Start && Authority.Start.toISOString().split("T")[0] || ""}
                                                onChange={(e) => {
                                                    e.persist();
                                                    OnAuthorityLinkChange(index, { "Start": new Date(e.target.value) })
                                                }}
                                            />*/}
                                        </div>
                                        <div className="input-field col m6 s12">
                                            <input id="pice" type="text" className="validate"
                                                   onChange={e => setPice(e.target.value)}
                                                   value={pice}
                                            />
                                            <label htmlFor="Piece">Pièce jointe</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12 width-100">
                                            <textarea id="commentaires" className="materialize-textarea"
                                                      onChange={e => setCommentaires(e.target.value)}
                                                      value={commentaires}
                                            />
                                            <label htmlFor="commentaires">Commentaires</label>
                                        </div>
                                        <div className="input-field col s12 width-100">
                                            <textarea id="commentairesGestion" className="materialize-textarea"
                                                      onChange={e => setCommentairesGestion(e.target.value)}
                                                      value={commentairesGestion}
                                            />
                                            <label htmlFor="commentairesGestion">Commentaires de Gestion</label>
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        onClick={onSubmitHandler}
                                    >
                                        SAVE
                                    </Button>

                                    {error ? <div  >{String(error)}</div> : null}
                                </form>
                            </div>
                        </div>
                    </div>

                </Card>

            </Circulation>
}
Suggestion.Layout = AdminLayout
export default Suggestion
