import React from 'react'
import Icon from '@/components/ui/Icon/Icon';
import GridElement from '@/components/ui/Grid/GridElement';
import Grid from '@/components/ui/Grid/Grid';
import RoundButton from '@/components/ui/RoundButton/RoundButton';
import Router from 'next/router';
import { useMutation } from '@apollo/react-hooks';
import { DELETE_AUTHOR } from '@/graphql/mutations/admin/authorities/author.mutations';

const ListAuthorComponent = ({ authors, AddAuthorityLink, updateCache }) => {
    const [deleteAuthor] = useMutation(DELETE_AUTHOR, {
        onCompleted: () => {
            updateCache()
        },
        onError: (error) => {
            alert(error.message);
        }
    });
    return (
        <React.Fragment>
            {authors &&
                authors.map((row) => (

                    <Grid key={row._id}>
                        <GridElement s={10}>
                            <div className="person-container" >
                                <Icon style={{ margin: "auto", width: "30px", color: "gray" }}>person</Icon>
                                <div
                                    className="person-name"
                                    onClick={() => {
                                        if (AddAuthorityLink) AddAuthorityLink({
                                            id: row._id,
                                            label: [row.name_auth, row.indexname_auth].join(' '),
                                        })
                                    }}
                                >  {[row.name_auth, row.indexname_auth].join(' ')} </div>
                            </div>
                        </GridElement>
                        <GridElement s={2}>
                            <div style={{ display: "flex" }}>
                                <RoundButton icon="create" size="30"
                                    onClick={(e) => {
                                        Router.push("/admin/authorities/author/modify/[id]", "/admin/authorities/author/modify/" + row._id.split('"')[1])
                                    }}
                                    style={{ margin: "auto" }} />
                                <RoundButton icon="delete" size="30"
                                    onClick={(e) => {
                                        deleteAuthor({
                                            variables: {
                                                Id: row._id.split('"')[1]
                                            }
                                        })
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
export default ListAuthorComponent