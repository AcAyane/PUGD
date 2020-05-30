import React, {useState} from 'react'
import AdminLayout from '../../../../../components/adminLayout'
import Card from "../../../../../components/ui/card/card";
import TextBox from "../../../../../components/ui/TextBox";
import Button from "../../../../../components/ui/Button";
import {useLazyQuery} from "@apollo/react-hooks";
import {EXAMPLAIR_BY_CODE} from "../../../../../graphql/queries/admin/Ciruclation/Examplaire.query";
import Table from "../../../../../components/ui/Table/Table";


const retDoc = () => {
    const nul = <span style={{color:'#d60e28'}}>No document finder with id : </span>;

    const [GetExamplaireByCodeBar, { loading, error, data }] = useLazyQuery(EXAMPLAIR_BY_CODE);

    const [codBar, setCodeBar] = useState('');

    if (loading) {return <div>Loading...</div>;}

    if(error){
        console.log(error)
        console.log(data)
    }
    const onSearchHandler = (e) => {
        e.preventDefault();
        GetExamplaireByCodeBar({
            variables: {
                code: codBar,
            }
        });
    }

    if(data != null || data !== undefined){
        console.log(data.GetExamplaireByCodeBar)
    }
    return <div className="container">
        <div className="row">
            <div className="col s12">
                <from>
                <Card>
                    <h5>Retour de documents</h5>
                    <span>Recherche des document par leur Code-barres</span>
                    <div className="row">
                        <TextBox label={"Search by Code bar doument"}
                                 type="text"
                                 onChange={event => {setCodeBar(event.target.value)}}
                                 value={codBar}
                        />
                        <Button
                            onClick={onSearchHandler}
                            rounded={4}>Search</Button>
                    </div>
                </Card>
            </from>
                { data != null || data !== undefined ?

                    (<div>
                        <div className="card-panel">
                            <div className="row">
                                <span>{data.GetExamplaireByCodeBar.Record.Title},
                                    {data.GetExamplaireByCodeBar.Record.RecYear}</span>
                            </div>
                            <div className="row">
                                <Table Thead={
                                    <tr>
                                        <th>NO.</th>
                                        <th>COTE</th>
                                        <th>SUPPORT</th>
                                        <th>LOCALISATION</th>
                                        <th>SECTION</th>
                                        <th>STATUT</th>
                                        <th>PROPRIÉTAIRE</th>
                                    </tr>
                                } Tbody={
                                    <tr>
                                        <td>
                                            <a key={data.GetExamplaireByCodeBar._id}>
                                                {data.GetExamplaireByCodeBar.BareCode}
                                            </a>
                                        </td>
                                        <td>960 DEP</td>
                                        <td>Livre</td>
                                        <td>Bibliothèque PMB Services</td>
                                        <td>Documentaires</td>
                                        <td>Empruntable</td>
                                        <td>BDP</td>
                                    </tr>
                                }/>
                            </div>
                        </div>

                        <div className="card-panel">
                            <div className="row">
                                <Table Thead={
                                    <tr>
                                    </tr>
                                } Tbody={
                                    <tr>
                                        <tr>
                                            <td>Origine</td>
                                            <td></td>
                                            <td>Dépôt</td>
                                        </tr>
                                        <tr>
                                            <td>Emprunteur précédent</td>
                                            <td></td>

                                            <td>
                                                <div className="row">
                                                    <div className="col s12 m6">
                                                        <div className="display-flex media ">
                                                            <a href="#" className="avatarDean Stanley">
                                                                <img src="https://cdn.pixabay.com/photo/2015/11/22/15/09/hummingbird-1056383_1280.jpg"
                                                                     alt="users view avatar" className="z-depth-4 circle"
                                                                     height="54" width="54"/>
                                                            </a>
                                                            <p/>
                                                            <div className="media-body">
                                                                <h6 className="media-heading">
                                                                    <span className="users-view-name">Dean Stanley </span>
                                                                    <span className="grey-text">@</span>
                                                                    <span className="users-view-username grey-text">candy007</span>
                                                                </h6>
                                                                <span>ID:</span>
                                                                <span className="users-view-id">305</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="col s12 m5 quick-action-btns display-flex justify-content-end align-items-center pt-2">
                                                        <a href="app-email.html" className="btn-small btn-light-indigo mr-5">Reservation</a>
                                                        <a href="page-users-edit.html" className="btn-small indigo">pret </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>prochen Emprenteur </td>
                                            <td></td>
                                            <td>
                                                <div className="row">
                                                    <div className="col s12 m6">
                                                        <div className="display-flex media">
                                                            <a href="#" className="avatar">
                                                                <img src="https://cdn.pixabay.com/photo/2015/11/22/15/09/hummingbird-1056383_1280.jpg"
                                                                     alt="users view avatar" className="z-depth-4 circle"
                                                                     height="64" width="64"/>
                                                            </a>
                                                            <p/>
                                                            <div className="media-body">
                                                                <h6 className="media-heading">
                                                                    <span className="users-view-name">Dean Stanley </span>
                                                                    <span className="grey-text">@</span>
                                                                    <span className="users-view-username grey-text">candy007</span>
                                                                </h6>
                                                                <span>ID:</span>
                                                                <span className="users-view-id">305</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="col s12 m5 quick-action-btns display-flex justify-content-end align-items-center pt-2">
                                                        <a href="app-email.html" className="btn-small btn-light-indigo mr-5"><i
                                                            className="material-icons">mail_outline</i></a>
                                                        <a href="page-users-edit.html" className="btn-small indigo">Edit</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Statut</td>
                                            <td>Empruntable

                                                <br/>
                                                <span className="task-cat teal accent-4">Disponible</span>
                                                <span className="task-cat red accent-2">Web API</span>

                                            </td>
                                        </tr>
                                    </tr>
                                }/>
                            </div>
                        </div>
                    </div>) :


                    <p>false : data null</p> }


            </div>
        </div>
    </div>
}
retDoc.Layout = AdminLayout
export default retDoc
