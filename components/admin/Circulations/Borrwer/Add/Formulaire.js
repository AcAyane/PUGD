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
import {INSERT_BORROWERS } from "../../../../../graphql/mutations/admin/circulation/Borrowers.mutation";


const Formulaire = () => {

    // const [state, dispatch] = useReducer(reduce,datas)


     const {loading, error, data} = useQuery(ALL_BORROWERS);
        let  isUsed
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

        const [member_ship_start, setMember_ship_start] = useState('')

        const [communes, setCommunes] = useState('')
        const [categories, setCategories] = useState('')
        const [group, setGroup] = useState('')

        const [message, setMessage] = useState('')
        const [comment, setComment] = useState('')




    const [INSERT] = useMutation(INSERT_BORROWERS,{
        onCompleted() {
            // Router.reload(window.location.pathname);
        }
    });
    //console.log("search : ",barcode)

    const onSubmitHandler = ()=>{
        console.log("bar_code : ", bar_code)

        console.log("first_name :", first_name)
        console.log("last_name: ", last_name)
        console.log("birth_day: ",birth_day)

        console.log("gender : ", gender)
        console.log("phone_number : ", phone_number)
        console.log("email : ", email)
        console.log("statues : ", statues)
        console.log("ru1 : ", ru1)
        console.log("ru2 : ", ru2)
        console.log("vill : ", vill)
        console.log("contr: ", contr)
        console.log("username_opac: ", username_opac)
        console.log("password_opac: ", password_opac)
        console.log("lang_opac: ", lang_opac)
        console.log("message: ", message)
        console.log("comment: ", comment)
        console.log("member_ship_start: ", member_ship_start)
        console.log("communes: ", communes)
        console.log("categories: ", categories)
        console.log("group: ", group)

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



    /*  handleSubmit = event => {
          let name_Error = ''
          let code_Bar_Error =''
          if(!this.state.barcode){

          }


      }*/

 /*   // todo fix this fionction
    isUsed  = useQuery(CHECK_CODE_BAR, {
        variables: {
            code: barcode
        },
        onError: (error) => {
            console.log(error.message);
        },
        onCompleted: (data) => {
            console.log("data: ",data);

        },
    });

     console.log(isUsed)
*/

    return (
        <React.Fragment>
            <div className="section">
                <div id="work-collections">
                    <div className="row">

                        <div className="col s12 m12 l6">

                            <ul id="" className="collection z-depth-1 animate fadeLeft">
                                <li className="collection-item avatar">
                                    <i className="material-icons red accent-2 circle">security</i>
                                    <h6 className="collection-header m-0">Policy</h6>
                                    <p> Secret information </p>
                                </li>
                                <li className="input-field col s12">
                                    <Input
                                        icon="credit_card"
                                        label="Code Bar"
                                        type="Text"
                                        onChange={e => setBar_code(e.target.value)}
                                        value={bar_code}
                                        required
                                    />
                                </li>
                            </ul>

                            <ul id="projects-collection" className="collection z-depth-1 animate fadeLeft">
                                <li className="collection-item avatar">
                                    <i className="material-icons cyan accent-5 circle">assignment_ind</i>
                                    <h6 className="collection-header m-0">Principal Name</h6>
                                    <p>Your information </p>
                                </li>
                                <li className="input-field col s6">
                                    <Input
                                        icon="account_circle"
                                        label="First Name"
                                        type="Text"
                                        onChange={e => setFirst_name(e.target.value)}
                                        value={first_name}
                                    />

                                </li>
                                <div className="input-field col s6">
                                    <Input
                                        label="Last Name"
                                        type="Text"
                                        onChange={e => setLast_name(e.target.value)}
                                        value={last_name}
                                    />

                                </div>


                                <div className="input-field col s12 ">

                                    <DatePicker label="Date Brith Day"
                                                icon="today"
                                                onChange={e => setBirth_day(e.target.value)}
                                                dateFormat="MMMM d, yyyy "
                                                value={birth_day}
                                    />

                                </div>

                                <div className=" col s12 ">
                                    <p>Gender</p>

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
                                        onChange={e => setPhone_number(e.target.value)}
                                        value={phone_number}
                                    />
                                </li>
                                <li className="input-field col s4  ">
                                    <Checkbox label="Send SMS"/>
                                </li>

                                <div className="input-field col s12 ">
                                    <Input
                                        icon="email"
                                        label="Email "
                                        type="Text"
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


                                <li className="input-field col s6">
                                    <Input
                                        icon="location_on"
                                        label="Address Ligne 1"
                                        type="Text"
                                        onChange={e => setRu1(e.target.value)}
                                        value={ru1}
                                    />
                                </li>
                                <li className="input-field col s6">
                                    <Input
                                        label="Address Ligne 2"
                                        type="Text"
                                        onChange={e => setRu2(e.target.value)}
                                        value={ru2}
                                    />
                                </li>

                                <li className="input-field col s12">
                                    <Input
                                        icon="my_location"
                                        label="Vill"
                                        type="Text"
                                        onChange={e => setVill(e.target.value)}
                                        value={vill}
                                    />
                                </li>
                                <li className="input-field col s12">
                                    <Input
                                        icon="navigation"
                                        label="Pays"
                                        type="Text"
                                        onChange={e => setContr(e.target.value)}
                                        value={contr}
                                    />
                                </li>
                                <li className="input-field col s12">
                                    <Input
                                        icon="location_searching"
                                        label="Code Posta"
                                        type="Text"
                                        onChange={e => setCode_postal(e.target.value)}
                                        value={code_postal}
                                    />
                                </li>

                            </ul>

                        </div>

                        <div className="col s12 m12 l6">
                            <ul id="issues-collection" className="collection z-depth-1 animate fadeRight">
                                <li className="collection-item avatar">
                                    <i className="material-icons  blue-grey darken-4 circle">language</i>
                                    <h6 className="collection-header m-0">OPAC</h6>
                                    <p>Opac Information Connection</p>
                                </li>


                                <li className="input-field col s12">
                                    <Input
                                        icon="laptop_mac"
                                        label="Identifent OPAC"
                                        type="Text"
                                        onChange={e => setUsername_opac(e.target.value)}
                                        value={username_opac}
                                    />
                                </li>
                                <li className="input-field col s12">
                                    <Input
                                        icon="lock_outline"
                                        label="Mode de pass OPAC"
                                        type="Text"
                                        onChange={e => setPassword_opac(e.target.value)}
                                        value={password_opac}
                                    />
                                </li>

                                <div className="input-field col s12">
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


                                <li className="input-field col s12">
                                    <Input
                                        icon="user"
                                        label="Communauté de Communes"
                                        type="Text"
                                        onChange={e => setCommunes(e.target.value)}
                                        value={communes}
                                    />
                                </li>
                                <li className="input-field col s12">
                                    <Input
                                        icon="layers"
                                        label="Categories"
                                        type="Text"
                                        onChange={e => setCategories(e.target.value)}
                                        value={categories}
                                    />
                                </li>

                                <li className="input-field col s12">
                                    <Input
                                        icon="group"
                                        label="Group"
                                        type="Text"
                                        onChange={e => setGroup(e.target.value)}
                                        value={group}
                                    />
                                </li>
                            </ul>

                            <ul id="projects-collection" className="collection z-depth-1 animate fadeRight">
                                <li className="collection-item avatar">
                                    <i className="material-icons teal circle">attach_file</i>
                                    <h6 className="collection-header m-0">Send Message</h6>
                                    <p>Send To User</p>
                                </li>
                                <li className="input-field col s12 ">
                                    <Input
                                        icon="message_speed"
                                        label="message"
                                        type="Text"
                                        onChange={e => setMessage(e.target.value)}
                                        value={message}
                                    />
                                </li>

                                <div className="input-field col s12 ">
                                    <Input
                                        icon="insert_comment"
                                        label="Commentaire"
                                        type="Text"
                                        onChange={e => setComment(e.target.value)}
                                        value={comment}
                                    />
                                </div>

                            </ul>

                        </div>

                        <div className="col s12 m12 l12">
                            <div className="float-right"/>
                            <Button onClick={onSubmitHandler} children="Send" className="float-right"/>

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
Formulaire.Layout = AdminLayout
export default Formulaire
