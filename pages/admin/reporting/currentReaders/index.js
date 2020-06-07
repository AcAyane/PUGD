import React from 'react'
import AdminLayout from '../../../../components/adminLayout'
import ReportingHeader from "../../../../components/admin/reporting/header/reportingHeader"
import Reporting from "../../../../components/admin/reporting/body/body"
import Button from "../../../../components/ui/Button";
import Table from "../../../../components/ui/Table/Table";

const CopyHome = () => {
    return <Reporting>
        <ReportingHeader ReportingModule="Current Readers" />

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
                </tr>
            }
        />

        <Button rounded={2}>
            Add To Basket
        </Button>
    </Reporting>

}
CopyHome.Layout = AdminLayout
export default CopyHome
