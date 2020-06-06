import React from 'react';
import Grid from '@/components/ui/Grid/Grid';
import GridElement from '@/components/ui/Grid/GridElement';
import Button from '@/components/ui/Button';

import useBasketForm from './useBasketForm';
import TextBox from '@/components/ui/TextBox';
import SelectBox from '@/components/ui/SelectBox';

const AddBasketForm = ({ onAddHandler, author }) => {

    const {
        inputs,
        handleInputChange,
    } = useBasketForm(author);

    const onSubmitForm = (event) => {
        event.preventDefault();
        console.log(
            {
                "BasketName": inputs.BasketName,
                "BasketNote": inputs.BasketNote,
                "BasketType": inputs.BasketType,
                "BasketColor": inputs.BasketColor,
                "BasketElements": inputs.BasketElements
            }
        );

        onAddHandler(
            inputs.BasketName,
            inputs.BasketNote,
            inputs.BasketType,
            inputs.BasketColor,
            inputs.BasketElements)
    }
    return (
        <React.Fragment>
            <Grid>
                <GridElement s={12}>
                    <TextBox
                        required
                        label="Basket name"
                        name="BasketName"
                        value={inputs.BasketName}
                        onChange={handleInputChange}
                    />
                </GridElement>

            </Grid>
            <Grid>
                <GridElement s={12}>
                    <TextBox
                        required
                        label="Basket note"
                        name="BasketNote"
                        value={inputs.BasketNote}
                        onChange={handleInputChange}
                        multiline
                        rows="4"
                    />
                </GridElement>

            </Grid>
            <Grid>
                <GridElement s={6}>

                    <SelectBox
                        label="Basket type"
                        name="BasketType"
                        value={inputs.BasketType}
                        onChange={handleInputChange}>
                        <option value={1}>Panier mixte</option>
                        <option value={2}>Panier d'auteurs</option>
                        <option value={3}>Panier de catégories</option>
                        <option value={4}>Panier d'éditeurs</option>
                        <option value={5}>Panier de collections</option>
                        <option value={6}>Panier de sous-collections</option>
                        <option value={7}>Panier de titres de série</option>
                        <option value={8}>Panier de titres uniformes</option>
                        <option value={9}>Panier d'indexations décimales</option>
                        <option value={10}>Panier de concepts</option>
                        <option value={11}>Panier d'autorités personnalisées</option>
                    </SelectBox>
                </GridElement>


                <GridElement s={2}>
                    <TextBox label="Basket Color"
                        name="BasketColor"
                        value={inputs.BasketColor}
                        onChange={handleInputChange}
                        type="color" />
                </GridElement>
            </Grid>


            <br />
            <Button variant="contained">Cancel</Button>
            <Button variant="contained" onClick={onSubmitForm}>
                Save
            </Button>

        </React.Fragment>
    )
}
export default AddBasketForm