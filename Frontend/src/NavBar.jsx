import React from 'react';
import './Style.css'
import { NavLink } from 'react-router-dom'; // import the NavLink component
import {BsGearFill,BsGear} from 'react-icons/bs'


export default function NavBar() {

    return (
        
        <nav className='navigation'>
            <NavLink to="/some" className={({isActive})=>isActive?" active":""}>   </NavLink>
            <NavLink to="/some" className={({isActive})=>isActive?" active":""}>Projects</NavLink>
            <NavLink to="/about" className={({isActive})=>isActive?" active":""}>Profile</NavLink>
            <div className='navright'>
                <NavLink to="/events" className={({isActive})=>+isActive?" active":""}><BsGear/></NavLink>
            </div>
        </nav>
        
    );

}