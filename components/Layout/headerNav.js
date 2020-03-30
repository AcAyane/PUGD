import React from "react";
import Link from "next/Link";
const headerNav = () => {
  let loggedIn = false;
  if (typeof window !== "undefined")
    loggedIn = localStorage.getItem("token") ? true : false;
  return (
    <header className="page-topbar">
      <div className="navbar2 navbar2-fixed">
        <nav className=" sideNav-lock gradient-45deg-purple-deep-orange gradient-shadow">
          <div className="nav-wrapper">
            <ul className="header-right-nav float-right">
              <li>{loggedIn ? "You are logged in" : null}</li>
            </ul>
          </div>
        </nav>

        <nav className=" sideNav-lock bottom-nav">
          <div className="nav-wrapper bottom-nav-wrapper">
            <div className="card gradient-shadow gradient-45deg-light-blue-cyan border-radius-3 module-link">
              <div className="card-content center">
                <h5 className="white-text lighten-4">
                  <Link href="/admin/circulation">
                    <a>Circulation</a>
                  </Link>
                </h5>
              </div>
            </div>
            <div className="card  gradient-45deg-green-teal border-radius-3 module-link">
              <div className="card-content center">
                <h5 className="white-text lighten-4">
                  <Link href="/admin/Catalogue">
                    <a>Catalogue </a>
                  </Link>
                </h5>
              </div>
            </div>
            <div className="card gradient-shadow gradient-45deg-amber-amber border-radius-3 module-link">
              <div className="card-content center">
                <h5 className="white-text lighten-4">
                  <Link href="/admin/authorities">
                    <a>Autorités </a>
                  </Link>
                </h5>
              </div>
            </div>
            <div className="card gradient-shadow gradient-45deg-red-pink border-radius-3 module-link">
              <div className="card-content center">
                <h5 className=" white-text lighten-4">
                  <Link href="/admin/edition">
                    <a>Edition </a>
                  </Link>
                </h5>
              </div>
            </div>
            <div className="card gradient-shadow gradient-45deg-cyan-cyan border-radius-3 module-link">
              <div className="card-content center">
                <h5 className=" white-text lighten-4">
                  <Link href="/admin/acquisition">
                    <a>Acquisition </a>
                  </Link>
                </h5>
              </div>
            </div>
            <div className="card gradient-shadow gradient-45deg-purple-deep-purple border-radius-3 module-link">
              <div className="card-content center">
                <h5 className="white-text lighten-4">
                  <Link href="/admin/dsi">
                    <a>D.S.I </a>
                  </Link>
                </h5>
              </div>
            </div>
            <div className="card gradient-shadow gradient-45deg-blue-indigo border-radius-3 module-link">
              <div className="card-content center">
                <h5 className="white-text lighten-4">
                  <Link href="/admin/administration">
                    <a>Administration </a>
                  </Link>
                </h5>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <style jsx>
        {`
          .bottom-nav {
            margin-top: -35px;
            box-shadow: none;
          }
          .bottom-nav-wrapper {
            padding-left: 270px;
            text-align: center;
          }
          .module-link {
            display: inline-block;
            margin: 0 0 0 5px !important;
          }
          .module-link .card-content {
            padding: 5px 10px;
          }

          .white-text {
            color: white !important;
          }
        `}
      </style>
    </header>
  );
};
export default headerNav;
