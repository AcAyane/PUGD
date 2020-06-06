import React from 'react'
<<<<<<< HEAD
import Icon from '../../../ui/Icon/Icon';
import Grid from '../../../ui/Grid/Grid';
import GridElement from '../../../ui/Grid/GridElement';
import RoundButton from '../../../ui/RoundButton/RoundButton';
=======
import Icon from '@/components/ui/Icon/Icon';
import Grid from '@/components/ui/Grid/Grid';
import GridElement from '@/components/ui/Grid/GridElement';
import RoundButton from '@/components/ui/RoundButton/RoundButton';
>>>>>>> develop
import Router from 'next/router';
import { useMutation } from '@apollo/react-hooks';

const ListUniformTitleComponent = ({ uniform_titles, AddAuthorityLink }) => {
    // const [deleteAuthor] = useMutation(DELETE_AUTHOR, {
    //     onCompleted: () => {
    //         updateCache()
    //     },
    //     onError: (error) => {
    //         alert(error.message);
    //     }
    // });
<<<<<<< HEAD
    console.log(uniform_titles);
    
=======
>>>>>>> develop
    return (
        <React.Fragment>
            {
                uniform_titles.map((row) => (
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
                                        Router.push("/admin/authorities/uniform_title/modify/[id]", "/admin/authorities/uniform_title/modify/" + row._id.split('"')[1])
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
    .person-name:hover{
        cursor:pointer
    }
    `}
            </style>
        </React.Fragment>
    )
}
export default ListUniformTitleComponent