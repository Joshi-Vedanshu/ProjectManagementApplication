import React from "react";
import NavBar from "./NavBar";
import NavSide from "./NavSide";
import './Style.css'
import {BsPlusCircle} from 'react-icons/bs'


export function Project() {
  return (
    
    <div>
        <NavBar/>
        <NavSide/>
        <div className="content-center">
        <div className="cardList">
            <div className="card"> 
                <h3>Project 1</h3>
                <p>Description of project 1</p>
            </div>
            <div className="card">
                <h3>Project 2</h3>
                <p>Description of project 2</p>
            </div>
            <div className="card">
                <h3>Project 3</h3>
                <p>Description of project 3</p>
            </div>
            <div className="card">
                <h3>Project 3</h3>
                <p>Description of project 3</p>
            </div>
            <div className="card">
                <h3>Project 3</h3>
                <p>Description of project 3</p>
            </div>
            <div className="card">
                <h3>Project 3</h3>
                <p>Description of project 3</p>
            </div>
  
            <div className="card-plus">
                <h3><BsPlusCircle/></h3>
                <p>Add new project</p>
            </div>
            <div className="card-empty"></div>
            <div className="card-empty"></div>

        </div>
    </div>
    </div>
    
  );
}

