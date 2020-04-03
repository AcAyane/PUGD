import React from 'react';   
import SideBar from '../components/Layout/sidenav/sideBar'
import HeaderBar from '../components/Layout/headerNav' 

const AdminLayout = (props) => {
   
    return (
       
        
        <div>
            <HeaderBar />
            <SideBar SidebarItems={AdminLayout.SidebarItems} />

            <div className="container">
                <div id="main">
                    {props.children}
                </div>
            </div>
        </div>
    )
}
export default AdminLayout