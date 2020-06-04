import React from 'react'
import AdminLayout from '../../../../../components/adminLayout'

const ListDoc = (props) => {

    return <React.Fragment>

                    <div className="row">
                        <div className="col s12 m12 l12">
                            <div className="row vertical-modern-dashboard">

                                <div className="col s12 m8 l8 animate fadeLeft">
                                    <div className="card">
                                        <div className="card-content">
                                            {<h4 className="card-title mb-0">Details Documents :</h4>}


                                                <table
                                                    className="table responsive-table ">
                                                    <tbody>
                                                        <tr>
                                                            <td>Nom Complet </td>
                                                            <td> {props.data.fullname}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Email</td>
                                                            <td>{props.data.email}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gender</td>
                                                            <td>{props.data.gender}</td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    </React.Fragment>
}
ListDoc.Layout = AdminLayout
export default ListDoc
