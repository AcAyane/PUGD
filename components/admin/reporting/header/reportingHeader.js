import React from 'react'
import Card from '../../../ui/Card/Card'

const ReportingHeader = ({ ReportingModule, children }) => {

    return (

        <React.Fragment>
            <Card>
                <div className="header-container card-content">
                    <i className="material-icons pink-text-blue" style={{ margin: "auto" }}>
                        fiber_manual_record
                    </i>
                    <h5 className="uk-icon">{ReportingModule}</h5>
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
                        width: fit-content;é
                    }
                `}
            </style>

        </React.Fragment>)
}
export default ReportingHeader
