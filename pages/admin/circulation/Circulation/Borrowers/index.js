import React from 'react'
import AdminLayout from "components/adminLayout";
import Circulation from "components/admin/Circulations/Body/Body";
import CirculationHeader from "components/admin/Circulations/Hedar/CirculationHeader";
import Formulaire from "../../../../../components/admin/Circulations/Borrwer/Add/Formulaire";


class AddBorrowers extends React.Component{
    render() {
        return <Circulation>
            <CirculationHeader Title="Add New BorrowersList"/>
            <Formulaire/>
        </Circulation>
    }
}

AddBorrowers.Layout = AdminLayout
export default AddBorrowers