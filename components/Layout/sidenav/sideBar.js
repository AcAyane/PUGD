import React from 'react';
import SideBarBrandName from './sideBarBrand';
// import SidenavHeader from './sidenavHeader';
import AuthoritiesSideItems from '../../admin/authorities/SidebarItems';
import Router from 'next/router'
import { ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styles from './sidebar.module.css'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import Link from 'next/Link';
import SidenavItem from './sidenav-item';

const sideBar = (props) => {

  const [expanded, setExpanded] = React.useState(1);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };


  let sidebarItems
  if (Router.route.startsWith('/admin/authorities'))
    sidebarItems = AuthoritiesSideItems
  let [header, ...childrenItems] = sidebarItems ? sidebarItems : [null, null]

  return (
    <aside className="sidenav-main nav-lock sidenav-active-rounded">
      <SideBarBrandName />

      {sidebarItems &&



        < div className="sidenav sidenav-fixed ">
          {
            childrenItems.map((item, index) => {
              return (
                <ExpansionPanel className={styles.expanssion_panel} expanded={expanded === index} onChange={handleChange(index)} key={index}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={styles.expanssion_panel_summary}
                  >
                    <Typography className={styles.sidebar_dropdown}>{item.Label} </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    {item.Children.map((subItem, index) => {
                      return (

                        // <Typography className={`${styles.sidebar_list} ${styles.sidebar_list_active}`} Label={subItem.Label} key={index}>
                    
                       <SidenavItem Label={subItem.Label} key={index} href={subItem.href}/>
                      )
                    })}
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              )
            })

          }
        </div>








      }



      {/* {sidebarItems &&

        <ul className="sidenav sidenav-fixed "
          id="slide-out" data-menu="menu-navigation" data-collapsible="menu-accordion" >

          <SidenavHeader Label={header} />

          {childrenItems.map((item, index) => {
            return (
              <SidenavDropdown Label={item.Label} key={index}>

                {item.Children.map((subItem, index) => {
                  return (
                    <SidenavItem Label={subItem.Label} key={index} href={subItem.href} />
                  )
                })}

              </SidenavDropdown>
            )
          })}
        </ul>
     

    } */}



    </aside >
  )
}
export default sideBar