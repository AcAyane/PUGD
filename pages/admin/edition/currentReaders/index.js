import React from 'react'
import AdminLayout from '../../../../components/adminLayout'
import ReportingHeader from "../../../../components/admin/reporting/header/reportingHeader"
import Reporting from "../../../../components/admin/reporting/body/body"
import Button from "../../../../components/ui/Button";
import Table from "../../../../components/ui/Table/Table";
import {useQuery} from "@apollo/react-hooks";
import {ALL_BORROWERS} from "../../../../graphql/queries/admin/reporting/borrowers.queries";

const Borrowers = () => {
    const nul = <span style={{color:'#d60e28'}}>No Group finder</span>;
    const show = false;
    const {loading, error, data} = useQuery(ALL_BORROWERS)
    //console.log("data",data.getAllBorrowers && data.getAllBorrowers.first_name )

    return <Reporting>
        <ReportingHeader ReportingModule="Current Readers" />

        <Table Thead={
            <tr>
                <td>Barcode</td>
                <td>LastName & firstName</td>
                <td>Address </td>
                <td>City</td>
                <td>Birthday</td>
                <td>DueDate</td>
                <td>Status</td>
            </tr>
        }
               Tbody={

                   data != null || data !== undefined ?(
                   data.getAllBorrowers.map((item)=>{
                   // eslint-disable-next-line react/jsx-key
                   return <React.Fragment>
                   <tr>
                   <td>{item.first_name}</td>
                   <td>{item.last_name}</td>
                   <td>{item.first_name}</td>
                   <td>{item.last_name}</td>
                   <td>{item.first_name}</td>
                   <td>{item.last_name}</td>
                   <td>{item.first_name}</td>
                   </tr>
                   </React.Fragment>
               })
                       ) : "null"


               }
        />

        <Button rounded={2}>
            Add To Basket
        </Button>
    </Reporting>

}
Borrowers.Layout = AdminLayout
export default Borrowers
