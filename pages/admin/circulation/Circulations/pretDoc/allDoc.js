import React from 'react'
import AdminLayout from '../../../../../components/adminLayout'
import {useRouter} from "next/router";
import {useQuery} from "@apollo/react-hooks";
import {GetBorrower} from "../../../../../graphql/queries/admin/Ciruclation/Borrowers.query"
import PretTable from "./pretTable";

const Alldoc = () => {

    const router = useRouter()
    const id = router.query.id;

    console.log(id);
    const {loading, error, data} = useQuery(GetBorrower, {
        variables: {id: id},
    });
    return <React.Fragment>


        <div className="row">
            <div className="col s12 m12 l12">
                <div className="row vertical-modern-dashboard">

                    <div className="col s12 ">
                        <div className="card">
                            <div className="card-content">
                                <h2 >Détails Emprunteur</h2>
                                <div className="card-content">
                                    <div className="row">

                                        <div className="col s12 m4 l2">
                                            <h5><u>Nom</u>: {data && data.getOneBorrower.last_name}</h5>
                                            <h5><u>Prénom</u>: {data && data.getOneBorrower.first_name}</h5>
                                            <h5><u>Sexe</u> : {data && data.getOneBorrower.gender}</h5>

                                        </div>

                                        <div className="col s12 m4 push-xl2">
                                            <h5><u>Adresse</u> : {data && data.getOneBorrower.address.rue1}</h5>
                                            <h5><u>Contry</u> : {data && data.getOneBorrower.address.contry}</h5>
                                            <h5><u>Code Barre</u> : {data && data.getOneBorrower.bar_code}</h5>
                                        </div>
                                        <div className="col s12 m4 push-xl2">
                                            <h5><u>Email</u>:{data && data.getOneBorrower.email}</h5>
                                            <h5><u>Opac</u> : {data && data.getOneBorrower.opaclogin}</h5>
                                            <h5><u>Date de naissance</u> : {data && data.getOneBorrower.birthday}</h5>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col s12 m8 l8 animate fadeLeft">
                        <div className="card">
                            <div className="card-content"><PretTable/></div>


                        </div>
                    </div>

                </div>
            </div>
        </div>


    </React.Fragment>

}
Alldoc.Layout = AdminLayout
export default Alldoc
