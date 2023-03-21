import React from 'react';
import './Style.css'
import { NavLink } from 'react-router-dom'; // import the NavLink component
import {BsGearFill,BsGear} from 'react-icons/bs'


export default function NavBar() {

    return (
        
        <nav className='navigation'>
                <img src="images/FRAV2.png" alt="FRAV Logo"/>
                <NavLink to="/some" className={({isActive})=>isActive?" active":""}>Projects</NavLink>
            <div className='navright'>
                <NavLink to="/about" className={({isActive})=>isActive?" active":""}>Login</NavLink>
                <NavLink to="/events" className={({isActive})=>+isActive?" active":""}><BsGear/></NavLink>
            </div>
        </nav>
        
    );

}