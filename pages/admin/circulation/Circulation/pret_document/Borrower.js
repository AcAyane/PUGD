import React from 'react'
import AdminLayout from '../../../../../components/adminLayout'
import {useRouter} from "next/router";
import {useQuery} from "@apollo/react-hooks";
import {BORROWER_WITH_PRET_AND_RSV} from "../../../../../graphql/queries/admin/Ciruclation/Borrowers.query"
import PretTable from "./pretTable";
import Profiles from "../../../../../components/admin/Circulations/Borrwer/Profiles";
import Circulation from "../../../../../components/admin/Circulations/Body/Body";
import CirculationHeader from "../../../../../components/admin/Circulations/Hedar/CirculationHeader";
import ReservationTable from "./reservationTable";

const Borrower = () => {

    const router = useRouter()
    const _id = router.query.id;

    console.log(_id);
    const {data,error} = useQuery(BORROWER_WITH_PRET_AND_RSV, {
        variables: {id: _id},
    });
    if (error){
        console.log("error",error)
    }
    console.log("pret_document/Borrower :", data);
    console.log("pret_document/Borrower GetBorrowerWithPretAndReservation :", data);
    return <React.Fragment>


        <Circulation>
            <CirculationHeader Title={"DEtails Emprunteur"}/>
            <div className="card">
                <div className="card-content">
                    <h5>Détails Emprunteur</h5>
                    <div className="card-content">
                        <div className="row">
                            <Profiles Borrower={data
                            && data.GetBorrowerWithPretAndReservation.Borrower}
                                      All_Pret={data && data.GetBorrowerWithPretAndReservation.All_Pret}
                            />
                        </div>
                    </div>
                </div>
            </div>


            <div className="card-panel">

                {
                    data && data && data.GetBorrowerWithPretAndReservation.All_Pret.length !== 0
                        ?  <PretTable title="List Pret"
                                      All_Pret={data && data.GetBorrowerWithPretAndReservation.All_Pret}
                                      user={data && data.GetBorrowerWithPretAndReservation.Borrower._id}
                        />
                        : " pas de Pret"
                }

            </div>
            <div className="card-panel">
                {
                    data && data.GetBorrowerWithPretAndReservation.All_Reservation.length !== 0
                        ?  <ReservationTable
                    title={"List Reservation"}
                    reservations={data && data.GetBorrowerWithPretAndReservation.All_Reservation}/>

                    : " pas de reservation"
                }


            </div>


        </Circulation>
    </React.Fragment>

}
Borrower.Layout = AdminLayout
export default Borrower
