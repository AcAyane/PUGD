import React from 'react'
import AdminLayout from '../../../../../components/adminLayout'
import {useRouter} from "next/router";
import {useQuery} from "@apollo/react-hooks";
import {GetBorrower} from "../../../../../graphql/queries/admin/Ciruclation/Borrowers.query"

const Alldoc = () => {

    const router = useRouter()
    const id = router.query.id;
    console.log(id);
    const {loading, error, data} = useQuery(GetBorrower, {
        variables: {id: id},
    });
    console.log(data)
    return <React.Fragment>


        <div className="row">
            <div className="col s12 m12 l12">
                <div className="row vertical-modern-dashboard">

                    <div className="col s12 ">
                        <div className="card">
                            <div className="card-content">
                                <h2 className="card-title mb-0">Détails Emprunteur:</h2>
                                <div className="card-content">
                                    <div className="row">

                                        <div className="col s12 m4 l2">
                                            <h5><u>Nom</u>: {data && data.getOneBorrower.last_name}</h5>
                                            <h5><u>Prénom</u>: {data && data.getOneBorrower.first_name}</h5>
                                            <h5><u>Email</u>:{data && data.getOneBorrower.email}</h5>
                                        </div>

                                        <div className="col s12 m4 push-xl2">
                                            <h5><u>Adresse</u> : {data && data.getOneBorrower.address.rue1}</h5>
                                            <h5><u>Contry</u> : {data && data.getOneBorrower.address.contry}</h5>
                                            <h5><u>Code Barre</u> : {data && data.getOneBorrower.bar_code}</h5>
                                        </div>
                                        <div className="col s12 m4 push-xl2">
                                            <h5><u>Opac</u> : {data && data.getOneBorrower.opaclogin}</h5>
                                            <h5><u>Sexe</u> : {data && data.getOneBorrower.gender}</h5>
                                            <h5><u>Date de naissance</u> : {data && data.getOneBorrower.birthday}</h5>
                                        </div>

                                    </div>
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
                                        <th scope="col">Retour</th>
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
