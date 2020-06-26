import React, {useState} from 'react'
import AdminLayout from '../../../../components/adminLayout'
import {useLazyQuery} from "@apollo/react-hooks";
import Table from "../../../../components/ui/Table/Table";
import TextBox from "../../../../components/ui/TextBox";
import Button from "../../../../components/ui/Button";
import {GET_BRANCH_ALL_FIELDS} from "../../../../graphql/queries/admin/cataloguing/BranchQuerie";
const catalogingHome = () => {
    const [BranchName, setBranchName] = useState('')
    const [findBranchName, { loading, error, data }] = useLazyQuery(GET_BRANCH_ALL_FIELDS);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    const onSearchHandler = (e) => {
        e.preventDefault();
        findBranchName({
            variables: {
                BranchName: BranchName,
            }
        });
    }

            return (

            
                <div className="row">
                {/*=== get Groups initial pages */}

                <div className="col s12">
                <form>
                        <span>Search Branch by name</span>
                        <div className="row">
                        <div className="input-field col s8">
                            <TextBox label={"Search Copies Of Document (Branch) by name "}
                                     type="text"
                                     onChange={event => {setBranchName(event.target.value)}}
                                     value={BranchName} 
                            />
                            </div>
                            <div className="input-field col s2">
                                <br />
                            <Button
                                onClick={onSearchHandler} 
                                rounded={4}>Search</Button></div>
                                <div className="input-field col s2">
                                <br />
                            <Button
                                href="AddBranch"
                                rounded={4}> Add</Button></div>
                         </div>
                    </form>
                         <Table Thead={
                            <tr>
                                {/*<!-- data table responsive icons --> */}
                                <th></th>
                                {/*<!-- data table checkbox -->*/}
                                <th></th>
                                <th>
                                    <span>Branch Name</span>
                                </th>
                                <th>Address</th>
                                <th>Branch Fax</th>
                                <th>Branch Phone</th>
                                <th>Library</th>
                                
                                <th>Action</th>
                                
                            </tr>
                        } Tbody={
                            <tbody>
                            {(data != null || data !== undefined) && data.branches.map((items) => (
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <a key={items.id} href={`"app-invoice-view.html"${items._id}`}>
                                            {items.BranchName}
                                        </a>
                                    </td>
                                    <td>
                                        <span className="chip lighten-5 red red-text">{items.BranchZip} {items.BranchCity}
                                        {items.BranchState} {items.BranchCountry} </span>
                                    </td>
                                    <td>
                                        <span className="chip lighten-5 red red-text">{items.BranchFax}</span>
                                    </td>
                                    <td>
                                        <span className="chip lighten-5 red red-text">{items.BranchPhone}</span>
                                    </td>
                                    <td>
                                        <span className="chip lighten-5 red red-text">{items.Library.Name}</span>
                                    </td>
                                   
                                   

                                    <td>
                                        <div className="invoice-action">
                                            <a href="app-invoice-view.html" className="invoice-action-view mr-4">
                                                <i className="material-icons">remove_red_eye</i>
                                            </a>
                                            <a href="app-invoice-edit.html" className="invoice-action-edit">
                                                <i className="material-icons">edit</i>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            ))}


                            </tbody>
                        }/>


                        
                    </div>
                </div>
        
        );
 

}
catalogingHome.Layout = AdminLayout
export default catalogingHome
