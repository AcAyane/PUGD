import React, {useState} from 'react'
import AdminLayout from '../../../../components/adminLayout'
import Container from '../../../../components/ui/Container'
import {ADD_SERIAL} from '../../../../graphql/mutations/admin/cataloguing/Serial-mutation.js';
import {useQuery} from "@apollo/react-hooks";
import {useMutation} from "@apollo/react-hooks";
import SelectBox from "../../../../components/ui/SelectBox";
import {GET_KEYWORD_ALL_FIELDS} from "@../../../graphql/queries/admin/cataloguing/KeyWordQuerie";
import {GET_LANGUAGE_ALL_FIELDS} from "@../../../graphql/queries/admin/cataloguing/LanguageQuerie";
import {GET_BRANCH_ALL_FIELDS} from "@../../../graphql/queries/admin/cataloguing/BranchQuerie";
import {GET_PUBLISHER} from "@../../../graphql/queries/admin/authorities/publisher.queries";
import {GET_CLASS_NUMBER} from "@../../../graphql/queries/admin/authorities/class_number.queries";
const AddSerial = () => {
     
  const { data: data1 }   = useQuery( GET_LANGUAGE_ALL_FIELDS);
  const { data: data2 }  = useQuery( GET_KEYWORD_ALL_FIELDS);
  const { data: data3 }  = useQuery( GET_BRANCH_ALL_FIELDS);
  const { data: data6 }  = useQuery( GET_PUBLISHER);
  const { data: data8 }  = useQuery( GET_CLASS_NUMBER);
  
    const [issn, setIssn] = useState('')
    const [TitleProper, seTitleProper] = useState('')
    const [OtherTitleInfo, setOtherTitleInfo] = useState('')
    const [ParallelTitle, setParallelTitle] = useState('')
    const [RecYear, setRecYear] = useState('')
    const [Type, setType] = useState('')
    const [Summary, setSummary] = useState('')
    const [VisibleInSerial, setVisibleInSerial] = useState('')
    const [ViewSerialCheckIn, setViewSerialCheckIn] = useState('')
    const [NoteOnContents, setNoteOnContents] = useState('')
    const [GenetalNote, setGenetalNote] = useState('')
    const [Language, setLanguage] = useState([])
    const [OriginalLanguage, setOriginalLanguage] = useState([])
    const [KeyWords, setKeyWords] = useState([])
    const [Branches, setBranches] = useState([])
    const [Branches1, setBranches1] = useState([])
    const [Language1, setLanguage1] = useState([])
    const [KeyWords1, setKeyWords1] = useState([])
    const [OriginalLanguage1, setOriginalLanguage1] = useState([])
    const [Publishers, setPublishers] = useState('')
    const [OtherPublishers, setOtherPublishers] = useState('')
    const [ClassNumber, setClassNumber] = useState([])
    const [ClassNumber1, setClassNumber1] = useState([])
        /* **** */
        const m = []
        let i = 0
        Branches1.map((items) => (
        m[i] = items.split("\"")[1]
        , i++
        )) 
        /* **** */
        const n = []
        let j = 0
        Language1.map((items) => (
        n[j] = items.split("\"")[1]
          , j++
        )) 
        /* **** */
        const o = []
        let k = 0
        KeyWords1.map((items) => (
        o[k] = items.split("\"")[1]
          , k++
        )) 
        /* **** */
        const p = []
        let l = 0
        OriginalLanguage1.map((items) => (
        p[l] = items.split("\"")[1]
          , l++
        )) 
        /* **** */
        const a = []
        let b = 0
        ClassNumber1.map((items) => (
        a[b] = items.split("\"")[1]
          , b++
        )) 
    const [AddSerial] = useMutation(ADD_SERIAL,{
        onCompleted(data) {
            const {_id} = data
            console.log("id branch is:", _id)
            // Router.push("/");
        }
      });
     
    const onSubmitHandler = ()=>{
       
        AddSerial({
          variables: {
            ISSN: issn,
            TitleProper: TitleProper,
            OtherTitleInfo: OtherTitleInfo,
            ParallelTitle: ParallelTitle,
            RecYear: RecYear,
            Type: Type,
            Summary: Summary,
            VisibleInSerial: VisibleInSerial,
            ViewSerialCheckIn: ViewSerialCheckIn,
            NoteOnContents: NoteOnContents,
            GenetalNote: GenetalNote,
            Branches: m,
            KeyWords : o,
            Language : n,
            OriginalLanguage : p,
            Publishers : Publishers.split("\"")[1],
            OtherPublishers:OtherPublishers.split("\"")[1],
            ClassNumber:b,
           
          }
      });
    }
    
    if(data1 != null || data1 !== undefined ){
      if(data2 != null || data2 !== undefined ){
        if(data3 != null || data3 !== undefined ){
          if(data6 != null || data6 !== undefined ){
            if(data8 != null || data8 !== undefined ){
    return (
      <Container>
         {/* HTML VALIDATION  */}
      
        
            <div className="card-content">
              <div className="card-title">
                <div className="row">
                  <div className="col s12 m6 l10">
                    <h4 className="card-title">Add a new Serial</h4>
                  </div>
                  <div className="col s12 m6 l2">
                  </div>
                </div>
              </div>
              <div id="html-view-validations">
                <form className="formValidate0" id="formValidate0" method="get">
                  <div className="row">
                  <div className="input-field col s6">
                      
                      <SelectBox className="validate" required id="uname5" name="uname5" type="text" 
                      onChange={e => setType(e.target.value)} value={Type}>
                       <option value="a" selected="selected">printed text</option>
                        <option value="b">manuscript text</option>
                        <option value="c">musical score - printed</option>
                        <option value="d">musical score - manuscript</option>
                        <option value="e">cartographic document - printed</option>
                        <option value="f">cartographic document - manuscript</option>
                        <option value="g">video, projectable document</option>
                        <option value="i">sound recording - non musical</option>
                        <option value="j">sound recording - musical</option>
                        <option value="k">2D graphical document</option>
                        <option value="l">electronic document</option>
                        <option value="m">multimedia document</option>
                        <option value="r">3D object, artifact, ...</option>
                        </SelectBox>
                    </div> </div>

                    
                    <div className="row" style={{backgroundColor: "#F8F8F8"}}>
                    <h6  >Title</h6>

                    <div className="input-field col s12">
                      <label htmlFor="uname1">Title proper *</label>
                      <input className="validate" required id="uname1" name="uname1" type="text" 
                      onChange={e => seTitleProper(e.target.value)} value={TitleProper}/>
                    </div>


                    
                    <div className="input-field col s12">
                      <label htmlFor="uname3">Parallel title*</label>
                      <input className="validate" required id="uname3" name="uname3" type="text" 
                      onChange={e => setParallelTitle(e.target.value)} value={ParallelTitle}/>
                    </div>

                    <div className="input-field col s12">
                      <label htmlFor="uname2">Other title information*</label>
                      <input className="validate" required id="uname2" name="uname2" type="text" 
                      onChange={e => setOtherTitleInfo(e.target.value)} value={OtherTitleInfo}/>
                    </div> </div>

                    <div className="row" style={{backgroundColor: "#F8F8F8"}}>
                    <h6  >Responsibility</h6>
                    <div className="input-field col s12">
                        <SelectBox   className="validate" label={"Responsibility"}>
                            
                        <option value selected disabled >Choose your option</option>
                        
                        </SelectBox >
                    </div>
                    </div>

                    <div className="row" style={{backgroundColor: "#F8F8F8"}}>
              <h6  >Publishers</h6>

    
              <div className="input-field col s6">
                        <SelectBox  id="uname14" name="uname14"  className="validate" 
                        label={"Publisher"} onChange={e => setPublishers(e.target.value)}
                         required>
                            
                        <option value selected disabled >Choose your option</option>
                        {data6.publisher.map((items) => (

                            <option key={items._id}  value={items._id}> {items.name} </option>

                            )) }
                        </SelectBox >
                    </div>


                    <div className="input-field col s6">
                        <SelectBox  id="uname14" name="uname14"  className="validate" 
                        label={"Other Publisher"} onChange={e => setOtherPublishers(e.target.value)}
                         required>
                            
                        <option value selected disabled >Choose your option</option>
                        {data6.publisher.map((items) => (

                            <option key={items._id}  value={items._id}> {items.name} </option>
                            )) }
                        </SelectBox >
                    </div> 

                    <div className="input-field col s12">
                      <label htmlFor="uname4">Year*</label>
                      <input type="number" id="quantity" name="quantity" onChange={e => setRecYear(e.target.value)} value={RecYear}/>
                    </div>

                    </div>



                    

                    <div className="row" style={{backgroundColor: "#F8F8F8"}}>
              <h6  >ISSN</h6>

                    <div className="input-field col s12">
                      <label htmlFor="uname0">ISSN*</label>
                      <input className="validate" required id="uname0" name="uname0" type="text" 
                      onChange={e => setIssn(e.target.value)} value={issn}/>
                    </div>

                    </div>



                    

                    <div className="row" style={{backgroundColor: "#F8F8F8"}}>
                    <h6  >Notes</h6>
                    <div className="input-field col s12">
                      <label htmlFor="uname9">General note*</label>
                      <input className="validate" required id="uname9" name="uname9" type="text" 
                      onChange={e => setGenetalNote(e.target.value)} value={GenetalNote}/>
                    </div>

                    
                    <div className="input-field col s12">
                      <label htmlFor="uname15">Note On Contents*</label>
                      <input className="validate" required id="uname15" name="uname15" type="text" 
                      onChange={e => setNoteOnContents(e.target.value)} value={NoteOnContents}/>
                    </div> 

                    <div className="input-field col s12">
                      <label htmlFor="uname8">Summary*</label>
                      <input className="validate" required id="uname8" name="uname8" type="text" 
                      onChange={e => setSummary(e.target.value)} value={Summary}/>
                    </div>

                   </div>



                    

                    <div className="row" style={{backgroundColor: "#F8F8F8"}}>
                    <h6  >Indexing</h6>



                    <div className="input-field col s6">
                        <SelectBox  id="uname13" name="uname13" multiple={true} className="validate" label={"KeyWords"}
                         setInstance={setKeyWords} onChange={e => setKeyWords1(KeyWords.getSelectedValues())} required>
                            
                        <option value selected disabled >Choose your option</option>
                        { data2.keywords.map((items) => (

                            <option key={items._id}  value={items._id}> {items.Word} </option>

                            )) }
                        </SelectBox >
                    </div>

                    <div className="input-field col s6">
                        <SelectBox  id="uname14" multiple name="uname14" setInstance={setBranches} className="validate" 
                        label={"Branches"} onChange={e => setBranches1(Branches.getSelectedValues())}
                         required>
                            
                        <option value selected disabled >Choose your option</option>
                        {data3.branches.map((items) => (

                            <option key={items._id}  value={items._id}> {items.BranchName} </option>

                            )) }
                        </SelectBox >
                    </div>
            

                    <div className="input-field col s6">
                        <SelectBox  id="uname14" multiple name="uname14" setInstance={setClassNumber} className="validate" 
                        label={"Class Numbers"} onChange={e => setClassNumber1(ClassNumber.getSelectedValues())}
                         required>
                            
                        <option value selected disabled >Choose your option</option>
                        { data8.class_number.map((items) => (

                            <option key={items._id}  value={items._id}> {items.name} </option>

                            )) }
                        </SelectBox >
                    </div>

                    <div className="input-field col s6">
                        <SelectBox   className="validate" label={"Categories"}>
                            
                        <option value selected disabled >Choose your option</option>
                        
                        </SelectBox >
                    </div> </div>



                    <div className="row" style={{backgroundColor: "#F8F8F8"}}>
                    <h6  >Language of publication</h6>
              
                    <div className="input-field col s6">
                        <SelectBox  id="uname11" multiple="multiple" name="uname11" label={"Language"} className="validate" 
                         setInstance={setLanguage} onChange={e => setLanguage1(Language.getSelectedValues())}>
                            
                        <option value selected disabled >Choose your option</option>
                        { data1.languages.map((items) => (

                            <option key={items._id}  value={items._id}> {items.Value} </option>

                            )) }
                        </SelectBox >
                    </div>

                    <div className="input-field col s6">
                        <SelectBox  id="uname12" name="uname12" multiple="multiple" className="validate" label={"Original Language"}
                        setInstance={setOriginalLanguage} onChange={e => setOriginalLanguage1(OriginalLanguage.getSelectedValues())} required>
                            
                        <option value selected disabled >Choose your option</option>
                        {  data1.languages.map((items) => (

                            <option key={items._id}  value={items._id}> {items.Value} </option>

                            )) }
                        </SelectBox >
                    </div></div>

              
                    <div className="row" >

        
                    <div className="input-field col s12">
                        <label>
                        <input type="checkbox" onChange={e => setVisibleInSerial(true)}  />
                        <span>Visible in the serial browser</span>
                        </label>
                        <br />
                    
                    </div>
                    
                    <div className="input-field col s12">
                        <label>
                        <input type="checkbox" onChange={e => setViewSerialCheckIn(true)}  />
                        <span>View serials check-in in OPAC</span>
                        </label>
                    </div>

                    
                   
        
                    
                    <div className="input-field col s12">
                      <button className="btn waves-effect waves-light right submit" type="submit" onClick={onSubmitHandler} name="action">Add the Serial
                        <i className="material-icons right">send</i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
    

        
      </Container>
    );
  }}}}}
  return <div>
  this is the cataloguing module main page
  </div>

  };

  AddSerial.Layout = AdminLayout;
  export default AddSerial;