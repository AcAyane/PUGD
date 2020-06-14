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
import Borrowers from "../../../../../components/admin/Circulations/Borrwer/Borrowers";






/*const onDocHandler = (e) => {
    /!* alert("hello");*!/
    Router.push("/admin/circulation/Circulations/pretDoc/allDoc");
}*/


const predoc = () => {


    const [ getAllBorrowers, { loading, error, data }] = useLazyQuery(AllBorrowers);



    const [id] = useState('');
    const [nom, setNom] = useState('');

    const onSearchHandler = (e) => {
        e.preventDefault();
        getAllBorrowers({
            variables: {
                /* bar_code: codBar,*/
                full_name: nom,

            }
        });
    }

    if (loading) {return <div>Loading...</div>;}

    if(error){
        console.log(error)
        console.log(data)
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
                {
                    data != null || data !== undefined ? <Borrowers dataSet={data}/> : <Borrowers/>
                }

            </div>
        </div>
    </div>


}
predoc.Layout = AdminLayout
export default predoc
