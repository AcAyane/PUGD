import React from 'react'
import AdminLayout from '../../../components/adminLayout'
import Card from '../../../components/ui/Card/Card'
import Grid from '../../../components/ui/Grid/grid';
import GridElement from '../../../components/ui/Grid/GridElement';
import TextBox from "../../../components/ui/TextBox";
import Button from "../../../components/ui/Button";
import DatePicker from "../../../components/ui/DatePicker/DatePicker";
import SelectBox from "../../../components/ui/SelectBox";
import ToggleSwitch from "../../../components/ui/ToggleSwitch/ToggleSwitch";


const CirculationHome = () => {

    return <div className="container">
        <Card>
            <h6 className="center">Add Borrowers</h6>
        </Card>
        <form>
            <Card>
                <div className="row">
                    <Grid>
                        <GridElement s={6}>
                            <TextBox label="FullName" icon="phone"/>
                            <DatePicker label="Birth Day" icon="phone"/>
                            <TextBox label="PhoneNumber" icon="phone"/>
                            <TextBox label="Address"/>
                        </GridElement>
                        <GridElement s={6}>
                            {/*todo check code if not used by another Brroweers*/}


                            <ToggleSwitch label="Statues" sufix="Active" />
                            <SelectBox>
                                <option value="Male" >Male</option>
                                <option value="Female">Female</option>
                            </SelectBox>
                            <TextBox label="Code Bar"/>
                            <TextBox label="Email"/>


                        </GridElement>

                        <Button rounded={4}>Submit</Button>
                    </Grid>
                </div>
            </Card>
        </form>
    </div>
}
CirculationHome.Layout = AdminLayout
export default CirculationHome
