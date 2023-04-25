import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
import './LoginModal.css'
import { FaRegUser, FaLowVision } from "react-icons/fa";

function LoginModal(props) {
  const { show, handleClose } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para iniciar sesión
  };
  
  

  return (
    <Modal className="modalTodo" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Iniciar sesión</Modal.Title>
      </Modal.Header>
      <h5 className="bienvenida position-absolute d-flex">¡Te damos la bienvenida a Plan Today!</h5>
      <Modal.Body className="modal-body">
        <Form onSubmit={handleSubmit}>
        
          <Form.Group controlId="formBasicEmail">
            <Form.Label><FaRegUser/> Correo electrónico</Form.Label>
            <Form.Control type="email" placeholder="Ingresa tu correo electrónico" />
          </Form.Group>
  
          <Form.Group controlId="formBasicPassword">
            <Form.Label><FaLowVision /> Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Contraseña" />
          </Form.Group>
  
          <Button variant="primary" type="submit" block>
            Iniciar sesión
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <p className="text-center mb-0">
          ¿No tienes cuenta?{" "}
          <a href="#" onClick={handleClose}>
            Regístrate aquí
          </a>
        </p>
      </Modal.Footer>
    </Modal>
  );
}

export default LoginModal;