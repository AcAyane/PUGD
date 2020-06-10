import React from 'react'
import {useQuery} from "@apollo/react-hooks";
import {GetAllCopies} from "../../../../../graphql/queries/admin/Ciruclation/Copies.query";
import {useRouter} from "next/router";
import {GetBorrower} from "../../../../../graphql/queries/admin/Ciruclation/Borrowers.query";
import Link from "next/link";



function PretTable() {


    const router = useRouter()
    const BareCode = router.query.BareCode;
    const { loading, error, data } = useQuery(GetAllCopies, {
        variables: {BareCode: BareCode},
    });


    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <table className="table table-bordered">

            <thead>
            <tr>
                <th scope="col">Barecode</th>
                <th scope="col">CopyNumber</th>
                <th scope="col">Localisation</th>
                <th scope="col">Format</th>
                <th scope="col">ISBN</th>
                <th scope="col"> Restricted</th>
                <th scope="col">Title</th>


            </tr>
            </thead>
            <tbody>
            { data != null || data !== undefined ?  data.copies.map((item) => (
                <tr key={item._id} >
                    <span><td>{item.BareCode}</td></span>
                    <td>{item.CopyNumber}</td>
                    <td>{item.Localisation}</td>
                    <td>{item.Record.Format}</td>
                    <td>{item.Record.ISBN}</td>
                    <td>{item.Restricted}</td>
                    <td>{item.Record.Title}</td>
                </tr>
            ) ): <p></p> }
            </tbody>
        </table>


    )

    console.log(data);

}
export default PretTable;
