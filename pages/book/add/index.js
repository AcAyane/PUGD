import { ADD_BOOK_MUTATION } from "../../../mutations/book.mutation";
import { Mutation } from "react-apollo";
import { Component } from "react";
import Router from 'next/router'
import React  from 'react';

class AddBook extends Component {

    state = {
        isbn: '',
        title: '',
    }

    render() {
        return (
            <Mutation mutation={ ADD_BOOK_MUTATION } >
                {(addBook, { data }) => (
                    <div>
                        <form
                            onSubmit={e => {
                                e.preventDefault();
                                addBook({ variables: { isbn: this.state.isbn, title: this.state.title } });
                                alert("Book added succesfully")
                                Router.push('/book?doRefetch=true')

                            }}
                        >
                            <legend>Form title</legend>

                            <div   className="form-group">
                                <label >ISBN</label>
                                <input type="text" className="form-control" id="" placeholder="Input ISBN" value={this.state.isbn} onChange={(event) => this.setState({ isbn: event.target.value })} />
                            </div>
                            <div className="form-group">
                                <label >Title</label>
                                <input type="text" className="form-control" id="" placeholder="Input ISBN" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                )}
            </Mutation>




        )
    }
}
export default AddBook
