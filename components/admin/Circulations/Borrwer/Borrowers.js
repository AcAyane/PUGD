import React from 'react'
import Link from "next/link";
import {AllBorrowers} from "../../../../graphql/queries/admin/Ciruclation/Borrowers.query";
import {useLazyQuery, useMutation, useQuery} from "@apollo/react-hooks";
import {DELETE_BORROWER} from "../../../../graphql/mutations/admin/circulation/Borrowers.mutation";


const Borrowers = (props) => {
    const {dataSet} = props
    const [DeleteOneBorrower] = useMutation(DELETE_BORROWER);
    const {data} = useQuery(AllBorrowers);

    console.log("data ", data)
    if (data != null || data !== undefined) {
        console.log(data.getAllBorrowers)
    }
    return <React.Fragment>
        {
            dataSet != null || dataSet !== undefined ?

                <React.Fragment>
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
                        {dataSet != null || dataSet !== undefined ? dataSet.getAllBorrowers.map((item) => (
                            <tr key={item._id}>
                                <span><td>{item.bar_code}</td></span>
                                <td>{item.last_name}</td>
                                <td>{item.first_name}</td>
                                <td>{item.email}</td>
                                <td>
                                    <Link href={{
                                        pathname: '/admin/circulation/Circulation/pretDoc/allDoc',
                                        query: {id: item._id}
                                    }}><a>Détails</a></Link>

                                </td>
                                <a
                                    href="#"
                                    className="invoice-action-view mr-4"
                                    onClick={(e) =>
                                        window.confirm("Are you sure you wish to delete this Borrower") &&
                                        // Router.push("/admin/circulation/Circulations/pretDoc")&&
                                        DeleteOneBorrower({
                                            variables: {_id: item._id},
                                            refetchQueries: [
                                                {query: AllBorrowers},
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
                        )) : <p>false</p>}
                        </tbody>
                    </table>
                </React.Fragment>

                :
                <React.Fragment>
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
                        {data != null || data !== undefined ? data.getAllBorrowers.map((item) => (
                            <tr key={item._id}>
                                <span><td>{item.bar_code}</td></span>
                                <td>{item.last_name}</td>
                                <td>{item.first_name}</td>
                                <td>{item.email}</td>
                                <td>
                                    <Link href={{
                                        pathname: '/admin/circulation/Circulation/pretDoc/allDoc',
                                        query: {id: item._id}
                                    }}><a>Détails</a></Link>

                                </td>
                                <a
                                    href="#"
                                    className="invoice-action-view mr-4"
                                    onClick={(e) =>
                                        window.confirm("Are you sure you wish to delete this Borrower") &&
                                        // Router.push("/admin/circulation/Circulations/pretDoc")&&
                                        DeleteOneBorrower({
                                            variables: {_id: item._id},
                                            refetchQueries: [
                                                {query: AllBorrowers},
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
                        )) : <p>false</p>}
                        </tbody>
                    </table>
                </React.Fragment>
        }
    </React.Fragment>
}

export default Borrowers