import React, { useState } from 'react'; 
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import {Head} from 'next/document'
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  
  return (
    <div>

        <header className="page-topbar" id="header">
          <div className="navbar2 navbar2-fixed">
            <nav
              className="navbar2-main navbar2-color nav-collapsible sideNav-lock navbar2-dark gradient-45deg-purple-deep-orange gradient-shadow">
              <div className="nav-wrapper">
  
                <ul className="navbar2-list right">
  
                </ul>
  
              </div>
            </nav>
          </div>
        </header>
  
        <aside className="sidenav-main nav-expanded nav-lock nav-collapsible sidenav-light navbar2-full sidenav-active-rounded">
          <div className="brand-sidebar">
            <h1 className="logo-wrapper">
              <a className="brand-logo darken-1" href="#">
                <img src="/materialize-logo.png" />
                <span className="logo-text hide-on-med-and-down">Materialize</span></a>
              <a className="navbar2-toggler"
                href="#"></a>
            </h1>
          </div>
          <ul className="sidenav sidenav-collapsible leftside-navigation collapsible sidenav-fixed menu-shadow ps ps--active-y"
            id="slide-out" data-menu="menu-navigation" data-collapsible="menu-accordion" >
            <li className="bold">

              <a className=" " href="#" onClick={toggle}>
                <span className="menu-title" data-i18n="Dashboard">  Dashboard</span>
              </a>
              <Collapse isOpen={isOpen}>
              <ul className="collapsible collapsible-sub" >
              <li className="active">
                <a className="active" href="dashboard-modern.html">
                  <span data-i18n="Modern">Modern</span></a>
              </li>
              <li>
                <a href="dashboard-ecommerce.html">
                  <span data-i18n="eCommerce">eCommerce</span>
                  </a>
              </li>
              <li>
                <a href="dashboard-analytics.html">
                 <span data-i18n="Analytics">Analytics</span>
                 </a>
              </li>
            </ul>
              </Collapse>

            </li>
          </ul>
          <div className="navigation-background"></div><a
            className="sidenav-trigger btn-sidenav-toggle btn-floating btn-medium waves-effect waves-light hide-on-large-only"
            href="#"
            data-target="slide-out"><i className="material-icons">menu</i></a>
        </aside>
  
        <div id="main"> 
        </div>
  </div>
  );
};

export default Home;
 
