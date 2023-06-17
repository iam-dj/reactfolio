import React, { useState } from "react";
import "../../components/index.css";
// import ContactModal from './ContactModal';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";

import bg from "../assets/bg.png";

function ContactModal() {
  const [show, setShow] = useState(false);

  const handleCloseWithMessage = (e) =>{
    e.preventDefault();
    window.open('mailto:dexterjulesjr@gmail.com', '_blank');
    setShow(false);
  };
  const handleClose = (e) =>{
   
    setShow(false);
  };
  
  const handleShow = () => setShow(true);

  return (
    <div className="fix">
      <img className="mainContact" src={bg} alt="Code spelt out"></img>
      <Button className="buttonOffFloor btn-sm" variant="primary" onClick={handleShow}>
        Contact Me
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Name" />
            </Form.Group>
            <InputGroup>
              <InputGroup.Text>Leave a Message</InputGroup.Text>
              <Form.Control as="textarea" aria-label="With textarea" />
            </InputGroup> */}
            <p>I appreciate you choosing to work with me see below, click the button to send me a personal email.</p>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleCloseWithMessage}>
            Click here to send an email
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ContactModal;
