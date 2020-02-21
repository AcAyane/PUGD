import React from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';
// import JOBS_QUERY from '../graphql/jobs.query';
import USER_QUERY from '../queries/user.query';

const Home = () => {
  // Create a query hook
  // console.log(localStorage)
  const { data, loading, error } = useQuery(USER_QUERY);

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
          <th>username</th>
          <th>email</th>
        </tr>
        {data.getAllUsers.map(user => {
          return <tr key={`user__${user.id}`}>
            <td>{user._id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            
            </tr>;
        })}
      </table>
    </div>
  );
};

export default Home;

