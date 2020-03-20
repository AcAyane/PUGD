
import React, { useState } from 'react'
import {FaCircle } from 'react-icons/fa';
import { Button, Form, FormGroup, Label, Input, FormText,Container, Row, Col  } from 'reactstrap';


const auteurs = () => {
  const [dropdownOpen, setOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("Afficher Tout");
  const [selectedStatus, setSelectedStatus] = useState("Display all statuses");

  const toggle = () => setOpen(!dropdownOpen);
  return (
    <div className="animate fadeLeft">
      <div className="card animate">
      <div className="card-content " >
        <FaCircle size="14px" color="#8e24aa"/>
          <h5 className="uk-icon">Gestion des autorités : Catégories</h5>
      </div>
    </div>
    <div className="card ">
      <div className="card-content " > 
      <h4 className="card-title">Recherche : Auteurs</h4>


      <Row>
        <Col>
        <FormGroup> 
        <Input type="email" name="email" id="exampleEmail" placeholder="Rechercher  " />
      </FormGroup>
      </Col>
        <Col  md="3">
        <FormGroup> 
        <Input type="select" name="select" id="exampleSelect" value={selectedStatus} onChange={event=>setSelectedStatus(event.target.value)}>
          <option  >Display all statuses</option>
          <option>Default Status</option> 
        </Input>
      </FormGroup>
        </Col>
        <Col md="2">
        <FormGroup> 
        <Input type="select" name="select" id="exampleSelect" value={selectedType} onChange={event=>setSelectedType(event.target.value)}>
          <option  >Afficher Tout</option>
          <option>Person</option>
          <option>Corporate body</option>
          <option>Convention</option> 
        </Input>
      </FormGroup>
        </Col>
      </Row>
      <a className="waves-effect waves-light boutton mb-1 mr-1">Rechercher</a>
      <a className="waves-effect waves-light boutton mb-1 mr-1">Ajouter Auteur</a>
      </div>
      <div className="card">
      <table id="data-table-simple" className="display dataTable dtr-inline" role="grid" aria-describedby="data-table-simple_info"  >
                <thead>
                  <tr role="row"><th className="sorting"  aria-controls="data-table-simple"   aria-label="Name: activate to sort column ascending">Name</th><th className="sorting_asc"  aria-controls="data-table-simple"    aria-label="Position: activate to sort column descending" aria-sort="ascending">Position</th><th className="sorting"  aria-controls="data-table-simple"     aria-label="Office: activate to sort column ascending">Office</th><th className="sorting"  aria-controls="data-table-simple"   aria-label="Age: activate to sort column ascending">Age</th><th className="sorting"  aria-controls="data-table-simple"   aria-label="Start date: activate to sort column ascending">Start date</th><th className="sorting"  aria-controls="data-table-simple"    aria-label="Salary: activate to sort column ascending">Salary</th></tr>
                </thead>
                <tbody>
                <tr role="row" className="odd">
                    <td  className="">Airi Satou</td>
                    <td className="sorting_1">Accountant</td>
                    <td>Tokyo</td>
                    <td>33</td>
                    <td>2008/11/28</td>
                    <td>$162,700</td>
                  </tr><tr role="row" className="even">
                    <td  className="">Garrett Winters</td>
                    <td className="sorting_1">Accountant</td>
                    <td>Tokyo</td>
                    <td>63</td>
                    <td>2011/07/25</td>
                    <td>$170,750</td>
                  </tr><tr role="row" className="odd">
                    <td className="" >Angelica Ramos</td>
                    <td className="sorting_1">Chief Executive Officer (CEO)</td>
                    <td>London</td>
                    <td>47</td>
                    <td>2009/10/09</td>
                    <td>$1,200,000</td>
                  </tr><tr role="row" className="even">
                    <td className="" >Paul Byrd</td>
                    <td className="sorting_1">Chief Financial Officer (CFO)</td>
                    <td>New York</td>
                    <td>64</td>
                    <td>2010/06/09</td>
                    <td>$725,000</td>
                  </tr><tr role="row" className="odd">
                    <td className="" >Yuri Berry</td>
                    <td className="sorting_1">Chief Marketing Officer (CMO)</td>
                    <td>New York</td>
                    <td>40</td>
                    <td>2009/06/25</td>
                    <td>$675,000</td>
                  </tr><tr role="row" className="even">
                    <td className="" >Fiona Green</td>
                    <td className="sorting_1">Chief Operating Officer (COO)</td>
                    <td>San Francisco</td>
                    <td>48</td>
                    <td>2010/03/11</td>
                    <td>$850,000</td>
                  </tr><tr role="row" className="odd">
                    <td className="" >Donna Snider</td>
                    <td className="sorting_1">Customer Support</td>
                    <td>New York</td>
                    <td>27</td>
                    <td>2011/01/25</td>
                    <td>$112,000</td>
                  </tr><tr role="row" className="even">
                    <td className="" >Serge Baldwin</td>
                    <td className="sorting_1">Data Coordinator</td>
                    <td>Singapore</td>
                    <td>64</td>
                    <td>2012/04/09</td>
                    <td>$138,575</td>
                  </tr><tr role="row" className="odd">
                    <td className="" >Gavin Joyce</td>
                    <td className="sorting_1">Developer</td>
                    <td>Edinburgh</td>
                    <td>42</td>
                    <td>2010/12/22</td>
                    <td>$92,575</td>
                  </tr><tr role="row" className="even">
                    <td className="" >Jonas Alexander</td>
                    <td className="sorting_1">Developer</td>
                    <td>San Francisco</td>
                    <td>30</td>
                    <td>2010/07/14</td>
                    <td>$86,500</td>
                  </tr></tbody>
                <tfoot>
                  <tr><th  >Name</th><th  >Position</th><th  >Office</th><th  >Age</th><th  >Start date</th><th  >Salary</th></tr>
                </tfoot>
              </table>
      </div>
    </div>
    
    <style jsx>
    {`
    
      .uk-icon { 
        margin-left:10px;
      display:inline-block;
    }
    .blue-gradient{
      background: linear-gradient(45deg,#0288d1,#26c6da)!important;
    }
    `
      
    }
    </style>
    </div>
  );
};
export default auteurs;
