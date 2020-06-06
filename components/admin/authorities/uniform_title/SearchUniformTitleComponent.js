import React, { useState } from 'react'
<<<<<<< HEAD
import Grid from '../../../ui/Grid/Grid';
import GridElement from '../../../ui/Grid/GridElement';

import Button from '../../../ui/Button';
import Link from 'next/link';
import TextBox from '../../../ui/TextBox';
import SelectBox from '../../../ui/SelectBox';

const SearchCategoryComponent = ({ getUniformTitleAllFields, SearchOnly }) => {

    const [name, setName] = useState("")
    const [type, setType] = useState(0)
    const [nature, setNature] = useState(0)
    // const [Status, setStatus] = useState(10)
    const SearchClickHandler = (e) => {
        e.preventDefault();
        console.log({
            name,
            type,
            nature,
        });

        const search = {
            name
        }
        if (type !== 0)
            search["type"] = type
        if (nature !== 0)
            search["nature"] = nature
        console.log(search);

        getUniformTitleAllFields({
            variables: search,
=======
import Grid from '@/components/ui/Grid/Grid';
import GridElement from '@/components/ui/Grid/GridElement';

import Button from '@/components/ui/Button';
import Link from 'next/link';
import TextBox from '@/components/ui/TextBox';
import SelectBox from '@/components/ui/SelectBox';

const SearchCategoryComponent = ({ getCategoryAllFields, SearchOnly }) => {

    const [All_Fields, setAll_Fields] = useState("")
    // const [Status, setStatus] = useState(10)
    const SearchClickHandler = (e) => {
        e.preventDefault();
        getCategoryAllFields({
            variables: {
                all_fields: All_Fields
            }
>>>>>>> develop
        });
    }

    return (
        <React.Fragment>
<<<<<<< HEAD
            <h4 className="card-title">Recherche : Uniform title</h4>
            <Grid>
                <GridElement s={4}>
                    <TextBox label="Uniform title name"
                        value={name}
                        onChange={e => { setName(e.target.value) }}
                    />
                </GridElement>
                <GridElement s={4}>

                    <SelectBox
                        label="Type of work"
                        value={type}
                        onChange={e => { setType(Number(e.target.value)) }}
                    >
                        <option value={0}>All</option>
=======
            <h4 className="card-title">Recherche : Catégories</h4>
            <Grid>
                <GridElement s={6}>
                    <TextBox label="Category name"
                        value={All_Fields}
                        onChange={e => { setAll_Fields(e.target.value) }}
                    />
                </GridElement>
                <GridElement s={6}>

                    <SelectBox
                        label="Type of work"
                        name="Type_Work"
                    // value={inputs.Type_Work}
                    // onChange={handleInputChange}
                    >
>>>>>>> develop
                        <option value={10}>Musicale</option>
                        <option value={20}>Littéraire</option>
                        <option value={30}>Cinématographique</option>
                        <option value={40}>Autre</option>
                    </SelectBox>
                </GridElement>
<<<<<<< HEAD
                <GridElement s={4}>
                    <SelectBox
                        label="Nature of work"
                        value={nature}
                        onChange={e => { setNature(Number(e.target.value)) }}
                    >
                        <option value={0}>All</option>
                        <option value={10}>Oeuvre</option>
                        <option value={20}>Expresssion</option>
                        <option value={30}>Exécution</option>
                    </SelectBox>
                </GridElement>
=======
>>>>>>> develop

            </Grid>

            <br />
            <Button variant="contained" onClick={SearchClickHandler}>Rechercher</Button>
            {!SearchOnly &&
<<<<<<< HEAD
                <Link href="/admin/authorities/uniform_title/add">
=======
                <Link href="/admin/authorities/headings/add">
>>>>>>> develop
                    <Button >Ajouter Category</Button>
                </Link>
            }



        </React.Fragment>
    )
}


export default SearchCategoryComponent



