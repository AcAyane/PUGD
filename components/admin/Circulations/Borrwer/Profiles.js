import React from 'react'
import Collapsible from "../../../ui/Collapsible/Collapsible";
import PretTable from "../../../../pages/admin/circulation/Circulation/pretDoc/pretTable";


const Profiles = (props) => {
    const {Borrower} = props
    const {All_Pret} = props
    console.log("firstname", Borrower)

    let Full_Name = Borrower && Borrower.first_name + " " + Borrower.last_name
    return <React.Fragment>
        <div className="col s12">
            <div className="row">
                <div className="col s12 m7">
                    <div className="display-flex media">
                        <a href="#" className="avatar">
                            <img src="https://cdn.pixabay.com/photo/2015/11/22/15/09/hummingbird-1056383_1280.jpg"
                                 alt="Materialize" className="z-depth-4 circle" height="64" width="64"/>
                        </a>
                        <div className="media-body">
                            <h6 className="media-heading">
                                <span
                                    className="users-view-name">{Full_Name} </span>
                                {/*<span className="grey-text">@</span>
                                            <span className="users-view-username grey-text">{Borrower && Borrower.bar_code}</span>*/}
                            </h6>
                            <span className="chip chip white-text teal darken-1 ">
                                <span className="">#</span>
                                <span className="users-view-id">{Borrower && Borrower.bar_code}</span>
                            </span>
                            <span className="chip chip white-text deep-purple darken-4 ">
                                <span className="">Pret : </span>
                                <span className="users-view-id">{Borrower && Borrower.bar_code}</span>
                            </span>
                            <span className="chip white-text light-blue darken-4">
                                <span className="">Reservation : </span>
                                <span className="users-view-id">{Borrower && Borrower.bar_code}</span>
                            </span>
                            <span className="chip white-text pink darken-1">
                                <span className="">Retard : </span>
                                <span className="users-view-id">{Borrower && Borrower.bar_code}</span>
                            </span>

                        </div>
                    </div>
                </div>
                <div
                    className="col s12 m5 quick-action-btns display-flex justify-content-end align-items-center pt-2">
                    <a href="app-email.html" className="btn-small btn-light-indigo"><i
                        className="material-icons">mail_outline</i></a>
                    <a href="user-profile-page.html" className="btn-small btn-light-indigo">Profile</a>
                    <a href="page-users-edit.html" className="btn-small indigo">Edit</a>
                </div>
            </div>

            <br/>

            <Collapsible active>
                <li>
                    <div className="collapsible-header">
                        <i className="material-icons">filter_drama</i>Details
                    </div>


                    <div className=" collapsible-body s12 m12 l12">
                        <div className="row">
                            <ul className="col card-content s6 m6 l6">
                                <li>
                                    <p>Address</p>
                                    <p><b>Tél :</b> <span>{Borrower && Borrower.bar_code}</span></p>
                                    <p><b>E-mail :</b> <span>{Borrower && Borrower.bar_code}</span></p>
                                    <span> : </span>

                                </li>
                                <p>{Borrower && Borrower.bar_code}</p>
                                <p>{Borrower && Borrower.bar_code}</p>

                            </ul>
                            <ul className="col card-content s6 m6 l6">
                                <li>{Borrower && Borrower.bar_code}</li>
                                <p>{Borrower && Borrower.bar_code}</p>
                                <p>{Borrower && Borrower.bar_code}</p>

                            </ul>
                        </div>
                    </div>
                </li>
                {/*<li>
                    <div className="collapsible-header">
                        <i className="material-icons">filter_drama</i>List Pret
                    </div>


                    <div className=" collapsible-body s12 m12 l12">
                        <PretTable All_Pret={All_Pret}/>
                    </div>
                </li>*/}

            </Collapsible>
            {/*<ul className="collapsible">

                <li>
                    <div className="collapsible-header"><i className="material-icons">place</i>Second</div>
                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
                <li>
                    <div className="collapsible-header"><i className="material-icons">whatshot</i>Third</div>
                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
            </ul>*/}
        </div>
    </React.Fragment>

}

export default Profiles



