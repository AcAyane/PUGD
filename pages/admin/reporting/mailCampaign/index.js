import React from 'react'
import AdminLayout from '../../../../components/adminLayout'
import ReportingHeader from "../../../../components/admin/reporting/header/reportingHeader"
import Reporting from "../../../../components/admin/reporting/body/body"
const borrowersHome = () => {
    return <Reporting>
        <ReportingHeader ReportingModule="Mail Campaign" />
    </Reporting>

}
borrowersHome.Layout = AdminLayout
export default borrowersHome
