import React, { useState, useEffect } from "react";
import axios from "axios";
import {Card} from "react-bootstrap";
import moment from "moment";

function Galeria({ idUsuario }) {
  const [planes, setPlanes] = useState([]);
  // Obtenemos el ID del usuario de la sesión
  useEffect(() => {
    const obtenerPlanes = async () => {
      try {
        const respuesta = await axios.get(
          `http://localhost:8080/planes/usuario/${idUsuario}`
        );
        // Ordenamos los planes por fecha_hora (de más nuevo a más antiguo)
        respuesta.data.sort((a, b) => new Date(b.fecha_hora) - new Date(a.fecha_hora));
        setPlanes(respuesta.data);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerPlanes();
  }, [idUsuario]);

  return (
    <div className=" d-flex justify-content-center mt-5">
      <div className="row mx-auto d-flex align-items-center">
        {planes.map((plan) => (
          <div className="col-md-4 mb-3" key={plan.id}>
            <Card style={{ display: "flex", color: "#ffffff",  width: "21rem"}}>
              <Card.Img
                variant="top"
                src="https://picsum.photos/200/300"
                style={{height: "16rem", width: "21rem" ,objectFit: "cover" }}
              />
              <Card.Body className="text-white" style={{ backgroundColor: "transparent"}}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                  <Card.Title style={{ marginRight: "1rem" }}>
                    <Card.Link href="#" className="aSub">
                      {plan.ubicacion}
                    </Card.Link>
                  </Card.Title>
                  <Card.Subtitle className="text-white text-muted">
                    {moment(plan.fecha_hora).format("DD/MM/YYYY")}
                  </Card.Subtitle>
                </div>
                <Card.Text style={{overflow: "hidden", display: "flex"}}>
                  {plan.descripcion}
                </Card.Text>
                <div className="">
                  <div>
                  </div>
                </div>
              </Card.Body>
              <Card.Footer style={{ backgroundColor: "transparent" }}>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Galeria;