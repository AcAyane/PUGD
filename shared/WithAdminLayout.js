
import React from 'react' 
import AdminLayout from '../components/adminLayout';
 
const WithAdminLayout = function (Child) {
      return class Higher extends React.Component {
            render() {
                  console.log("");
                  
                  return <AdminLayout>
                        <Child {...this.props} />
                  </AdminLayout>

            }
      }
}

export default WithAdminLayout;