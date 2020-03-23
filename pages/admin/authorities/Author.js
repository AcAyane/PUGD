import React, { useState } from 'react';
import AdminLayout from '../../../components/adminLayout';
import { FaCircle } from 'react-icons/fa';
import Grid from '@material-ui/core/Grid';
import { TextField, Button } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  
const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

const AuthorPage = () => {


    return (
        <div className="animate fadeLeft">
            <div className="card animate">
                <div className="card-content " >
                    <FaCircle size="14px" color="#8e24aa" />
                    <h5 className="uk-icon">Gestion des autorités : Catégories</h5>
                </div>
            </div>

            <div className="card ">
                <div className="card-content " >
                    <h4 className="card-title">Recherche : Auteurs</h4>

                    <Grid container spacing={3}>
                        <Grid item xs>
                            <TextField fullWidth required id="standard-required" label="Rechercher" defaultValue="Hello World" />
                        </Grid>
                        <Grid item xs={2}>

                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Type Auteur</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                //   value={age}
                                //   onChange={handleChange}
                                value="1"
                                >
                                    <MenuItem value={1}>Afficher tout</MenuItem>
                                    <MenuItem value={10}>Personne Physique</MenuItem>
                                    <MenuItem value={20}>Collectivité</MenuItem>
                                    <MenuItem value={30}>Congrés</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                //   value={age}
                                //   onChange={handleChange}
                                value="1"
                                >
                                    <MenuItem value={1}>par defaut</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <br />
                    <Button variant="contained">Rechercher</Button>
                    <Button variant="contained">Ajouter Auteur</Button>
                </div>

            </div>

            <div className="card ">
                <div className="card-content " >
                    <h4 className="card-title">Recherche : Auteurs</h4>


                    <TableContainer >
                        <Table  aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Libellé</TableCell>
                                    <TableCell align="right">Utilisation</TableCell>
                                    <TableCell align="right">&nbsp; </TableCell> 
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map(row => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.calories}</TableCell>
                                        <TableCell align="right">{row.fat}</TableCell> 
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </div>

            </div>


            <style jsx>
                {`
    
      .uk-icon { 
        margin-left:10px;
      display:inline-block;
    }
    .blue-gradient{
      background: linear-gradient(45deg,#0288d1,#26c6da)!important;
    }
    `

                }
            </style>
        </div>
    );
};


AuthorPage.Layout = AdminLayout

export default AuthorPage;
