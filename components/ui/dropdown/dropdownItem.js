import React from 'react';
// import Router from 'next/router' ;
// import styles from './sidebar.module.css'
import Link from "next/link"
const DropDownItem = ({className,href,children,...props}) => {

  return (
          <li className={className} {...props}>
            <Link href={href}>
            <a className="grey-text text-darken-1">
                {children}
            </a>
            </Link>
          </li>

  )
}
export default DropDownItem
