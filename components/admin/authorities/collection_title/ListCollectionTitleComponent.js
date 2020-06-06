import React from 'react'

<<<<<<< HEAD
import Icon from '../../../ui/Icon/Icon';
import GridElement from '../../../ui/Grid/GridElement';
import RoundButton from '../../../ui/RoundButton/RoundButton';
import Router from 'next/router';
import Grid from '../../../ui/Grid/Grid';
=======
import Icon from '@/components/ui/Icon/Icon';
import GridElement from '@/components/ui/Grid/GridElement';
import RoundButton from '@/components/ui/RoundButton/RoundButton';
import Router from 'next/router';
import Grid from '@/components/ui/Grid/Grid';
>>>>>>> develop

const ListCollectionTitleComponent = ({ collection_titles, AddAuthorityLink }) => {
    return (
        <React.Fragment>
            {
                collection_titles.map((row) => (
                    <Grid key={row._id}>
                        <GridElement s={10}>
                            <div className="person-container" >
                                <Icon style={{ margin: "auto", width: "30px", color: "gray" }}>folder</Icon>
                                <div
                                    className="person-name"
                                    onClick={() => {
                                        if (AddAuthorityLink) AddAuthorityLink({
                                            id: row._id,
                                            label: row.title,
                                        })
                                    }}
                                > {row.title} </div>
                            </div>
                        </GridElement>
                        <GridElement s={2}>
                            <div style={{ display: "flex" }}>
                                <RoundButton icon="create" size="30"
                                    onClick={(e) => {
                                        Router.push("/admin/authorities/collection_title/modify/[id]", "/admin/authorities/collection_title/modify/" + row._id.split('"')[1])
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
export default ListCollectionTitleComponent