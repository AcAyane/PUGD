import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';

import { TextField, Button, CardContent, Card } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Link from 'next/Link';



const SearchAuthorComponent = ({ SearchOnly,getAuthorAllFields }) => {

    const [All_Fields, setAll_Fields] = useState("")
    const [Index_Name, setIndex_Name] = useState("")
    const [Author_Type, setAuthor_Type] = useState(10)
    const [Status, setStatus] = useState(10)
 

const SearchClickHandler = (e, All_Fields, Status) => {
    e.preventDefault();

    getAuthorAllFields({
        variables: {
            all_fields: All_Fields
        }
    });
}

return (
    <React.Fragment>
        <Card  >
            <CardContent>
                <h4 className="card-title">Recherche : Auteurs</h4>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <TextField fullWidth label="All fields"
                            value={All_Fields}
                            onChange={e => { setAll_Fields(e.target.value) }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth label="Indexable name (or last name)"
                            value={Index_Name}
                            onChange={e => { setIndex_Name(e.target.value) }}
                        />

                    </Grid>

                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Type Auteur</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                value={Author_Type}
                                onChange={e => { setAuthor_Type(e.target.value) }}
                            >
                                <MenuItem value={0}>All</MenuItem>
                                <MenuItem value={10}>Personne Physique</MenuItem>
                                <MenuItem value={20}>Collectivité</MenuItem>
                                <MenuItem value={30}>Congrés</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Status</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                value={Status}
                                onChange={e => { setStatus(e.target.value) }}
                            >
                                <MenuItem value={10}>All Statuses</MenuItem>
                            </Select>
                        </FormControl>

                    </Grid>

                </Grid>
                <br />
                <Button variant="contained" onClick={(e) => SearchClickHandler(e, All_Fields, Index_Name, Author_Type, Status)}>Rechercher</Button>
                {!SearchOnly &&
                    <Link href="/admin/authorities/author/add">
                        <Button variant="contained">Ajouter Auteur</Button>
                    </Link>
                }
            </CardContent>
        </Card>

    </React.Fragment>
)
}
export default SearchAuthorComponent