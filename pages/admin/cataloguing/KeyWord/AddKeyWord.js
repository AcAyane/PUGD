import React, {useState} from 'react'
import AdminLayout from '../../../../components/adminLayout'
import Container from '../../../../components/ui/Container'
import {ADD_KEYWORD} from '../../../../graphql/mutations/admin/cataloguing/KeyWord-mutation.js';
import {useMutation} from "@apollo/react-hooks";
const AddKeyword = () => {
    const [Word, setWord] = useState('')
    const [Lang, setLang] = useState('')
    const [AddKeyword] = useMutation(ADD_KEYWORD,{
      onCompleted(data) {
          const {_id} = data
          console.log("id library is:", _id)
          // Router.push("/");
      }
    });
    const onSubmitHandler = ()=>{
    

      AddKeyword({
          variables: {
            Word: Word,
            Lang: Lang,
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
                    <h4 className="card-title">Add a new keyWord</h4>
                  </div>
                  <div className="col s12 m6 l2">
                  </div>
                </div>
              </div>
              <div id="html-view-validations">
                <form className="formValidate0" id="formValidate0" method="get">
                  <div className="row">
                    <div className="input-field col s12">
                      <label htmlFor="uname0">The Keyword*</label>
                      <input className="validate" required id="uname0" name="uname0" type="text" 
                      onChange={e => setWord(e.target.value)} value={Word}/>
                    </div>
        
                    <div className="input-field col s12">
                      <textarea id="ccomment0" name="ccomment0" className="materialize-textarea validate"
                      value={Lang} onChange={e => setLang(e.target.value)} />
                      <label htmlFor="ccomment0">Language *</label>
                    </div>
                    
                    <div className="input-field col s12">
                      <button className="btn waves-effect waves-light right submit" type="submit" onClick={onSubmitHandler} name="action">Add the KeyWord
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
  AddKeyword.Layout = AdminLayout;
  export default AddKeyword;