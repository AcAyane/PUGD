import React from 'react'
import Card from '../../../ui/Card/Card'
const CirculationHeader = ({ CirculationModule }) => {

    return (

        <React.Fragment>
            <Card>
                <div className="header-container card-content">
                    <i className="material-icons pink-text" style={{ margin: "auto" }}>
                    fiber_manual_record
                    </i>
                    <h6 className="uk-icon">Circulation : {CirculationModule}</h6>
                </div>

            </Card>
            <style jsx>
                {`
                    .pink-text{
                        color: #FF1E51E9 !important;
                    }
                    .uk-icon { 
                        margin-left:10px;
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