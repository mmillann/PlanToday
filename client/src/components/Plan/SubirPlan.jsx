import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { FaPlus, FaRegWindowClose } from "react-icons/fa";
import axios from "axios";

function SubirPlan(props) {
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
          categoria: e.target.categoria.value,
          fecha_hora: e.target.fecha.value, // Agrega la fecha_hora al objeto enviado al servidor
        }
      );

      console.log(response); // Aquí puedes manejar la respuesta del servidor

      handleCloseModal();
    } catch (error) {
      console.error(error);
    }
  };

  const currentDate = new Date().toISOString().slice(0, 10);

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
            type="text"
            rows={3}
            placeholder="Ingrese la descripción del plan"
          />
        </Form.Group>

        <Form.Group controlId="ubicacion">
          <Form.Label>Ubicación</Form.Label>
          <Form.Control type="text" placeholder="Ingrese la ubicación del plan" />
        </Form.Group>

        <Form.Group controlId="categoria">
          <Form.Label>Categoría</Form.Label>
          <Form.Control as="select">
            <option value="Deportes">Deportes</option>
            <option value="Música">Música</option>
            <option value="Fiesta">Fiesta</option>
            {/* Agrega aquí las opciones adicionales de categoría */}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="fecha">
          <Form.Label>Fecha y Hora</Form.Label>
          <Form.Control
            width={"100%"}
            type="date"
            min={currentDate} // Restringe elegir un día anterior a la fecha actual
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </>
  );
}

export default SubirPlan;