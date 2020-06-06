import React, {useState} from 'react'
import AdminLayout from '@/components/adminLayout'

import TextBox from "@/components/ui/TextBox";
import Button from "@/components/ui/Button";

import {useLazyQuery} from "@apollo/react-hooks";
import {BorrowersByName} from "@/graphql/queries/admin/Ciruclation/Borrowers.query";
import Circulation from "@/components/admin/Circulations/Body/Body";
import Null from "@/components/admin/Circulations/Handerls/Null";
import CirculationHeader from "@/components/admin/Circulations/Hedar/CirculationHeader";

import ListDoc from "./ListDoc";

const pretDoc = () => {

    const [GetBorrowersByName, { loading, error, data }] = useLazyQuery(BorrowersByName);

    const [Name, setName] = useState('');

    if (loading) {return <div>Loading...</div>;}

    if(error){
        console.log(error)
        console.log(data)
    }

    if(data != null || data !== undefined){
        console.log("donne",data.GetBorrowersByName)
    }
    const onSearchHandler = (e) => {
        e.preventDefault();
        GetBorrowersByName({
            variables: {
                fullname: Name,
            }
        });
    }
    return <Circulation>
        <CirculationHeader CirculationModule="Documents prêter"
                           children={
                               <from>
                                   <span>Recherche borrowers</span>
                                   <div className="row">
                                       <TextBox label={"Search by Name"}
                                                type="text"
                                                onChange={event => {setName(event.target.value)}}
                                                value={Name}
                                       />
                                       <Button
                                           onClick={onSearchHandler}
                                           rounded={4}>Search</Button>
                                   </div>
                               </from>
                           }/>


        { data != null || data !== undefined ?
            <ListDoc data = {data.BorrowersByName}/>
            :

            <Null children="No data" />
        }

    </Circulation>
}
pretDoc.Layout = AdminLayout
export default pretDoc
