import React from "react";
//import { useQuery, useMutation } from "@apollo/react-hooks";
import Table from "../../../../components/ui/Table/Table";
//import {GetRecord} from "../../../../graphql/queries/admin/Reporting/Record.queries"
//import { GetRecord } from "../../../../graphql/queries/reporting/record.queries";
//import { DeleteProvider } from "../../../graphql/mutations/acquisition/provider";

//import AdminLayout from "../../../../components/adminLayout";
//import Button from ".././../../components/ui/Button";
const ContentTable= ({getLoans}) => {



    function splitfunction(e) {
        return e
            .split("(")[1]
            .split(")")[0]
            .replace(/^"(.*)"$/, "$1");
    }
    if (getLoans==null || getLoans==undefined) return null;

    return (
        <React.Fragment>
            <div className="col s12">
                <Table
                    Thead={
                        <tr>
                            <th>BareCode</th>

                            <th> date de retour</th>
                            <th> date de réservation</th>
                            <th> Title</th>
                        </tr>
                    }

                    Tbody={
                        <tbody>

                        {getLoans.map((item) => (
                            <tr>

                                <td>{item.BareCode}</td>
                                <td>{item.DateLastBorrowed }</td>
                                <td>{item.DateReservation}</td>
                                <td>{item.Title}</td>
                                <td>
                                    <div className="invoice-action">


                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    }
                />
            </div>
        </React.Fragment>
    )
}


export default ContentTable;
