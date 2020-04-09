import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Link from 'next/Link';
import TextBox from '../../../ui/TextBox';
import SelectBox from '../../../ui/SelectBox';



const SearchAuthorComponent = ({ SearchOnly, getAuthorAllFields }) => {

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

            <h4 className="card-title">Recherche : Auteurs</h4>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TextBox label="All fields"
                        value={All_Fields}
                        onChange={e => { setAll_Fields(e.target.value) }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextBox label="Indexable name (or last name)"
                        value={Index_Name}
                        onChange={e => { setIndex_Name(e.target.value) }}
                    />

                </Grid>

            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={6}>

                    <SelectBox
                        label="Type Auteur"
                        name="Author_Type"
                        value={Author_Type}
                        onChange={e => { setAuthor_Type(e.target.value) }}
                    >
                        <MenuItem value={0}>All</MenuItem>
                        <MenuItem value={10}>Personne Physique</MenuItem>
                        <MenuItem value={20}>Collectivité</MenuItem>
                        <MenuItem value={30}>Congrés</MenuItem>
                    </SelectBox>
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
            <Button variant="contained" onClick={(e) => SearchClickHandler(e, All_Fields, Index_Name, Author_Type, Status)}>Rechercher</Button>
            {!SearchOnly &&
                <Link href="/admin/authorities/author/add">
                    <Button variant="contained">Ajouter Auteur</Button>
                </Link>
            }


        </React.Fragment>
    )
}
export default SearchAuthorComponent