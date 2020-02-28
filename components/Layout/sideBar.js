import React, { useState } from 'react';
import { Collapse } from 'reactstrap';
import { FaAngleRight,FaTv, FaRegCircle } from 'react-icons/fa';

const sideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
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
        <li className={isOpen? 'open' : ''}>

          <a className=" " href="#" onClick={toggle}>
            <span  className="item-icon"> <FaTv  /></span>   
            <span className="menu-title" data-i18n="Dashboard"> Dashboard</span>
            <span  className="drop-icon"> <FaAngleRight/></span>
          </a>
          <Collapse isOpen={isOpen}>
            <ul className="collapsible collapsible-sub" >
              <li className="active">
                <a className="active" href="dashboard-modern.html">
                  <span className="item-icon"><FaRegCircle  size="0.75em" /></span>
                  <span data-i18n="Modern">Modern</span>
                  
                  </a>
              </li>
              <li>
                <a href="dashboard-ecommerce.html">
                <span className="item-icon"><FaRegCircle  size="0.75em"/></span>
                  <span data-i18n="eCommerce">eCommerce</span>
                </a>
              </li>
              <li>
                <a href="dashboard-analytics.html">
                <span className="item-icon"><FaRegCircle  size="0.75em"/></span>
                  <span data-i18n="Analytics">Analytics</span>
                </a>
              </li>
            </ul>
          </Collapse>
          <style jsx>{`
            .item-icon{
              margin-right:25px;
              padding-top:5px;
              position:relative;top:2px
            }
            .drop-icon{
             display:inline-block;
             position:absolute;
             right:25px;
             top:2px
            } 
            `}
            </style>
        </li>
      </ul>
      <div className="navigation-background"></div><a
        className="sidenav-trigger btn-sidenav-toggle btn-floating btn-medium waves-effect waves-light hide-on-large-only"
        href="#"
        data-target="slide-out"><i className="material-icons">menu</i></a>
    </aside>
  )
}
export default sideBar