import React from 'react';
import { FaRegCircle } from 'react-icons/fa';
import Link from 'next/Link'
import Router from 'next/router'
const SidenavItem = (props) => {

  let className = '' 
  
  if (Router.pathname.toLowerCase().startsWith(props.href.toLowerCase() )) {
    className = 'active'
  }


  return (
    <li >

     <Link href={props.href}  >
     <a className={className}>
        <span className="item-icon"><FaRegCircle size="0.75em" /></span>
        <span  >{props.Label}</span>

      </a>
     </Link>
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