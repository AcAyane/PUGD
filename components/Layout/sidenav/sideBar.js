import React from "react";
import SidenavItem from "./sidenav-item";
import SidenavDropdown from "./sidenavDropdown";
import SideBarBrandName from "./sideBarBrand";
import SidenavHeader from "./sidenavHeader";
import AuthoritiesSideItems from "../../admin/authorities/SidebarItems";
import Router from "next/router";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";

const sideBar = props => {
  let sidebarItems;
  if (Router.route.startsWith("/admin/authorities"))
    sidebarItems = AuthoritiesSideItems;
  let [header, ...childrenItems] = sidebarItems ? sidebarItems : [null, null];

  return (
    <aside className="sidenav-main nav-lock sidenav-active-rounded">
      <ExpansionPanel>
        <ExpansionPanelSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          Expansion Panel 1
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Expansion Panel 2</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel disabled>
        <ExpansionPanelSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Expansion Panel</Typography>
        </ExpansionPanelSummary>
      </ExpansionPanel>

      {/* <SideBarBrandName />

      {sidebarItems  &&
      
      <ul className="sidenav sidenav-fixed "
      id="slide-out" data-menu="menu-navigation" data-collapsible="menu-accordion" >

        <SidenavHeader Label={header}/>

      {childrenItems.map((item, index) => {
        return (
          <SidenavDropdown Label={item.Label} key={index}>

            {item.Children.map((subItem, index) => {  
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
    </aside>
  );
};
export default sideBar;
