import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { FaPlus, FaRegWindowClose } from "react-icons/fa";
import axios from "axios";

function PlanAmpliado(props) {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const creador_id = sessionStorage.getItem("id");
  console.log(creador_id);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:8080/planes/${parseInt(creador_id)}`,
        {
          titulo: e.target.titulo.value,
          descripcion: e.target.descripcion.value,
          ubicacion: e.target.ubicacion.value,
        }
      );

      console.log(response.data); // Aquí puedes manejar la respuesta del servidor

      handleCloseModal();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="formularioSubir bg-dark p-4">
        <FaRegWindowClose
          color="black"
          className="closeLogin"
          size={26}
          onClick={handleCloseModal}
        />
        {/* Aquí puedes agregar los campos del formulario */}
        <Form.Group controlId="titulo">
          <Form.Label>Título</Form.Label>
          <Form.Control type="text" placeholder="Ingrese el título del plan" />
        </Form.Group>

        <Form.Group controlId="descripcion">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Ingrese la descripción del plan"
          />
        </Form.Group>

        <Form.Group controlId="ubicacion">
          <Form.Label>Ubicación</Form.Label>
          <Form.Control type="text" placeholder="Ingrese la ubicación del plan" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </>
  );
}

export default PlanAmpliado;