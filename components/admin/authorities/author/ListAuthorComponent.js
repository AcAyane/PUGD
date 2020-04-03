import React from 'react'
import { Person } from '@material-ui/icons';
const ListAuthorComponent = ({ authors, AddAuthorityLink }) => {
 

    return (
        <React.Fragment>
            {
                authors.map((row) => (

                    <div className="person-container" key={row._id}>
                        <Person style={{ margin: "auto", width: "30px", color:"gray" }} />
                        <div
                            className="person-name"
                            onClick={() =>{
                                if(AddAuthorityLink)AddAuthorityLink({
                                    id: row._id,
                                    label: [row.name_auth, row.indexName_auth].join(' '),
                                })
                            } }
                        >  {[row.name_auth, row.indexName_auth].join(' ')} </div>
                    </div>

                ))
            }
            <style jsx>
                {`
    .person-container{
        height: 35px;
        display: flex;
        justify-content: center;
        width: fit-content;
    }
    .person-name{
        height: 35px;
        display: inline-block;
        margin: auto;
        line-height: 35px;
        width:fit-content;
    }
    .person-name:hover{
        cursor:pointer
    }
    `}
            </style>
        </React.Fragment>
    )
}
export default ListAuthorComponent