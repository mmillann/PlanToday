import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import {
  FaPlusSquare,
  FaUserCircle,
  FaHeart,
  FaShareAlt,
  FaMapMarked,
  FaMapMarker,
} from "react-icons/fa";
import Slidebar from "../Slidebar/Slidebar";
import axios from "axios";
import GoogleMapReact from "google-map-react";
import { darLike, quitarLike } from "../Plan/Plan";
import { Button } from "react-bootstrap";
import Marker from "./Marker";
import styled from "styled-components";

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

function PlanAmpliado() {
  const [plan, setPlan] = useState({});
  const [comentarios, setComentarios] = useState([]);
  const [users, setUsers] = useState([]);
  const { id } = useParams();
  const [latitud, setLatitud] = useState(null);
  const [longitud, setLongitud] = useState(null);
  const [likedPlans, setLikedPlans] = useState([]);
  const [ubi, setUbi] = useState([]);
  const [commentContent, setCommentContent] = useState(""); // Nuevo estado para el contenido del comentario
  const userId = sessionStorage.getItem("id");

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
  }, []);

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
      setUbi(respuesta.data.results[0]);
      console.log(respuesta.data);
    } catch (error) {
      console.log(error);
    }
  };

  const comentar = async () => {
    try {
      const comentarioData = {
        usuario_id: userId,
        plan_id: id,
        contenido: commentContent,
      };

      const response = await axios.post(
        `http://localhost:8080/comentarios/${userId}/${id}`,
        comentarioData
      );

      setComentarios([...comentarios, comentarioData]); // Agregar el nuevo comentario a la lista de comentarios

      // Limpiar el campo de texto después de agregar el comentario
      setCommentContent("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
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
          <Link to={`http://localhost:3000/perfil/${plan.creador_id}`} className="m-1 nameUser">
            {getNombreCreador(plan.creador_id)}
          </Link>
            <img
              className="mx-auto"
              src={plan.imagen}
              width={"672rem"}
              height={"566.6rem"}
              alt="Imagen del plan"
            />
          </div>
          <div className="comments-container">
            <div className="comments-box">
              {comentarios.map((comentario) => (
                <div key={comentario.id} className="comment d-flex flex-column">
                  <div className="comment-user d-flex flex-row align-items-center">
                    <FaUserCircle />
                    <span className="m-1">
                      {getNombreCreador(comentario.usuario_id)}
                    </span>
                  </div>
                  <div className="comment-content">
                    <p className="parrafo">{comentario.contenido}</p>
                  </div>
                  
                </div>
              ))}
            </div>
            <div className="d-flex comentar">
              <textarea
                rows={3} // Número de filas para que el textarea se amplíe hacia abajo
                value={commentContent}
                onChange={(event) => setCommentContent(event.target.value)} // Actualizar el estado commentContent
                style={{
                  resize: "none", // Deshabilitar la redimensión manual del textarea
                }}
                className="cajaTexto"
                placeholder="Escribe un comentario"
              />
              <Button className="botonComment text-white" variant="dark" onClick={comentar}>
                Enviar
              </Button>
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
                <FaHeart
                  className="iconoPlanA"
                  onClick={() => darLike(plan.id)}
                />
              </span>

              <div
                id={`likes_${plan.id}`}
                className="d-flex justify-content-center"
              >
                {likedPlans.includes(plan.id) ? (
                  <span>{plan.likes + 1}</span>
                ) : (
                  <span>{plan.likes}</span>
                )}
              </div>
              <hr />
              <span className="mt-1 d-flex flex-column justify-content-center align-items-center">
                <FaShareAlt className=" mt-1 iconoPlanA" />
              </span>
            </div>
          </div>
        </div>
        <p className="descripcionPlanA">{plan.descripcion}</p>
        <p className="mt-5 descripcionPlanA text-center">{ubi.formatted_address}</p>
        {latitud && longitud && (
          <div className="mapa" style={{ height: "400px", width: "600px" }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyD-gCTzTljxESQVmyeTZnjNuadlX3ZhQ7Y",
              }}
              defaultCenter={{ lat: latitud, lng: longitud }}
              center={{ lat: latitud, lng: longitud }}
              defaultZoom={15}
            >
              <Marker
                key={ubi.place_id}
                text={ubi.formatted_address}
                lat={latitud}
                lng={longitud}
              />
            </GoogleMapReact>
          </div>
        )}
      </div>
    </Wrapper>
  );
}

export default PlanAmpliado;