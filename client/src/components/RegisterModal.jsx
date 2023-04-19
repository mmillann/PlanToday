import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

function RegisterModal(props) {
  const { show, handleClose } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para registrar al usuario
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Registrarse</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa tu correo electrónico"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Contraseña" />
          </Form.Group>

          <Form.Group controlId="formBasicConfirmPassword">
            <Form.Label>Confirmar contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirmar contraseña"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Registrarse
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default RegisterModal;