import React, {useEffect, useRef} from 'react'


// number
const Search = (props) => {

   const {datset} = props
    /*
       const [word, setWord] = useState("")
       const [filter, setFilter] = useState(datset)
       const handleChange = (ed) => {
           let oldList = datset.map(d =>{
                   return { name :d.name.toLowerCase(), number :d.code}
               });
           if (ed !== ""){
               let newList = []
               setWord(ed)
               newList = oldList.filter(dat => dat.include(word.toLowerCase()))
               setFilter(newList)

           }else{
               setFilter(datset)
           }
       }
       return <React.Fragment>
           <div>
              <Filters value={word} handlerChange={e => handleChange(e.target.value)}/>
              <Numbers persone={word.length < 1 ? datset : filter } />
           </div>
       </React.Fragment>*/

    const ref = useRef();
    useEffect(() => {
        M.Autocomplete.init(ref.current, {
            data: datset
        });
    })
    return (
        <div>
            <div className="row">
                <div className="input-field col s12">
                    <i className="material-icons prefix">textsms</i>
                    <input type="text" id="autocomplete-input" className="autocomplete" ref={ref}/>
                    <label htmlFor="autocomplete-input">Autocomplete</label>
                </div>
            </div>
        </div>
    );

}
export default Search

