import React from 'react';
import Link from 'next/Link'
import rightNavbar from "./navbar-right";
const headerNav = () => {

  let loggedIn = false;
  if (typeof window !== 'undefined')
    loggedIn = localStorage.getItem("token") ? true : false;
  return (
    <header className="page-topbar" >
      <div className="navbar2 navbar2-fixed">
        <nav
          className=" sideNav-lock gradient-45deg-purple-deep-orange gradient-shadow">
          <div className="nav-wrapper">

            <ul className="header-right-nav float-right">
              <li>
                {loggedIn ? <div>
                  <li className="nav-item dropdown">
                    <a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle user-action"><img
                        src="https://www.tutorialrepublic.com/examples/images/avatar/3.jpg" className="avatar"
                        alt="Avatar"/> Antonio Moreno <b className="caret"></b></a>
                    <ul className="dropdown-menu">
                      <li><a href="#" className="dropdown-item"><i className="fa fa-user-o"></i> Profile</a></li>
                      <li><a href="#" className="dropdown-item"><i className="fa fa-calendar-o"></i> Calendar</a></li>
                      <li><a href="#" className="dropdown-item"><i className="fa fa-sliders"></i> Settings</a></li>
                      <li className="divider dropdown-divider"></li>
                      <li><a href="#" className="dropdown-item"><i className="material-icons">&#xE8AC;</i> Logout</a>
                      </li>
                    </ul>
                  </li></div> : null}
              </li>
            </ul>

          </div>
        </nav>

        <nav className=" sideNav-lock bottom-nav" >
          <div className="nav-wrapper bottom-nav-wrapper" >

            <div className="card gradient-shadow gradient-45deg-light-blue-cyan border-radius-3 module-link" >
              <div className="card-content center">
                <h5 className="white-text lighten-4">
                  <Link href="/admin/circulation">
                    <a>
                    Circulation
                    </a>
                  </Link>
                </h5>
              </div>
            </div>
            <div className="card  gradient-45deg-green-teal border-radius-3 module-link"  >
              <div className="card-content center">
                <h5 className="white-text lighten-4">
                <Link href="/admin/Catalogue"><a>
                Catalogue </a>
                  </Link>
                  </h5>
              </div>
            </div>
            <div className="card gradient-shadow gradient-45deg-amber-amber border-radius-3 module-link" >
              <div className="card-content center">
                <h5 className="white-text lighten-4">
                <Link href="/admin/authorities"><a>
                Autorités </a>
                  </Link>
                  </h5>
              </div>
            </div>
            <div className="card gradient-shadow gradient-45deg-red-pink border-radius-3 module-link" >
              <div className="card-content center">
                <h5 className=" white-text lighten-4">
                <Link href="/admin/edition"><a>
                Edition </a>
                  </Link>
                  </h5>
              </div>
            </div><div className="card gradient-shadow gradient-45deg-purple-deep-purple border-radius-3 module-link" >
              <div className="card-content center">
                <h5 className="white-text lighten-4">
                <Link href="/admin/dsi"><a>
                D.S.I </a>
                  </Link>
                 </h5>
              </div>
            </div>
            <div className="card gradient-shadow gradient-45deg-blue-indigo border-radius-3 module-link" >
              <div className="card-content center">
                <h5 className="white-text lighten-4">
                <Link href="/admin/administration"><a>
                Administration </a>
                  </Link>
                  </h5>
              </div>
            </div></div></nav>
      </div>

      <style jsx>
        {`
        .bottom-nav{
          margin-top: -35px;
          box-shadow:none
        }
        .bottom-nav-wrapper{
          
    padding-left: 270px;
    text-align: center;
        }
        .module-link{
          display: inline-block;
    margin:0 0 0 5px !important;

        }
        .module-link .card-content{
          padding: 5px 10px;
        }
        
        .white-text {
          color:white !important;
        }
        .form-inline {
        display: inline-block;
    }
  .navbar-header.col {
          padding: 0 !important;
          }
          .navbar {
          color: #fff;
          background: #926dde;
          padding: 5px 16px;
          border-radius: 0;
          border: none;
          box-shadow: 0 0 4px rgba(0,0,0,.1);
          }
          .navbar img {
          border-radius: 50%;
          width: 36px;
          height: 36px;
          margin-right: 10px;
          }
          .navbar .navbar-brand {
          color: #efe5ff;
          padding-left: 0;
          padding-right: 50px;
          font-size: 24px;
          }
          .navbar .navbar-brand:hover, .navbar .navbar-brand:focus {
          color: #fff;
          }
          .navbar .navbar-brand i {
          font-size: 25px;
          margin-right: 5px;
          }
          .search-box {
                  position: relative;
              }
              .search-box input {
                  padding-right: 35px;
          min-height: 38px;
          border: none;
          background: #faf7fd;
                  border-radius: 3px !important;
              }
          .search-box input:focus {
          background: #fff;
          box-shadow: none;
          }
          .search-box .input-group-addon {
                  min-width: 35px;
                  border: none;
                  background: transparent;
                  position: absolute;
                  right: 0;
                  z-index: 9;
                  padding: 10px 7px;
          height: 100%;
              }
              .search-box i {
                  color: #a0a5b1;
          font-size: 19px;
              }
          .navbar .nav-item i {
          font-size: 18px;
          }
          .navbar .nav-item span {
          position: relative;
          top: 3px;
          }
          .navbar .nav > li a {
          color: #efe5ff;
          padding: 8px 15px;
          font-size: 14px;
          }
          .navbar .nav > li a:hover, .navbar .nav > li a:focus {
          color: #fff;
          text-shadow: 0 0 4px rgba(255,255,255,0.3);
          }
          .navbar .nav > li > a > i {
          display: block;
          text-align: center;
          }
          .navbar .dropdown-item i {
          font-size: 16px;
          min-width: 22px;
          }
              .navbar .dropdown-item .material-icons {
                  font-size: 21px;
                  line-height: 16px;
                  vertical-align: middle;
                  margin-top: -2px;
              }
          .navbar .nav-item.open > a, .navbar .nav-item.open > a:hover, .navbar .nav-item.open > a:focus {
          color: #fff;
          background: none !important;
          }
          .navbar .dropdown-menu {
          border-radius: 1px;
          border-color: #e5e5e5;
          box-shadow: 0 2px 8px rgba(0,0,0,.05);
          }
          .navbar .dropdown-menu li a {
          color: #777 !important;
          padding: 8px 20px;
          line-height: normal;
          }
          .navbar .dropdown-menu li a:hover, .navbar .dropdown-menu li a:focus {
          color: #333 !important;
          background: transparent !important;
          }
          .navbar .nav .active a, .navbar .nav .active a:hover, .navbar .nav .active a:focus {
          color: #fff;
          text-shadow: 0 0 4px rgba(255,255,255,0.2);
          background: transparent !important;
          }
          .navbar .nav .user-action {
          padding: 9px 15px;
          }
          .navbar .navbar-toggle {
          border-color: #fff;
          }
          .navbar .navbar-toggle .icon-bar {
          background: #fff;
          }
          .navbar .navbar-toggle:focus, .navbar .navbar-toggle:hover {
          background: transparent;
          }
          .navbar .navbar-nav .open .dropdown-menu {
          background: #faf7fd;
          border-radius: 1px;
          border-color: #faf7fd;
          box-shadow: 0 2px 8px rgba(0,0,0,.05);
          }
          .navbar .divider {
          background-color: #e9ecef !important;
          }
          @media (min-width: 1200px){
          .form-inline .input-group {
          width: 350px;
          margin-left: 30px;
          }
          }
          @media (max-width: 1199px){
          .navbar .nav > li > a > i {
          display: inline-block;
          text-align: left;
          min-width: 30px;
          position: relative;
          top: 4px;
          }
          .navbar .navbar-collapse {
          border: none;
          box-shadow: none;
          padding: 0;
          }
          .navbar .navbar-form {
          border: none;
          display: block;
          margin: 10px 0;
          padding: 0;
          }
          .navbar .navbar-nav {
          margin: 8px 0;
          }
          .navbar .navbar-toggle {
          margin-right: 0;
          }
          .input-group {
          width: 100%;
          }
        `}
        </style>

    </header>
  )
}
export default headerNav
