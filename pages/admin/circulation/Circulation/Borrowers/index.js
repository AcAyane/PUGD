import React from 'react'
import AdminLayout from "components/adminLayout";
import Circulation from "components/admin/Circulations/Body/Body";
import CirculationHeader from "components/admin/Circulations/Hedar/CirculationHeader";
import Address from "components/admin/Circulations/Borrwer/Address";

class AddBorrowers extends React.Component{
    render() {
        return <Circulation>
            <CirculationHeader Title="Add New Borrowers"/>
            <Address/>
        </Circulation>
    }
}

AddBorrowers.Layout = AdminLayout
export default AddBorrowers