import gql from 'graphql-tag';

const GET_BORROWERS_CITY  = gql`
query(
    $City : String,
){ GetBorrowersCity(City:$City)
  {
    ID_Borrowers 
	LastName             
	FirstName                 
	CardNumber              
	Sexe                   
	Age                       
	OtherName              
	StreetNumber                
	StreetType                
	Adress1                  
	Adress2                   
	ZipCode                    
	City                   
	State                    
	Country                 
	Email                    
	Phone                   
	Fax                       
	DateInscit  
	Category
  }
}
  
  `;
const GET_BORROWERS_CATEGORY  = gql`
  query(
      $Category : String,
      $Sexe : String,
  ){ GetBorrowersCategory(Category:$Category,Sexe:$Sexe)
    {
      ID_Borrowers 
      LastName             
      FirstName                 
      CardNumber              
      Sexe                   
      Age                       
      OtherName              
      StreetNumber                
      StreetType                
      Adress1                  
      Adress2                   
      ZipCode                    
      City                   
      State                    
      Country                 
      Email                    
      Phone                   
      Fax                       
      DateInscit  
      Category
    }
  
  }
    
    `;
const GET_BORROWERS_AGE  = gql`
    query(
        $BYear : int,
        $LYear : int,
    ){ GetBorrowersAge(BYear:$BYear,LYear:$LYear)
      {
        ID_Borrowers 
        LastName             
        FirstName                 
        CardNumber              
        Sexe                   
        Age                       
        OtherName              
        StreetNumber                
        StreetType                
        Adress1                  
        Adress2                   
        ZipCode                    
        City                   
        State                    
        Country                 
        Email                    
        Phone                   
        Fax                       
        DateInscit  
        Category
      }
    
    }
      
      `;
module.exports = {
    GET_BORROWERS_CATEGORY,
    GET_BORROWERS_CITY,
    GET_BORROWERS_AGE,

}
