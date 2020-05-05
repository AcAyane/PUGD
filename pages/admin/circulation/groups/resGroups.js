import React from 'react'
import Checkbox from "../../../../components/ui/Checkbox";
import {useQuery} from "@apollo/react-hooks";
import Table from "../../../../components/ui/Table/Table";
import {GetAllGrroups} from "../../../../graphql/queries/admin/Ciruclation/groups.query";
import moment from 'moment'
import ChipText from "../../../../components/ui/Text/ChipText";
import Icon from "../../../../components/ui/Icon/Icon";
import Modal from "../../../../components/ui/Modal/Modal";

const ResGroup = (props) => {
    const nul = <span style={{color:'#d60e28'}}>No Group finder</span>;

    const addMember = () => {


        console.log("hello add memeber")

        return <Modal id={"register"} children={
            <p>HELLO </p>
        }/>

    }
    return <div className="row">

            <div className="col s12">

                <div className="row vertical-modern-dashboard">
                    <div className="col s12 m4 l4">
                        <div className="card recent-buyers-card animate fadeLeft">
                            <div className="card-content">
                                <h4 className="card-title mb-0">Group Name :{props.name} <i
                                    className="material-icons float-right">library_books</i>
                                    <i
                                    className="material-icons float-right">edit</i>
                                </h4>
                                <p className="medium-small pt-2">Create At : {moment(props.date).format("DD, MMM, YYYY  HH:mm")} </p>
                                <p className="medium-small pt-2">Responsable</p>
                                <ul className="collection mb-0">
                                    <li className="collection-item avatar">
                                        <img src="../../../app-assets/images/avatar/avatar-5.png" alt=""
                                             className="circle"/>
                                        <p className="font-weight-600">{props.respo}</p>
                                        <p className="medium-small">25, January 2019</p>
                                        <a href="#!" className="secondary-content"><i
                                            className="material-icons">star_border</i></a>
                                    </li>
                                </ul>


                                {/* eslint-disable-next-line react/no-children-prop */}


                                    <a className="medium-small mt-5 pl-5">
                                        {props.email ?
                                            <Icon children={'mail'} style={{color: '#ff4080'}} />
                                            : <Icon style={{color: '#d5d5d5'}} children={"mail"}/>
                                        }

                                    </a>
                                    <a href="#!" className="medium-small pl-10">
                                        {props.notification ?
                                        <Icon children={'notifications_active'} style={{color: '#ff4080'}} /> : <Icon style={{color: '#d5d5d5'}} children={"notifications_off"}/>
                                        }

                                    </a>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m8 l8 animate fadeRight">
                        <div className="card">
                            <div className="card-content">
                                <h4 className="card-title mb-0">Member Groups
                                    <i
                                        onClick={addMember}
                                    className="material-icons float-right">person_add</i>
                                    <i
                                    className="material-icons float-right">more_vert</i></h4>
                                <p className="medium-small">This month transaction</p>
                                <div className="total-transaction-container">
                                    <Table Thead={
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td>Membre </td>
                                            <td>code-barres</td>
                                            <td>Pret</td>
                                            <td>Reservation</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    } />


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>

}
// export default withApollo({ssr:true})(AllGroups)

export default ResGroup
