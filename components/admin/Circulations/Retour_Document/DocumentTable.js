import React from 'react'
import Card from 'components/ui/card/card'
import Table from "../../../ui/Table/Table";


const DocumentTable = (props) => {

    console.log("data set docment: ",props.dataSet)

    return (
        <React.Fragment>
            <div className="card-panel">
                <div className="row">
                    <a href="#" className="float-left">
                        <h5 className="display-inline">

                            {props.dataSet.GetExamplaireByCodeBar.Record.Title},
                                            {props.dataSet.GetExamplaireByCodeBar.Record.RecYear}
                        </h5>
                    </a>
                    {/*TODO configeré la disparition selon l'eta du docuemnt*/}
                    <span className="chip teal text-lighten-2 accent-4 float-right">Disponible à pret</span>
                </div>
                <div className="row">
                    <Table Thead={
                        <tr>
                            <th></th>
                            <th>NO.</th>
                            <th>COTE</th>
                            <th>SUPPORT</th>
                            <th>LOCALISATION</th>
                            <th>SECTION</th>
                            <th>STATUT</th>
                            <th>PROPRIÉTAIRE</th>
                        </tr>
                    } Tbody={
                        <tr>
                            <td></td>

                            <td>
                                <a href={"#"}
                                   key={props.dataSet.GetExamplaireByCodeBar._id}>
                                    {props.dataSet.GetExamplaireByCodeBar.BareCode}
                                </a>
                            </td>
                            <td ><span className="chip  teal-text" >960 DEP</span></td>
                            <td>{props.dataSet.GetExamplaireByCodeBar.MediaType.media_types_name}</td>
                            <td>{props.dataSet.GetExamplaireByCodeBar.Localisation.Name}</td>
                            <td>{props.dataSet.GetExamplaireByCodeBar.Section.section_name}</td>
                            <td>{props.dataSet.GetExamplaireByCodeBar.Status.status_name}</td>
                            <td>{props.dataSet.GetExamplaireByCodeBar.Owner.owner_name}</td>
                        </tr>
                    }/>
                </div>
            </div>

        </React.Fragment>
    )
}
export default DocumentTable
