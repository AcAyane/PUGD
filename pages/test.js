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
                <Link href="./" >
                    <button>Go to index</button>
                </Link>
                <Query query={BOOKS_QUERY}>
                    {({ loading, error, data }) => {
                        if (loading) return 'Loading...';
                        if (error) return `Error! ${error.message}`;
                        console.log("hey");
                        return (
                            <div>
                                <Head>
                                    <title>Home</title>
                                    <link rel="icon" href="/favicon.ico" />
                                    <link href="/public/static/skeleton.css" rel="stylesheet" />

                                </Head>
                                <ul>
                                    {data.jobs.map(job => {
                                        return <li key={`job__${job.id}`}>{job.title}</li>;
                                    })}
                                </ul>
                            </div>
                        );
                    }}
                </Query>
            </div>
        );
    }
}
