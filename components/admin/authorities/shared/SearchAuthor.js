import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import Grid from '@material-ui/core/Grid';

import { Card, CardContent } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Alert } from 'reactstrap';


import { useLazyQuery } from '@apollo/react-hooks';

import { GET_AUTHOR_ALL_FIELDS } from '../../../../graphql/queries/admin/authorities/author.queries';
import { GET_CATEGORY_ALL_FIELDS } from '../../../../graphql/queries/admin/authorities/category.queries';

import SearchAuthorComponent from '../author/SearchAuthorComponent';

import ListAuthorComponent from '../author/ListAuthorComponent';
import ListCategoryComponent from '../category/ListCategoryComponent';

import SearchCategoryComponent from '../category/SearchCategoryComponent';

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: "80%",
        left: '10%',
        height: "80%",
        top: '10%',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        'overflow-y': "scroll"

    },
}));

const SearchAuthority = ({ addAuthor, open, handleClose, AuthorityType }) => {

    
    const [getAuthorAllFields, { error, data }] = useLazyQuery(GET_AUTHOR_ALL_FIELDS);

    const [getCategoryAllFields, CategoryResponse] = useLazyQuery(GET_CATEGORY_ALL_FIELDS);

    const [Authority_Type, setAuthority_Type] = useState(AuthorityType || 10)

    useEffect(() => {
        if(AuthorityType !== undefined)
        setAuthority_Type(AuthorityType)
    }, [AuthorityType]);
 
    const AddAuthorityLink = ({ id, label }) => {

        addAuthor({
            id,
            AuthorityName: label,
            Authority_Type,
            Start: null,
            End: null,
            Comment: "",
        })
    }

    const classes = useStyles();
   
        

    const renderSwitch = () => {
        switch (Authority_Type) {
            case 10: 
                return <React.Fragment>
                    <Card  >
                        <CardContent>
                            <SearchAuthorComponent
                                getAuthorAllFields={getAuthorAllFields}
                                SearchOnly />
                        </CardContent>
                    </Card>

                    <Card  >
                        <CardContent>
                            <h4 className="card-title">Recherche : Auteurs</h4>
                            {error ? <Alert color="danger">{String(error.message)}</Alert> : null}

                            {data &&
                                <ListAuthorComponent authors={data.author_all_fields} AddAuthorityLink={AddAuthorityLink} />
                            }
                        </CardContent>
                    </Card>
                </React.Fragment>
            case 20:
                return <React.Fragment>
                    <Card  >
                        <CardContent>
                            <SearchCategoryComponent getCategoryAllFields={getCategoryAllFields} SearchOnly />
                        </CardContent>
                    </Card>

                    <Card  >
                        <CardContent>
                            <h4 className="card-title">Recherche : Categories</h4>
                            {error ? <Alert color="danger">{String(error.message)}</Alert> : null}

                            {CategoryResponse.data &&
                                <ListCategoryComponent categories={CategoryResponse.data.category_all_fields} AddAuthorityLink={AddAuthorityLink} />
                            }
                        </CardContent>
                    </Card>
                </React.Fragment>
            default:
                return 'Not yet implemented';
        }
    }
    return (
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={open}
            onClose={handleClose}
        >
            <div className={classes.paper}>


                {!AuthorityType && <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <h2 id="simple-modal-title">Linked authorities</h2>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Authority</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                value={Authority_Type}
                                onChange={e => { setAuthority_Type(e.target.value) }}
                            >
                                <MenuItem value={10}>Authors</MenuItem>
                                <MenuItem value={20}>Subject headings</MenuItem>
                                <MenuItem value={30}>Publishers</MenuItem>
                                <MenuItem value={40}>Series</MenuItem>
                                <MenuItem value={50}>Sub-series</MenuItem>
                                <MenuItem value={60}>Collection Title</MenuItem>
                                <MenuItem value={70}>Uniform Titles</MenuItem>
                                <MenuItem value={80}>Class number</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>}
                {renderSwitch()}


            </div>


        </Modal>
    );
}
export default SearchAuthority