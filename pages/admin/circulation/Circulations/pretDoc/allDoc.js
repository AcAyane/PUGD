import React, {useState} from 'react'
import AdminLayout from '../../../../../components/adminLayout'
import { useRouter, withRouter } from "next/router";
import {useQuery, useMutation} from "@apollo/react-hooks";
import {GetBorrower} from "../../../../../graphql/queries/admin/Ciruclation/Borrowers.query"
const Alldoc = () => {

    const router = useRouter()
    const id = router.query.id;
    console.log(id);
    const { loading, error, data } = useQuery(GetBorrower, {
        variables: { id:id },
    });
    console.log(data)
    return <React.Fragment>


        <div className="row">
            <div className="col s12 m12 l12">
                <div className="row vertical-modern-dashboard">

                    <div className="col s12 m8 l8 animate fadeLeft">
                        <div className="card">
                            <div className="card-content">
                                <h4 className="card-title mb-0">Détails Emprunteur:</h4>
                            <div className="card-content">
                                <ul>Nom:{data && data.getOneBorrower.last_name }</ul>
                                <ul>Prénom:{data && data.getOneBorrower.first_name}</ul>
                                <ul>Email: {data && data.getOneBorrower.email}</ul>
                                <ul>Adresse:{data && data.getOneBorrower.address.rue1}</ul>
                                <ul>Contry:{data && data.getOneBorrower.address.contry}</ul>
                                <ul>Code Barre: {data && data.getOneBorrower.bar_code}</ul>
                                <ul>Opac: {data && data.getOneBorrower.opaclogin}</ul>
                                <ul>Sexe: {data && data.getOneBorrower.gender}</ul>
                                <ul>Date de naissance: {data && data.getOneBorrower.birthday}</ul>
                            </div>
                            </div>

                        </div>
                    </div>
                    <div className="col s12 m8 l8 animate fadeLeft">
                        <div className="card">
                            <div className="card-content">
                                <h4 className="card-title mb-0">Table des prêts:</h4>
                                <table className="table table-bordered table-dark">
                                    <thead>
                                    <tr>
                                        <th scope="col">NO.</th>
                                        <th scope="col">Titre</th>
                                        <th scope="col">Support</th>
                                        <th scope="col">Localisation Secteur</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Retour initial</th>
                                        <th scope="col">Prologement</th>
                                        <th scope="col">Retour </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">no.</th>
                                        <td>titre</td>
                                        <td>supp.</td>
                                        <td>localisation</td>
                                        <td>date</td>
                                        <td>retour initial</td>
                                        <td>prolo.</td>
                                        <td>retour</td>

                                    </tr>

                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>


    </React.Fragment>

}
Alldoc.Layout = AdminLayout
export default Alldoc
