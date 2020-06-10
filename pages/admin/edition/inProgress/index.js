import React from 'react'
import AdminLayout from '../../../../components/adminLayout'
import ReportingHeader from "../../../../components/admin/reporting/header/reportingHeader";
import Reporting from "../../../../components/admin/reporting/body/body";
import Table from "../../../../components/ui/Table/Table";
const CopyHome = () => {
    return <Reporting>
        <ReportingHeader ReportingModule="In Progress" />

        <Table
            Thead={
                <tr>
                    <th>Title</th>
                    <th>Cote</th>
                    <th>Borrower</th>
                    <th>Localization</th>
                    <th>Rank</th>
                    <th>ReservationDate</th>
                    <th>ScheduledReturn</th>
                    <th>EndOfValidity</th>
                </tr>
            }
        />
    </Reporting>

}
CopyHome.Layout = AdminLayout
export default CopyHome
