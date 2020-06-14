import React, {useState} from 'react'
import AdminLayout from '../../../../../components/adminLayout'
import TextBox from "../../../../../components/ui/TextBox";
import Button from "../../../../../components/ui/Button";
import Card from "../../../../../components/ui/card/card";
import {useLazyQuery, useMutation} from "@apollo/react-hooks";
import {AllBorrowers} from "../../../../../graphql/queries/admin/Ciruclation/Borrowers.query";
import Link from "next/link";
import {DELETE_BORROWER} from "../../../../../graphql/mutations/admin/circulation/Borrowers.mutation";
import Router from "next/router";






/*const onDocHandler = (e) => {
    /!* alert("hello");*!/
    Router.push("/admin/circulation/Circulations/pretDoc/allDoc");
}*/


const predoc = () => {


    const [ getAllBorrowers, { loading, error, data }] = useLazyQuery(AllBorrowers);
    const [DeleteOneBorrower] = useMutation(DELETE_BORROWER);



    const [id] = useState('');
    const [nom, setNom] = useState('');


    if (loading) {return <div>Loading...</div>;}

    if(error){
        console.log(error)
        console.log(data)
    }



    const onSearchHandler = (e) => {
        e.preventDefault();
        getAllBorrowers({
            variables: {
                /* bar_code: codBar,*/
                full_name: nom,

            }
        });
    }

    if(data != null || data !== undefined){
        console.log(data.getAllBorrowers)
    }
    return <div className="container">
        <div className="row">
            <div className="col s12">
                <form>
                    <Card >
                        <h5>Emprunteurs</h5>

                        <div className="row display-flex">
                            <TextBox
                                label="Chercher avec le nom"
                                type="text"
                                onChange={event => { setNom(event.target.value)}}
                                value={nom}
                            />
                            <Button
                                onClick={onSearchHandler}
                                rounded={4}>Search</Button>

                        </div>
                    </Card>
                </form>
                <table className="table table-bordered">

                    <thead>
                    <tr>
                        <th scope="col">Barecode</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Prénom</th>
                        <th scope="col">Email</th>
                        <th scope="col">Détails</th>
                        <th scope="col">Delete</th>




                    </tr>
                    </thead>
                    <tbody>
                    { data != null || data !== undefined ?  data.getAllBorrowers.map((item) => (
                        <tr key={item._id} >
                            <span><td>{item.bar_code}</td></span>
                            <td>{item.last_name}</td>
                            <td>{item.first_name}</td>
                            <td>{item.email}</td>
                            <td>
                                <Link href={{ pathname: '/admin/circulation/Circulations/pretDoc/allDoc', query: { id :item._id } }}><a>Détails</a></Link>

                                </td>
                            <a
                                href="#"
                                className="invoice-action-view mr-4"
                                onClick={(e) =>
                                    window.confirm("Are you sure you wish to delete this Borrower") &&
                                    Router.push("/admin/circulation/Circulations/pretDoc")&&
                                    DeleteOneBorrower({
                                        variables: { _id: item._id },
                                        refetchQueries: [
                                            { query:  AllBorrowers },
                                        ]

                                    })

                                }
                            >
                                <i className="material-icons">delete</i>
                            </a>
                            <a
                                href={`/admin/circulation/Circulations/pretDoc/UpdateBorrowers?id=${(
                                    item._id
                                )}`}
                                className="invoice-action-edit"
                            >
                                <i className="material-icons">edit</i>
                            </a>

                        </tr>
                    ) ): <p>false</p> }
                    </tbody>
                </table>
            </div>
        </div>
    </div>


}
predoc.Layout = AdminLayout
export default predoc
