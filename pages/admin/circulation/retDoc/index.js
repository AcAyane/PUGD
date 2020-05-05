import React, {useState} from 'react'
import AdminLayout from '../../../../components/adminLayout'
import Card from "../../../../components/ui/card/card";
import TextBox from "../../../../components/ui/TextBox";
import Button from "../../../../components/ui/Button";

const retDoc = () => {

    return <div className="container">
        <div className="row">
            <div className="col s12">
                <Card>
                    <h5>Retour de documents</h5>
                    <span>Recherche emprunteur</span>
                    <div className="row">
                        <TextBox label={"Search by Code bar"}/>
                        <Button rounded={2}>Search</Button>
                    </div>
                </Card>
            </div>
        </div>
    </div>
}
retDoc.Layout = AdminLayout
export default retDoc
