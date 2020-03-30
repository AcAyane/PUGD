import React from "react";
import SidenavItem from "./sidenav-item";
import SidenavDropdown from "./sidenavDropdown";
import SideBarBrandName from "./sideBarBrand";
import SidenavHeader from "./sidenavHeader";
import AuthoritiesSideItems from "../../admin/authorities/SidebarItems";
import AcquisitionSideItems from "../../admin/acquisition/SidebarItems";
import Router from "next/router";

const sideBar = (props) => {
  let sidebarItems;
  if (Router.route.startsWith("/admin/authorities"))
    sidebarItems = AuthoritiesSideItems;
  else if (Router.route.startsWith("/admin/acquisition"))
    sidebarItems = AcquisitionSideItems;
  let [header, ...childrenItems] = sidebarItems ? sidebarItems : [null, null];

  return (
    <aside className="sidenav-main nav-lock sidenav-active-rounded">
      <SideBarBrandName />

      {sidebarItems && (
        <ul
          className="sidenav sidenav-fixed "
          id="slide-out"
          data-menu="menu-navigation"
          data-collapsible="menu-accordion"
        >
          <SidenavHeader Label={header} />

          {childrenItems.map((item, index) => {
            return (
              <SidenavDropdown Label={item.Label} key={index}>
                {item.Children.map((subItem, index) => {
                  return (
                    <SidenavItem
                      Label={subItem.Label}
                      key={index}
                      href={subItem.href}
                    />
                  );
                })}
              </SidenavDropdown>
            );
          })}
        </ul>
      )}
    </aside>
  );
};
export default sideBar;
