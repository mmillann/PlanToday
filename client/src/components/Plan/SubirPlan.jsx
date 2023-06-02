import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { FaPlus, FaRegWindowClose } from "react-icons/fa";
import axios from "axios";
import { UploadFile } from "../firebase/config";

function SubirPlan(props) {
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({});

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const creador_id = sessionStorage.getItem("id");

  console.log(creador_id);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formErrors = {};
    let hasErrors = false;
  
    // Validar que los campos no estén vacíos
    const fields = ["titulo", "descripcion", "ubicacion", "categoria", "fecha", "foto"];
    fields.forEach((field) => {
      if (!e.target[field].value) {
        formErrors[field] = true;
        hasErrors = true;
      }
    });
  
    if (hasErrors) {
      setErrors(formErrors);
      return;
    }
  
    try {
      const imageUrl = await UploadFile(e.target.foto.files[0]);
      console.log("aaaaaaaaaaaaaaaaaaaaaaaa" + imageUrl);
      const response = await axios.post(
        `http://localhost:8080/planes/${parseInt(creador_id)}`,
        {
          titulo: e.target.titulo.value,
          descripcion: e.target.descripcion.value,
          ubicacion: e.target.ubicacion.value + ", Málaga España",
          categoria: e.target.categoria.value,
          fecha_hora: e.target.fecha.value,
          imagen: imageUrl
        }
      );
  
      console.log(response); // Aquí puedes manejar la respuesta del servidor
      props.handleCloseModal();
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
          onClick={() => {
            props.handleCloseModal();
          }}
        />
        {/* Aquí puedes agregar los campos del formulario */}
        <Form.Group controlId="titulo">
          <Form.Label>Título</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el título del plan"
            isInvalid={errors["titulo"]}
          />
          {errors["titulo"] && (
            <Form.Control.Feedback type="invalid">
              Por favor, ingrese un título.
            </Form.Control.Feedback>
          )}
        </Form.Group>

        <Form.Group controlId="descripcion">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            type="text"
            rows={3}
            placeholder="Ingrese la descripción del plan"
            isInvalid={errors["descripcion"]}
          />
          {errors["descripcion"] && (
            <Form.Control.Feedback type="invalid">
              Por favor, ingrese una descripción.
            </Form.Control.Feedback>
          )}
        </Form.Group>

        <Form.Group controlId="ubicacion">
          <Form.Label>Ubicación</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese la ubicación del plan"
            isInvalid={errors["ubicacion"]}
          />
          {errors["ubicacion"] && (
            <Form.Control.Feedback type="invalid">
              Por favor, ingrese una ubicación.
            </Form.Control.Feedback>
          )}
        </Form.Group>

        <Form.Group controlId="categoria">
          <Form.Label>Categoría</Form.Label>
          <Form.Control as="select" isInvalid={errors["categoria"]}>
            <option value="">Seleccione una categoría</option>
            <option value="1">Deportes</option>
            <option value="2">Arte</option>
            <option value="3">Música</option>
            <option value="4">Gastronomía</option>
            <option value="5">Viajes</option>
            <option value="6">Cine</option>
            <option value="7">Fiestas</option>
            <option value="8">Educación</option>
            <option value="9">Fiesta</option>
            {/* Agrega aquí las opciones adicionales de categoría */}
          </Form.Control>
          {errors["categoria"] && (
            <Form.Control.Feedback type="invalid">
              Por favor, seleccione una categoría.
            </Form.Control.Feedback>
          )}
        </Form.Group>

        <Form.Group controlId="fecha">
          <Form.Label>Fecha y Hora</Form.Label>
          <Form.Control
            width={"100%"}
            type="date"
            min={currentDate} // Restringe elegir un día anterior a la fecha actual
            isInvalid={errors["fecha"]}
          />
          {errors["fecha"] && (
            <Form.Control.Feedback type="invalid">
              Por favor, seleccione una fecha y hora.
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group controlId="foto">
          <Form.Label>Multimedia</Form.Label>
          <Form.Control
            type="file"
            size="sm"
            accept=".jpg, .jpeg, .png, .webp"
          />
          {errors["foto"] && (
            <Form.Control.Feedback color="red" type="empty">
              Por favor, seleccione una imagen.
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </>
  );
}

export default SubirPlan;
