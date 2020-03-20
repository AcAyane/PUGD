import React, { useState } from 'react';
import { Collapse } from 'reactstrap';
import { FaAngleRight, FaTv, FaRegCircle } from 'react-icons/fa';



const sideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    console.log("hiiii")
    setIsOpen(!isOpen);
  }

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
        <li className={isOpen ? 'open' : ''}>

          <a className=" " href="#" onClick={toggle}>
            <span className="item-icon"> <FaTv /></span>
            <span className="menu-title" data-i18n="Dashboard"> Autorités</span>
            <span className="drop-icon"> <FaAngleRight /></span>
          </a>


          <Collapse isOpen={isOpen}>
            <ul className="collapsible collapsible-sub" >
              <li >
                <a className="active" href="dashboard-modern.html">
                  <span className="item-icon"><FaRegCircle size="0.75em" /></span>
                  <span data-i18n="Modern">Auteurs</span>

                </a>
              </li>
              <li >
                <a  href="dashboard-modern.html">
                  <span className="item-icon"><FaRegCircle size="0.75em" /></span>
                  <span data-i18n="Modern">Catégories</span>

                </a>
              </li>
              <li >
                <a  href="dashboard-modern.html">
                  <span className="item-icon"><FaRegCircle size="0.75em" /></span>
                  <span data-i18n="Modern">Editeurs</span>

                </a>
              </li>
              <li >
                <a  href="dashboard-modern.html">
                  <span className="item-icon"><FaRegCircle size="0.75em" /></span>
                  <span data-i18n="Modern">Collections</span>

                </a>
              </li>
              <li >
                <a  href="dashboard-modern.html">
                  <span className="item-icon"><FaRegCircle size="0.75em" /></span>
                  <span data-i18n="Modern">Sous-Collections</span>

                </a>
              </li>
              <li >
                <a  href="dashboard-modern.html">
                  <span className="item-icon"><FaRegCircle size="0.75em" /></span>
                  <span data-i18n="Modern">Titre de série</span>

                </a>
              </li>
              <li >
                <a  href="dashboard-modern.html">
                  <span className="item-icon"><FaRegCircle size="0.75em" /></span>
                  <span data-i18n="Modern">Titre uniformes</span>

                </a>
              </li>
              <li >
                <a  href="dashboard-modern.html">
                  <span className="item-icon"><FaRegCircle size="0.75em" /></span>
                  <span data-i18n="Modern">Index décimales</span>

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

      <style jsx>{`
           .ps__rail-x{
            left: 0px; bottom: -180px;
          }
            .ps__thumb-x{
              left: 0px; width: 0px;
          }
              .ps__rail-y{
                top: 180px; height: 216px; right: 0px;
          }
            .ps__thumb-y{
              top: 21px; height: 25px;
          }
          
          `}

      </style>
    </aside>
  )
}
export default sideBar