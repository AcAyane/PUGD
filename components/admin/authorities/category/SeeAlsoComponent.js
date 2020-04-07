import React from 'react';
import Grid from '@material-ui/core/Grid';
import { TextField, IconButton } from '@material-ui/core';

import { RemoveCircle } from '@material-ui/icons';


const SeeAlsoComponent = ({ categorys, removeSeeAlso }) => {

    return (
        <React.Fragment>
                    {
                        categorys.map((category,index) => {
                            return <Grid container spacing={3} key={index}>
                                <Grid item xs={5}>
                                    <TextField fullWidth label="See also (related term)"
                                        value={category.AuthorityName}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={1} style={{ display: "flex" }}>
                                    <IconButton color="primary" component="span" onClick={removeSeeAlso} style={{ margin: "auto" }}>
                                        <RemoveCircle />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        })
                    }


        </React.Fragment>
    )
}
export default SeeAlsoComponent 