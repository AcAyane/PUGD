import React from 'react'
import { useQuery, useMutation } from "@apollo/react-hooks";
import Table from "../../../../components/ui/Table/Table";
import AdminLayout from '../../../../components/adminLayout'
import {GET_LOANS} from "../../../../graphql/queries/admin/Reporting/loans.queries"
import ReportingHeader from "../../../../components/admin/reporting/header/reportingHeader";
import Reporting from "../../../../components/admin/reporting/body/body";
import Card from "../../../../components/ui/card/card";
import TableLoans from "./TableLoans";
const laonsHome = () => {

    const { loading, error, data } = useQuery(GET_LOANS);
      //if (loading) return "Loading...";
    
  
    return <Reporting>
        <ReportingHeader ReportingModule="CurrentLoans" />
        <Card>
        <div className="card-header">
                                    <h4 className="card-title">List des prêts en cours</h4>
    
                                </div>
</Card>
<Table
Thead={
                    <tr>
                      <th>BareCode</th>
                    
                     <th> date de retour</th>
                     <th> date de réservation</th>
                     <th> Title</th>
                    </tr>
                  }
                  />   
        {error ? <div l color="danger">{String(error)}   test</div> : null}
                        {data == null ? (
                    null
                  ) : (
                  
                    <TableLoans  getLoans={data.GetLoans} ></TableLoans>
                    
                           
                   ) }
        
                  
                
            
    </Reporting>

}
laonsHome.Layout = AdminLayout
export default laonsHome
