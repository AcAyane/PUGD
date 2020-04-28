import React, { useEffect } from 'react';
import  Router from 'next/router';


const Home = () => {

  useEffect(() => {
    if (typeof window !== "undefined")
    Router.push("/admin/authorities")
  })
  return (
    <div>
        Main platform page
    </div>


  );
};

export default Home;

