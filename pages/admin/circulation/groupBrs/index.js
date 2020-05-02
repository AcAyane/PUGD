import React, {useState} from 'react'
import AdminLayout from '../../../../components/adminLayout'
import Card from '../../../../components/ui/Card/Card'
import Grid from '../../../../components/ui/Grid/grid';
import GridElement from '../../../../components/ui/Grid/GridElement';
import TextBox from "../../../../components/ui/TextBox";
import Button from "../../../../components/ui/Button";
import DatePicker from "../../../../components/ui/DatePicker/DatePicker";
import SelectBox from "../../../../components/ui/SelectBox";
import ToggleSwitch from "../../../../components/ui/ToggleSwitch/ToggleSwitch";
import Checkbox from "../../../../components/ui/Checkbox";
import TextArea from "../../../../components/ui/TextArea";
import {GET_GROUPS_BY_NAME} from "../../../../graphql/queries/admin/Ciruclation/GroupsBorrewors";
import {useLazyQuery, useQuery} from "@apollo/react-hooks";
import ButtonPopUp from "../../../../components/ui/ButtonPopUp";
import Table from "../../../../components/ui/Table/Table";



const groupBrs = () => {

    const { loading, error, data } = useLazyQuery(GET_GROUPS_BY_NAME);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    const nul = <span style={{color:'#d60e28'}}>No Group finder</span>;
    const tabl = 3;

    const [ Active, setActive] = useState(true)
    const [ sendSms, setSendSms ] = useState(false)

     function findByname() {

     }
    return <div className="container">
        <div className="row">
            <div className="col s12">
                <ButtonPopUp icon={"add"} hrf={"#"}/>
                <form>
                    <Card>
                        <div className="row">
                            <div className="card-header">
                                <h4 className="card-title">Group de Lecteur (Borrowers)</h4>

                            </div>
                            <p>Recherche groupe</p>
                            <Grid>
                                <GridElement s={12} style={{display:"flex"}}>
                                    <TextBox label="Nom du Group"/>
                                    <Button onSubmit={findByname} rounded={4}>Search</Button>
                                </GridElement>
                            </Grid>

                        </div>
                    </Card>
                </form>
                {data == null ?  nul :
                    <Table Thead={
                        <tr>
                            {/*<!-- data table responsive icons --> */}
                            <th></th>
                            {/*<!-- data table checkbox -->*/}
                            <th></th>
                            <th>
                                <Checkbox/>
                            </th>
                            <th>
                                <span>Invoice#</span>
                            </th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Customer</th>
                            <th>Tags</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    } Tbody={
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td>
                                    <Checkbox/>
                                </td>
                                <td>
                                    <a href="app-invoice-view.html">INV-00956</a>
                                </td>
                                <td><span className="invoice-amount">$459.30</span></td>
                                <td><small>12-08-19</small></td>
                                <td><span className="invoice-customer">Pixinvent PVT. LTD</span></td>
                                <td>
                                    <span className="bullet green"></span>
                                    <small>Technology</small>
                                </td>
                                <td>
                                    <span className="chip lighten-5 red red-text">UNPAID</span>
                                </td>
                                <td>
                                    <div className="invoice-action">
                                        <a href="app-invoice-view.html" className="invoice-action-view mr-4">
                                            <i className="material-icons">remove_red_eye</i>
                                        </a>
                                        <a href="app-invoice-edit.html" className="invoice-action-edit">
                                            <i className="material-icons">edit</i>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td>
                                    <Checkbox/>
                                </td>
                                <td>
                                    <a href="app-invoice-view.html">INV-00349</a>
                                </td>
                                <td><span className="invoice-amount">$125.00</span></td>
                                <td><small>08-08-19</small></td>
                                <td><span className="invoice-customer">Volkswagen</span></td>
                                <td>
                                    <span className="bullet blue"></span>
                                    <small>Car</small>
                                </td>
                                <td><span className="chip lighten-5 green green-text">PAID</span></td>
                                <td>
                                    <div className="invoice-action">
                                        <a href="app-invoice-view.html" className="invoice-action-view mr-4">
                                            <i className="material-icons">remove_red_eye</i>
                                        </a>
                                        <a href="app-invoice-edit.html" className="invoice-action-edit">
                                            <i className="material-icons">edit</i>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td>
                                    <Checkbox/>
                                </td>
                                <td>
                                    <a href="app-invoice-view.html">INV-00853</a>
                                </td>
                                <td><span className="invoice-amount">$10,503</span></td>
                                <td><small>02-08-19</small></td>
                                <td><span className="invoice-customer">Chevron Corporation</span></td>
                                <td>
                                    <span className="bullet grey"></span>
                                    <small>Corporation</small>
                                </td>
                                <td><span className="chip lighten-5 red red-text">UNPAID</span></td>
                                <td>
                                    <div className="invoice-action">
                                        <a href="app-invoice-view.html" className="invoice-action-view mr-4">
                                            <i className="material-icons">remove_red_eye</i>
                                        </a>
                                        <a href="app-invoice-edit.html" className="invoice-action-edit">
                                            <i className="material-icons">edit</i>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    }/>


                }
            </div>
        </div>
    </div>
}
groupBrs.Layout = AdminLayout
export default groupBrs
