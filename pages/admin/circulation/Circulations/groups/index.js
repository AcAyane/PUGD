import React, {useState} from 'react'
import AdminLayout from '../../../../../components/adminLayout'
import Card from '../../../../../components/ui/Card/Card'
import Grid from '../../../../../components/ui/Grid/grid';
import GridElement from '../../../../../components/ui/Grid/GridElement';
import TextBox from "../../../../../components/ui/TextBox";
import Button from "../../../../../components/ui/Button";

import {useLazyQuery} from "@apollo/react-hooks";
import {GroupsByName} from "../../../../../graphql/queries/admin/Ciruclation/groups.query";
import ResGroup from "./resGroups";
import Null from "../../../../../components/admin/Circulations/Handerls/Null";
import Circulation from "../../../../../components/admin/Circulations/Body/Body";
import CirculationHeader from "../../../../../components/admin/Circulations/Hedar/CirculationHeader";
import Link from "next/link";

const Groups = () => {
    const [GetGroupsByName, { loading, error, data }] = useLazyQuery(GroupsByName);
    const [name, setName] = useState('');
    if (loading) {
        return <div>Loading...</div>;
    }
    if(error){
        console.log(error)
        console.log(data)
    }

    const onSearchHandler = (e) => {
        e.preventDefault();

        GetGroupsByName({
            variables: {
                name: name,
            }
        });
    }

    if(data != null){
        console.log(data.GetGroupsByName)
    }




    return <Circulation>
        <CirculationHeader CirculationModule=" => Group"

                children={
                    <form>
                        <div>
                            <Grid>
                                <p>Recherche groupe</p>
                                <GridElement s={12} style={{display:"flex"}}>
                                    <TextBox
                                        label="Nom du Group"
                                        type="text"
                                        onChange={event => {setName(event.target.value)}}
                                        value={name}
                                        />
                                    <Button
                                        onClick={onSearchHandler}
                                        rounded={4}>Search
                                    </Button>
                                    <Button href="/admin/circulation/Circulations/groups/addGroups" rounded={4}>add group</Button>
                                </GridElement>
                            </Grid>
                        </div>
                    </form>
                }
        />


                {

                    error ? <Null children="No group Finder"/> : (data == null || undefined ) ?


                        <ResGroup/> :

                        ('')

                        // : ( <ResGroup datas={data.GetGroupsByName}/> )

                }

    </Circulation>
}
Groups.Layout = AdminLayout
export default Groups
