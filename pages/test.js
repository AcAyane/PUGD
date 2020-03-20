import React, { useState } from 'react';
import SideBar from '../components/Layout/sideBar';
import HeaderBar from '../components/Layout/headerNav';

const Home = () => {
  return (
    <div>
      <HeaderBar />
      <SideBar />
      <div id="main"></div>
    </div>
  );
};

export default Home;
