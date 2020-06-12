import React from 'react'
import AdminLayout from '../../../../components/adminLayout'
import ReportingHeader from "../../../../components/admin/reporting/header/reportingHeader"
import Reporting from "../../../../components/admin/reporting/body/body"
import Table from "../../../../components/ui/Table/Table";
import Button from "../../../../components/ui/Button";
import {useQuery} from "@apollo/react-hooks";
import {ALL_BORROWERS} from "../../../../graphql/queries/admin/reporting/borrowers.queries";


const CatToChange = () => {
    const {loading, error, data} = useQuery(ALL_BORROWERS)
    return <Reporting>
        <ReportingHeader ReportingModule="Category To Change" />

        <Table Thead={
            <tr>
                <th>BarCode</th>
                <th>FullName</th>
                <th>Address</th>
                <th>City</th>
                <th>Birthday</th>
                <th>Expiration Date</th>
                <th>Status</th>
                <th>Category</th>
                <th>Possible Changes</th>
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


        <div>

        <Button rounded={2}>
            Add To Basket
        </Button>

        <Button rounded={2}>
           Send Reminders
        </Button>
        </div>
    </Reporting>

}

CatToChange.Layout = AdminLayout
export default CatToChange

