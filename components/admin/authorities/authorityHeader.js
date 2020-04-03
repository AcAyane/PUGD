import React from 'react'
import { FaCircle } from 'react-icons/fa';
import {Card, CardContent } from '@material-ui/core';

const AuthorityHeader = ({ Authority }) => {

    return (
 
                <Card  >
                    <CardContent>
                        <FaCircle size="14px" color="#8e24aa" />
                        <h5 className="uk-icon">Gestion des autorités : {Authority}</h5>
                    </CardContent>
                    <style jsx>
                {`
      .uk-icon { 
        margin-left:10px;
      display:inline-block;
    } 
    `

                }
            </style>
                </Card>)
 

      
}
export default AuthorityHeader