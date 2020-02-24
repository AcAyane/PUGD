import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Head from 'next/head';
import Link from 'next/link'

export default class Header extends Component {
    render() {
        return (

            <div>
                <Head>
                    <title>Home</title>
                    <link rel="icon" href="/favicon.ico" />
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css" rel="stylesheet" />
                </Head>
                <Link href="./" >
                    <button>Go to index</button>
                </Link>
                <Link href="./test" >
                    <button>Go to test</button>
                </Link>


            </div>
        );
    }
}
