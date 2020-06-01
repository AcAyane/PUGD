import React from 'react'
import Card from '../../../ui/Card/Card'
import TextBox from "../../../ui/TextBox";
import Button from "../../../ui/Button";
const CirculationHeader = ({ CirculationModule, children }) => {

    return (

        <React.Fragment>
            <Card>
                <div className="header-container card-content">
                    <i className="material-icons pink-text-blue" style={{ margin: "auto" }}>
                    fiber_manual_record
                    </i>
                    <h5 className="uk-icon">Circulation : {CirculationModule}</h5>
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