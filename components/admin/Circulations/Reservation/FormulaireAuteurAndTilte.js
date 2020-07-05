import React, {useState} from 'react'
import Collapsible from "../../../ui/Collapsible/Collapsible";
import Input from "../../../ui/Input";
import Search from "../Borrwer/SearchBar";
import Checkbox from "../../../ui/Checkbox";
import DatePicker from "../../../ui/DatePicker/DatePicker";
import SelectBox from "../../../ui/SelectBox";
import Button from "../../../ui/Button";
import ToggleSwitch from "../../../ui/ToggleSwitch/ToggleSwitch";
import {useMutation, useQuery} from "@apollo/react-hooks";
import {GetOneCopyByCode} from "../../../../graphql/queries/admin/Ciruclation/Copies.query";
import {BORROWER_WITH_PRET_AND_RSV} from "../../../../graphql/queries/admin/Ciruclation/Borrowers.query";

const FormAuteurAndTilteComponent = () => {

    const [code_bar_copy,setCode_bar_copy] = useState("")
    const {data, error, refetch} = useQuery(GetOneCopyByCode, {
        variables: {code_bar: code_bar_copy},
    });
    const onHandlerSubmit  = () =>{
        console.log("Sumbit by :",code_bar_copy)
    }

    return <React.Fragment>
        <Collapsible active>
            <li className="active">
                <div className="collapsible-header ">
                    <i className="material-icons">filter_drama</i>Auteur/Title
                </div>
                <div className="collapsible-body s12 m12 l12">
                    <div className="row">
                        <div className="input-field col s12 m8 l8">
                            <Input
                                icon="users"
                                className="validate"
                                label="Tous les champs"
                            />
                        </div>
                        <div className="input-field col s12 m4 l4">
                            <Checkbox label="Document Numérique"/>
                        </div>
                        <div className="input-field col s12 m6 l6">
                            <Input
                                icon="users"
                                className="validate"
                                label="Titre"
                            />
                        </div>
                        <div className="input-field col s12 m6 l6">
                            <Input
                                icon="layers"
                                className="validate"
                                label="Auteur"
                            />
                        </div>
                        <div className="input-field col s12 m6 l6">
                            <Input
                                icon="layers"
                                className="validate"
                                label="Catégorie"
                            />
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div className="collapsible-header">
                    <i className="material-icons">filter_drama</i>
                    Votre saisie peut aussi être une Expression Boolean
                </div>
                <div className=" collapsible-body s12 m12 l12">
                    <div className="row">
                        <div className="input-field col s12 m6 l6">
                            <SelectBox label="Type de Document">
                                <option>Hi</option>
                            </SelectBox>
                        </div>
                        <div className="input-field col 12 m6 l6">
                            <SelectBox label="Statut de notice">
                                <option>Status</option>
                            </SelectBox>
                        </div>

                        {/*<li className="col card-content s6 m6 l6">
                            <label>Date de publication ou année d'édition</label>

                            <DatePicker label="de :"/>
                            <DatePicker label="Jusqu'à"/>

                        </li>*/}
                        <div className="input-field col s12 m6 l6">
                            <Input
                                className="validate"
                                label="No. d'exemplaire Ou ISBN ou numéro commercial"
                                value={code_bar_copy}
                                onChange={e => setCode_bar_copy(e.target.value)}
                            />
                        </div>
                        <div className="input-field col s12 m6 l6">
                            <Input
                                className="validate"
                                label="Identifiant de la notice :"

                            />
                        </div>

                    </div>
                </div>
            </li>
        </Collapsible>
        <div>
            <Button onClick={onHandlerSubmit}>Serach</Button>
        </div>

    </React.Fragment>

}
export default FormAuteurAndTilteComponent