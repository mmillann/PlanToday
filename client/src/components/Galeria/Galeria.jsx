import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, Modal } from "react-bootstrap";
import moment from "moment";
import { Link } from "react-router-dom";
import SubirPlan from "../Plan/SubirPlan";

function Galeria({ idUsuario }) {
  const [planes, setPlanes] = useState([]);
  const [sinPlanes, setSinPlanes] = useState(false); // Estado para controlar si no hay planes
  const [showModal, setShowModal] = useState(false);
  

  useEffect(() => {
    const obtenerPlanes = async () => {
      try {
        const respuesta = await axios.get(
          `http://52.47.191.228:8080/planes/usuario/${idUsuario}`
        );
        respuesta.data.sort(
          (a, b) => new Date(b.fecha_hora) - new Date(a.fecha_hora)
        );
        setPlanes(respuesta.data);
        setSinPlanes(respuesta.data.length === 0); // Actualizar el estado sinPlanes
      } catch (error) {
        console.log(error);
      }
    };

    obtenerPlanes();
  }, [idUsuario]);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="row mx-auto d-flex align-items-center">
        {sinPlanes ? (
          <div className="infoNoPlan d-flex flex-column justify-content-center align-items-center">
            <p className="text-center">Añade tus propios planes y conoce gente nueva</p>
            <Button variant="dark" className="botonPerfilAniadir" onClick={handleOpenModal}>Añadir Plan</Button>
          </div>
        ) : (
          planes.map((plan) => (
            <div className="col-md-4 mb-3" key={plan.id}>
              {
                <div className="col-md-4 mb-3" key={plan.id}>
                  <Card
                    style={{
                      display: "flex",
                      color: "#ffffff",
                      width: "21rem",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={plan.imagen}
                      style={{
                        height: "16rem",
                        width: "21rem",
                        objectFit: "cover",
                      }}
                    />
                    <Card.Body
                      className="text-white"
                      style={{ backgroundColor: "transparent" }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Card.Title style={{ marginRight: "1rem" }}>
                          <Card.Link as={Link} to={`http://52.47.191.228:3000/plan/${plan.id}`}  className="aSub">
                            {plan.titulo}
                          </Card.Link>
                        </Card.Title>
                        <Card.Subtitle className="text-white text-muted">
                          {moment(plan.fecha_hora).format("DD/MM/YYYY")}
                        </Card.Subtitle>
                      </div>
                      <Card.Text
                        style={{ overflow: "hidden", display: "flex" }}
                      >
                        {plan.descripcion}
                      </Card.Text>
                      <div className="">
                        <div></div>
                      </div>
                    </Card.Body>
                    <Card.Footer
                      style={{ backgroundColor: "transparent" }}
                    ></Card.Footer>
                  </Card>
                </div>

              }
            </div>
            
          ))
          
        )}
      <Modal show={showModal} onHide={handleCloseModal}>
            <SubirPlan 
              handleCloseModal={handleCloseModal}
            />
        </Modal>
      </div>
    </div>
  );
}

export default Galeria;
