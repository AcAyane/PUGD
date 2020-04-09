import React from 'react';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextBox from '../../../ui/TextBox';


const LinkedAuthorityView = ({ Authority, OnAuthorityLinkChange, index }) => {

    return <ExpansionPanel>
        <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            aria-label="Expand"
        >



            <Grid container spacing={3}
                onClick={event => event.stopPropagation()}
                onFocus={event => event.stopPropagation()}
            >
                <Grid item xs={3}>
                    <TextBox

                        value={Authority.AuthorityName}
                        // onChange={e => { setIndexName_Auth(e.target.value) }}
                        InputProps={{
                            readOnly: true,
                        }} />
                </Grid>
                <Grid item xs={3}>
                    <FormControl fullWidth>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={Authority.LinkType || 10}
                            onChange={(event) => {
                                const Authority2 = { ...Authority }
                                Authority2.LinkType = event.target.value
                                OnAuthorityLinkChange(index, Authority2)
                            }}
                        >
                            <MenuItem value={10}>a participé à</MenuItem>
                            <MenuItem value={20}> après, voir aussi</MenuItem>
                            <MenuItem value={30}> avant, voir aussi</MenuItem>
                            <MenuItem value={40}> est associé à</MenuItem>
                            <MenuItem value={50}> participant</MenuItem>
                            <MenuItem value={60}> voir</MenuItem>
                            <MenuItem value={70}> voir aussi</MenuItem>
                            <MenuItem value={80}> voir aussi au nom d'état-civil</MenuItem>
                            <MenuItem value={90}> voir aussi au nom dans le siècle</MenuItem>
                            <MenuItem value={110}> voir aussi au nom de femme mariée</MenuItem>
                            <MenuItem value={120}> voir aussi au nom de jeune fille</MenuItem>
                            <MenuItem value={130}> voir aussi au nom en religion</MenuItem>
                            <MenuItem value={140}> voir aussi au noms des membres du pseudonyme collectif</MenuItem>
                            <MenuItem value={150}> voir aussi au pseudoyme</MenuItem>
                            <MenuItem value={160}> voir aussi au terme générique</MenuItem>
                            <MenuItem value={170}> voir aussi au terme spécifique</MenuItem>
                            <MenuItem value={180}> voir aussi la forme développée</MenuItem>

                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={3}>
                    <FormControl fullWidth>
                        {/* <InputLabel id="demo-simple-select-label">Authority</InputLabel> */}
                        <Select
                            labelId="demo-simple-select-label"
                            value={Authority.Authority_Type}
                            readOnly
                        // onChange={e => { setAuthority_Type(e.target.value) }}
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
                <Grid item xs={3}>
                    <TextBox
                    // label="Linked authorities "
                    // value={IndexName_Auth}
                    // onChange={e => { setIndexName_Auth(e.target.value) }}
                    />
                </Grid>
            </Grid>


        </ExpansionPanelSummary>
        <ExpansionPanelDetails>



            <Grid container spacing={3}>
                <Grid item xs={6}>
                    {/* <TextBox label="Starts"
                    // value={Note_Auth}
                    // onChange={e => { setNote_Auth(e.target.value) }}
                    /> */}
                    <TextBox
                        id="datetime-local"
                        label="Next appointment"
                        type="date"
                        // defaultValue="2017-05-24"
                        value={Authority.Start && Authority.Start.toISOString().split('T')[0] || ""}
                        onChange={(event) => {
                            const Authority2 = { ...Authority }
                            Authority2.Start = new Date(event.target.value)
                            OnAuthorityLinkChange(index, Authority2)
                        }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                         
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextBox
                        id="datetime-local"
                        label="Next appointment"
                        type="date"
                        value={Authority.End && Authority.End.toISOString().split('T')[0] || ""}
                        onChange={(event) => {
                            const Authority2 = { ...Authority }
                            Authority2.End = new Date(event.target.value)
                            OnAuthorityLinkChange(index, Authority2)
                        }}
                        InputLabelProps={{
                            shrink: true,
                        }} 
                    />
                </Grid>

            </Grid>
            <br />
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextBox label="Comment"
                        multiline
                        rows="4"
                        value={Authority.Comment || ""}
                        onChange={(event) => {
                            const Authority2 = { ...Authority }
                            Authority2.Comment = event.target.value
                            OnAuthorityLinkChange(index, Authority2)
                        }}
                    />
                </Grid>
            </Grid>

        </ExpansionPanelDetails>

        <style jsx>
            {`
     
    .MuiExpansionPanelSummary-expandIcon {
        margin-bottom : -10px:important
    }
    
    `

            }
        </style>

    </ExpansionPanel>

}
export default LinkedAuthorityView