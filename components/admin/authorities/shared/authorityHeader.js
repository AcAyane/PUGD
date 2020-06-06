import React from 'react'
import Card from '@/components/ui/card/card'
const AuthorityHeader = ({ Authority }) => {

    return (

        <React.Fragment>
            <Card  >
                <div className="header-container">
                    <i className="material-icons pink-text" style={{ margin: "auto" }}>
                        fiber_manual_record
               </i>
                    <h6 className="uk-icon">Gestion des autorités : {Authority}</h6>
                </div>
            </Card>
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
        </React.Fragment>)



}
export default AuthorityHeader