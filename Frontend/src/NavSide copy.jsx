import React from 'react';
import './Style.css'
import { NavLink } from 'react-router-dom'; // import the NavLink component


export default function NavSide() {

    return (
        
        <nav className='navside'>
            <NavLink to="/" className={({isActive})=>isActive?" active":""}>Home</NavLink>
            <NavLink to="/about" className={({isActive})=>isActive?" active":""}>Sprints</NavLink>
            <NavLink to="/events" className={({isActive})=>isActive?" active":""}>Cards</NavLink>
            <NavLink to="/events" className={({isActive})=>+isActive?" active":""}>Profile</NavLink>
        </nav>
        
    );

}