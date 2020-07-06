import React, {useState} from 'react'
import AdminLayout from 'components/adminLayout'
import Grid from 'components/ui/Grid/grid';
import GridElement from 'components/ui/Grid/GridElement';
import TextBox from "components/ui/TextBox";
import Button from "components/ui/Button";

import {useLazyQuery} from "@apollo/react-hooks";
import {GroupsByName} from "graphql/queries/admin/Ciruclation/groups.query";
import ResGroup from "./resGroups";
import Null from "components/admin/Circulations/Handerls/Null";
import Circulation from "components/admin/Circulations/Body/Body";
import CirculationHeader from "components/admin/Circulations/Hedar/CirculationHeader";
import Members from "../../../../../components/admin/Circulations/Group/Members";
import Responsable from "../../../../../components/admin/Circulations/Group/Responsable";

const Groups = () => {
    const [GetGroupsByName, {loading, error, data}] = useLazyQuery(GroupsByName);
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

    if (data != null) {
        console.log(data.GetGroupsByName)
    }

    return <Circulation>
        <CirculationHeader Title=" => Group"

                           children={
                               <form>
                                   <div>
                                       <Grid>
                                           <p>Recherche groupe</p>
                                           <GridElement s={12} style={{display: "flex"}}>
                                               <TextBox
                                                   label="Nom du Group"
                                                   type="text"
                                                   onChange={event => {
                                                       setName(event.target.value)
                                                   }}
                                                   value={name}
                                               />
                                               <Button
                                                   onClick={onSearchHandler}
                                                   rounded={4}>Search
                                               </Button>
                                               <Button href="/admin/circulation/Circulation/groups/addGroups"
                                                       rounded={4}>add group</Button>
                                           </GridElement>
                                       </Grid>
                                   </div>
                               </form>
                           }
        />


        {

            error ? <Null children="No group Finder"/> : (data == null || undefined) ?


            //    <ResGroup/> :

                ('')



                : ( <React.Fragment>
                    <div className="row vertical-modern-dashboard">
                        <Members members={data.GetGroupsByName}/>
                        <Responsable responsable={data.GetGroupsByName}/>
                    </div>
                    </React.Fragment>
                 )

        }

    </Circulation>
}
Groups.Layout = AdminLayout
export default Groups
