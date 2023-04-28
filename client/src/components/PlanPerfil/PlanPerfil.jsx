import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { FaRegUserCircle } from "react-icons/fa";
import moment from "moment";

function PlanPerfil({ plan }) {
  // En este estado, se almacenan los planes de usuario obtenidos de la API
  const [planes, setPlanes] = useState([]);

  // Este estado se utiliza para almacenar la URL de la imagen obtenida de la API de Picsum
  const [imageSrc, setImageSrc] = useState("");

  // Este useEffect se utiliza para obtener los planes de usuario al cargar el componente
  useEffect(() => {
    const getPlanesUser = async () => {
      try {
        const response = await fetch('http://15.237.107.70:8080/planes/usuario/4');
        const data = await response.json();
        setPlanes(data);
      } catch (error) {
        console.log(error);
      }
    };
    getPlanesUser();
  }, []);
  
  // Este useEffect se utiliza para obtener una imagen aleatoria de la API de Picsum al cargar el componente
  useEffect(() => {
    const fetchRandomImage = async () => {
      try {
        const countRes = await axios.get("https://picsum.photos/v2/list");
        const count = countRes.data.length;
        const randomIndex = Math.floor(Math.random() * count);
        const randomRes = await axios.get(
          `https://picsum.photos/id/${randomIndex}/info`
        );
        const randomImage = randomRes.data.download_url;
        setImageSrc(randomImage);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRandomImage();
  }, []);

  // Esta función se utiliza para limitar la descripción del plan a un máximo de 10 palabras
  function limitarDescripcion(descripcion) {
    const words = descripcion.split(" ");
    if (words.length > 10) {
      return words.slice(0, 10).join(" ") + "...";
    } else {
      return descripcion;
    }
  }

  return (
    <div>
       <div className="planesPerfil">
            {/* Utilizamos el método map para recorrer el array de planes y generar un componente Card para cada uno */}
            {planes.map((plan) => (
                <div key={plan.id}>
                    <Card>
                        <Card.Body>
                            {/* Aquí mostramos la ubicación del plan */}
                            <Card.Title>{plan.ubicacion}</Card.Title>
                            {/* Aquí mostramos la descripción limitada del plan */}
                            <Card.Body>{limitarDescripcion(plan.descripcion)}</Card.Body>
                        </Card.Body>
                    </Card>   
                </div>                
            ))}
        </div> 
    </div>
  );
}

export default PlanPerfil;