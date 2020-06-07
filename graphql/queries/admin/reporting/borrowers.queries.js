import gql from 'graphql-tag';


const GET_BORROWERS_CITY  = gql`
query(
    $City : String,
){ GetBorrowersCity(City:$City)
  {
    _id 
    BarCode
	FirstName
	LastName 
	City                
	Address             
	Gender                                                           
	City                                  
	Email                    
	PhoneNumber                   
	Birthday          
	Status         
	MemberShipStart  
	MemberShipCanceled
  }
}
  
  `;

const GET_BORROWERS_BIRTHDAY  = gql`
query(
    $Birthday : String,
){ GetBorrowersCity(Birthday:$Birthday)
  {
    _id 
    BarCode
	FirstName
	LastName  
	City                
	Address             
	Gender                                                           
	City                                  
	Email                    
	PhoneNumber                   
	Birthday          
	Status         
	MemberShipStart  
	MemberShipCanceled
  }
}
  
  `;

const GET_BORROWERS_BARCODE  = gql`
query(
    $BarCode : String,
){ GetBorrowersCity(BarCode:$BarCode)
  {
    _id 
    BarCode
	FirstName
	LastName  
	City                
	Address             
	Gender                                                           
	City                                  
	Email                    
	PhoneNumber                   
	Birthday          
	Status         
	MemberShipStart  
	MemberShipCanceled
  }
}
  
  `;

const GET_BORROWERS_ADDRESS  = gql`
query(
    $Address : String,
){ GetBorrowersCity(Address:$Address)
  {
    _id 
    BarCode
	FirstName
	LastName 
	City                
	Address             
	Gender                                                           
	City                                  
	Email                    
	PhoneNumber                   
	Birthday          
	Status         
	MemberShipStart  
	MemberShipCanceled
  }
}
  
  `;

const GET_BORROWERS_STATUS  = gql`
query(
    $Status : String,
){ GetBorrowersCity(Status:$Status)
  {
    _id 
    BarCode
	FirstName
	LastName  
	City                
	Address             
	Gender                                                           
	City                                  
	Email                    
	PhoneNumber                   
	Birthday          
	Status         
	MemberShipStart  
	MemberShipCanceled
  }
}
  
  `;

const GET_BORROWERS_FIRST_NAME  = gql`
query(
    $FirstName : String,
){ GetBorrowersCity(FistName:$FirstName)
  {
    _id 
    BarCode
	FirstName
	LastName  
	City                
	Address             
	Gender                                                           
	City                                  
	Email                    
	PhoneNumber                   
	Birthday          
	Status         
	MemberShipStart  
	MemberShipCanceled
  }
}
  
  `;

const GET_BORROWERS_LAST_NAME  = gql`
query(
    $LastName : String,
){ GetBorrowersCity(LastName:$LastName)
  {
    _id 
    BarCode
	FirstName
	LastName  
	City                
	Address             
	Gender                                                           
	City                                  
	Email                    
	PhoneNumber                   
	Birthday          
	Status         
	MemberShipStart  
	MemberShipCanceled
  }
}
  
  `;

const GET_BORROWERS_EMAIL  = gql`
query(
    $Email : String,
){ GetBorrowersCity(Email:$Email)
  {
    _id 
    BarCode
	FirstName
	LastName  
	City                
	Address             
	Gender                                                           
	City                                  
	Email                    
	PhoneNumber                   
	Birthday          
	Status         
	MemberShipStart  
	MemberShipCanceled
  }
}
  
  `;

module.exports = {
    GET_BORROWERS_CITY,
    GET_BORROWERS_BIRTHDAY,
    GET_BORROWERS_BARCODE,
    GET_BORROWERS_ADDRESS,
    GET_BORROWERS_STATUS,
    GET_BORROWERS_FIRST_NAME,
    GET_BORROWERS_LAST_NAME,
    GET_BORROWERS_EMAIL,
}
