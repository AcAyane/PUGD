import React from 'react'
import Card from '../../../ui/Card/Card'
import TextBox from "../../../ui/TextBox";
import Button from "../../../ui/Button";
import Router from "next/router";
import AuthoritiesSideItems from "../../SidebarItems";
import {route} from "next/dist/next-server/server/router";
const CirculationHeader = ({ CirculationModule, children }) => {

    const module = Router.route.split('/')[2]
    console.log("router : ",AuthoritiesSideItems[module][1].Children[1].Label)
    // eslint-disable-next-line no-undef
    console.log("router : ",AuthoritiesSideItems[module][1].Children.source)
    console.log("router : ",Router.router.components)
    //const value = AuthoritiesSideItems[module]
    return (

        <React.Fragment>
            <Card>
                <div className="header-container card-header mb-2">
                    <i className="material-icons pink-text-blue" style={{ margin: "auto" }}>
                    fiber_manual_record
                    </i>
                    <h5 className=" uk-icon"> {AuthoritiesSideItems[module][1].Label}  {CirculationModule}</h5>
                    <br/>
                </div>
                {children}
            </Card>
            <style jsx>
                {`
                    
                    .uk-icon { 
                        margin-left:5px;
                        display:inline-block;
                    } 
                    .header-container{
                        display: flex;
                        width: fit-content;
                    }
                `}
            </style>

        </React.Fragment>)
}
export default CirculationHeader