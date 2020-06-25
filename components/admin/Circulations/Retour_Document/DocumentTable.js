import React from 'react'
import Card from 'components/ui/card/card'
import Table from "../../../ui/Table/Table";


const DocumentTable = (props) => {
    const {DataSet} = props
    const {title}=props



    console.log("dataset : ",DataSet)
    return (
        <React.Fragment>
            <div className="card-panel">
                <div className="row">
                    <a href="#" className="float-left">
                        <h5 className="display-inline">
                            {title}
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
                                <a href={"#"}>
                                    {DataSet && DataSet.BareCode}
                                </a>
                            </td>
                            <td ><span className="chip  teal-text" >960 DEP</span></td>
                            <td>{DataSet && DataSet.MediaType.media_types_name}</td>
                            <td>{DataSet && DataSet.Localisation.Name}</td>
                            <td>{DataSet && DataSet.Section.section_name}</td>
                            <td>{DataSet && DataSet.Status.status_name}</td>
                            <td>{DataSet && DataSet.Owner.owner_name}</td>
                            {/*<td>{props.dataSet.GetExamplaireByCodeBar.Localisation.Name}</td>
                            <td>{props.dataSet.GetExamplaireByCodeBar.Section.section_name}</td>
                            <td>{props.dataSet.GetExamplaireByCodeBar.Status.status_name}</td>
                            <td>{props.dataSet.GetExamplaireByCodeBar.Owner.owner_name}</td>**/}
                        </tr>
                    }/>
                </div>
            </div>

        </React.Fragment>
    )
}
export default DocumentTable
