import gql from 'graphql-tag';

const GET_LOANS  = gql`
query{ GetLoans
  {
    _id
    BareCode
    Price    
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
	   
	     
  }
}
  
  `;
module.exports={
    GET_LOANS,
}
