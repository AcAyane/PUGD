import { BOOKS_QUERY } from "../../queries/book.query";
import Link from "next/link";

import { Query } from "react-apollo";

import Book from "../../components/book";

import { useRouter } from "next/router";
import React from 'react'
const books = () => {
  return (
    <div>
      <Query query={BOOKS_QUERY}>
        {({ loading, error, data, refetch }) => {

          //Update the cached variables if we have a dofetch query param
          const router = useRouter();
          const { doRefetch } = router.query;
          if (Boolean(doRefetch)) refetch();


          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;



          const { books } = data;
          return data && (
            <div>

              <div className="row">
                <div className="col-md-12">
                  <div className="card animate fadeLeft">
                    <div className="card-content">
                      <table className="table">
                        <tbody>
                          <tr>
                            <th>isbn</th>
                            <th>title</th>
                            <th></th>
                          </tr>
                          {books.map(book => (
                            <Book
                              key={book._id}
                              id={book._id}
                              isbn={book.isbn}
                              title={book.title}
                              refetch={refetch}
                            ></Book>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          );
        }}
      </Query>
      <Link href="/book/add">
        <button className="pull-right btn btn-primary">Add book</button>
      </Link>
    </div>
  );
};
export default books;
