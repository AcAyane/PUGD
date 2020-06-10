import React from 'react'
import Icon from '@/components/ui/Icon/Icon';
import RoundButton from '@/components/ui/RoundButton/RoundButton';
import GridElement from '@/components/ui/Grid/GridElement';
import Router from 'next/router';
import Grid from '@/components/ui/Grid/Grid';

const ListCategoryComponent = ({ publishers, AddAuthorityLink }) => {
    return (
        <React.Fragment>
            {
                publishers.map((row) => (
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
                                        Router.push("/admin/authorities/publisher/modify/[id]", "/admin/authorities/publisher/modify/" + row._id.split('"')[1])
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
export default ListCategoryComponent