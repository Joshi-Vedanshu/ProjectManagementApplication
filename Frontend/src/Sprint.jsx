import {React,useState,useEffect} from "react";
import NavBar from "./NavBar";
import NavSide from "./NavSide";
import './Style.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { HeaderStories } from "./headerstories";
import Modal from 'react-bootstrap/Modal';
import {useNavigate} from 'react-router-dom';


export function Sprint() {
    const [data,setData] = useState([])
    const navigate = useNavigate();
    const posting =  async () => {
        let nametext = document.getElementById("name").value;
        let descriptiontext = document.getElementById("description").value;
        let startDatet = document.getElementById("startdate").value;
        let endDatet = document.getElementById("enddate").value;
        await fetch('http://localhost:3005/sprint', {
           method: 'POST',
           body: JSON.stringify({
              name: nametext,
              description: descriptiontext,
              startDate: startDatet,
              endDate: endDatet,
              projectId: projectIdt,
           }),
           headers: {
              'Content-type': 'application/json; charset=UTF-8',
           },
        }).then((res)=>{
            if (res.ok){
                navigate('/sprint');
            }
            else
                console.log('error')

        }).catch((err) => {
            console.log(err.message);
         });
    }
    const deletion =  async () => {
        let idtext = document.getElementById("name").value;
        await fetch('http://localhost:3005/sprint', {
           method: 'DELETE',
           body: JSON.stringify({
              id: idtext
           }),
           headers: {
              'Content-type': 'application/json; charset=UTF-8',
           },
        }).then((res)=>{
            if (res.ok){
                navigate('/sprint');
            }
            else
                console.log('error')

        }).catch((err) => {
            console.log(err.message);
         });
    }
    useEffect(() => {
        let token = localStorage.getItem("accesstoken");
        token = token.substring(1,token.length-1)
        let bearer = 'Bearer ' + token
        fetch('http://localhost:3005/sprint',{
            method: "GET",
            headers:{ 'Authorization': bearer}
        })
        .then(response => response.json())
        .catch(err => console.error(err))
        .then(details =>{
            console.log(details)
            details.forEach(detail => {
                document.getElementById('rowid').insertAdjacentHTML('beforeend','<div class="col"><div class="card" style="height: 10rem;"> <div class="card-body"> \
                <div class="card-title h5">'+detail.name+'</div> \
                <p class="card-text">'+detail.description+'</p> \
                </div> </div> </div>')
            });
        });           
    }); 


  return (
    
    <div>
        <NavBar/>
        <NavSide/>
        <HeaderStories/>
        <Modal scrollable={true}>

        </Modal>
        <div className="content">
            <Row id="rowid" xs={2} md={4} className="g-4">
                
            </Row>
        </div>
        
    </div>
    
  );
}

