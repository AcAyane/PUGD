import { UPDATE_BOOK_MUTATION } from "../../../mutations/book.mutation";

import { Mutation, useQuery } from "react-apollo";
import { Query } from "react-apollo";
import { Component } from "react";
import Router from 'next/router'
import { BOOK_QUERY } from '../../../queries/book.query';
import React from 'react'

class ModifyBook extends Component {
  state = {
    isbn: '',
    title: '',
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps)
    console.log(nextState)
    return true
  }
  render() {

    let id = 0
    if (process.browser)
      id = Router.query.id

    return (
      <div>
        <Query query={BOOK_QUERY} variables={{ id }}>
          {(d) => {
            const { loading, error, data, called } = d
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
            const { book } = data


            return(
            <div>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  modifyBook({ variables: { isbn: this.state.isbn, title: this.state.title } });
                  alert("Book added succesfully")
                  Router.push('/book?doRefetch=true')

                }}>
                <legend>Form title</legend>

                <div className="form-group">
                  <label >ISBN</label>
                  <input type="text" className="form-control" id="" placeholder="Input ISBN" value={this.state.isbn} onChange={(event) => this.setState({ isbn: event.target.value })} />
                </div>
                <div className="form-group">
                  <label >Title</label>
                  <input type="text" className="form-control" id="" placeholder="Input ISBN" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>

            </div>)
          }}
        </Query>
        {/* <Mutation mutation={UPDATE_BOOK_MUTATION}>



                    {(modifyBook, { data }) => (
                        <div>
                            <form
                                onSubmit={e => {
                                    e.preventDefault();
                                    modifyBook({ variables: { isbn: this.state.isbn, title: this.state.title } });
                                    alert("Book added succesfully")
                                    Router.push('/book?doRefetch=true')

                                }}>
                                <legend>Form title</legend>

                                <div className="form-group">
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
                </Mutation> */}

      </div>




    )
  }
}
export default ModifyBook



// import React, { useState } from 'react';
// import { withApollo } from 'react-apollo';
// import { BOOK_QUERY } from '../../../queries/book.query';
// import { UPDATE_BOOK_MUTATION } from "../../../mutations/book.mutation";
// import Router from 'next/router'

// function test(e) {
//   console.log(e)
// }

// export function ModifyBook({ client }) {
//   const [isbn, setIsbn] = useState('sdfd');
//   const [title, setTitle] = useState('sdfdss');

//   const { query, mutate } = client;

//   let id = 0
//   if (process.browser) {
//     id = Router.query.id
//     console.log(id)
//   }

//   query({
//     query: BOOK_QUERY,
//     variables: {
//       id
//     },
//     reducer: (previousResult, action, variables) => {
//       console.log('reducer!!!!!', previousResult, action, variables);
//     }
//   }).then((data) => {
//     console.log("called")
//     setIsbn(data.data.book.isbn)
//     setTitle(data.data.book.title)
//   }).catch();
//   const onSubmit = async e => {

//     // try {
//     e.preventDefault();
//     console.log(isbn)
//     //   const res = await mutate({
//     //     mutation: UPDATE_BOOK_MUTATION,
//     //     variables: {
//     //       id,
//     //       isbn,
//     //       title
//     //     }
//     //   });

//     // } catch (err) {
//     //   console.log(err); 
//     // }
//   };




// //   return <form
// //     onSubmit={onSubmit}
// //   >

// //     <legend>Form title</legend>

// //     <div className="form-group">
// //       <label >ISBN</label>
// //       <input type="text" className="form-control" id="" placeholder="Input ISBN" value={isbn} onChange={event => setIsbn(event.target.value)} />
// //     </div>
// //     <div className="form-group">
// //       <label >Title</label>
// //       <input type="text" className="form-control" id="" placeholder="Input ISBN" value={title} onChange={event => setTitle(event.target.value)} />
// //     </div>
// //     <button type="submit" className="btn btn-primary" >Submit</button>
// //   </form>
// // };

// // // if(error) {
// // //   alert('Error Logging In User');
// // // }

// // // if (success) {
// // //   alert('Successfully Logged In');
// // // } 



// // export default withApollo(ModifyBook);