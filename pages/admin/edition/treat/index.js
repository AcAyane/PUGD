import React from 'react'
import AdminLayout from '../../../../components/adminLayout'
import ReportingHeader from "../../../../components/admin/reporting/header/reportingHeader"
import Reporting from "../../../../components/admin/reporting/body/body"
import Table from "../../../../components/ui/Table/Table"
import Button from "../../../../components/ui/Button";
import {Container} from "next";
const CopyHome = () => {
    return <Reporting>
        <ReportingHeader ReportingModule="Treat" />
        <Table
            Thead={
                <tr>
                    <th>Rank</th>
                    <th>Borrower</th>
                    <th>BorrowerLocation</th>
                    <th>Title</th>
                    <th>CopyLocation</th>
                    <th>Section</th>
                    <th>Cote</th>
                    <th>Status</th>
                    <th>Support</th>
                    <th>CopyNumber</th>
                </tr>
            }
        />

        <Button rounded={2}>
            Process Reservation
        </Button>
    </Reporting>

}
CopyHome.Layout = AdminLayout
export default CopyHome
