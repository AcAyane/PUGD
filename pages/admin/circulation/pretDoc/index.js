import React, {useState} from 'react'
import AdminLayout from '../../../../components/adminLayout'
import Card from "../../../../components/ui/card/card";
import TextBox from "../../../../components/ui/TextBox";
import Button from "../../../../components/ui/Button";
import {GetAllBro} from "../../../../graphql/queries/admin/Ciruclation/Borrowers.query";
import {useLazyQuery, useQuery} from "@apollo/react-hooks";





const pretDoc = () => {
    const { loading, error, data } = useQuery(GetAllBro);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    const onSearchHandler = (e) => {

        e.preventDefault();
        GetBorrowersByName({
            variables: {
                name: name,
            }
        });
    }

    return <div className="container">
            <div className="row">
                <div className="col s12">
                    <Card>
                        <h5>Prêt de documents</h5>
                        <span>Recherche emprunteur</span>
                        <div className="row">
                            <TextBox label={"Search by Code bar"}/>
                            {/*<Button rounded={2}>Search </Button>*/}
                        </div>
                        <table>
                           <thead>
                           <tr>
                               {/*<th>Code-Barres</th>*/}
                               {/*<th>Nom et Prénom</th>*/}
                               {/*<th>Adresse</th>*/}
                               {/*<th>Ville</th>*/}
                               {/*<th>Année de naissance</th>*/}
                               {/*<th>Statut</th>*/}
                               <th>Nom et Prénom</th>
                               <th>Adresse</th>
                               <th>Email</th>
                               <th>Date de naissance</th>
                               <th>Genre</th>

                           </tr>

                           </thead>
                            <tbody>
                            <tr>
                                <td>{data.GetAllBro.map((items)=>(
                                    <option value={items._id}>{items.fullname}</option>
                                ))}</td>
                                <td>{data.GetAllBro.map((items)=>(
                                    <option value={items._id}>{items.address}</option>
                                ))}</td>
                                <td>{data.GetAllBro.map((items)=>(
                                    <option value={items._id}>{items.email}</option>
                                ))}</td>
                                <td>{data.GetAllBro.map((items)=>(
                                    <option value={items._id}>{items.birthday}</option>
                                ))}</td>
                                <td>{data.GetAllBro.map((items)=>(
                                    <option value={items._id}>{items.gender}</option>
                                ))}</td>
                                </tr>



                            </tbody>





                        </table>
                    </Card>
                </div>
            </div>
        </div>


}

pretDoc.Layout = AdminLayout
export default pretDoc
