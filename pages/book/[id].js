

import { Component } from "react";
import Router from 'next/router'
import { Query } from "react-apollo";
import { BOOK_QUERY } from '../../queries/book.query';


class ShowBook extends Component {
    state = {
        isbn: '',
        title: '',
    }

    render() {
        let id = 0
        if (process.browser)
            id = Router.query.id
        return (


            <Query query={BOOK_QUERY} variables={{ id }}>
                {({ loading, error, data }) => {
                    if (loading) return "Loading...";
                    if (error) return `Error! ${error.message}`;

                    const { book } = data
                    return (
                        <div className="container">
                            <div className="row">
                                <div className="jumbotron">
                                    <label>ISBN</label> : book.isbn
                                    <br/>
                                    <label>Title</label> : book.title
                                </div>
                            </div>
                        </div>

                    );
                }}
            </Query>



        )
    }
}
export default ShowBook