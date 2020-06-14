import React from 'react'

import Icon from '@/components/ui/Icon/Icon';
import RoundButton from '@/components/ui/RoundButton/RoundButton';
import Router from 'next/router';
import GridElement from '@/components/ui/Grid/GridElement';
import Grid from '@/components/ui/Grid/Grid';

const ListClassNumberComponent = ({ class_numbers, AddAuthorityLink }) => {
    return (
        <React.Fragment>
            {
                class_numbers.map((row) => (
                    <Grid key={row._id}>
                        <GridElement s={10}>
                            <div className="person-container" >
                                <Icon style={{ margin: "auto", width: "30px", color: "gray" }}>folder</Icon>
                                <div
                                    className="person-name"
                                    onClick={() => {
                                        if (AddAuthorityLink) AddAuthorityLink({
                                            id: row._id,
                                            label: row.name,
                                        })
                                    }}
                                > {row.name} </div>
                            </div>
                        </GridElement>
                        <GridElement s={2}>
                            <div style={{ display: "flex" }}>
                                <RoundButton icon="create" size="30"
                                    onClick={(e) => {
                                        Router.push("/admin/authorities/class_number/modify/[id]", "/admin/authorities/class_number/modify/" + row._id.split('"')[1])
                                    }}
                                    style={{ margin: "auto" }} />
                                <RoundButton icon="delete" size="30"
                                    onClick={(e) => {
                                        // deleteAuthor({
                                        //     variables: {
                                        //         Id: row._id.split('"')[1]
                                        //     }
                                        // })
                                    }}
                                    style={{ margin: "auto" }} />
                            </div>

                        </GridElement>
                    </Grid>
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
export default ListClassNumberComponent