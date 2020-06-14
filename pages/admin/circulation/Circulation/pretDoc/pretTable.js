import React from 'react'
import {useMutation, useQuery} from "@apollo/react-hooks";
import {GetAllCopies} from "../../../../../graphql/queries/admin/Ciruclation/Copies.query";
import {useRouter} from "next/router";
import {DELETE_COPY} from "../../../../../graphql/mutations/admin/circulation/Copies.mutations"
import {GetAllProviders} from "../../../../../graphql/queries/acquisition/provider";




function PretTable() {
    function splitfunction(e) {
        return e
            .split("(")[1]
            .split(")")[0]
            .replace(/^"(.*)"$/, "$1");
    }

    const router = useRouter()
    const BareCode = router.query.BareCode;
    const { loading, error, data } = useQuery(GetAllCopies, {
        variables: {BareCode: BareCode},
    });
    const [deleteOneCopy] = useMutation(DELETE_COPY);
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
                <th scope="col">Delete</th>


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

                    <a
                        href="#"
                        className="invoice-action-view mr-4"
                        onClick={(e) => {
                            deleteOneCopy({
                                variables: { _id: splitfunction(item._id) },
                                refetchQueries: [
                                    { query: GetAllCopies},
                                ],
                            });
                        }}
                    >
                        <i className="material-icons">delete</i>
                    </a>
                   {/* <a
                        href={`/admin/circulation/Circulations/pretDoc/UpdateBorrowers?id=${(
                            item._id
                        )}`}
                        className="invoice-action-edit"
                    >
                        <i className="material-icons">edit</i>
                    </a>*/}
                </tr>
            ) ): <p></p> }
            </tbody>
        </table>


    )

    console.log(data);

}
export default PretTable;
