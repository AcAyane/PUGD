import React from "react";
import AdminLayout from "../../../../../components/adminLayout";
import Circulation from "../../../../../components/admin/Circulations/Body/Body";
import CirculationHeader from "../../../../../components/admin/Circulations/Hedar/CirculationHeader";
import AddReservationComponent from "../../../../../components/admin/Circulations/Pret_Document/AddReservationComponent";

const AddReservations = () =>{
    return <React.Fragment>
        <Circulation>
            <CirculationHeader Title={"Add Reservation for Borrower"}/>
                <AddReservationComponent/>
        </Circulation>
    </React.Fragment>
}

AddReservations.Layout = AdminLayout
export default AddReservations
