import React from "react";
import NavBar from "./NavBar";
import NavSide from "./NavSide";
import './Style.css'


export function Project() {
  return (
    <div className="content">
        <div className="cardList">
            <div className="card"> 
                <h3>Project Name</h3>
                <p>Select this project</p>
            </div>
            <div className="card"> <h3>Project 2</h3></div>
        </div>
    </div>
  );
}

