import React from 'react'
import AdminLayout from '../../../../components/adminLayout'
import ReportingHeader from "../../../../components/admin/reporting/header/reportingHeader";
import Reporting from "../../../../components/admin/reporting/body/body";
const RecordHome = () => {
    return <Reporting>
        <ReportingHeader ReportingModule="Delay By Reader" />
    </Reporting>

}
RecordHome.Layout = AdminLayout
export default RecordHome
