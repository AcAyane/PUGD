import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';

import { TextField, Button } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Link from 'next/Link';

const SearchCategoryComponent = ({ getCategoryAllFields, SearchOnly }) => {

    const [All_Fields, setAll_Fields] = useState("") 
    const [Status, setStatus] = useState(10)

     

const SearchClickHandler = (e, All_Fields, Status) => {
    e.preventDefault();

    getCategoryAllFields({
        variables: {
            all_fields: All_Fields
        }
    });
}

    return (
        <React.Fragment>
            <h4 className="card-title">Recherche : Catégories</h4>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TextField fullWidth label="Category name"
                        value={All_Fields}
                        onChange={e => { setAll_Fields(e.target.value) }}
                    />
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
            <Button variant="contained" onClick={(e) => SearchClickHandler(e, All_Fields, Status)}>Rechercher</Button>
            {!SearchOnly &&
                    <Link href="/admin/authorities/headings/add">
                <Button variant="contained">Ajouter Category</Button>
            </Link>  
            }
      

        </React.Fragment>
    )
}
export default SearchCategoryComponent