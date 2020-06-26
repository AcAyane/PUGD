import React, {lazy, useEffect, useReducer, useState} from "react";
import AdminLayout from "../../../../adminLayout";
import Button from "../../../../ui/Button";
import Checkbox from "../../../../ui/Checkbox";
import SelectBox from "../../../../ui/SelectBox";
import {useMutation, useQuery} from "@apollo/react-hooks";
import {ALL_BORROWERS, CHECK_CODE_BAR} from "../../../../../graphql/queries/admin/Ciruclation/Borrowers.query";
import TextBox from "../../../../ui/TextBox";
import Input from "../../../../ui/Input";
import DatePicker from "../../../../ui/DatePicker/DatePicker";
import {ADD_GROUP} from "../../../../../graphql/mutations/admin/circulation/Groups.mutation";
import {INSERT_BORROWERS} from "../../../../../graphql/mutations/admin/circulation/Borrowers.mutation";
import Radio from "../../../../ui/Radio/Radio";
import ToggleSwitch from "../../../../ui/ToggleSwitch/ToggleSwitch";
import GridElement from "../../../../ui/Grid/GridElement";
import {GET_ALL_GROUPS} from "../../../../../graphql/queries/admin/Ciruclation/groups.query";
import {splitfunction} from "../../../../../shared/_herlpersCirculation/_helpers";
import Router from "next/router";
import Select from "react-select";
import Grid from '../../../../ui/Grid/Grid';


const Formulaire = () => {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]

    // const [state, dispatch] = useReducer(reduce,datas)


    // const {loading, error, data} = useQuery(ALL_BORROWERS);
    const {data } = useQuery(GET_ALL_GROUPS);

    const [Active, setActive] = useState(true)

    const [bar_code, setBar_code] = useState('')
    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')
    const [birth_day, setBirth_day] = useState(new Date())
    const [gender, setGender] = useState('')
    const [phone_number, setPhone_number] = useState('')
    const [email, setEmail] = useState('')
    const [statues, setStatues] = useState('')
    const [ru1, setRu1] = useState('')
    const [ru2, setRu2] = useState('')
    const [vill, setVill] = useState('')
    const [contr, setContr] = useState('')

    const [code_postal, setCode_postal] = useState('') // need to delate this
    const [username_opac, setUsername_opac] = useState('')
    const [password_opac, setPassword_opac] = useState('')
    const [lang_opac, setLang_opac] = useState('')

    const [member_ship_start, setMember_ship_start] = useState(new Date())

    const [communes, setCommunes] = useState('')
    const [categories, setCategories] = useState('')
    const [group, setGroup] = useState('')

    const [message, setMessage] = useState('')
    const [comment, setComment] = useState('')


    const [INSERT] = useMutation(INSERT_BORROWERS, {
        onCompleted() {
            Router.push("/admin/circulation/Circulation/Borrower")
        }
    });
    //console.log("search : ",barcode)

    const onSubmitHandler = () => {
        INSERT({
            variables: {
                bar_code: bar_code,
                first_name: first_name,
                last_name: last_name,
                birth_day: birth_day,
                gender: gender,
                phone_number: phone_number,
                email: email,
                statues: statues,
                ru1: ru1,
                ru2: ru2,
                city: vill,
                contry: contr,
                username_opac: username_opac,
                password_opac: password_opac,
                lang_opac: lang_opac,
                message: message,
                comment: comment,
                member_ship_start: member_ship_start,
                communes: communes,
                idCatBr: categories,
                groupsBr: group,
            }
        });
    }



    /*if( errorGroup){
        console.log("error to fitch data of group")
    }
    if ( loadingGroup){
        console.log("loding data group ....")
    }*/
        //console.log("data :", data)
    if( data !== undefined ){

       console.log("data group :", data.all_groups)
    }




    return (
        <React.Fragment>
            <div className="section">
                <div id="work-collections">
                    <div className="row">

                        <form>
                            <div className="col s12 m12 l6">

                                <ul id="" className="collection z-depth-1 animate fadeLeft">
                                    <li className="collection-item avatar">
                                        <i className="material-icons red accent-2 circle">security</i>
                                        <h6 className="collection-header m-0">Policy</h6>
                                        <p> Secret information </p>
                                    </li>
                                    <li className="input-field col s12 m12 l6">
                                        <Input
                                            icon="credit_card"
                                            label="Code Bar"
                                            type="Text"
                                            onChange={e => setBar_code(e.target.value)}
                                            value={bar_code}
                                            required
                                            className="validate"
                                        />
                                    </li>
                                    <li className="input-field col s12 m12 l6">
                                        <ToggleSwitch label="Statues"
                                                    sufix="Account "
                                                    sufixActive="Active"
                                                    sufixDesactive="Désative"
                                                    colorSufix={Active}
                                                    checked={Active}
                                                    onChange={() => {
                                                        console.log(Active);
                                                        setActive(!Active)
                                                    }}
                                        />
                                    </li>
                                    <div className="col s12 ">
                                        <li className="input-field">
                                            <DatePicker label="Debuit d'abonememnt"
                                                        icon="today"
                                                        required
                                                        className="validate"
                                                        value={member_ship_start.toISOString().split("T")[0] || ""}
                                                        onChange={(e) => {
                                                            e.persist();
                                                            setMember_ship_start(new Date(e.target.value))
                                                        }}
                                            />
                                        </li>
                                        <li className="input-field ">
                                            <DatePicker label="Fin d'abonememnt"
                                                        icon="today"
                                                        disabled
                                                        value={member_ship_start.toISOString().split("T")[0] || ""}
                                            />
                                        </li>
                                    </div>

                                </ul>

                                <ul id="projects-collection" className="collection z-depth-1 animate fadeLeft">
                                    <li className="collection-item avatar">
                                        <i className="material-icons cyan accent-5 circle">assignment_ind</i>
                                        <h6 className="collection-header m-0">Principal Name</h6>
                                        <p>Your information </p>
                                    </li>
                                    <li className="input-field col s6 ">
                                        <Input
                                            icon="account_circle"
                                            label="First Name"
                                            type="Text"
                                            required
                                            className="validate"
                                            onChange={e => setFirst_name(e.target.value)}
                                            value={first_name}
                                        />

                                    </li>
                                    <div className="input-field col s6">
                                        <Input
                                            label="Last Name"
                                            type="Text"
                                            required
                                            className="validate"
                                            onChange={e => setLast_name(e.target.value)}
                                            value={last_name}
                                        />

                                    </div>


                                    <div className="input-field col s12 ">
                                        <DatePicker label="Date Brith Day"
                                                    icon="today"
                                                    required
                                                    className="validate"
                                                    value={birth_day.toISOString().split("T")[0] || ""}
                                                    onChange={(e) => {
                                                        e.persist();
                                                        setBirth_day(new Date(e.target.value))
                                                    }}
                                        />

                                    </div>

                                    <div className="col s12 ">
                                        <p>Gender</p>
                                        <p><Radio group="group1" label="Male" children="gren"

                                        /></p>
                                        <p><Radio group="group1" label="Female" children="gren"/></p>
                                    </div>


                                </ul>

                                <ul id="projects-collection" className="collection z-depth-1 animate fadeLeft">
                                    <li className="collection-item avatar">
                                        <i className="material-icons deep-purple accent-5 circle">contacts</i>
                                        <h6 className="collection-header m-0">Contact Infomation</h6>
                                        <p>information to contact you</p>
                                    </li>
                                    <li className="input-field col s8 ">
                                        <Input
                                            icon="phone"
                                            label="Phone Number"
                                            type="Text"
                                            required
                                            className="validate"
                                            onChange={e => setPhone_number(e.target.value)}
                                            value={phone_number}
                                        />
                                    </li>
                                    <li className="input-field col s4">
                                        <Checkbox label="Send SMS"/>
                                    </li>

                                    <div className="input-field col s12">
                                        <Input
                                            icon="email"
                                            label="Email"
                                            type="Text"
                                            required
                                            className="validate"
                                            onChange={e => setEmail(e.target.value)}
                                            value={email}
                                        />

                                    </div>

                                </ul>

                                <ul id="issues-collection" className="collection z-depth-1 animate fadeLeft">
                                    <li className="collection-item avatar">
                                        <i className="material-icons blue accent-2 circle">map</i>
                                        <h6 className="collection-header m-0">Mailing Address</h6>
                                        <p>bind your informatio Address</p>
                                    </li>


                                    <li className=" input-field col l6 m6 s12 ">
                                        <Input
                                            icon="location_on"
                                            label="Address Ligne 1"
                                            type="Text"
                                            required
                                            className="validate"
                                            onChange={e => setRu1(e.target.value)}
                                            value={ru1}
                                        />
                                    </li>
                                    <li className="input-field col l6 m6 s12  ">
                                        <Input
                                            //todo set icon nnull if is in mode smoll
                                            label="Address Ligne 2"
                                            type="Text"
                                            required
                                            className="validate"
                                            onChange={e => setRu2(e.target.value)}
                                            value={ru2}
                                        />
                                    </li>

                                    <li className="input-field col l12 m12 s12 ">
                                        <Input
                                            icon="my_location"
                                            label="Vill"
                                            type="Text"
                                            required
                                            className="validate"
                                            onChange={e => setVill(e.target.value)}
                                            value={vill}
                                        />
                                    </li>
                                    <li className="input-field col s12 m12 l12">
                                        <Input
                                            icon="navigation"
                                            label="Pays"
                                            type="Text"
                                            required
                                            className="validate"
                                            onChange={e => setContr(e.target.value)}
                                            value={contr}
                                        />
                                    </li>
                                    <li className="input-field col l12 m12 s12">
                                        <Input
                                            icon="location_searching"
                                            label="Code Posta"
                                            type="Text"
                                            required
                                            className="validate"
                                            onChange={e => setCode_postal(e.target.value)}
                                            value={code_postal}
                                        />
                                    </li>

                                </ul>

                            </div>

                            <div className="col s12 m12 l6">
                                <ul id="issues-collection" className="collection z-depth-1 animate fadeRight ">
                                    <li className="collection-item avatar">
                                        <i className="material-icons  blue-grey darken-4 circle">language</i>
                                        <h6 className="collection-header m-0">OPAC</h6>
                                        <p>Opac Information Connection</p>
                                    </li>


                                    <li className="input-field col l12 m12 s12">
                                        <Input
                                            icon="laptop_mac"
                                            label="Identifent OPAC"
                                            type="Text"
                                            required
                                            className="validate"
                                            onChange={e => setUsername_opac(e.target.value)}
                                            value={username_opac}
                                        />
                                    </li>
                                    <li className="input-field col l12 m12 s12">
                                        <Input
                                            icon="lock_outline"
                                            label="Mode de pass OPAC"
                                            type="Text"
                                            required
                                            className="validate"
                                            onChange={e => setPassword_opac(e.target.value)}
                                            value={password_opac}
                                        />
                                    </li>

                                    <div className="input-field col l12 m12 s12">
                                        <SelectBox label={"Langue OPAC"}>
                                            <option value="Francias">Francias</option>
                                            <option value="English">English</option>
                                        </SelectBox>
                                    </div>
                                </ul>

                                <ul id="issues-collection" className="collection z-depth-1 animate fadeRight">
                                    <li className="collection-item avatar">
                                        <i className="material-icons orange darken-4 circle">add</i>
                                        <h6 className="collection-header m-0">Add</h6>
                                        <p>Add USER TO </p>
                                    </li>


                                    <li className="input-field col l12 m12  s12">
                                        <Input
                                            icon="user"
                                            label="Communauté de Communes"
                                            type="Text"
                                            onChange={e => setCommunes(e.target.value)}
                                            value={communes}
                                            required
                                            className="validate"
                                        />
                                    </li>

                                    <div className="col l12 m12 s12">
                                        
                                    <Grid>
        
                                        <GridElement s={12}>
                                        <SelectBox label={"Add To Group"}
                                                value={group}
                                                onChange={e => setGroup(e.target.value)}
                                        >
                                            
                                            
                                            {
                                                data && data.all_groups.map((item) => (
                                                <option key={item._id} value={item._id}>
                                                    {item.name}
                                                </option>
                                                ))
                                            }
                                        </SelectBox>
                                        </GridElement>
                                    </Grid>
                                    
                                    
                                    </div>

                                    <div className="input-field col l12 m12  s12">
                                       
                                    
                                        <Input
                                            icon="layers"
                                            label="Categories"
                                            type="Text"
                                            required
                                            className="validate"
                                            onChange={e => setCategories(e.target.value)}
                                            value={categories}
                                        />
                                    </div>

                                </ul>

                                <ul id="projects-collection" className="collection z-depth-1 animate fadeRight">
                                    <li className="collection-item avatar">
                                        <i className="material-icons teal circle">attach_file</i>
                                        <h6 className="collection-header m-0">Send Message</h6>
                                        <p>Send To User</p>
                                    </li>
                                    <li className="input-field col l12 m12 s12 ">
                                        <Input
                                            icon="message_speed"
                                            label="message"
                                            type="Text"
                                            required
                                            className="validate"
                                            onChange={e => setMessage(e.target.value)}
                                            value={message}
                                        />
                                    </li>

                                    <div className="input-field col l12 m12 s12 ">
                                        <Input
                                            icon="insert_comment"
                                            label="Commentaire"
                                            type="Text"
                                            required
                                            className="validate"
                                            onChange={e => setComment(e.target.value)}
                                            value={comment}
                                        />
                                    </div>

                                </ul>

                            </div>

                            <div className="col l12 m12 s12">
                                <div className="float-right"/>
                                <Button onClick={onSubmitHandler} children="Send" className="float-right"/>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
Formulaire.Layout = AdminLayout
export default Formulaire
