import React from 'react';
import SidebarItems from '../../../components/admin/acquisition/SidebarItems';
import AdminLayout from '../../../components/adminLayout';

import UpdatePro from './UpdatePro';

const sideBar = () => {
  return <UpdatePro></UpdatePro>;
};

AdminLayout.SidebarItems = SidebarItems;
sideBar.Layout = AdminLayout;
export default sideBar;
