import React from 'react';
import './Style.css'
import { NavLink } from 'react-router-dom'; // import the NavLink component
import {BsGearFill,BsGear} from 'react-icons/bs'


export default function NavBar() {

    return (
        
        <nav className='navigation'>
            <img src="images/FRAV2.png" alt="FRAV Logo"/>
            <div className='navleft'>
                <NavLink to="/Organization" className={({isActive})=>isActive?" active":""}>Organization</NavLink>
                <NavLink to="/Projects" className={({isActive})=>isActive?" active":""}>Projects</NavLink>
            </div>
            <div className='navright'>
                <NavLink to="/about" className={({isActive})=>isActive?" active":""}>Profile</NavLink>
                <NavLink to="/events" className={({isActive})=>+isActive?" active":""}><BsGear/></NavLink>
            </div>
        </nav>
        
    );

}