import React, { Component } from 'react';
import Head from 'next/head';
import { Query } from 'react-apollo';
import Link from 'next/link'

import BOOKS_QUERY from '../queries/books.query';



export default class test extends React.Component {


    render() {
        return (
            <div>
                {/* the below comment can be added to Link to hide the url while accessing to a certain page (like after login) */}
                {/* as={"/baaaaaaka".toString()} */}
                <Query query={BOOKS_QUERY}>
                    {({ loading, error, data }) => {
                        if (loading) return 'Loading...';
                        if (error) return `Error! ${error.message}`;
                        console.log("hey");
                        return (
                            <div>
                                <table>
                                    <tr>
                                        <th>Ihahah</th>
                                        <th>isbn</th>
                                        <th>title</th>
                                    </tr>
                                    <tr>
                                        <td>{data.book.id}</td>
                                        <td>{data.book.isbn}</td>

                                        <td>{data.book.title}</td>
                                    </tr>

                                </table>
                            </div>
                        );
                    }}
                </Query>
            </div>
        );
    }
}
