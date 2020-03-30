import React from "react";
import SidebarItems from "../../../components/admin/acquisition/SidebarItems";
import AdminLayout from "../../../components/adminLayout";

import Addprovider from "./Addprovider";

const sideBar = () => {
  return <Addprovider></Addprovider>;
};

AdminLayout.SidebarItems = SidebarItems;
sideBar.Layout = AdminLayout;
export default sideBar;
