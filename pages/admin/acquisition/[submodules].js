import React from "react";
import SidebarItems from "../../../components/admin/SidebarItems";
import AdminLayout from "../../../components/adminLayout";
import { useRouter } from "next/router";
import Addpro from "./Addprovider";
import AllProviders from "./AllProviders";

const sideBar = () => {
  const router = useRouter();
  if (router.query.submodules == "AllProviders")
    return (
      <div>
        <AllProviders></AllProviders>
      </div>
    );
  else if (router.query.submodules == "AddProvider")
    return (
      <div>
        <Addpro></Addpro>
      </div>
    );
};

AdminLayout.SidebarItems = SidebarItems;
sideBar.Layout = AdminLayout;

export default sideBar;
