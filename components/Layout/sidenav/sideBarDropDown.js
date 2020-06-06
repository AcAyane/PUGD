import React  from 'react';

<<<<<<< HEAD
const SideBarDropDown = ({ Label,icon,...props }) => {

  return (
    <li >
      <a className="collapsible-header waves-effect waves-cyan " href="#" >
        <i className="material-icons">{icon}</i>
        <span className="menu-title">
=======
const SideBarDropDown = ({ active, Label,icon,...props }) => {

  return (
    <li className={`bold ${active}`} >
      <a className="collapsible-header waves-effect waves-cyan " href="#" >
        <i className="material-icons">{icon}</i>
        <span className="menu-title" data-i18n="Dashboard">
>>>>>>> develop
          {Label}
        </span>
        
      </a>
      <div className="collapsible-body">
        <ul className="collapsible collapsible-sub" data-collapsible="accordion">
            {props.children}
        </ul>
      </div>
    </li>
  )
}
export default SideBarDropDown