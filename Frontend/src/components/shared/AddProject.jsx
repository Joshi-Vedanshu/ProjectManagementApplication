import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavBar from "./NavBar";
import NavSide from "./NavSide";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function AddProject() {

    return (
        <div>
            <NavBar/>
            <NavSide/>
            <div className='content'>
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                    Project Name
                    </Form.Label>
                    <Col sm={6}>
                    <Form.Control placeholder="Enter your project name" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 6, offset: 2 }}>
                <Button type="submit">Add project</Button>
                </Col>
            </Form.Group>
                </Form>
            </div>
        </div>
        
        
    );

}