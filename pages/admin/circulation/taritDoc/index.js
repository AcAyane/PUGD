import React, {useState} from 'react'
import AdminLayout from '../../../../components/adminLayout'
import Card from "../../../../components/ui/card/card";
import TextBox from "../../../../components/ui/TextBox";
import Button from "../../../../components/ui/Button";

const traitDoc = () => {

    return <div className="container">
                <div className="row">
                    <div className="col s12">
                        <Card>
                            <h5>Documents À traiter</h5>
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
traitDoc.Layout = AdminLayout
export default traitDoc
