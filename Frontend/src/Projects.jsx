import React from "react";
import NavBar from "./NavBar";
import NavSide from "./NavSide";
import './Style.css'


export function Project() {
  return (
    
    <div>
        <NavBar/>
        <NavSide/>
        <div className="content">
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
        </div>
    </div>
    </div>
    
  );
}

