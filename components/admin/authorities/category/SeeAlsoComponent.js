import React from 'react';
import Grid from '@/components/ui/Grid/Grid';
import GridElement from '@/components/ui/Grid/GridElement';
import TextBox from '@/components/ui/TextBox';
import RoundButton from '@/components/ui/RoundButton/RoundButton';


const SeeAlsoComponent = ({ categorys, removeSeeAlso }) => { 
    return (
        <React.Fragment>
            {
                categorys.map((category, index) => {
                    return <Grid key={index}>
                        <GridElement s={5}>
                            <TextBox label="See also (related term)"
                                defaultValue={category.AuthorityName} 
                            />
                        </GridElement>
                        <GridElement s={1} style={{ display: "flex" ,height:"84px"}}>
                            <RoundButton icon="delete" size="30" onClick={removeSeeAlso} style={{ margin: "auto" }} />
                        </GridElement>
                    </Grid>
                })
            }


        </React.Fragment>
    )
}
export default SeeAlsoComponent 