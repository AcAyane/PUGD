import React, {useState} from 'react'
import AdminLayout from '@/components/adminLayout'
import TextBox from "@/components/ui/TextBox";
import Button from "@/components/ui/Button";
import {useLazyQuery} from "@apollo/react-hooks";
import {EXAMPLAIR_BY_CODE} from "@/graphql/queries/admin/Ciruclation/Examplaire.query";
import Table from "@/components/ui/Table/Table";
import BtnBadge from "@/components/ui/ui_badge";
import Circulation from "@/components/admin/Circulations/Body/Body";
import CirculationHeader from "@/components/admin/Circulations/Hedar/CirculationHeader";
import Null from "@/components/admin/Circulations/Handerls/Null";
import Profile from "@/components/admin/Circulations/Borrwer/Profile";


const retDoc = () => {
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
    return <Circulation>
                <CirculationHeader CirculationModule="Retour de documents"
                children={
                    <from>
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
                    </from>
                }/>

                    { data != null || data !== undefined ?

                        (
                            <div>
                                <div className="card-panel">
                                <div className="row">
                                    <a href="#" className="float-left">
                                        <h5 className="display-inline">
                                            {data.GetExamplaireByCodeBar.Record.Title},
                                            {data.GetExamplaireByCodeBar.Record.RecYear}
                                        </h5>
                                    </a>
                                     <span className="chip teal text-lighten-2 accent-4 float-right">Disponible à pret</span>
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
                                            <td ><span className="chip  teal-text" >960 DEP</span></td>
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
                                                <td>Statut</td>
                                                <td></td>
                                                <td></td>
                                                <td><span className="task-cat teal accent-4">Disponible</span></td>

                                            </tr>
                                            <tr>
                                                <td>Origine</td>
                                                <td></td>
                                                <td></td>
                                                <td>Dépôt</td>
                                            </tr>
                                            <tr>
                                                <td>Emprunteur précédent</td>
                                                <td></td>
                                                <td></td>

                                                <td>
                                                    <Profile fullname="Dean Stanley"
                                                             codeBar="32234334"
                                                             urlProfil="https://cdn.pixabay.com/photo/2015/11/22/15/09/hummingbird-1056383_1280.jpg"
                                                             children={
                                                                 <div
                                                                     className="col s12 m5 quick-action-btns display-flex justify-content-end align-items-center pt-2">
                                                                     <a href="app-email.html" className="btn-small btn-light-indigo mr-5">Reservation</a>
                                                                     <a href="page-users-edit.html" className="btn-small indigo">
                                                                         <span>Pret</span>
                                                                         <BtnBadge className="display-inline ">2</BtnBadge>
                                                                     </a>

                                                                 </div>
                                                             }
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>prochen Emprenteur </td>
                                                <td></td>
                                                <td></td>
                                                <td>
                                                    <Profile fullname="Dean Stanley"
                                                             codeBar="32234334"
                                                             urlProfil="https://cdn.pixabay.com/photo/2015/11/22/15/09/hummingbird-1056383_1280.jpg"
                                                             children={
                                                                 <div
                                                                     className="col s12 m5 quick-action-btns display-flex justify-content-end align-items-center pt-2">
                                                                     <a href="app-email.html" className="btn-small btn-light-indigo mr-5">Reservation</a>
                                                                     <a href="page-users-edit.html" className="btn-small indigo">
                                                                         <span>Pret</span>
                                                                         <BtnBadge className="display-inline ">2</BtnBadge>
                                                                     </a>

                                                                 </div>
                                                             }
                                                    />
                                                </td>
                                            </tr>
                                        </tr>
                                    }/>
                                </div>
                            </div>
                        </div>) :


                        <Null children="Pas de document correspondant"/> }


                    </Circulation>
                }

retDoc.Layout = AdminLayout
export default retDoc
