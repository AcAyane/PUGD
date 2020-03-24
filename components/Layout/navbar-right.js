import React from 'react';
import SideBar from './sidenav/sideBar'
import HeaderBar from './headerNav'

const rightNavbar = () => {

    return (


        <div>
            <HeaderBar />
            <div className="container">
                {/*-- profile-avatar-- todo:complet after*/}

                <li className="nav-item dropdown">
                    <a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle user-action"><img
                        src="https://www.tutorialrepublic.com/examples/images/avatar/3.jpg" className="avatar"
                        alt="Avatar"/> Antonio Moreno <b className="caret"></b></a>
                    <ul className="dropdown-menu">
                        <li><a href="#" className="dropdown-item"><i className="fa fa-user-o"></i> Profile</a></li>
                        <li><a href="#" className="dropdown-item"><i className="fa fa-calendar-o"></i> Calendar</a></li>
                        <li><a href="#" className="dropdown-item"><i className="fa fa-sliders"></i> Settings</a></li>
                        <li className="divider dropdown-divider"></li>
                        <li><a href="#" className="dropdown-item"><i className="material-icons">&#xE8AC;</i> Logout</a>
                        </li>
                    </ul>
                </li>
            </div>
        </div>
    )
}
export default rightNavbar
