import React from 'react'
import AdminLayout from '../../../components/adminLayout'
import Card from '../../../components/ui/Card/Card'
import Grid from '../../../components/ui/Grid/grid';
import GridElement from '../../../components/ui/Grid/GridElement';
import TextBox from "../../../components/ui/TextBox";
import Button from "../../../components/ui/Button";
import DatePicker from "../../../components/ui/DatePicker/DatePicker";

const CirculationHome = () => {
    return <div className="container">
        <form>
            <Card>
                <h6 className="center">Add Brrowers</h6>
                <div className="row">
                    <Grid>
                        <GridElement s={6}>
                            <TextBox label="FullName" icon="phone"/>
                            <DatePicker label="Birth Day"/>
                            <TextBox label="PhoneNumber"/>
                            <TextBox label="Address"/>
                        </GridElement>
                        <GridElement s={6}>
                            {/*todo check code if not used by another Brroweers*/}

                            <TextBox label="Code Bar"
                                     value={this.state.search}
                                     onChange={(e) =>
                                         this.setState({ search: e.target.value })
                                     }
                            />

                            <TextBox label="Gender"/>
                            <TextBox label="Statues"/>
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
