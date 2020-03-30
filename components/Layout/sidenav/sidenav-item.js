import React from "react";
import { FaRegCircle } from "react-icons/fa";
import Link from "next/Link";
import Router from "next/router";
const SidenavItem = (props) => {
  let link1;
  if (Router.route.startsWith("/admin/authorities"))
    link1 = "/admin/authorities/[submodules]";
  else if (Router.route.startsWith("/admin/acquisition"))
    link1 = "/admin/acquisition/[submodules]";
  return (
    <li>
      <Link href={link1} as={props.href}>
        <a className={props.Active == "true" ? "active" : ""}>
          <span className="item-icon">
            <FaRegCircle size="0.75em" />
          </span>
          <span>{props.Label}</span>
        </a>
      </Link>
      <style jsx>
        {`
          .item-icon {
            margin-right: 25px;
            padding-top: 5px;
            position: relative;
            top: 2px;
          }
        `}
      </style>
    </li>
  );
};
export default SidenavItem;
