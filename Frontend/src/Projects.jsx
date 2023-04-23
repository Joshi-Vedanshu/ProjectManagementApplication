import {React,useState,useEffect} from "react";
import NavBar from "./NavBar";
import NavSide from "./NavSide";
import './Style.css'
import {BsPlusCircle} from 'react-icons/bs'
import {useNavigate} from 'react-router-dom';


export function Project() {
    const [data,setData] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        let token = localStorage.getItem("accesstoken");
        token = token.substring(1,token.length-1)
        let bearer = 'Bearer ' + token
        fetch('http://localhost:3005/project',{
            method: "GET",
            headers:{ 'Authorization': bearer}
        })
        .then(response => response.json())
        .catch(err => console.error(err))
        .then(details =>{
            console.log(details[0])
            document.getElementById('cardList').insertAdjacentHTML('afterbegin','<div class="card"> \
            <h3>'+details[0].name+'</h3> \
            <p>'+details[0].description+'</p> \
            </div>')
        });
           
     }); 
     const routeChange = () =>{ 
        navigate('/addproject');
    }

  return (
    
    <div>
        <NavBar/>
        <NavSide/>
        <div className="content-center">
        <div id="cardList" className="cardList">
           
  
            <div className="card-plus" onClick={routeChange}>
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
