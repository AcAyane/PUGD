import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';

import { Button } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Link from 'next/Link';
import TextBox from '../../../ui/TextBox';
import SelectBox from '../../../ui/SelectBox';

const SearchSeriesComponent = ({ getSeriesAllFields, SearchOnly }) => {

    const [All_Fields, setAll_Fields] = useState("")
    const [Status, setStatus] = useState(10)



    const SearchClickHandler = (e, All_Fields, Status) => {
        e.preventDefault();

        getSeriesAllFields({
            variables: {
                all_fields: All_Fields
            }
        });
    }

    return (
        <React.Fragment>
            <h4 className="card-title">Recherche : Series</h4>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TextBox label="Series name"
                        value={All_Fields}
                        onChange={e => { setAll_Fields(e.target.value) }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <SelectBox
                        label="Status"
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
                <Link href="/admin/authorities/series/add">
                    <Button variant="contained">Ajouter Series</Button>
                </Link>
            }


        </React.Fragment>
    )
}
export default SearchSeriesComponent