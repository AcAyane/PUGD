import React from 'react'

import { Folder } from '@material-ui/icons';

const ListSeriesComponent = ({ series, AddAuthorityLink }) => {
    return (
        <React.Fragment>
            {
                series.map((row) => (

                    <div className="person-container" key={row._id}>
                        <Folder style={{ margin: "auto", width: "30px", color: "gray" }} />
                        <div className="person-name"
                            onClick={() => {
                                if (AddAuthorityLink) AddAuthorityLink({
                                    id: row._id,
                                    label: row.title,
                                })
                            }}
                        > {row.title} </div>
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
    `}
            </style>
        </React.Fragment>
    )
}
export default ListSeriesComponent