import React from "react";
import AdminLayout from "components/adminLayout";

const admin = () => {
    return <React.Fragment>
                    <div className="container">
                        <div className="section">

                            {/*<!-- card stats start -->*/}

                            <div id="card-stats" className="pt-0">
                                <div className="row">
                                    <div className="col s12 m6 l3">
                                        <div className="card animate fadeLeft">
                                            <div className="card-content cyan white-text">
                                                <p className="card-stats-title"><i className="material-icons">person_outline</i> New Clients</p>
                                                <h4 className="card-stats-number white-text">566</h4>
                                                <p className="card-stats-compare">
                                                    <i className="material-icons">keyboard_arrow_up</i> 15%
                                                    <span className="cyan text text-lighten-5">from yesterday</span>
                                                </p>
                                            </div>
                                            <div className="card-action cyan darken-1">
                                                <div id="clients-bar" className="center-align"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col s12 m6 l3">
                                        <div className="card animate fadeLeft">
                                            <div className="card-content red accent-2 white-text">
                                                <p className="card-stats-title"><i className="material-icons">attach_money</i>Total Sales</p>
                                                <h4 className="card-stats-number white-text">$8990.63</h4>
                                                <p className="card-stats-compare">
                                                    <i className="material-icons">keyboard_arrow_up</i> 70% <span className="red-text text-lighten-5">last
                        month</span>
                                                </p>
                                            </div>
                                            <div className="card-action red">
                                                <div id="sales-compositebar" className="center-align"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col s12 m6 l3">
                                        <div className="card animate fadeRight">
                                            <div className="card-content orange lighten-1 white-text">
                                                <p className="card-stats-title"><i className="material-icons">trending_up</i> Today Profit</p>
                                                <h4 className="card-stats-number white-text">$806.52</h4>
                                                <p className="card-stats-compare">
                                                    <i className="material-icons">keyboard_arrow_up</i> 80%
                                                    <span className="orange-text text-lighten-5">from yesterday</span>
                                                </p>
                                            </div>
                                            <div className="card-action orange">
                                                <div id="profit-tristate" className="center-align"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col s12 m6 l3">
                                        <div className="card animate fadeRight">
                                            <div className="card-content green lighten-1 white-text">
                                                <p className="card-stats-title"><i className="material-icons">content_copy</i> New Invoice</p>
                                                <h4 className="card-stats-number white-text">1806</h4>
                                                <p className="card-stats-compare">
                                                    <i className="material-icons">keyboard_arrow_down</i> 3%
                                                    <span className="green-text text-lighten-5">from last month</span>
                                                </p>
                                            </div>
                                            <div className="card-action green">
                                                <div id="invoice-line" className="center-align"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*<!--card stats end-->
                            <!--chart dashboard start-->*/}

                            <div id="chart-dashboard">
                                <div className="row">
                                    <div className="col s12 m8 l8">
                                        <div className="card animate fadeUp">
                                            <div className="card-move-up waves-effect waves-block waves-light">
                                                <div className="move-up cyan darken-1">
                                                    <div>
                                                        <span className="chart-title white-text">Revenue</span>
                                                        <div className="chart-revenue cyan darken-2 white-text">
                                                            <p className="chart-revenue-total">$4,500.85</p>
                                                            <p className="chart-revenue-per"><i className="material-icons">arrow_drop_up</i> 21.80 %</p>
                                                        </div>
                                                        <div className="switch chart-revenue-switch right">
                                                            <label className="cyan-text text-lighten-5">
                                                                Month <input type="checkbox" /> <span className="lever"/> Year
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="trending-line-chart-wrapper"><canvas id="revenue-line-chart" height="70"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-content">
                                                <a className="btn-floating btn-move-up waves-effect waves-light red accent-2 z-depth-4 right">
                                                    <i className="material-icons activator">filter_list</i>
                                                </a>
                                                <div className="col s12 m3 l3">
                                                    <div id="doughnut-chart-wrapper">
                                                        <canvas id="doughnut-chart" height="200"/>
                                                        <div className="doughnut-chart-status">
                                                            <p className="center-align font-weight-600 mt-4">4500</p>
                                                            <p className="ultra-small center-align">Sold</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col s12 m2 l2">
                                                    <ul className="doughnut-chart-legend">
                                                        <li className="mobile ultra-small"><span className="legend-color"/>Mobile</li>
                                                        <li className="kitchen ultra-small"><span className="legend-color"/> Kitchen</li>
                                                        <li className="home ultra-small"><span className="legend-color"/> Home</li>
                                                    </ul>
                                                </div>
                                                <div className="col s12 m5 l6">
                                                    <div className="trending-bar-chart-wrapper"><canvas id="trending-bar-chart" height="90"/></div>
                                                </div>
                                            </div>
                                            <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">Revenue by Month <i
                      className="material-icons right">close</i>
                  </span>
                                                <table className="responsive-table">
                                                    <thead>
                                                    <tr>
                                                        <th data-field="id">ID</th>
                                                        <th data-field="month">Month</th>
                                                        <th data-field="item-sold">Item Sold</th>
                                                        <th data-field="item-price">Item Price</th>
                                                        <th data-field="total-profit">Total Profit</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>January</td>
                                                        <td>122</td>
                                                        <td>100</td>
                                                        <td>$122,00.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>February</td>
                                                        <td>122</td>
                                                        <td>100</td>
                                                        <td>$122,00.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>March</td>
                                                        <td>122</td>
                                                        <td>100</td>
                                                        <td>$122,00.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>April</td>
                                                        <td>122</td>
                                                        <td>100</td>
                                                        <td>$122,00.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td>May</td>
                                                        <td>122</td>
                                                        <td>100</td>
                                                        <td>$122,00.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6</td>
                                                        <td>June</td>
                                                        <td>122</td>
                                                        <td>100</td>
                                                        <td>$122,00.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>7</td>
                                                        <td>July</td>
                                                        <td>122</td>
                                                        <td>100</td>
                                                        <td>$122,00.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>8</td>
                                                        <td>August</td>
                                                        <td>122</td>
                                                        <td>100</td>
                                                        <td>$122,00.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>9</td>
                                                        <td>Septmber</td>
                                                        <td>122</td>
                                                        <td>100</td>
                                                        <td>$122,00.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>10</td>
                                                        <td>Octomber</td>
                                                        <td>122</td>
                                                        <td>100</td>
                                                        <td>$122,00.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>11</td>
                                                        <td>November</td>
                                                        <td>122</td>
                                                        <td>100</td>
                                                        <td>$122,00.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>12</td>
                                                        <td>December</td>
                                                        <td>122</td>
                                                        <td>100</td>
                                                        <td>$122,00.00</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col s12 m4 l4">
                                        <div className="card animate fadeUp">
                                            <div className="card-move-up teal accent-4 waves-effect waves-block waves-light">
                                                <div className="move-up">
                                                    <p className="margin white-text">Browser Stats</p>
                                                    <canvas id="trending-radar-chart" height="114"/>
                                                </div>
                                            </div>
                                            <div className="card-content  teal">
                                                <a className="btn-floating btn-move-up waves-effect waves-light red accent-2 z-depth-4 right">
                                                    <i className="material-icons activator">done</i>
                                                </a>
                                                <div className="line-chart-wrapper">
                                                    <p className="margin white-text">Revenue by country</p>
                                                    <canvas id="line-chart" height="114"/>
                                                </div>
                                            </div>
                                            <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">Revenue by country <i
                      className="material-icons right">close</i>
                  </span>
                                                <table className="responsive-table">
                                                    <thead>
                                                    <tr>
                                                        <th data-field="country-name">Country Name</th>
                                                        <th data-field="item-sold">Item Sold</th>
                                                        <th data-field="total-profit">Total Profit</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>USA</td>
                                                        <td>65</td>
                                                        <td>$452.55</td>
                                                    </tr>
                                                    <tr>
                                                        <td>UK</td>
                                                        <td>76</td>
                                                        <td>$452.55</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Canada</td>
                                                        <td>65</td>
                                                        <td>$452.55</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Brazil</td>
                                                        <td>76</td>
                                                        <td>$452.55</td>
                                                    </tr>
                                                    <tr>
                                                        <td>India</td>
                                                        <td>65</td>
                                                        <td>$452.55</td>
                                                    </tr>
                                                    <tr>
                                                        <td>France</td>
                                                        <td>76</td>
                                                        <td>$452.55</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Austrelia</td>
                                                        <td>65</td>
                                                        <td>$452.55</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Russia</td>
                                                        <td>76</td>
                                                        <td>$452.55</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*<!--chart dashboard end-->
                            <!--work collections start-->*/}
                            <div id="work-collections">
                                <div className="row">
                                    <div className="col s12 m12 l6">
                                        <ul id="projects-collection" className="collection z-depth-1 animate fadeLeft">
                                            <li className="collection-item avatar">
                                                <i className="material-icons cyan circle">card_travel</i>
                                                <h6 className="collection-header m-0">Projects</h6>
                                                <p>Your Favorites</p>
                                            </li>
                                            <li className="collection-item">
                                                <div className="row">
                                                    <div className="col s6">
                                                        <p className="collections-title">Web App</p>
                                                        <p className="collections-content">AEC Company</p>
                                                    </div>
                                                    <div className="col s3"><span className="task-cat cyan">Development</span></div>
                                                    <div className="col s3">
                                                        <div id="project-line-1"/>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="collection-item">
                                                <div className="row">
                                                    <div className="col s6">
                                                        <p className="collections-title">Mobile App for Social</p>
                                                        <p className="collections-content">iSocial App</p>
                                                    </div>
                                                    <div className="col s3"><span className="task-cat red accent-2">UI/UX</span></div>
                                                    <div className="col s3">
                                                        <div id="project-line-2"/>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="collection-item">
                                                <div className="row">
                                                    <div className="col s6">
                                                        <p className="collections-title">Website</p>
                                                        <p className="collections-content">MediTab</p>
                                                    </div>
                                                    <div className="col s3"><span className="task-cat teal accent-4">Marketing</span></div>
                                                    <div className="col s3">
                                                        <div id="project-line-3"/>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="collection-item">
                                                <div className="row">
                                                    <div className="col s6">
                                                        <p className="collections-title">AdWord campaign</p>
                                                        <p className="collections-content">True Line</p>
                                                    </div>
                                                    <div className="col s3"><span className="task-cat deep-orange accent-2">SEO</span></div>
                                                    <div className="col s3">
                                                        <div id="project-line-4"/>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col s12 m12 l6">
                                        <ul id="issues-collection" className="collection z-depth-1 animate fadeRight">
                                            <li className="collection-item avatar">
                                                <i className="material-icons red accent-2 circle">bug_report</i>
                                                <h6 className="collection-header m-0">Issues</h6>
                                                <p>Assigned to you</p>
                                            </li>
                                            <li className="collection-item">
                                                <div className="row">
                                                    <div className="col s7">
                                                        <p className="collections-title"><strong>#102</strong> Home Page</p>
                                                        <p className="collections-content">Web Project</p>
                                                    </div>
                                                    <div className="col s2"><span className="task-cat deep-orange accent-2">P1</span></div>
                                                    <div className="col s3">
                                                        <div className="progress">
                                                            <div className="determinate" style={{width: `70%` }}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="collection-item">
                                                <div className="row">
                                                    <div className="col s7">
                                                        <p className="collections-title"><strong>#108</strong> API Fix</p>
                                                        <p className="collections-content">API Project</p>
                                                    </div>
                                                    <div className="col s2"><span className="task-cat cyan">P2</span></div>
                                                    <div className="col s3">
                                                        <div className="progress">
                                                            <div className="determinate" style={{width: `40%` }}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="collection-item">
                                                <div className="row">
                                                    <div className="col s7">
                                                        <p className="collections-title"><strong>#205</strong> Profile page css</p>
                                                        <p className="collections-content">New Project</p>
                                                    </div>
                                                    <div className="col s2"><span className="task-cat red accent-2">P3</span></div>
                                                    <div className="col s3">
                                                        <div className="progress">
                                                            <div className="determinate" style={{width: `95` }}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="collection-item">
                                                <div className="row">
                                                    <div className="col s7">
                                                        <p className="collections-title"><strong>#188</strong> SAP Changes</p>
                                                        <p className="collections-content">SAP Project</p>
                                                    </div>
                                                    <div className="col s2"><span className="task-cat teal accent-4">P1</span></div>
                                                    <div className="col s3">
                                                        <div className="progress">
                                                            <div className="determinate" style={{width: `10%` }}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/*<!--work collections end-->
                            <!--card widgets start-->*/}

                            {/*
                             <!--card widgets end-->
                            */}

                        </div>{/*<!-- START RIGHT SIDEBAR NAV -->*/}
                        {/*<aside id="right-sidebar-nav">
                            <div id="slide-out-right" className="slide-out-right-sidenav sidenav rightside-navigation">
                                <div className="row">
                                    <div className="slide-out-right-title">
                                        <div className="col s12 border-bottom-1 pb-0 pt-1">
                                            <div className="row">
                                                <div className="col s2 pr-0 center">
                                                    <i className="material-icons vertical-text-middle"><a href="#" className="sidenav-close">clear</a></i>
                                                </div>
                                                <div className="col s10 pl-0">
                                                    <ul className="tabs">
                                                        <li className="tab col s4 p-0">
                                                            <a href="#messages" className="active">
                                                                <span>Messages</span>
                                                            </a>
                                                        </li>
                                                        <li className="tab col s4 p-0">
                                                            <a href="#settings">
                                                                <span>Settings</span>
                                                            </a>
                                                        </li>
                                                        <li className="tab col s4 p-0">
                                                            <a href="#activity">
                                                                <span>Activity</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide-out-right-body row pl-3">
                                        <div id="messages" className="col s12 pb-0">
                                            <div className="collection border-none mb-0">
                                                <input className="header-search-input mt-4 mb-2" type="text" name="Search" placeholder="Search Messages" />
                                                <ul className="collection right-sidebar-chat p-0 mb-0">
                                                    <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                                                        data-target="slide-out-chat">
                <span className="avatar-status avatar-online avatar-50"><img
                    src="../../../app-assets/images/avatar/avatar-7.png" alt="avatar" />
                  <i></i>
                </span>
                                                        <div className="user-content">
                                                            <h6 className="line-height-0">Elizabeth Elliott</h6>
                                                            <p className="medium-small blue-grey-text text-lighten-3 pt-3">Thank you</p>
                                                        </div>
                                                        <span className="secondary-content medium-small">5.00 AM</span>
                                                    </li>
                                                    <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                                                        data-target="slide-out-chat">
                <span className="avatar-status avatar-online avatar-50"><img
                    src="../../../app-assets/images/avatar/avatar-1.png" alt="avatar" />
                  <i></i>
                </span>
                                                        <div className="user-content">
                                                            <h6 className="line-height-0">Mary Adams</h6>
                                                            <p className="medium-small blue-grey-text text-lighten-3 pt-3">Hello Boo</p>
                                                        </div>
                                                        <span className="secondary-content medium-small">4.14 AM</span>
                                                    </li>
                                                    <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                                                        data-target="slide-out-chat">
                <span className="avatar-status avatar-off avatar-50"><img
                    src="../../../app-assets/images/avatar/avatar-2.png" alt="avatar" />
                  <i></i>
                </span>
                                                        <div className="user-content">
                                                            <h6 className="line-height-0">Caleb Richards</h6>
                                                            <p className="medium-small blue-grey-text text-lighten-3 pt-3">Hello Boo</p>
                                                        </div>
                                                        <span className="secondary-content medium-small">4.14 AM</span>
                                                    </li>
                                                    <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                                                        data-target="slide-out-chat">
                <span className="avatar-status avatar-online avatar-50"><img
                    src="../../../app-assets/images/avatar/avatar-3.png" alt="avatar" />
                  <i></i>
                </span>
                                                        <div className="user-content">
                                                            <h6 className="line-height-0">Caleb Richards</h6>
                                                            <p className="medium-small blue-grey-text text-lighten-3 pt-3">Keny !</p>
                                                        </div>
                                                        <span className="secondary-content medium-small">9.00 PM</span>
                                                    </li>
                                                    <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                                                        data-target="slide-out-chat">
                <span className="avatar-status avatar-online avatar-50"><img
                    src="../../../app-assets/images/avatar/avatar-4.png" alt="avatar" />
                  <i></i>
                </span>
                                                        <div className="user-content">
                                                            <h6 className="line-height-0">June Lane</h6>
                                                            <p className="medium-small blue-grey-text text-lighten-3 pt-3">Ohh God</p>
                                                        </div>
                                                        <span className="secondary-content medium-small">4.14 AM</span>
                                                    </li>
                                                    <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                                                        data-target="slide-out-chat">
                <span className="avatar-status avatar-off avatar-50"><img
                    src="../../../app-assets/images/avatar/avatar-5.png" alt="avatar" />
                  <i></i>
                </span>
                                                        <div className="user-content">
                                                            <h6 className="line-height-0">Edward Fletcher</h6>
                                                            <p className="medium-small blue-grey-text text-lighten-3 pt-3">Love you</p>
                                                        </div>
                                                        <span className="secondary-content medium-small">5.15 PM</span>
                                                    </li>
                                                    <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                                                        data-target="slide-out-chat">
                <span className="avatar-status avatar-online avatar-50"><img
                    src="../../../app-assets/images/avatar/avatar-6.png" alt="avatar" />
                  <i></i>
                </span>
                                                        <div className="user-content">
                                                            <h6 className="line-height-0">Crystal Bates</h6>
                                                            <p className="medium-small blue-grey-text text-lighten-3 pt-3">Can we</p>
                                                        </div>
                                                        <span className="secondary-content medium-small">8.00 AM</span>
                                                    </li>
                                                    <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                                                        data-target="slide-out-chat">
                <span className="avatar-status avatar-off avatar-50"><img
                    src="../../../app-assets/images/avatar/avatar-7.png" alt="avatar" />
                  <i></i>
                </span>
                                                        <div className="user-content">
                                                            <h6 className="line-height-0">Nathan Watts</h6>
                                                            <p className="medium-small blue-grey-text text-lighten-3 pt-3">Great!</p>
                                                        </div>
                                                        <span className="secondary-content medium-small">9.53 PM</span>
                                                    </li>
                                                    <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                                                        data-target="slide-out-chat">
                <span className="avatar-status avatar-off avatar-50"><img
                    src="../../../app-assets/images/avatar/avatar-8.png" alt="avatar" />
                  <i></i>
                </span>
                                                        <div className="user-content">
                                                            <h6 className="line-height-0">Willard Wood</h6>
                                                            <p className="medium-small blue-grey-text text-lighten-3 pt-3">Do it</p>
                                                        </div>
                                                        <span className="secondary-content medium-small">4.20 AM</span>
                                                    </li>
                                                    <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                                                        data-target="slide-out-chat">
                <span className="avatar-status avatar-online avatar-50"><img
                    src="../../../app-assets/images/avatar/avatar-1.png" alt="avatar" />
                  <i></i>
                </span>
                                                        <div className="user-content">
                                                            <h6 className="line-height-0">Ronnie Ellis</h6>
                                                            <p className="medium-small blue-grey-text text-lighten-3 pt-3">Got that</p>
                                                        </div>
                                                        <span className="secondary-content medium-small">5.20 AM</span>
                                                    </li>
                                                    <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                                                        data-target="slide-out-chat">
                <span className="avatar-status avatar-online avatar-50"><img
                    src="../../../app-assets/images/avatar/avatar-9.png" alt="avatar" />
                  <i></i>
                </span>
                                                        <div className="user-content">
                                                            <h6 className="line-height-0">Daniel Russell</h6>
                                                            <p className="medium-small blue-grey-text text-lighten-3 pt-3">Thank you</p>
                                                        </div>
                                                        <span className="secondary-content medium-small">12.00 AM</span>
                                                    </li>
                                                    <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                                                        data-target="slide-out-chat">
                <span className="avatar-status avatar-off avatar-50"><img
                    src="../../../app-assets/images/avatar/avatar-10.png" alt="avatar" />
                  <i></i>
                </span>
                                                        <div className="user-content">
                                                            <h6 className="line-height-0">Sarah Graves</h6>
                                                            <p className="medium-small blue-grey-text text-lighten-3 pt-3">Okay you</p>
                                                        </div>
                                                        <span className="secondary-content medium-small">11.14 PM</span>
                                                    </li>
                                                    <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                                                        data-target="slide-out-chat">
                <span className="avatar-status avatar-off avatar-50"><img
                    src="../../../app-assets/images/avatar/avatar-11.png" alt="avatar" />
                  <i></i>
                </span>
                                                        <div className="user-content">
                                                            <h6 className="line-height-0">Andrew Hoffman</h6>
                                                            <p className="medium-small blue-grey-text text-lighten-3 pt-3">Can do</p>
                                                        </div>
                                                        <span className="secondary-content medium-small">7.30 PM</span>
                                                    </li>
                                                    <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                                                        data-target="slide-out-chat">
                <span className="avatar-status avatar-online avatar-50"><img
                    src="../../../app-assets/images/avatar/avatar-12.png" alt="avatar" />
                  <i></i>
                </span>
                                                        <div className="user-content">
                                                            <h6 className="line-height-0">Camila Lynch</h6>
                                                            <p className="medium-small blue-grey-text text-lighten-3 pt-3">Leave it</p>
                                                        </div>
                                                        <span className="secondary-content medium-small">2.00 PM</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div id="settings" className="col s12">
                                            <p className="setting-header mt-8 mb-3 ml-5 font-weight-900">GENERAL SETTINGS</p>
                                            <ul className="collection border-none">
                                                <li className="collection-item border-none">
                                                    <div className="m-0">
                                                        <span>Notifications</span>
                                                        <div className="switch right">
                                                            <label>
                                                                <input checked type="checkbox" />
                                                                <span className="lever"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="collection-item border-none">
                                                    <div className="m-0">
                                                        <span>Show recent activity</span>
                                                        <div className="switch right">
                                                            <label>
                                                                <input type="checkbox" />
                                                                <span className="lever"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="collection-item border-none">
                                                    <div className="m-0">
                                                        <span>Show recent activity</span>
                                                        <div className="switch right">
                                                            <label>
                                                                <input type="checkbox" />
                                                                <span className="lever"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="collection-item border-none">
                                                    <div className="m-0">
                                                        <span>Show Task statistics</span>
                                                        <div className="switch right">
                                                            <label>
                                                                <input type="checkbox" />
                                                                <span className="lever"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="collection-item border-none">
                                                    <div className="m-0">
                                                        <span>Show your emails</span>
                                                        <div className="switch right">
                                                            <label>
                                                                <input type="checkbox" />
                                                                <span className="lever"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="collection-item border-none">
                                                    <div className="m-0">
                                                        <span>Email Notifications</span>
                                                        <div className="switch right">
                                                            <label>
                                                                <input checked type="checkbox" />
                                                                <span className="lever"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <p className="setting-header mt-7 mb-3 ml-5 font-weight-900">SYSTEM SETTINGS</p>
                                            <ul className="collection border-none">
                                                <li className="collection-item border-none">
                                                    <div className="m-0">
                                                        <span>System Logs</span>
                                                        <div className="switch right">
                                                            <label>
                                                                <input type="checkbox" />
                                                                <span className="lever"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="collection-item border-none">
                                                    <div className="m-0">
                                                        <span>Error Reporting</span>
                                                        <div className="switch right">
                                                            <label>
                                                                <input type="checkbox" />
                                                                <span className="lever"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="collection-item border-none">
                                                    <div className="m-0">
                                                        <span>Applications Logs</span>
                                                        <div className="switch right">
                                                            <label>
                                                                <input checked type="checkbox" />
                                                                <span className="lever"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="collection-item border-none">
                                                    <div className="m-0">
                                                        <span>Backup Servers</span>
                                                        <div className="switch right">
                                                            <label>
                                                                <input type="checkbox" />
                                                                <span className="lever"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="collection-item border-none">
                                                    <div className="m-0">
                                                        <span>Audit Logs</span>
                                                        <div className="switch right">
                                                            <label>
                                                                <input type="checkbox" />
                                                                <span className="lever"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div id="activity" className="col s12">
                                            <div className="activity">
                                                <p className="mt-5 mb-0 ml-5 font-weight-900">SYSTEM LOGS</p>
                                                <ul className="widget-timeline mb-0">
                                                    <li className="timeline-items timeline-icon-green active">
                                                        <div className="timeline-time">Today</div>
                                                        <h6 className="timeline-title">Homepage mockup design</h6>
                                                        <p className="timeline-text">Melissa liked your activity.</p>
                                                        <div className="timeline-content orange-text">Important</div>
                                                    </li>
                                                    <li className="timeline-items timeline-icon-cyan active">
                                                        <div className="timeline-time">10 min</div>
                                                        <h6 className="timeline-title">Melissa liked your activity Drinks.</h6>
                                                        <p className="timeline-text">Here are some news feed interactions concepts.</p>
                                                        <div className="timeline-content green-text">Resolved</div>
                                                    </li>
                                                    <li className="timeline-items timeline-icon-red active">
                                                        <div className="timeline-time">30 mins</div>
                                                        <h6 className="timeline-title">12 new users registered</h6>
                                                        <p className="timeline-text">Here are some news feed interactions concepts.</p>
                                                        <div className="timeline-content">
                                                            <img src="../../../app-assets/images/icon/pdf.png" alt="document" height="30" width="25"
                                                                 className="mr-1">Registration.doc
                                                        </div>
                                                    </li>
                                                    <li className="timeline-items timeline-icon-indigo active">
                                                        <div className="timeline-time">2 Hrs</div>
                                                        <h6 className="timeline-title">Tina is attending your activity</h6>
                                                        <p className="timeline-text">Here are some news feed interactions concepts.</p>
                                                        <div className="timeline-content">
                                                            <img src="../../../app-assets/images/icon/pdf.png" alt="document" height="30" width="25"
                                                                 className="mr-1">Activity.doc
                                                        </div>
                                                    </li>
                                                    <li className="timeline-items timeline-icon-orange">
                                                        <div className="timeline-time">5 hrs</div>
                                                        <h6 className="timeline-title">Josh is now following you</h6>
                                                        <p className="timeline-text">Here are some news feed interactions concepts.</p>
                                                        <div className="timeline-content red-text">Pending</div>
                                                    </li>
                                                </ul>
                                                <p className="mt-5 mb-0 ml-5 font-weight-900">APPLICATIONS LOGS</p>
                                                <ul className="widget-timeline mb-0">
                                                    <li className="timeline-items timeline-icon-green active">
                                                        <div className="timeline-time">Just now</div>
                                                        <h6 className="timeline-title">New order received urgent</h6>
                                                        <p className="timeline-text">Melissa liked your activity.</p>
                                                        <div className="timeline-content orange-text">Important</div>
                                                    </li>
                                                    <li className="timeline-items timeline-icon-cyan active">
                                                        <div className="timeline-time">05 min</div>
                                                        <h6 className="timeline-title">System shutdown.</h6>
                                                        <p className="timeline-text">Here are some news feed interactions concepts.</p>
                                                        <div className="timeline-content blue-text">Urgent</div>
                                                    </li>
                                                    <li className="timeline-items timeline-icon-red">
                                                        <div className="timeline-time">20 mins</div>
                                                        <h6 className="timeline-title">Database overloaded 89%</h6>
                                                        <p className="timeline-text">Here are some news feed interactions concepts.</p>
                                                        <div className="timeline-content">
                                                            <img src="../../../app-assets/images/icon/pdf.png" alt="document" height="30" width="25"
                                                                 className="mr-1">Database-log.doc
                                                        </div>
                                                    </li>
                                                </ul>
                                                <p className="mt-5 mb-0 ml-5 font-weight-900">SERVER LOGS</p>
                                                <ul className="widget-timeline mb-0">
                                                    <li className="timeline-items timeline-icon-green active">
                                                        <div className="timeline-time">10 min</div>
                                                        <h6 className="timeline-title">System error</h6>
                                                        <p className="timeline-text">Melissa liked your activity.</p>
                                                        <div className="timeline-content red-text">Error</div>
                                                    </li>
                                                    <li className="timeline-items timeline-icon-cyan">
                                                        <div className="timeline-time">1 min</div>
                                                        <h6 className="timeline-title">Production server down.</h6>
                                                        <p className="timeline-text">Here are some news feed interactions concepts.</p>
                                                        <div className="timeline-content blue-text">Urgent</div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Slide Out Chat -->
                            <ul id="slide-out-chat" className="sidenav slide-out-right-sidenav-chat">
                                <li className="center-align pt-2 pb-2 sidenav-close chat-head">
                                    <a href="#!"><i className="material-icons mr-0">chevron_left</i>Elizabeth Elliott</a>
                                </li>
                                <li className="chat-body">
                                    <ul className="collection">
                                        <li className="collection-item display-flex avatar pl-5 pb-0" data-target="slide-out-chat">
          <span className="avatar-status avatar-online avatar-50"><img src="../../../app-assets/images/avatar/avatar-7.png"
                                                                   alt="avatar" />
          </span>
                                            <div className="user-content speech-bubble">
                                                <p className="medium-small">hello!</p>
                                            </div>
                                        </li>
                                        <li className="collection-item display-flex avatar justify-content-end pl-5 pb-0" data-target="slide-out-chat">
                                            <div className="user-content speech-bubble-right">
                                                <p className="medium-small">How can we help? We're here for you!</p>
                                            </div>
                                        </li>
                                        <li className="collection-item display-flex avatar pl-5 pb-0" data-target="slide-out-chat">
          <span className="avatar-status avatar-online avatar-50"><img src="../../../app-assets/images/avatar/avatar-7.png"
                                                                   alt="avatar" />
          </span>
                                            <div className="user-content speech-bubble">
                                                <p className="medium-small">I am looking for the best admin template.?</p>
                                            </div>
                                        </li>
                                        <li className="collection-item display-flex avatar justify-content-end pl-5 pb-0" data-target="slide-out-chat">
                                            <div className="user-content speech-bubble-right">
                                                <p className="medium-small">Materialize admin is the responsive materializecss admin template.</p>
                                            </div>
                                        </li>

                                        <li className="collection-item display-grid width-100 center-align">
                                            <p>8:20 a.m.</p>
                                        </li>

                                        <li className="collection-item display-flex avatar pl-5 pb-0" data-target="slide-out-chat">
          <span className="avatar-status avatar-online avatar-50"><img src="../../../app-assets/images/avatar/avatar-7.png"
                                                                   alt="avatar" />
          </span>
                                            <div className="user-content speech-bubble">
                                                <p className="medium-small">Ohh! very nice</p>
                                            </div>
                                        </li>
                                        <li className="collection-item display-flex avatar justify-content-end pl-5 pb-0" data-target="slide-out-chat">
                                            <div className="user-content speech-bubble-right">
                                                <p className="medium-small">Thank you.</p>
                                            </div>
                                        </li>
                                        <li className="collection-item display-flex avatar pl-5 pb-0" data-target="slide-out-chat">
          <span className="avatar-status avatar-online avatar-50"><img src="../../../app-assets/images/avatar/avatar-7.png"
                                                                   alt="avatar" />
          </span>
                                            <div className="user-content speech-bubble">
                                                <p className="medium-small">How can I purchase it?</p>
                                            </div>
                                        </li>

                                        <li className="collection-item display-grid width-100 center-align">
                                            <p>9:00 a.m.</p>
                                        </li>

                                        <li className="collection-item display-flex avatar justify-content-end pl-5 pb-0" data-target="slide-out-chat">
                                            <div className="user-content speech-bubble-right">
                                                <p className="medium-small">From ThemeForest.</p>
                                            </div>
                                        </li>
                                        <li className="collection-item display-flex avatar justify-content-end pl-5 pb-0" data-target="slide-out-chat">
                                            <div className="user-content speech-bubble-right">
                                                <p className="medium-small">Only $24</p>
                                            </div>
                                        </li>
                                        <li className="collection-item display-flex avatar pl-5 pb-0" data-target="slide-out-chat">
          <span className="avatar-status avatar-online avatar-50"><img src="../../../app-assets/images/avatar/avatar-7.png"
                                                                   alt="avatar" />
          </span>
                                            <div className="user-content speech-bubble">
                                                <p className="medium-small">Ohh! Thank you.</p>
                                            </div>
                                        </li>
                                        <li className="collection-item display-flex avatar pl-5 pb-0" data-target="slide-out-chat">
          <span className="avatar-status avatar-online avatar-50"><img src="../../../app-assets/images/avatar/avatar-7.png"
                                                                   alt="avatar" />
          </span>
                                            <div className="user-content speech-bubble">
                                                <p className="medium-small">I will purchase it for sure.</p>
                                            </div>
                                        </li>
                                        <li className="collection-item display-flex avatar justify-content-end pl-5 pb-0" data-target="slide-out-chat">
                                            <div className="user-content speech-bubble-right">
                                                <p className="medium-small">Great, Feel free to get in touch on</p>
                                            </div>
                                        </li>
                                        <li className="collection-item display-flex avatar justify-content-end pl-5 pb-0" data-target="slide-out-chat">
                                            <div className="user-content speech-bubble-right">
                                                <p className="medium-small">https://pixinvent.ticksy.com/</p>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="center-align chat-footer">
                                    <form className="col s12" onsubmit="slideOutChat()" action="javascript:void(0);">
                                        <div className="input-field">
                                            <input id="icon_prefix" type="text" className="search" />
                                            <label for="icon_prefix">Type here..</label>
                                            <a onclick="slideOutChat()"><i className="material-icons prefix">send</i></a>
                                        </div>
                                    </form>
                                </li>
                            </ul>
                        </aside>*/}
                    </div>
                    <div className="content-overlay"/>
    </React.Fragment>
};
admin.Layout = AdminLayout;
export default admin;