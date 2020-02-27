import { Component } from "react"
import { DELETE_BOOK_MUTATION} from "../mutations/book.mutation"; 
import { Mutation } from "react-apollo";  

function doDeleteBook(hook , ObjectId,refetch){
const id =ObjectId.split('"')[1]
hook({ variables: { id } })
alert("Succesfuly deleted the item")
refetch()

}
class Book extends Component{

    render(){ 
        return <tr>
        <td>
            {this.props.isbn}
        </td>
        <td>
            {this.props.title}
        </td>
        <td>

            <button className="btn btn-info">Modify</button>
            <Mutation mutation={DELETE_BOOK_MUTATION}>
            {(deleteBook, { data }) => (
                <button className="btn btn-danger" onClick={()=>doDeleteBook(deleteBook,this.props.id,this.props.refetch)}>Delete</button>
                )}
            </Mutation>
            
        </td>
    
    </tr>
    }
} 


 

export default Book