import React from "react";
import NavBar from "../../NavBar";
import NavSide from "./NavSide";
import './Style.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { HeaderStories } from "../../headerstories";
import Modal from 'react-bootstrap/Modal';


export function Sprint() {
  return (
    
    <div>
        <NavBar/>
        <NavSide/>
        <HeaderStories/>
        <Modal scrollable={true}>

        </Modal>
        <div className="content">
            <Row xs={2} md={4} className="g-4">
                {Array.from({ length: 16 }).map((_, idx) => (
                    <Col>
                    <Card style={{ height: '10rem' }}>
                        <Card.Body>
                            <Card.Title>UserStory #</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
            </Row>
        </div>
        
    </div>
    
  );
}

