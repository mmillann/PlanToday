import React from "react";
import PlanCard from "../PlanCard/PlanCard";

function Galeria() {
  const planes = [
    {
      id: 1,
      ubicacion: "Parque Nacional",
      descripcion: "Excursión por el Parque Nacional",
      imagen: "",
      id_creador: 1,
      fecha_hora: "2023-05-01T10:00:00",
    },
    {
      id: 2,
      ubicacion: "Playa",
      descripcion: "Día de playa con amigos",
      imagen: "",
      id_creador: 2,
      fecha_hora: "2023-05-08T12:00:00",
    },
    {
      id: 3,
      ubicacion: "Montañas",
      descripcion: "Senderismo en las montañas",
      imagen: "",
      id_creador: 3,
      fecha_hora: "2023-05-15T09:00:00",
    },
    {
      id: 4,
      ubicacion: "Bosque",
      descripcion: "Caminata por el bosque",
      imagen: "",
      id_creador: 1,
      fecha_hora: "2023-05-22T11:00:00",
    },
    {
      id: 5,
      ubicacion: "Ciudad",
      descripcion: "Tour de la ciudad",
      imagen: "",
      id_creador: 2,
      fecha_hora: "2023-05-29T15:00:00",
    },
    {
      id: 6,
      ubicacion: "Lago",
      descripcion: "Picnic en el lago",
      imagen: "",
      id_creador: 3,
      fecha_hora: "2023-06-05T12:00:00",
    },
    {
      id: 7,
      ubicacion: "Playa",
      descripcion: "Surf en la playa",
      imagen: "",
      id_creador: 1,
      fecha_hora: "2023-06-12T14:00:00",
    },
    {
      id: 8,
      ubicacion: "Montañas",
      descripcion: "Escalada en las montañas",
      imagen: "",
      id_creador: 2,
      fecha_hora: "2023-06-19T10:00:00",
    },
    {
      id: 9,
      ubicacion: "Parque",
      descripcion: "Juegos en el parque",
      imagen: "",
      id_creador: 3,
      fecha_hora: "2023-06-26T16:00:00",
    },
  ];

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="row" style={{width: "1000px"}}>
        {planes.map((plan) => (
          <div key={plan.id} className="col-md-4 mb-4">
            <PlanCard plan={plan}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Galeria;