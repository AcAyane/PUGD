import React, {useState} from 'react'
import AdminLayout from '../../../../components/adminLayout'
import Card from '../../../../components/ui/Card/Card'
import Grid from '../../../../components/ui/Grid/grid';
import GridElement from '../../../../components/ui/Grid/GridElement';
import TextBox from "../../../../components/ui/TextBox";
import Button from "../../../../components/ui/Button";


import ButtonPopUp from "../../../../components/ui/ButtonPopUp";
import AllGroups from "./AllGroups";
import {useLazyQuery, useQuery} from "@apollo/react-hooks";
import {GroupsByName} from "../../../../graphql/queries/admin/Ciruclation/groups.query";
import ResGroup from "./resGroups";




const Groups = () => {

    const nul = <span style={{color:'#d60e28'}}>No Group finder</span>;

    const [GetGroupsByName, { loading, error, data }] = useLazyQuery(GroupsByName);

    const [name, setName] = useState('');

    if (loading) {
        return <div>Loading...</div>;
    }


    const onSearchHandler = (e) => {

        e.preventDefault();
        GetGroupsByName({
            variables: {
                name: name,
            }
        });
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
                                    <TextBox
                                        label="Nom du Group"
                                        type="text"
                                        onChange={event => { setName(event.target.value) }}
                                        value={name}
                                    />
                                    <Button
                                            onClick={onSearchHandler}
                                            rounded={4}>Search</Button>
                                    <Button href="/admin/circulation/groups/addGroups" rounded={4}>add group</Button>
                                </GridElement>
                            </Grid>
                        </div>
                    </Card>
                </form>

                {
                    error ? nul : (data == null || undefined ) ?


                        <ResGroup/> :

                        ('')

                         /*: ( <ResGroup name={data.GetGroupsByName.namegroups}
                                    respo={data.GetGroupsByName.respgroup}
                                    date={data.GetGroupsByName.CreatAt}
                                    email={data.GetGroupsByName.mailRappel}
                                    notification={data.GetGroupsByName.letterrappel}
                            /> )*/

                }

            </div>
        </div>
    </div>
}
Groups.Layout = AdminLayout
export default Groups
