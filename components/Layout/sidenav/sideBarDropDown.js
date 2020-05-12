import React  from 'react';

const SideBarDropDown = ({ active, Label,icon,...props }) => {

  return (
    <li className={`bold ${active}`} >
      <a className="collapsible-header waves-effect waves-cyan " href="#" >
        <i className="material-icons">{icon}</i>
        <span className="menu-title" data-i18n="Dashboard">
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