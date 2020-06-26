import React, {useState}  from 'react'
import AdminLayout from '../../../../components/adminLayout'
import {useLazyQuery} from "@apollo/react-hooks";
import Table from "../../../../components/ui/Table/Table";
import TextBox from "../../../../components/ui/TextBox";
import Button from "../../../../components/ui/Button";
import {GET_RECORD_ALL_FIELDS} from "../../../../graphql/queries/admin/cataloguing/RecordQuerie";
const catalogingHome = () => {
    const [ISBN, setISBN] = useState('')
    const [findRecord, { loading, error, data }] = useLazyQuery(GET_RECORD_ALL_FIELDS);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    const onSearchHandler = (e) => {
        e.preventDefault();
        findRecord({
            variables: {
                ISBN: ISBN,
            }
        });
    }

    
    
    
            return (

            
                <div className="row">
                {/*=== get Groups initial pages */}

                <div className="col s12">
                <form>
                        <span>Search Record by ISBN</span>
                        <div className="row">
                        <div className="input-field col s8">
                            <TextBox label={"Search Record Of Document (ISBN) by name "}
                                     type="text"
                                     onChange={event => {setISBN(event.target.value)}}
                                     value={ISBN} 
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
                                href="AddRecords"
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
                                    <span>ISBN</span>
                                </th>
                                <th>Title</th>
                                <th>OtherTitle</th>
                                <th>ParallelTitle </th>
                                <th>RecYear </th>
                                <th>Edition Statement</th>
                    
                                <th>Other Informations</th>
                                <th>Format</th>
                                <th>Summary</th>
                                <th>Action</th>
                                
                            </tr>
                        } Tbody={
                            <tbody>
                            {(data != null || data !== undefined) && data.records.map((items) => (
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <a key={items.id} href={`"app-invoice-view.html"${items._id}`}>
                                            {items.ISBN}
                                        </a>
                                    </td>
                                    <td>
                                        <span className="chip lighten-5 red red-text">{items.Title}  </span>
                                    </td>
                                    <td>
                                        <span className="chip lighten-5 red red-text">{items.OtherTitle}</span>
                                    </td>
                                    <td>
                                        <span className="chip lighten-5 red red-text">{items.ParallelTitle}</span>
                                    </td>
                                    <td>
                                        <span className="chip lighten-5 red red-text">{items.RecYear}</span>
                                    </td>
                                    <td>
                                        <span className="chip lighten-5 red red-text">{items.EditionStatement}</span>
                                    </td>
                                    <td>
                                        <span className="chip lighten-5 red red-text">{items.OtherInformations}</span>
                                    </td>
                                    <td>
                                        <span className="chip lighten-5 red red-text">
                                        {items.Format}
                                            </span>
                                    </td>
                                    <td>
                                        <span className="chip lighten-5 red red-text">
                                        {items.Summary}
                                            </span>
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
