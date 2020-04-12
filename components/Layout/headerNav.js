import React from 'react';
import Link from 'next/Link'
import { Button, MenuItem, Menu } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import HeaderButton from '../ui/HeaderButton/HeaderButton';
import HeaderDropDown from '../ui/HeaderDropDown/HeaderDropDown';
const headerNav = () => {

  // let loggedIn = false;
  // if (typeof window !== 'undefined')
  //   loggedIn = localStorage.getItem("token") ? true : false;


  return (
    <header className="page-topbar" >
      <div className="navbar2 navbar2-fixed">
        <nav
          className=" sideNav-lock gradient-45deg-purple-deep-orange gradient-shadow">
          <div className="nav-wrapper">

            <ul className="header-right-nav" >
              <li>
                <HeaderButton>
                  <FullscreenIcon style={{ fontSize: "24px" }} />
                </HeaderButton>
              </li>
              <li>
                <HeaderButton >
                  <NotificationsIcon style={{ fontSize: "24px" }} />
                </HeaderButton>
              </li>
              <li>
                <HeaderDropDown>
                  <ul>
                    <MenuItem style={{ float: "none" }}>Profile</MenuItem>
                    <MenuItem style={{ float: "none" }}>My account</MenuItem>
                    <MenuItem style={{ float: "none" }}>Logout</MenuItem>
                  </ul>
                </HeaderDropDown>
              </li>
            </ul>
          </div>
        </nav>
        <nav className=" sideNav-lock bottom-nav" >
          <div className="nav-wrapper bottom-nav-wrapper" >


            <h3 className="title-nav">
              <Link href="/admin/circulation">
                <a>
                  Circulation
                    </a>
              </Link>
            </h3>
            <h3 className="title-nav">
              <Link href="/admin/Catalogue"><a>
                Catalogue </a>
              </Link>
            </h3>
            <h3 className="title-nav">
              <Link href="/admin/authorities"><a>
                Autorités </a>
              </Link>
            </h3>
            <h3 className="title-nav">
              <Link href="/admin/edition"><a>
                Edition </a>
              </Link>
            </h3>

            <h3 className="title-nav">
              <Link href="/admin/dsi"><a>
                D.S.I </a>
              </Link>
            </h3>

            <h3 className="title-nav">
              <Link href="/admin/administration"><a>
                Administration </a>
              </Link>
            </h3>
          </div>
        </nav>
      </div>

      <style jsx>
        {`
        .bottom-nav{ 
          box-shadow:none
        }
        .bottom-nav-wrapper{
          
    padding-left: 250px;
    text-align: center;
        }
        .module-link{
          display: inline-block;
    margin:0 0 0 5px !important;

        }
        .module-link .card-content{
          padding: 5px 10px;
        }
        .title-nav{
          box-sizing: border-box;
          display: inline-block !important;
          margin: 0 10px !important;
          padding: 10px 15px;
          border-bottom:4px solid #3b609a;
        }
        .title-nav a{
          color:#595959 !important;
        }
        .title-nav:hover{
          border-bottom:7px solid #3b609a;
        }
        `}
      </style>

    </header >
  )
}
export default headerNav