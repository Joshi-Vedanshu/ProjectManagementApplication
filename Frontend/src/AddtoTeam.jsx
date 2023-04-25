import {React,useState} from "react";
import NavBar from "./NavBar";
import NavSide from "./NavSide";
import './Style.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


export function AddToTeam() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    
    <div>
        <NavBar/>
        <NavSide/>
        <div className="">
        <Button variant="primary" onClick={handleShow}>
            Add to Team
        </Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add to Team</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="modaluser">
              <Form.Label>Select User</Form.Label>
              <Form.Control
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="modalteam">
              <Form.Label>Select Team</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form>
        </Modal.Body>        
        <Modal.Footer>  
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    </div>
    
  );
}
