

import React from 'react'
import Collapsible from "../../../ui/Collapsible/Collapsible";
import Input from "../../../ui/Input";
import FormAuteurAndTilteComponent from "../Reservation/FormulaireAuteurAndTilte";

const AddReservationComponent = () => {

    return <React.Fragment>

        <ul id="issues-collection" className="collection z-depth-1 animate fadeRight">
            <li className="collection-item avatar">
                <i className="material-icons orange darken-4 circle">add</i>
                <h5 className="collection-header m-0">Reservation</h5>
                <p>Création d'une réservation pour le lecteur  :</p>
                <a href={"#"}>Auteur/titre,</a>&nbsp;&nbsp;
                <a href={"#"}>Catégories/Index. décimale,</a>&nbsp;&nbsp;
                <a href={"#"}>Termes des catégories,</a>&nbsp;&nbsp;
                <a href={"#"}>Éditeur/collection,</a>&nbsp;&nbsp;
                <a href={"#"}>Paniers,</a>&nbsp;&nbsp;
                <a href={"#"}>Multi-critères.</a>&nbsp;&nbsp;
            </li>
            <FormAuteurAndTilteComponent/>
        </ul>

    </React.Fragment>

}
export default AddReservationComponent