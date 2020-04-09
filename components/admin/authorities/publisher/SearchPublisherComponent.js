import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';

import { TextField, Button } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Link from 'next/Link';
import TextBox from '../../../ui/TextBox';
import SelectBox from '../../../ui/SelectBox';

const SearchPublisherComponent = ({ getPublisherAllFields, SearchOnly }) => {

    const [All_Fields, setAll_Fields] = useState("") 
    const [Status, setStatus] = useState(10)

     

const SearchClickHandler = (e, All_Fields, Status) => {
    e.preventDefault();

    getPublisherAllFields({
        variables: {
            all_fields: All_Fields
        }
    });
}

    return (
        <React.Fragment>
            <h4 className="card-title">Recherche : Publisher</h4>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TextBox label="Publisher name"
                        value={All_Fields}
                        onChange={e => { setAll_Fields(e.target.value) }}
                    />
                </Grid>
                <Grid item xs={6}>
                <SelectBox
                        label="Status"
                        name="Author_Type"
                        value={Status}
                        onChange={e => { setStatus(e.target.value) }}
                    >
                        <MenuItem value={10}>All Statuses</MenuItem>
                    </SelectBox>
                </Grid>

            </Grid>

            <br />
            <Button variant="contained" onClick={(e) => SearchClickHandler(e, All_Fields, Status)}>Rechercher</Button>
            {!SearchOnly &&
                    <Link href="/admin/authorities/publisher/add">
                <Button variant="contained">Ajouter Publisher</Button>
            </Link>  
            }
      

        </React.Fragment>
    )
}
export default SearchPublisherComponent