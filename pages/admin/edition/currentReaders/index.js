import React from 'react'
import AdminLayout from '../../../../components/adminLayout'
import ReportingHeader from "../../../../components/admin/reporting/header/reportingHeader"
import Reporting from "../../../../components/admin/reporting/body/body"
import Button from "../../../../components/ui/Button";
import Table from "../../../../components/ui/Table/Table";
import {useQuery} from "@apollo/react-hooks";
import {ALL_BORROWERS} from "../../../../graphql/queries/admin/reporting/borrowers.queries";

const CurReaders = () => {

    const {loading, error, data} = useQuery(ALL_BORROWERS)
    //console.log("data",data.getAllBorrowers && data.getAllBorrowers.first_name )

    return <Reporting>
        <ReportingHeader ReportingModule="Current Readers" />

        <Table Thead={
            <tr>
                <td>Barcode</td>
                <td>LastName</td>
                <td>FirstName</td>
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
                   <td>{item.bar_code}</td>
                   <td>{item.last_name}</td>
                   <td>{item.first_name}</td>
                   <td>{item.address}</td>
                   <td>{item.birthday}</td>
                   <td>{item.last_name}</td>
                   <td>{item.status}</td>
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
CurReaders.Layout = AdminLayout
export default CurReaders
