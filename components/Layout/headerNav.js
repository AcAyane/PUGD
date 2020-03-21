import React  from 'react'; 
const headerNav = () => { 
  
  let loggedIn = false;
  if(  typeof window !== 'undefined')
   loggedIn = localStorage.getItem("token") ? true : false;
  return (
    <header className="page-topbar" id="header">
    <div className="navbar2 navbar2-fixed">
      <nav
        className=" sideNav-lock gradient-45deg-purple-deep-orange gradient-shadow">
        <div className="nav-wrapper">

          <ul className="header-right-nav float-right">
              <li>
             {loggedIn ? "You are logged in" : null} 
              </li>
          </ul>

        </div>
      </nav>
    </div>
  </header>
  )
}
export default headerNav