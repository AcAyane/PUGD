import React from 'react'
import AdminLayout from '../../../../components/adminLayout'
import Card from '../../../../components/ui/card/card';
//import CardContent from '@material-ui/core/CardContent';
import ButtonPopUp from '../../../../components/ui/ButtonPopUp'
import DropDownItem from '../../../../components/ui/dropdown/dropdownItem';
import Icon from  '../../../../components/ui/Icon/Icon';
import ReportingHeader from "../../../../components/admin/reporting/header/reportingHeader"
import Reporting from "../../../../components/admin/reporting/body/body"
const CopyHome = () => {
    return <Reporting>
        <ReportingHeader ReportingModule="Treat" />
        <div>
      <Icon children={'search'} style={{color: '#ff4080'}} />
   
     
      <Card>  
        

  <li><a href="./Redactor">List des articles selon le rédacteur</a></li>
  </Card>
  <Card>
  <li><a href="Date">List des articles selon la date de création</a></li>
  </Card>
  <Card>
  <li><a href="">List des articles selon le typede contenu</a></li>
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
CopyHome.Layout = AdminLayout
export default CopyHome
