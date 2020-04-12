import React from 'react'
import { Card, CardContent } from '@material-ui/core';
import FaCircle from '@material-ui/icons/FiberManualRecord';
const AuthorityHeader = ({ Authority }) => {

    return (

        <Card  >
            <CardContent >
                <div className="header-container">
                    <FaCircle style={{ margin: "auto" }} />
                    <h2 className="uk-icon">Gestion des autorités : {Authority}</h2>
                </div>

            </CardContent>
            <style jsx>
                {`
                    .uk-icon { 
                        margin-left:10px;
                    display:inline-block;
                    } 
                    .header-container{
                        display: flex;
                    width: fit-content;
                }
                `
                }
            </style>
        </Card>)



}
export default AuthorityHeader