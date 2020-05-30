import React, {useState} from 'react'
import AdminLayout from '../../../../../components/adminLayout'
import Card from "../../../../../components/ui/card/card";
import TextBox from "../../../../../components/ui/TextBox";
import Button from "../../../../../components/ui/Button";
import Icon from "../../../../../components/ui/Icon/Icon";
import Table from "../../../../../components/ui/Table/Table";

const traitDoc = () => {

    return <div className="container">
                <div className="row">
                    <div className="col s12">
                        <Card>
                            <h5>Documents À traiter</h5>
                            <span>Recherche emprunteur</span>
                            <div className="row">
                                <TextBox label={"Search by Code bar"}/>
                                <Button rounded={2}>Search</Button>
                            </div>
                        </Card>

                        <div className="card-panel">
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
                                        <td>000057</td>
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
                    </div>
                </div>
    </div>
}
traitDoc.Layout = AdminLayout
export default traitDoc
