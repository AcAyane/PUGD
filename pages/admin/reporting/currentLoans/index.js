import React from 'react'
import AdminLayout from '../../../../components/adminLayout'
import ReportingHeader from "../../../../components/admin/reporting/header/reportingHeader";
import Reporting from "../../../../components/admin/reporting/body/body";
const laonsHome = () => {
    return <Reporting>
        <ReportingHeader ReportingModule="CurrentLoans" />
    </Reporting>

}
laonsHome.Layout = AdminLayout
export default laonsHome
