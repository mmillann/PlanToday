import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import moment from "moment";
import {
  FaHeart,
  FaUserCircle,
  FaRegCommentDots,
  FaShareAlt,
  FaPlusSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function PlanCategoria() {
  const [addedPlans, setAddedPlans] = useState([]);
  const [likedPlans, setLikedPlans] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [imageSrcs, setImageSrcs] = useState([]);

  const quitarsePlan = (planId) => {
    const usuarioId = sessionStorage.getItem("id");
    axios
      .delete(
        `http://52.47.191.228:8080/participantes/quit/${planId}/${usuarioId}`
      )
      .then((response) => {
        var respuesta = response.data.message;
        console.log("respuesta de quitarsePlan:" + response.data.message);
        if (respuesta === "true") {
          console.log("--------------quitarsePlan---------------------");
          setAddedPlans((prevAddedPlans) =>
            prevAddedPlans.filter((id) => id !== planId)
          );
          return axios.post(`http://52.47.191.228:8080/planes/quit/${planId}`);
        } else {
          unirsePlan(planId);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getNombreCreador = (idCreador) => {
    const user = users.find((user) => idCreador === user.id);
    if (user) {
      return user.nombre_usuario;
    } else {
      return "username";
    }
  };

  function limitarDescripcion(descripcion) {
    const words = descripcion.split(" ");
    if (words.length > 19) {
      return words.slice(0, 19).join(" ") + "...";
    } else {
      return descripcion;
    }
  }

  const darLike = (planId) => {
    const usuarioId = sessionStorage.getItem("id");
    axios
      .post(`http://52.47.191.228:8080/likes/${planId}/${usuarioId}`)
      .then((response) => {
        const respuesta = response.data.message;
        console.log("respuesta de darLike:" + response.data.message);
        if (respuesta === "true") {
          // Actualizar el estado de likedPlans solo si se dio like correctamente
          console.log(response);
          setLikedPlans((prevLikedPlans) => [...prevLikedPlans, planId]);
          return axios.post(`http://52.47.191.228:8080/planes/liked/${planId}`);
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
      .delete(`http://52.47.191.228:8080/likes/unlike/${planId}/${usuarioId}`)
      .then((response) => {
        const respuesta = response.data.message;
        console.log("respuesta de quitarLike:" + response.data.message);
        if (respuesta === "true") {
          // Actualizar el estado de likedPlans solo si se quitó el like correctamente
          console.log(response);
          setLikedPlans((prevLikedPlans) =>
            prevLikedPlans.filter((likedPlan) => likedPlan !== planId)
          );
          return axios.delete(`http://52.47.191.228:8080/planes/liked/${planId}`);
        } else {
          return darLike(planId);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const unirsePlan = (planId) => {
    const usuarioId = sessionStorage.getItem("id");
    axios
      .post(`http://52.47.191.228:8080/participantes/${planId}/${usuarioId}`)
      .then((response) => {
        const respuesta = response.data.message;
        console.log("respuesta de unirse:" + response.data.message);
        if (respuesta === "true") {
          // Actualizar el estado de likedPlans solo si se dio like correctamente
          console.log(response);
          setAddedPlans((prevAddedPlans) => [...prevAddedPlans, planId]);
          return axios.post(`http://52.47.191.228:8080/planes/add/${planId}`);
        } else {
          return quitarsePlan(planId);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [planes, setPlanes] = useState([]);
  const [sinPlanes, setSinPlanes] = useState(false); // Estado para controlar si no hay planes
  const { categoria_id } = useParams();
  console.log(categoria_id);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://52.47.191.228:8080/usuarios");
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    const obtenerPlanes = async () => {
      try {
        const respuesta = await axios.get(
          `http://52.47.191.228:8080/planes/categoria/${categoria_id}`
        );
        console.log("----------explorar----------")
        console.log(respuesta.data);
        setPlanes(respuesta.data);
        setSinPlanes(respuesta.data.length === 0); // Actualizar el estado sinPlanes
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
    obtenerPlanes();
  }, [categoria_id]);

  const getAvatarCreador = (idCreador) => {
    const user = users.find((user) => idCreador === user.id);
    if (user) {
      return user.avatar;
    } else {
      return false;
    }
  };

  return (
    <div>
      <div className="container">
        <div className="planes justify-content-center d-flex flex-column">
          {planes.map((plan) => {
            const index = Math.random();
            return (
              <div
                key={index}
                className="plan mx-auto d-flex flex-row align-items-center"
              >
                <Card as={Link} to={`http://52.47.191.228:3000/plan/${plan.id}`} className="card-plan">
                  <div className="d-flex align-items-center position-absolute">
                  {getAvatarCreador(plan.creador_id) != "default" && getAvatarCreador(plan.creador_id) != "" ? (
                        <img src={getAvatarCreador(plan.creador_id)} alt="" 
                        className="avatarPlan"
                        />
                      ) : (
                        <FaUserCircle
                        className="userImg"
                        style={{
                          fontSize: "3rem",
                          margin: "0.3rem",
                          cursor: "pointer",
                        }}
                      />
                      )}
                    <Link
                      to={`http://52.47.191.228:3000/perfil/${plan.creador_id}`}
                      className="username text-white aSub"
                    >
                      
                      {getNombreCreador(plan.creador_id)}
                    </Link>
                  </div>
                  <div>
                  <Link
                      to={`http://52.47.191.228:3000/perfil/${plan.creador_id}`}
                      className="categoria aSub"
                    >
                      
                      {plan.nombre_categoria}
                    </Link>
                  </div>
                  <Card.Img
                    variant="top"
                    src={plan.imagen}
                    alt="plan"
                  />
                  <Card.Body>
                    <div className="d-flex justify-content-between">
                      <Card.Title
                        className="aSub"
                        style={{ cursor: "pointer" }}
                      >
                        <Link>{plan.titulo}</Link>
                      </Card.Title>
                      <Card.Text style={{ cursor: "pointer" }}>
                        <Link className="aSub">{plan.ubicacion}</Link>
                      </Card.Text>
                    </div>

                    <Card.Text>
                      {limitarDescripcion(plan.descripcion)}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer
                    className="d-flex justify-content-between"
                    style={{ cursor: "default" }}
                  >
                    <small className="text-muted">
                      {moment(plan.fecha).format("DD/MM/YYYY")}
                    </small>
                  </Card.Footer>
                </Card>
                <div className="d-flex flex-column iconosPlanes">
                  <FaPlusSquare
                    className="iconoPlan"
                    onClick={() => unirsePlan(plan.id)}
                  />
                  <div className="d-flex justify-content-center">
                    {addedPlans.includes(plan.id) ? (
                      <span>{plan.participantes + 1}</span>
                    ) : (
                      <span>{plan.participantes}</span>
                    )}
                  </div>
                  <FaHeart
                    className="iconoPlan"
                    onClick={() => darLike(plan.id)}
                  />

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

                  <FaRegCommentDots className="iconoPlan" />

                  <div className="d-flex justify-content-center">
                    {plan.comentarios}
                  </div>
                  <FaShareAlt className="iconoPlan" />
                </div>
              </div>
            );
          })}
          {loading && (
            <div className="d-flex justify-content-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PlanCategoria;
