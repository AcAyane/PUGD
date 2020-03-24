import React from 'react';
import SidebarItems from '../../../components/admin/authorities/SidebarItems';
import AdminLayout from '../../../components/adminLayout';

import BrrowersComponent from "./BrrowersComponent";
const sideBar = () => {


    return (
        <BrrowersComponent/>
    )
}


AdminLayout.SidebarItems=SidebarItems
sideBar.Layout = AdminLayout

export default sideBar
