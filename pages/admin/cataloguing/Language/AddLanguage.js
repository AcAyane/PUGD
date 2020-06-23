import React, {useState} from 'react'
import AdminLayout from '../../../../components/adminLayout'
import Container from '../../../../components/ui/Container'
import {ADD_LANGUAGE} from '../../../../graphql/mutations/admin/cataloguing/Language-mutation.js';
import {useMutation} from "@apollo/react-hooks";
const AddLanguage = () => {
    const [Value, setValue] = useState('')
    const [AddLanguage] = useMutation(ADD_LANGUAGE,{
      onCompleted(data) {
          const {_id} = data
          console.log("id library is:", _id)
          // Router.push("/");
      }
    });
    const onSubmitHandler = ()=>{
    

      AddLanguage({
          variables: {
            Value: Value,
          
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
                    <h4 className="card-title">Add a new Language</h4>
                  </div>
                  <div className="col s12 m6 l2">
                  </div>
                </div>
              </div>
              <div id="html-view-validations">
                <form className="formValidate0" id="formValidate0" method="get">
                  <div className="row">
                    <div className="input-field col s12">
                      <label htmlFor="uname0">The Name of the language*</label>
                      <input className="validate" required id="uname0" name="uname0" type="text" 
                      onChange={e => setValue(e.target.value)} value={Value}/>
                    </div>
        
                
                    
                    <div className="input-field col s12">
                      <button className="btn waves-effect waves-light right submit" type="submit" onClick={onSubmitHandler} name="action">Add the Language
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
  AddLanguage.Layout = AdminLayout;
  export default AddLanguage;