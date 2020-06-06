import React from 'react'
import AdminLayout from '../../../../../components/adminLayout'
import Card from "../../../../../components/ui/card/card";
import Grid from "../../../../../components/ui/Grid/grid";
import GridElement from "../../../../../components/ui/Grid/GridElement";
import TextBox from "../../../../../components/ui/TextBox";
import SelectBox from "../../../../../components/ui/SelectBox";
import ToggleSwitch from "../../../../../components/ui/ToggleSwitch/ToggleSwitch";
import DatePicker from "../../../../../components/ui/DatePicker/DatePicker";
import Checkbox from "../../../../../components/ui/Checkbox";
import TextArea from "../../../../../components/ui/TextArea";
import Button from "../../../../../components/ui/Button";
import {useQuery} from "@apollo/react-hooks";
import {GetAllBro} from "../../../../../graphql/queries/admin/Ciruclation/Borrowers.query";


const addGroups = () => {
    const { loading, error, data } = useQuery(GetAllBro);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    //todo fixme
   // $(".select2").select2({
     //   dropdownAutoWidth: true,
       // width: '100%'
    // });


    return <div className="container">
        <div className="row">
            <div className="col s12">
                <Card>
                    <div className="card-content pb-0">
                        <div className="card-header mb-2">
                            <h4 className="card-title">Add New Groups</h4>
                            <br/>
                        </div>
                    </div>
                </Card>
                <form>
                    <Card>
                        <div className="card-content pb-0">
                            <div className="row">

                                <Grid>
                                    <GridElement s={12} style={{ display: "flex"}}>
                                                {/*todo check Name Group  if is used  or not*/}
                                                <TextBox Multiline={"input"} label="Nom du Group"/>

                                        <div className="input-field">
                                            <select className="select2 browser-default" multiple="multiple">
                                                <option value="square">Square</option>
                                                <option value="rectangle" selected>Rectangle</option>
                                                <option value="rombo">Rombo</option>
                                                <option value="romboid">Romboid</option>
                                                <option value="trapeze">Trapeze</option>
                                                <option value="traible" selected>Triangle</option>
                                                <option value="polygon">Polygon</option>
                                            </select>
                                        </div>
                                                <SelectBox label={"Responsable du Groups"}>
                                                    {data.GetAllBro.map((items)=>(
                                                        <option key={items._id} value={items.fullname}>{items.fullname}</option>
                                                    ))}
                                                </SelectBox>
                                    </GridElement>

                                    {/*todo Send Message to Respo Groups*/}
                                    <GridElement s={12}>
                                        <TextArea label={"Message"} data-length="120"/>
                                    </GridElement>

                                    {/*todo Send Message to Respo Groups*/}
                                    <Grid>
                                        <GridElement s={12}>
                                            <Checkbox label={"Ajouter le responsable au groupe "}/>
                                        </GridElement>
                                        <GridElement s={12}>
                                            <Checkbox label={"Adresser les lettres de rappel individuelles au responsable de ce groupe ?"}/>
                                        </GridElement>
                                        <GridElement s={12}>
                                            <Checkbox label={"Adresser les mails de rappel individuels au responsable de ce groupe ?"}/>
                                        </GridElement>
                                        <GridElement s={12}>
                                            <Checkbox label={"Adresser les lettres de réservation individuelles au responsable de ce groupe ?"}/>
                                        </GridElement>
                                        <GridElement s={12}>
                                            <Checkbox label={"Adresser les mails de réservation individuels au responsable de ce groupe ?"}/>
                                        </GridElement>
                                        <GridElement s={12}>
                                            <Checkbox label={"Imprimer le nom de ce groupe sur les lettres de rappel individuelles ?"}/>
                                        </GridElement>
                                        <GridElement s={12}>
                                            <Checkbox label={"Imprimer le nom de ce groupe sur les lettres de réservation individuelles ?"}/>
                                        </GridElement>
                                    </Grid>



                                </Grid>
                                <br/>
                                <Button rounded={4}>Anullé</Button>
                                <Button rounded={4}>Submit</Button>

                            </div>
                        </div>
                    </Card>
                </form>
            </div>
        </div>
    </div>
}
addGroups.Layout = AdminLayout
export default addGroups
