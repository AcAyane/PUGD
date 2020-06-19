import React, {useState} from 'react'
import AdminLayout from '../../../../components/adminLayout'
import Container from '../../../../components/ui/Container'
import {ADD_COPY} from '../../../../graphql/mutations/admin/cataloguing/Copy-mutation.js';
import {useQuery} from "@apollo/react-hooks";
import {useMutation} from "@apollo/react-hooks";
import SelectBox from "../../../../components/ui/SelectBox";
import DatePicker from "../../../../components/ui/DatePicker/DatePicker";
import {GET_RECORD_ALL_FIELDS} from "../../../../graphql/queries/admin/cataloguing/RecordQuerie";
const AddCopy = () => {
    const { loading, error, data } = useQuery(GET_RECORD_ALL_FIELDS);
    
    const [BareCode, setBareCode] = useState('')
    const [Price, setPrice] = useState('')
    const [ReplacementPrice, setReplacementPrice] = useState('')
    const [DateLastBorrowed, setDateLastBorrowed] = useState(new Date())
    const [DateLastSeen, setDateLastSeen] = useState(new Date())
    const [Stack, setStack] = useState('')
    const [NoteForLoan, setNoteForLoan] = useState('')
    const [WithDrawn, setWithDrawn] = useState('')
    const [Reserves, setReserves] = useState('')
    const [Restricted, setGeoLocation] = useState('')
    const [CopyNumber, setCopyNumber] = useState('')
    const [NewStatus, setNewStatus] = useState('')
    const [Record, setRecord] = useState('')
    const [AddCopy] = useMutation(ADD_COPY,{
        onCompleted(data) {
            const {_id} = data
            console.log("id branch is:", _id)
            // Router.push("/");
        }
      });
      if (loading) return 'Loading...';
    if (error) return `Error! ${error1.message}`;
    const onSubmitHandler = ()=>{
       
        AddCopy({
          variables: {
            BareCode : BareCode,
            Price : Price,
            ReplacementPrice : ReplacementPrice,
            DateLastBorrowed : DateLastBorrowed,
            DateLastSeen : DateLastSeen,
            Stack : Stack,
            NoteForLoan : NoteForLoan,
            WithDrawn : WithDrawn,
            Reserves : Reserves,
            Restricted : Restricted,
            CopyNumber  : CopyNumber,
            NewStatus  : NewStatus,
            Record : Record.split("\"")[1],
          }
      });
    }
    
   console.log(data.records)
    if(data != null || data !== undefined ){
        
    return (
      <Container>
         {/* HTML VALIDATION  */}
      
        
            <div className="card-content">
              <div className="card-title">
                <div className="row">
                  <div className="col s12 m6 l10">
                    <h4 className="card-title">Add a new Copy</h4>
                  </div>
                  <div className="col s12 m6 l2">
                  </div>
                </div>
              </div>
              <div id="html-view-validations">
                <form className="formValidate0" id="formValidate0" method="get">
                  <div className="row">
                    <div className="input-field col s12">
                      <label htmlFor="uname0">Bare Code*</label>
                      <input className="validate" required id="uname0" name="uname0" type="text" 
                      onChange={e => setBareCode(e.target.value)} value={BareCode}/>
                    </div>

                    <div className="input-field col s12">
                      <label htmlFor="uname1">Price*</label>
                      <input className="validate" required id="uname1" name="uname1" type="text" 
                      onChange={e => setPrice(e.target.value)} value={Price}/>
                    </div>

                    <div className="input-field col s12">
                      <label htmlFor="uname2">Replacement Price*</label>
                      <input className="validate" required id="uname2" name="uname2" type="text" 
                      onChange={e => setReplacementPrice(e.target.value)} value={ReplacementPrice}/>
                    </div>


                    <div className="input-field col s12">
                      <label htmlFor="uname3">Date Last Borrowed*</label>
                      <DatePicker className="validate" required 
                      onChange={e => setDateLastBorrowed(e.target.value)} />
                    </div>


                    <div className="input-field col s12">
                     
                      <DatePicker className="validate" required label="Date Last Seen"
                      onChange={e => setDateLastSeen(e.target.value)} />
                    </div>


                    <div className="input-field col s12">
                      <label htmlFor="uname5">Stack*</label>
                      <input className="validate" required id="uname5" name="uname5" type="text" 
                      onChange={e => setStack(e.target.value)} value={Stack}/>
                    </div>


                    <div className="input-field col s12">
                      <label htmlFor="uname6">Reserves*</label>
                      <input className="validate" required id="uname6" name="uname6" type="number" 
                      onChange={e => setReserves(e.target.value)} value={Reserves}/>
                    </div>


                    <div className="input-field col s12">
                      <label htmlFor="uname7">Restricted*</label>
                      <input className="validate" required id="uname7" name="uname7" type="text" 
                      onChange={e => setGeoLocation(e.target.value)} value={Restricted}/>
                    </div>


                    <div className="input-field col s12">
                      <label htmlFor="uname8">Copy Number*</label>
                      <input className="validate" required id="uname8" name="uname8" type="number" 
                      onChange={e => setCopyNumber(e.target.value)} value={CopyNumber}/>
                    </div>

                    <div className="input-field col s12">
                      <label htmlFor="uname9">New Status*</label>
                      <input className="validate" required id="uname9" name="uname9" type="text" 
                      onChange={e => setNewStatus(e.target.value)} value={NewStatus}/>
                    </div>
        
                
                    <div className="input-field col s12">
                        <SelectBox  id="uname10" name="uname10" className="validate" label={"Record"}
                        onChange={e => setRecord(e.target.value)} required>
                            
                        <option value  disabled >Choose your option</option>
                        
                        
                             
                            {data.records.map((items) => (

                            <option key={items._id}  value={items._id}> {items.Title} </option>
                            
                            ))}
                         
                            </SelectBox >

                            <div className="input-field col s12">
                        <label>
                        <input type="checkbox" onChange={e => setNoteForLoan(true)} value={NoteForLoan} />
                        <span>Note For Loan</span>
                        </label>
                        <br />
                    
                    </div>
                    
                    <div className="input-field col s12">
                        <label>
                        <input type="checkbox" onChange={e => setWithDrawn (true)} value={WithDrawn} />
                        <span>With Drawn</span>
                        </label>
                    </div>
                        
                    </div>
                    
                    <div className="input-field col s12">
                      <button className="btn waves-effect waves-light right submit" type="submit" onClick={onSubmitHandler} name="action">Add the Copy
                        <i className="material-icons right">send</i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
    

        
      </Container>
    );
}
return <div>
this is the cataloguing module main page
</div>

  };

  AddCopy.Layout = AdminLayout;
  export default AddCopy;