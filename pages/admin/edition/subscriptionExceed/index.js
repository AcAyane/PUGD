import React from 'react'
import AdminLayout from '../../../../components/adminLayout'
import ReportingHeader from "../../../../components/admin/reporting/header/reportingHeader"
import Reporting from "../../../../components/admin/reporting/body/body"
import Table from "../../../../components/ui/Table/Table";
import Button from "../../../../components/ui/Button";
const CopyHome = () => {
    return <Reporting>
        <ReportingHeader ReportingModule="Subscription Exceeded" />

        <Table
            Thead={
                <tr>
                    <th>BarCode</th>
                    <th>FullName</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Birthday</th>
                    <th>ExpirationDate</th>
                    <th>Status</th>
                    <th>Mail</th>
                </tr>
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
CopyHome.Layout = AdminLayout
export default CopyHome
