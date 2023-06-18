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
  const nombre = sessionStorage.getItem("nombre");
  const [likedPlanes, setLikedPlanes] = useState([]);

  const darLike = (planId) => {
    axios
      .post(`http://13.38.51.130:8080/likes/${planId}/${userId}`)
      .then((response) => {
        const respuesta = response.data.message;
        console.log("like dado al plan: " + planId);
        if (respuesta === "true") {
          // Actualizar el estado de likedPlans solo si se dio like correctamente
          setLikedPlanes((prevLikedPlanes) => [...prevLikedPlanes, planId]);
          console.log("likedPlanes despues de dar like");
          console.log(likedPlanes);
          return axios.post(`http://13.38.51.130:8080/planes/liked/${planId}`);
        } else {
          return quitarLike(planId);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const quitarLike = (planId) => {
    const usuarioId = sessionStorage.getItem("id");
    axios
      .delete(`http://13.38.51.130:8080/likes/unlike/${planId}/${userId}`)
      .then((response) => {
        const respuesta = response.data.message;
        console.log("respuesta de quitarLike:" + response.data.message);
        if (respuesta === "true") {
          console.log("--------------likeQuitado---------------------");
          setLikedPlanes((prevLikedPlanes) =>
            prevLikedPlanes.filter((id) => id !== planId)
          );
          return axios.post(`http://13.38.51.130:8080/planes/unliked/${planId}`);
        } else {
          return darLike(planId);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [addedPlans, setAddedPlans] = useState([]);

  const unirsePlan = (planId) => {
    axios
      .post(`http://13.38.51.130:8080/participantes/${planId}/${userId}`)
      .then((response) => {
        const respuesta = response.data.message;
        console.log("respuesta de unirse: " + response.data.message);
        if (respuesta === "true") {
          // Actualizar el estado de likedPlans solo si se dio like correctamente
          console.log(response);
          setAddedPlans((prevAddedPlans) => [...prevAddedPlans, planId]);
          return axios.post(`http://13.38.51.130:8080/planes/add/${planId}`);
        } else {
          return quitarsePlan(planId);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const quitarsePlan = (planId) => {
    axios
      .delete(`http://13.38.51.130:8080/participantes/quit/${planId}/${userId}`)
      .then((response) => {
        var respuesta = response.data.message;
        console.log("respuesta de quitarsePlan: " + response.data.message);
        if (respuesta === "true") {
          setAddedPlans((prevAddedPlans) =>
            prevAddedPlans.filter((id) => id !== planId)
          );
          return axios.post(`http://13.38.51.130:8080/planes/quit/${planId}`);
        } else {
          unirsePlan(planId);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const obtenerPlan = async () => {
      try {
        const respuesta = await axios.get(`http://13.38.51.130:8080/planes/${id}`);
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
          `http://13.38.51.130:8080/comentarios/plan/${id}`
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
        const res = await axios.get("http://13.38.51.130:8080/usuarios");
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
      return nombre;
    }
  };

  const getAvatarCreador = (idCreador) => {
    const user = users.find((user) => idCreador === user.id);
    if (user) {
      return user.avatar;
    } else {
      return false;
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

  function compartir() {
    const ruta = `http://13.38.51.130:3000/plan/${id}`;

    // Crea un elemento de textarea temporal
    const textarea = document.createElement("textarea");
    textarea.value = ruta;

    // Agrega el textarea al DOM
    document.body.appendChild(textarea);

    // Selecciona y copia el contenido del textarea
    textarea.select();
    document.execCommand("copy");

    // Elimina el textarea del DOM
    document.body.removeChild(textarea);
  }

  const comentar = async (event) => {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

    try {
      const comentarioData = {
        usuario_id: userId,
        plan_id: id,
        contenido: commentContent,
      };

      const response = await axios.post(
        `http://13.38.51.130:8080/comentarios/${userId}/${id}`,
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
            {getAvatarCreador(plan.creador_id) ? (
              <img
                src={getAvatarCreador(plan.creador_id)}
                alt=""
                className="avatarPlanA"
              />
            ) : (
              <FaUserCircle
                className="avatarPlanA"
                style={{
                  fontSize: "3rem",
                  margin: "0.3rem",
                  cursor: "pointer",
                }}
              />
            )}
            <Link
              to={`http://13.38.51.130:3000/perfil/${plan.creador_id}`}
              className="m-1 nameUser"
            >
              {getNombreCreador(plan.creador_id)}
            </Link>
            <img
              className="mx-auto"
              src={plan.imagen}
              width={"698rem"}
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
            <form onSubmit={comentar}>
              {" "}
              {/* Agregar onSubmit al formulario */}
              <div className="d-flex comentar">
                <textarea
                  rows={3}
                  value={commentContent}
                  onChange={(event) => setCommentContent(event.target.value)}
                  className="cajaTexto"
                  placeholder="Escribe un comentario"
                />
                <Button
                  type="submit" // Cambiar el tipo de botón a "submit"
                  className="botonComment text-white"
                  variant="dark"
                >
                  Enviar
                </Button>
              </div>
            </form>
          </div>
          <div className="infoPlanA">
            <div className="d-flex flex-column">
              {addedPlans.includes(plan.id) ? (
                <FaPlusSquare
                  className="iconoPlanUnido"
                  onClick={() => quitarsePlan(plan.id)}
                />
              ) : (
                <FaPlusSquare
                  className="iconoPlan"
                  onClick={() => unirsePlan(plan.id)}
                />
              )}
              <div className="d-flex justify-content-center">
                {addedPlans.includes(plan.id) ? (
                  <span>{plan.participantes + 1}</span>
                ) : (
                  <span>{plan.participantes}</span>
                )}
              </div>
              {likedPlanes.includes(plan.id) ? (
                <FaHeart
                  className="iconoPlanLikeado"
                  onClick={() => quitarLike(plan.id)}
                />
              ) : (
                <FaHeart
                  className="iconoPlan"
                  onClick={() => darLike(plan.id)}
                />
              )}

              <div
                id={`likes_${plan.id}`}
                className="d-flex justify-content-center"
              >
                {likedPlanes.includes(plan.id) ? (
                  <span>{plan.likes + 1}</span>
                ) : (
                  <span>{plan.likes}</span>
                )}
              </div>
              <hr />
              <span className="mt-1 d-flex flex-column justify-content-center align-items-center">
                <FaShareAlt
                  className="mt-1 iconoPlanA"
                  onClick={() => compartir()}
                />
              </span>
            </div>
          </div>
        </div>
        <p className="descripcionPlanA">{plan.descripcion}</p>
        <p className="mt-5 descripcionPlanA text-center">
          {ubi.formatted_address}
        </p>
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
