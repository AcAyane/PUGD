import React from 'react';
import { FaRegCircle } from 'react-icons/fa';
const SidenavItem = (props) => {

  return (
    <li >
      <a className={props.Active == "true" ? "active" : ""} href="#">
        <span className="item-icon"><FaRegCircle size="0.75em" /></span>
        <span  >{props.Label}</span>

      </a>
      <style jsx>{`
            .item-icon{
              margin-right:25px;
              padding-top:5px;
              position:relative;top:2px
            }
  
            `}
      </style>
    </li>
  )
}
export default SidenavItem