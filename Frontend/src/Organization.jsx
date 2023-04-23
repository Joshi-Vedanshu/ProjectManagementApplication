import {React,useState,useEffect} from "react";
import NavBar from "./NavBar";
import NavSide from "./NavSide";
import './Style.css'
import {BsPlusCircle} from 'react-icons/bs'


export function Organization() {
    const [data,setData] = useState([])
    useEffect(() => {
        let token = localStorage.getItem("accesstoken");
        token = token.substring(1,token.length-1)
        let bearer = 'Bearer ' + token
        fetch('http://localhost:3005/',{
            method: "GET",
            headers:{ 'Authorization': bearer}
        })
        .then(response => response.json())
        .catch(err => console.error(err))
        .then(details =>{
            document.getElementById('cardList').insertAdjacentHTML('afterbegin','<div class="card"> \
            <h3>'+details[0].name+'</h3> \
            <p>'+details[0].description+'</p> \
            </div>')
        });
           
     }); 




  return (
    
    <div>
        <NavBar/>
        <NavSide/>
        <div className="content-center">
        <div id="cardList" className="cardList">
           
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

