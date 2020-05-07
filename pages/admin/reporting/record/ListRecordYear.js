import React, { Component } from "react";

import {GET_RECORD_YEAR} from "../../../graphql/queries/Admin/Reporting/Record.queries";

import ListRecordYearComponents from '../../../../components/admin/Reporting/ListRecordYearComponents';
const AddrecordForm = () => {
    const {
        inputs,
    } = userecordForm(record);

    GET_RECORD_YEAR({
        variables: {
            recYear: inputs.Year,
            Author:inputs.author
        }
    });

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;


    return(
        <div className="row">
            <form>
                <h1>list Record by year publishing and author</h1>
                <label>Year publishing</label>
                <input type="text" name="yearpublishing" value={inputs.Year} />

                <label>Outhor</label>
                <input type="text" name="author" value={inputs.author} />


            </form>
            <div className="animate fadeLeft">

                <ListRecordYearComponents record={input} />


            </div>
        </div>

    );
};





AddrecordForm.Layout = AdminLayout


export default AddrecordForm
