import gql from 'graphql-tag';

const GET_LOANS  = gql`
query(
   
){ GetLoans
  {
    _id
    BareCode
    Price
	id_Record        
	ReplacementPrice 
	DateLastBorrowed 
	DateLastSeen    
	Stack            
	NoteForLoan     
	WithDrawn        
	Reserves         
	Restricted       
	CopyNumber       
	Status           
	NewStatus        
	Reservation     
	Loans        
  }
}
  
  `;
module.exports={
    GET_LOANS,
}
