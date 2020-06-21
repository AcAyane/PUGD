import React, {useState} from 'react'
import AdminLayout from '../../../../components/adminLayout'
import Container from '../../../../components/ui/Container'
import {INSERT_RECORD} from '@../../../graphql/mutations/admin/cataloguing/Record-mutation.js';
import {useQuery} from "@apollo/react-hooks";
import {useMutation} from "@apollo/react-hooks";
import SelectBox from "../../../../components/ui/SelectBox";

import {GET_KEYWORD_ALL_FIELDS} from "@../../../graphql/queries/admin/cataloguing/KeyWordQuerie";
import {GET_LANGUAGE_ALL_FIELDS} from "@../../../graphql/queries/admin/cataloguing/LanguageQuerie";
import {GET_BRANCH_ALL_FIELDS} from "@../../../graphql/queries/admin/cataloguing/BranchQuerie";
import {GET_SERIES} from "@../../../graphql/queries/admin/authorities/series.queries";
import {GET_PUBLISHER} from "@../../../graphql/queries/admin/authorities/publisher.queries";
import {GET_SUB_SERIES} from "@../../../graphql/queries/admin/authorities/sub_series.queries";
import {GET_COLLECTION_TITLE} from "@../../../graphql/queries/admin/authorities/collection_title.queries";
import {GET_CLASS_NUMBER} from "@../../../graphql/queries/admin/authorities/class_number.queries";
const AddRecord = () => {
   
    const { data: data1 }   = useQuery( GET_LANGUAGE_ALL_FIELDS);
    const { data: data2 }  = useQuery( GET_KEYWORD_ALL_FIELDS);
    const { data: data3 }  = useQuery( GET_BRANCH_ALL_FIELDS);
    const { data: data4 }  = useQuery( GET_SERIES);
    const { data: data5 }  = useQuery( GET_SUB_SERIES);
    const { data: data6 }  = useQuery( GET_PUBLISHER);
    const { data: data7 }  = useQuery( GET_COLLECTION_TITLE);
    const { data: data8 }  = useQuery( GET_CLASS_NUMBER);
  

    const [isbn, setIsbn] = useState('')
    const [title, seTitle] = useState('')
    const [OtherTitle, setOtherTitle] = useState('')
    const [ParallelTitle, setParallelTitle] = useState('')
    const [RecYear, setRecYear] = useState('')
    const [Price, setPrice] = useState('')
    const [Type, setType] = useState('')
    const [EditionStatement, setEditionStatement] = useState('')
    const [OtherInformations, setOtherInformations] = useState('')
    const [Format, setFormat] = useState('')
    const [Summary, setSummary] = useState('')
    const [IsNew, setIsNew] = useState('')
    const [IsNum, setIsNum] = useState('')
    const [AccMaterial, setAccMaterial] = useState('')
    const [NoteAuthor, setNoteAuthor] = useState('')
    const [NbPages, setNbPages] = useState('')
    const [Language, setLanguage] = useState([])
    const [OriginalLanguage, setOriginalLanguage] = useState([])
    const [KeyWords, setKeyWords] = useState([])
    const [Branches, setBranches] = useState([])
    const [Branches1, setBranches1] = useState([])
    const [Language1, setLanguage1] = useState([])
    const [KeyWords1, setKeyWords1] = useState([])
    const [OriginalLanguage1, setOriginalLanguage1] = useState([])
    const [Serie, setSerie] = useState('')
    const [SubSerie, setSubSerie] = useState('')
    const [Publishers, setPublishers] = useState('')
    const [OtherPublishers, setOtherPublishers] = useState('')
    const [ClassNumber, setClassNumber] = useState([])
    const [ClassNumber1, setClassNumber1] = useState([])
    const [CollectionTitle, setCollectionTitle] = useState([])
    const [CollectionTitle1, setCollectionTitle1] = useState([])
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
    /* **** */
    const c = []
    let d = 0
    CollectionTitle1.map((items) => (
    c[d] = items.split("\"")[1]
      , d++
    )) 
  
    const [AddRecord] = useMutation(INSERT_RECORD,{
        onCompleted(data) {
            const {_id} = data
            console.log("id branch is:", _id)
            // Router.push("/");
        }
      });
      
    const onSubmitHandler = ()=>{
      
      console.log("whaaat",Branches1)
      AddRecord({
          variables: {
            isbn: isbn,
            title: title,
            OtherTitle: OtherTitle,
            ParallelTitle: ParallelTitle,
            RecYear: RecYear,
            Price : Price,
            Type: Type,
            EditionStatement: EditionStatement,
            OtherInformations: OtherInformations,
            Format: Format,
            Summary: Summary,
            IsNew: IsNew,
            IsNum: IsNum,
            AccMaterial: AccMaterial,
            NoteAuthor: NoteAuthor,
            NbPages: NbPages,
            Branches: m,
            KeyWords : o,
            Language : n,
            OriginalLanguage : p,
            FkSeries : Serie.split("\"")[1],
            FkSubSeries : SubSerie.split("\"")[1],
            Publishers : Publishers.split("\"")[1],
            OtherPublishers:OtherPublishers.split("\"")[1],
            CollectionTitle:c,
            ClassNumber:b,
          }
      });
    }
    
  
   


    if(data1 != null || data1 !== undefined ){
      if(data2 != null || data2 !== undefined ){
        if(data3 != null || data3 !== undefined ){
          if(data4 != null || data4 !== undefined ){
            if(data5 != null || data5 !== undefined ){
              if(data6 != null || data6 !== undefined ){
                if(data7 != null || data7 !== undefined ){
                  if(data8 != null || data8 !== undefined ){
    return (
      <Container>
         {/* HTML VALIDATION  */}
      
        
            <div className="card-content">
              <div className="card-title">
                <div className="row">
                  <div className="col s12 m6 l10">
                    <h4 className="card-title">Add a new Record</h4>
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
                    </div>

                    <div className="input-field col s12" >
                      <label htmlFor="uname1">Title proper*</label>
                      <input className="validate" required id="uname1" name="uname1" type="text" 
                      onChange={e => seTitle(e.target.value)} value={title}/>
                    </div>
                   
                    <div className="input-field col s12">
                      <label htmlFor="uname2">Other title information*</label>
                      <input className="validate" required id="uname2" name="uname2" type="text" 
                      onChange={e => setOtherTitle(e.target.value)} value={OtherTitle}/>
                    </div>


                    <div className="input-field col s12">
                      <label htmlFor="uname3">Parallel title*</label>
                      <input className="validate" required id="uname3" name="uname3" type="text" 
                      onChange={e => setParallelTitle(e.target.value)} value={ParallelTitle}/>
                    </div>
                    </div>
                    
                  
                    <div className="row" style={{backgroundColor: "#F8F8F8"}}>
                    <h6  >Responsibility</h6>
                    <div className="input-field col s12">
                        <SelectBox   className="validate" label={"Responsibility"}>
                            
                        <option value selected disabled >Choose your option</option>
                        
                        </SelectBox >
                    </div>
                    </div>
                    
                   
              <div className="row" style={{backgroundColor: "#F8F8F8"}}>
              <h6  >Imprint</h6>
              <div className="input-field col s6">
                        <SelectBox  id="uname14" name="uname14"  className="validate" 
                        label={"Serie"} onChange={e => setSerie(e.target.value)}
                         required>
                            
                        <option value selected disabled >Choose your option</option>
                        { data4.series.map((items) => (

                            <option key={items._id}  value={items._id}> {items.title} </option>

                            )) }
                        </SelectBox >
                    </div>
                    <div className="input-field col s6">
                        <SelectBox  id="uname14" name="uname14"  className="validate" 
                        label={"SubSerie"} onChange={e => setSubSerie(e.target.value)}
                         required>
                            
                        <option value selected disabled >Choose your option</option>
                        {data5.sub_series.map((items) => (

                            <option key={items._id}  value={items._id}> {items.name} </option>

                            )) }
                        </SelectBox >
                    </div>

                    <div className="input-field col s6">
                        <SelectBox  id="uname14" name="uname14"  className="validate" 
                        label={"Publishers"} onChange={e => setPublishers(e.target.value)}
                         required>
                            
                        <option value selected disabled >Choose your option</option>
                        {data6.publisher.map((items) => (

                            <option key={items._id}  value={items._id}> {items.name} </option>

                            )) }
                        </SelectBox >
                    </div>
                    <div className="input-field col s6">
                        <SelectBox  id="uname14" name="uname14"  className="validate" 
                        label={"OtherPublishers"} onChange={e => setOtherPublishers(e.target.value)}
                         required>
                            
                        <option value selected disabled >Choose your option</option>
                        {data6.publisher.map((items) => (

                            <option key={items._id}  value={items._id}> {items.name} </option>

                            )) }
                        </SelectBox >
                        </div>
                        <div className="input-field col s6">
                      <label htmlFor="uname4">Year*</label>
                      <input type="number" id="quantity" name="quantity" onChange={e => setRecYear(e.target.value)} value={RecYear}/>
                    </div>
                    <div className="input-field col s6">
                      <label htmlFor="uname5">Edition Statement*</label>
                      <input className="validate" required id="uname5" name="uname5" type="text" 
                      onChange={e => setEditionStatement(e.target.value)} value={EditionStatement}/>
                    </div>
                        
                        </div>
                    <div className="row" style={{backgroundColor: "#F8F8F8"}}>
              <h6  >ISBN, EAN, Commercial no.</h6>
              <div className="input-field col s12">
                      <label htmlFor="uname0">ISBN, EAN, Commercial no.*</label>
                      <input className="validate" required id="uname0" name="uname0" type="text" 
                      onChange={e => setIsbn(e.target.value)} value={isbn}/>
                    </div></div>
                   
                    <div className="row" style={{backgroundColor: "#F8F8F8"}}>
              <h6  >Collation</h6>

              <div className="input-field col s12">
                      <label htmlFor="uname10">Extent of item (number of pages, elements...)*</label>
                      <input type="number" id="quantity" name="quantity" onChange={e => setNbPages(e.target.value)} value={NbPages}/>
                    </div>

                    
                    <div className="input-field col s12">
                      <label htmlFor="uname6">Other properties (illustrations, ...)*</label>
                      <input className="validate" required id="uname6" name="uname6" type="text" 
                      onChange={e => setOtherInformations(e.target.value)} value={OtherInformations}/>
                    </div>

                    <div className="input-field col s12">
                      <label htmlFor="uname7">Format*</label>
                      <input className="validate" required id="uname7" name="uname7" type="text" 
                      onChange={e => setFormat(e.target.value)} value={Format}/>
                    </div>

                    <div className="input-field col s12">
                      <label htmlFor="uname4">Price*</label>
                      <input type="number" id="quantity" name="quantity" onChange={e => setPrice(e.target.value)} value={Price}/>
                    </div>

                    <div className="input-field col s12">
                      <label htmlFor="uname9">Accompanying materials*</label>
                      <input className="validate" required id="uname9" name="uname9" type="text" 
                      onChange={e => setAccMaterial(e.target.value)} value={AccMaterial}/>
                    </div> </div>

                   


                    
                    <div className="row" style={{backgroundColor: "#F8F8F8"}}>
              <h6  >Notes</h6>
                    
              <div className="input-field col s12">
                      <label htmlFor="uname15">General note*</label>
                      <textarea  data-length="120" className="materialize-textarea"
                      onChange={e => setNoteAuthor(e.target.value)} value={NoteAuthor}/>
                    </div> 

                    <div className="input-field col s12">
                      <label htmlFor="uname8">Summary*</label>
                      <textarea  data-length="120" className="materialize-textarea"
                      onChange={e => setSummary(e.target.value)} value={Summary}/>
                    </div> </div>

                    
                    <div className="row" style={{backgroundColor: "#F8F8F8"}}>
              <h6  >Indexing</h6>
              <div className="input-field col s6">
                        <SelectBox  id="uname13" name="uname13" className="validate" label={"KeyWords"}
                         setInstance={setKeyWords} multiple onChange={e => setKeyWords1(KeyWords.getSelectedValues())} required>
                            
                        <option value selected disabled >Choose your option</option>
                        { data2.keywords.map((items) => (

                            <option key={items._id}  value={items._id}> {items.Word} </option>

                            )) }
                        </SelectBox >
                    </div>



                    <div className="input-field col s6">
                        <SelectBox   className="validate" label={"Category"}>
                            
                        <option value selected disabled >Choose your option</option>
                        
                        </SelectBox >
                    </div>

                    <div className="input-field col s6">
                        <SelectBox  id="uname14" multiple name="uname14" setInstance={setBranches} className="validate" 
                        label={"Branches"} onChange={e => setBranches1(Branches.getSelectedValues())}
                         required>
                            
                        <option value selected disabled >Choose your option</option>
                        { data3.branches.map((items) => (

                            <option key={items._id}  value={items._id}> {items.BranchName} </option>

                            )) }
                        </SelectBox >
                    </div>

                    


                 

                    <div className="input-field col s6">
                        <SelectBox  id="uname14" multiple name="uname14" setInstance={setClassNumber} className="validate" 
                        label={"Class Number"} onChange={e => setClassNumber1(ClassNumber.getSelectedValues())}
                         required>
                            
                        <option value selected disabled >Choose your option</option>
                        { data8.class_number.map((items) => (

                            <option key={items._id}  value={items._id}> {items.name} </option>

                            )) }
                        </SelectBox >
                    </div></div>


                    <div className="row" style={{backgroundColor: "#F8F8F8"}}>
              <h6  >Uniform Titles</h6>
                    <div className="input-field col s12">
                        <SelectBox  id="uname14" multiple name="uname14" setInstance={setCollectionTitle} className="validate" 
                        label={"Uniform Titles"} onChange={e => setCollectionTitle1(CollectionTitle.getSelectedValues())}
                         required>
                            
                        <option value selected disabled >Choose your option</option>
                        { data7.collection_title.map((items) => (

                            <option key={items._id}  value={items._id}> {items.title} </option>

                            )) }
                        </SelectBox >
                    </div> </div>


                    <div className="row" style={{backgroundColor: "#F8F8F8"}}>
                    <h6  >Language of publication</h6>
                    <div className="input-field col s6">
                        <SelectBox  id="uname11" multiple="multiple" name="uname11" label={"Language of publication"} className="validate" 
                         setInstance={setLanguage} onChange={e => setLanguage1(Language.getSelectedValues())}>
                            
                        <option value selected disabled >Choose your option</option>
                        {data1.languages.map((items) => (

                            <option key={items._id}  value={items._id}> {items.Value} </option>

                            )) }
                        </SelectBox >
                    </div>

                    <div className="input-field col s6">
                        <SelectBox  id="uname12" name="uname12" multiple="multiple" className="validate" label={"Original Language"}
                        setInstance={setOriginalLanguage} onChange={e => setOriginalLanguage1(OriginalLanguage.getSelectedValues())} required>
                            
                        <option value selected disabled >Choose your option</option>
                        {data1.languages.map((items) => (

                            <option key={items._id}  value={items._id}> {items.Value} </option>

                            )) }
                        </SelectBox >
                    </div></div>




                    <div className="row" >

                    <div className="input-field col s12">
                        <label>
                        <input type="checkbox" onChange={e => setIsNew(true)} value={IsNew} />
                        <span>Is New record</span>
                        </label>
                        <br />
                    
                    </div>
                    
                    <div className="input-field col s12">
                        <label>
                        <input type="checkbox" onChange={e => setIsNum(true)} value={IsNum} />
                        <span>Is num</span>
                        </label>
                    </div>

                    
                   
        
                
                    <div className="input-field col s12">
                        <button className="btn waves-effect waves-light right submit" onClick={onSubmitHandler} type="submit" name="action">Add the Record
                        <i className="material-icons right">send</i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
    

        
      </Container>
    );
  }}}}}}}}
  return <div>
  this is the cataloguing module main page
  </div>
  }; 

  AddRecord.Layout = AdminLayout;
  export default AddRecord;