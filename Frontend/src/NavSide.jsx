import React from 'react';
import './Style.css'
import { NavLink } from 'react-router-dom'; // import the NavLink component
import {Nav, NavItem, Navbar, NavDropdown} from 'react-bootstrap';
import {
    CDBBadge,
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
   } from "cdbreact";

export default function NavSide() {

    return (

    <nav className='navside' >
 <CDBSidebarContent>
    <CDBSidebarMenu>
      <CDBSidebarMenuItem icon="th-large">
          Dashboard
       </CDBSidebarMenuItem>
       <CDBSidebarMenuItem icon="sticky-note">
          Components
        </CDBSidebarMenuItem>
     </CDBSidebarMenu>
     <CDBSidebarMenu>
        
    </CDBSidebarMenu>
 </CDBSidebarContent>
 
    </nav>
        
        
    );

}