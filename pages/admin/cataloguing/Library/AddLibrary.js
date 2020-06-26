import React, {useState} from 'react'
import AdminLayout from '../../../../components/adminLayout'
import Container from '../../../../components/ui/Container'
import {ADD_LIBRARY} from '../../../../graphql/mutations/admin/cataloguing/Library-mutation.js';
import {useMutation} from "@apollo/react-hooks";
const AddLibrary = () => {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [AddLibrary] = useMutation(ADD_LIBRARY,{
      onCompleted(data) {
          const {_id} = data
          console.log("id library is:", _id)
          // Router.push("/");
      }
    });
    const onSubmitHandler = ()=>{
      console.log("name of library is", name)

      AddLibrary({
          variables: {
            Name: name,
            Address: address,
          }
      });
    }

    return (
      <Container>
         {/* HTML VALIDATION  */}
      
        
            <div className="card-content">
              <div className="card-title">
                <div className="row">
                  <div className="col s12 m6 l10">
                    <h4 className="card-title">Add a new Library</h4>
                  </div>
                  <div className="col s12 m6 l2">
                  </div>
                </div>
              </div>
              <div id="html-view-validations">
                <form className="formValidate0" id="formValidate0" method="get">
                  <div className="row">
                    <div className="input-field col s12">
                      <label htmlFor="uname0">Name of the library*</label>
                      <input className="validate" required id="uname0" name="uname0" type="text" 
                      onChange={e => setName(e.target.value)} value={name}/>
                    </div>
        
                    <div className="input-field col s12">
                      <textarea id="ccomment0" name="ccomment0" className="materialize-textarea validate"
                      value={address} onChange={e => setAddress(e.target.value)} />
                      <label htmlFor="ccomment0">Address of the library *</label>
                    </div>
                    
                    <div className="input-field col s12">
                      <button className="btn waves-effect waves-light right submit" type="submit" onClick={onSubmitHandler} name="action">Add the library
                        <i className="material-icons right">send</i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
    

        
      </Container>
    );
  };
  AddLibrary.Layout = AdminLayout;
  export default AddLibrary;