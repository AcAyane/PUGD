import React from 'react';
import SidebarItems from '../../../components/admin/acquisition/SidebarItems';
import AdminLayout from '../../../components/adminLayout';
import { useRouter } from 'next/router';
import Addpro from './Addpro';
import AllPro from './Allpro';

const sideBar = () => {
  const router = useRouter();
  if (router.query.submodules == 'AllProviders')
    return (
      <div>
        <AllPro></AllPro>
      </div>
    );
  else if (router.query.submodules == 'AddProvider')
    return (
      <div>
        <Addpro></Addpro>
      </div>
    );
};

AdminLayout.SidebarItems = SidebarItems;
sideBar.Layout = AdminLayout;

export default sideBar;
