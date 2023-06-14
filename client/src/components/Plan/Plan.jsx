import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import moment from "moment";
import Card from "react-bootstrap/Card";
import {
  FaHeart,
  FaUserCircle,
  FaRegCommentDots,
  FaShareAlt,
  FaPlusSquare,
  FaCheck,
} from "react-icons/fa";
import "./Plan.css";
import LoginModal from "../LoginModal/LoginModal";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import RegisterModal from "../RegisterModal/RegisterModal";
import _ from "lodash";

function Plan() {
  const [planes, setPlanes] = useState([]);
  const [imageSrcs, setImageSrcs] = useState([]);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [likeDado, setLikeDado] = useState(false);
  const [tipoModal, setTipoModal] = useState("Login");
  const [showModal, setShowModal] = useState(false);
  const [likedPlanes, setLikedPlanes] = useState([]);
  


  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const loggedIn = sessionStorage.getItem("isLoggedIn");

  const usuarioId = sessionStorage.getItem("id");

  useEffect(() => {
    const fetchPlanes = async () => {
      try {
        const res = await axios.get("http://localhost:8080/planes");
        const shuffledPlanes = _.shuffle(res.data); // Mezcla los planes en orden aleatorio
        setPlanes(shuffledPlanes);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPlanes();
  }, []);

  useEffect(() => {
    const fetchLikedPlanes = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/likes/${usuarioId}`);
        console.log("planes likeados");
        console.log(res.data);
        setLikedPlanes(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchLikedPlanes();
  }, []);

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

  const getNombreCreador = (idCreador) => {
    const user = users.find((user) => idCreador === user.id);
    if (user) {
      return user.nombre_usuario;
    } else {
      return "username";
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

  function limitarDescripcion(descripcion) {
    const words = descripcion.split(" ");
    if (words.length > 19) {
      return words.slice(0, 19).join(" ") + "...";
    } else {
      return descripcion;
    }
  }

  const darLike = (planId) => {
    axios
      .post(`http://localhost:8080/likes/${planId}/${usuarioId}`)
      .then((response) => {
        const respuesta = response.data.message;
        console.log("like dado al plan: " + planId);
        if (respuesta === "true") {
          // Actualizar el estado de likedPlans solo si se dio like correctamente
          setLikedPlanes((prevLikedPlanes) => [...prevLikedPlanes, planId]);
          console.log("likedPlanes despues de dar like");
          console.log(likedPlanes);
          return axios.post(`http://localhost:8080/planes/liked/${planId}`);
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
      .delete(`http://localhost:8080/likes/unlike/${planId}/${usuarioId}`)
      .then((response) => {
        const respuesta = response.data.message;
        console.log("respuesta de quitarLike:" + response.data.message);
        if (respuesta === "true") {
          console.log("--------------likeQuitado---------------------");
          setLikedPlanes((prevLikedPlanes) =>
            prevLikedPlanes.filter((id) => id !== planId)
          );
          return axios.post(`http://localhost:8080/planes/unliked/${planId}`);
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
      .post(`http://localhost:8080/participantes/${planId}/${usuarioId}`)
      .then((response) => {
        const respuesta = response.data.message;
        console.log("respuesta de unirse: " + response.data.message);
        if (respuesta === "true") {
          // Actualizar el estado de likedPlans solo si se dio like correctamente
          console.log(response);
          setAddedPlans((prevAddedPlans) => [...prevAddedPlans, planId]);
          mostrarAlerta("Te has unido al plan con éxito.", "success", planId);
          return axios.post(`http://localhost:8080/planes/add/${planId}`);
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
      .delete(`http://localhost:8080/participantes/quit/${planId}/${usuarioId}`)
      .then((response) => {
        var respuesta = response.data.message;
        console.log("respuesta de quitarsePlan: " + response.data.message);
        if (respuesta === "true") {
          setAddedPlans((prevAddedPlans) =>
            prevAddedPlans.filter((id) => id !== planId)
          );
          mostrarAlerta("Te has quitado del plan con éxito.", "noSuccess", planId);
          return axios.post(`http://localhost:8080/planes/quit/${planId}`);
        } else {
          unirsePlan(planId);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const mostrarAlerta = (mensaje, tipo, planId) => {
    const alertDiv = document.createElement("div");
    alertDiv.classList.add("alert", "teUnes", "border", "border-dark");
  
    // Establecer la clase de color según el tipo de alerta
    if (tipo === "success") {
      alertDiv.style.backgroundColor = "rgb(252, 186, 3)";
      alertDiv.style.color = "black";
    } else {
      alertDiv.style.backgroundColor = "rgb(112, 107, 93)";
    }
  
    alertDiv.setAttribute("role", "alert");
    alertDiv.textContent += mensaje;
  
    // Obtener el plan correspondiente al planId
    const planElement = document.getElementById(`plan_${planId}`);
  
    // Insertar el alertDiv al lado del plan correspondiente
    planElement.insertAdjacentElement("afterend", alertDiv);
  
    // Ocultar la alerta después de unos segundos
    setTimeout(() => {
      planElement.parentElement.removeChild(alertDiv);
    }, 3000);
  };

  function compartir(id) {
    const ruta = `http://localhost:3000/plan/${id}`;
  
    // Crea un elemento de textarea temporal
    const textarea = document.createElement('textarea');
    textarea.value = ruta;
  
    // Agrega el textarea al DOM
    document.body.appendChild(textarea);
  
    // Selecciona y copia el contenido del textarea
    textarea.select();
    document.execCommand('copy');
  
    // Elimina el textarea del DOM
    document.body.removeChild(textarea);
  }

  moment.locale("es");

  return (
    <div>
      <div className="container">
        <div className="planes justify-content-center d-flex flex-column">
          {planes.map((plan, index) => {
            const handlePlanClick = loggedIn ? () => {} : handleShowModal;

            const handleUsernameClick = loggedIn ? () => {} : handleShowModal;

            const handleTitleClick = loggedIn ? () => {} : handleShowModal;

            const handleIconClick = loggedIn ? () => {} : handleShowModal;

            return (
              <div
                className="plan mx-auto d-flex flex-row align-items-center"
                key={`plan_${plan.id}`}
                id={`plan_${plan.id}`}
              >
                {loggedIn ? (
                  <div id="contenedor-alertas">
                  <Card
                    as={Link}
                    to={`http://localhost:3000/plan/${plan.id}`}
                    className="card-plan"
                    key={plan.id}
                  >
                    

                    <div className="d-flex align-items-center position-absolute">
                      {getAvatarCreador(plan.creador_id) ? (
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
                        to={`http://localhost:3000/perfil/${plan.creador_id}`}
                        className="usernameA text-white aSub"
                      >
                        {getNombreCreador(plan.creador_id)}
                      </Link>
                    </div>
                    {plan.imagen ? (
                      <Card.Img
                      variant="top"
                      src={plan.imagen}
                      alt="plan"
                    />
                    ) : (
                      <Card.Img
                      variant="top"
                      src={`https://picsum.photos/id/${index}/5000/3333`}
                      alt="plan"
                    />
                    )}
                    
                    <Card.Body>
                      <div className="d-flex justify-content-between">
                        <Card.Title
                          className="aSub"
                          style={{ cursor: "pointer" }}
                        >
                          <Link to={`http://localhost:3000/plan/${plan.id}`}>
                            {plan.titulo}
                          </Link>
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
                  </div>
                ) : (
                  <Card className="card-plan">
                    <div className="d-flex align-items-center position-absolute">
                    {getAvatarCreador(plan.creador_id) ? (
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
                        className="username text-white aSub"
                        onClick={handleUsernameClick}
                      >
                        {getNombreCreador(plan.creador_id)}
                      </Link>
                    </div>
                    <Card.Img
                      variant="top"
                      src={plan.imagen}
                      alt="plan"
                    />
                    <Card.Body onClick={handleTitleClick}>
                      <div className="d-flex justify-content-between">
                        <Card.Title
                          className="aSub"
                          style={{ cursor: "pointer" }}
                        >
                          <Link
                            to={`http://localhost:3000/plan/${plan.id}`}
                          >{plan.titulo}</Link>
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
                )}
                <div className="d-flex flex-column iconosPlanes">
                {loggedIn ? (
                    addedPlans.includes(plan.id) ? (
                      <FaPlusSquare
                        className="iconoPlanUnido"
                        onClick={() => quitarsePlan(plan.id)}
                      />
                    ) : (
                      <FaPlusSquare
                        className="iconoPlan"
                        onClick={() => unirsePlan(plan.id)}
                      />
                    )
                  ) : (
                    <FaPlusSquare onClick={handleIconClick} className="iconoPlan" />
                  )}
                  <div className="d-flex justify-content-center">
                    {addedPlans.includes(plan.id) ? (
                      <span>{plan.participantes + 1}</span>
                    ) : (
                      <span>{plan.participantes}</span>
                    )}

                  </div>
                  {loggedIn ? (
                    likedPlanes.includes(plan.id) ? (
                      <FaHeart
                        className="iconoPlanLikeado"
                        onClick={() => quitarLike(plan.id)}
                      />
                    ) : (
                      <FaHeart
                        className="iconoPlan"
                        onClick={() => darLike(plan.id)}
                      />
                    )
                  ) : (
                    <FaHeart onClick={handleIconClick} className="iconoPlan" />
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

                  {loggedIn ? (
                    <FaRegCommentDots
                      onClick={handleIconClick}
                      className="iconoPlan"
                    />
                  ) : (
                    <FaRegCommentDots
                      onClick={handleIconClick}
                      className="iconoPlan"
                    />
                  )}

                  {loggedIn ? (
                    <FaShareAlt className="iconoPlan" onClick={compartir(plan.id)}/>
                  ) : (
                    <FaShareAlt
                      onClick={handleIconClick}
                      className="iconoPlan"
                    />
                  )}
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
      <Modal show={showModal} onHide={handleCloseModal}>
        {tipoModal === "Login" ? (
          <LoginModal
            setTipoModal={setTipoModal}
            handleCloseModal={handleCloseModal}
          />
        ) : (
          <RegisterModal
            setTipoModal={setTipoModal}
            handleCloseModal={handleCloseModal}
          />
        )}
      </Modal>
    </div>
  );
}
export default Plan;
export function darLike() {}
export function quitarLike() {}
