import React from 'react';
import Grid from '../../../ui/Grid/Grid';
import GridElement from '../../../ui/Grid/GridElement';
import TextBox from '../../../ui/TextBox';
import RoundButton from '../../../ui/RoundButton/RoundButton';


const SeeAlsoComponent = ({ categorys, removeSeeAlso }) => {

    return (
        <React.Fragment>
            {
                categorys.map((category, index) => {
                    return <Grid key={index}>
                        <GridElement s={5}>
                            <TextBox label="See also (related term)"
                                value={category.AuthorityName}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </GridElement>
                        <Grid s={1} style={{ display: "flex" }}>
                            <RoundButton icon="delete" size="30" onClick={removeSeeAlso} style={{ margin: "auto" }} />
                        </Grid>
                    </Grid>
                })
            }


        </React.Fragment>
    )
}
export default SeeAlsoComponent 