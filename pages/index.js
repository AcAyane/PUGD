import React from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';
// import JOBS_QUERY from '../graphql/jobs.query';
import { BOOKS_QUERY } from '../queries/books.query';

const Home = () => {
  // Create a query hook
  // console.log(localStorage)
  const { data, loading, error } = useQuery(BOOKS_QUERY);
  console.log(data);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }

  // console.log(data)
  // Testing out the apollo connection
  return (
    <div>
      <table>
        <tr>
          <th>ID</th>
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
};

export default Home;
