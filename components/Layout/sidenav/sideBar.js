import React from 'react';
import SidenavItem from './sidenav-item';
import SidenavDropdown from './sidenavDropdown';



const sideBar = () => {
 

  return (
    <aside className="sidenav-main nav-lock sidenav-active-rounded">
      
      <div className="brand-sidebar">
        <h1 >
          <a className="brand-logo" href="#">
            <img src="/materialize-logo.png" />
            <span className="logo-text hide-on-med-and-down">PUGD</span></a>  
        </h1>
      </div>

      <ul className="sidenav sidenav-fixed "
        id="slide-out" data-menu="menu-navigation" data-collapsible="menu-accordion" >
          
        <SidenavDropdown Label="Autorités">
          <SidenavItem Label="Author" Active="true" />
          <SidenavItem Label="Catégories" />
          <SidenavItem Label="Editeurs" />
          <SidenavItem Label="Collections" />
          <SidenavItem Label="Sous-Collections" />
          <SidenavItem Label="Titre de série" />
          <SidenavItem Label="Titre uniformes" />
          <SidenavItem Label="Index décimales" />
        </SidenavDropdown>

      </ul>
     
    </aside>
  )
}
export default sideBar