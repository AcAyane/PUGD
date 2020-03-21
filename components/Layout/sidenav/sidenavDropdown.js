import React, { useState } from 'react';
import { Collapse } from 'reactstrap';
import { FaAngleRight, FaTv } from 'react-icons/fa';
import SidenavItem from './sidenav-item';


const SidenavDropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <li className={isOpen ? 'open' : ''}>

      <a href="#" onClick={toggle}>
        <span className="item-icon"> <FaTv /></span>
        <span className="menu-title" > {props.Label}</span>
        <span className="drop-icon"> <FaAngleRight /></span>
      </a>


      <Collapse isOpen={isOpen}>
        <ul className="collapsible collapsible-sub" >
          {props.children} 
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
  )
}
export default SidenavDropdown