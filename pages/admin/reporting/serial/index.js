import React from 'react'
import Card from "../../../../components/ui/card/card";
import TextBox from "../../../../components/ui/TextBox";
import Button from "../../../../components/ui/Button";
import AdminLayout from "../../../../components/adminLayout";


const Serial = () => {

    return (<div className="container">
        <div className="row">
            <div className="col s12">
                <Card>
                    <h5>Reporting of serial</h5>
                    <span>Reporting</span>
                    <div className="row">
                        <TextBox label={"Code barre du document"}/>

                    </div>
                </Card>
            </div>
        </div>
    </div>)
}
Serial.Layout = AdminLayout
export default Serial
