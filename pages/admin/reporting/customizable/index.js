import React from 'react'
import Card from '../../../../components/ui/card/card';
import AdminLayout from '../../../../components/adminLayout'
import Reporting from "../../../../components/admin/reporting/body/body";
import ReportingHeader from "../../../../components/admin/reporting/header/reportingHeader";
const borrowersHome = () => {
    return <Reporting>
        <ReportingHeader ReportingModule="CustomReports" />
        <div>
     
     
      <Card>  
        

  <li><a href="customizable/Redactor">List des articles selon le rédacteur</a></li>
  </Card>
  <Card>
  <li><a href="customizable/DateCreation">List des articles par la date de création</a></li>
  </Card>
  <Card>
  <li><a href="customizable/Contenttype">List des articles par le type de contenu</a></li>
  </Card>

      
                                         
                                          
                                       
                                        

   
   
    <style jsx>
                {`
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    
      ;
    }
    
    li a {
      display: block;
      color: #000;
      padding: 8px 16px;
      text-decoration: none;
    }
    
    
    li a:hover {
      background-color: #ff4080;
      color: white;
    }
    `}
            </style>
        
    
    </div>
        </Reporting>

}
borrowersHome.Layout = AdminLayout
export default borrowersHome
