import React, { useRef, useEffect } from 'react';

const SideBarDropDown = ({ active, Label,icon,...props }) => {
  const collapsibleHeader = useRef();
  useEffect(() => {
    // var elems = document.querySelectorAll('.notification-button, .profile-button, .translation-button, .dropdown-settings');
    var instances = M.Collapsible.init(collapsibleHeader.current, {
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false,
      hover: false,
      gutter: 0,
      coverTrigger: false,
      alignment: "right",
      hover: false,
      closeOnClick: true,
    });
  }, [])
  
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