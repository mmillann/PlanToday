import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import {
  FaPlusSquare,
  FaUserCircle,
  FaCircle,
  FaHeart,
  FaRegCommentDots,
  FaShareAlt,
} from "react-icons/fa";
import Slidebar from "../Slidebar/Slidebar";
import axios from "axios";
import GoogleMapReact from "google-map-react";

const MapMarker = () => <div className="marker">Marcador</div>;

function PlanAmpliado() {
  const [plan, setPlan] = useState({});
  const [comentarios, setComentarios] = useState([]);
  const [users, setUsers] = useState([]);
  const { id } = useParams();
  const [latitud, setLatitud] = useState(null);
  const [longitud, setLongitud] = useState(null);

  useEffect(() => {
    const obtenerPlan = async () => {
      try {
        const respuesta = await axios.get(`http://localhost:8080/planes/${id}`);
        setPlan(respuesta.data);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerPlan();
  }, [id]);

  useEffect(() => {
    const obtenerComentarios = async () => {
      try {
        const respuesta = await axios.get(
          `http://localhost:8080/comentarios/plan/${id}`
        );
        setComentarios(respuesta.data);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerComentarios();
  }, [id]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:8080/usuarios");
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUsers();
  }, []);

  const getNombreCreador = (idUser) => {
    const user = users.find((user) => idUser === user.id);
    if (user) {
      return user.nombre_usuario;
    } else {
      return "username";
    }
  };

  useEffect(() => {
    if (plan.ubicacion) {
      buscarUbicacion();
    }
  }, [plan.ubicacion]);


  const buscarUbicacion = async () => {
    try {
      const respuesta = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          plan.ubicacion
        )}&key=AIzaSyD-gCTzTljxESQVmyeTZnjNuadlX3ZhQ7Y`
      );
      const ubicacion = respuesta.data.results[0].geometry.location;
      setLatitud(ubicacion.lat);
      setLongitud(ubicacion.lng);
      console.log(respuesta.data);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="d-flex-column justify-content-center">
      <div className="container-fluid position-fixed fixed-top cab">
        <Navbar />
      </div>
      <div className="slidebar">
        <Slidebar />
      </div>
      <h1 className="tituloPlanA mx-auto">{plan.titulo}</h1>

      <div className="fotoComments d-flex flex-row align-items-center">
        <div className="d-flex flex-row align-items-center imagenPlanA">
          <img
            className="mx-auto"
            src="https://media.traveler.es/photos/613760adcb06ad0f20e11980/master/w_1600%2Cc_limit/202931.jpg"
            width={"672rem"}
            alt="Imagen del plan"
          />
        </div>
        <div className="comments-container">
          <div className="comments-box">
            {comentarios.map((comentario) => (
              <div key={comentario.id} className="comment d-flex flex-column">
                <div className="comment-user d-flex flex-row align-items-center">
                  <FaUserCircle />
                  <p className="m-1">
                    {getNombreCreador(comentario.usuario_id)}
                  </p>
                </div>
                <div className="comment-content">
                  <p>{comentario.contenido}</p>
                </div>
                <hr className="sep" />
              </div>
            ))}
          </div>
        </div>
        <div className="infoPlanA">
          <div className="d-flex flex-column">
            <span className="mt-1 d-flex flex-column justify-content-center align-items-center">
              <FaPlusSquare className="iconoPlanA" />
            </span>
            <div className="d-flex justify-content-center">
              <span>{plan.participantes}</span>
            </div>
            <hr />
            <span className="mt-1 d-flex flex-column justify-content-center align-items-center">
              <FaHeart className="iconoPlanA" />
            </span>
            <div
              id={`likes_${plan.id}`}
              className="d-flex justify-content-center"
            >
              <span>{plan.likes}</span>
            </div>
            <hr />
            <span className="mt-1 d-flex flex-column justify-content-center align-items-center">
              <FaShareAlt className=" mt-1 iconoPlanA" />
            </span>
          </div>
        </div>
      </div>
      <p className="descripcionPlanA">{plan.descripcion}</p>
      
        <div className="mapa" style={{ height: "400px", width: "600px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyD-gCTzTljxESQVmyeTZnjNuadlX3ZhQ7Y",
          }}
          defaultCenter={{ lat: 0, lng: 0 }}
          center={{ lat: latitud, lng: longitud }}
          defaultZoom={15}
        >
          <MapMarker lat={latitud} lng={longitud} />
        </GoogleMapReact>
        </div>
         </div>
  );
}

export default PlanAmpliado;
