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
} from "react-icons/fa";
import "./Plan.css";
import LoginModal from "../LoginModal/LoginModal";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

function Plan() {
  const [planes, setPlanes] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [imageSrcs, setImageSrcs] = useState([]);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleShowLoginModal = () => setShowLoginModal(true);
  const handleCloseLoginModal = () => setShowLoginModal(false);

  const loggedIn = sessionStorage.getItem("isLoggedIn");
  const id = sessionStorage.getItem("id");

  const observer = useRef();
  const lastPlanElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8080/planes?page=${page}`)
      .then((res) => {
        const shuffledPlanes = shuffleArray(res.data.slice(0, 10)).map(
          (plan) => ({
            ...plan,
            random: Math.random(),
          })
        );
        setPlanes((prevPlanes) => [...prevPlanes, ...shuffledPlanes]);

        // Load images
        const imagePromises = res.data.map(async (plan) => {
          const randomImage = await getRandomImage();
          return randomImage;
        });
        Promise.all(imagePromises).then((images) => {
          setImageSrcs((prevImageSrcs) => [...prevImageSrcs, ...images]);
        });

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  async function getRandomImage() {
    try {
      const countRes = await axios.get("https://picsum.photos/v2/list");
      const count = countRes.data.length;
      const randomIndex = Math.floor(Math.random() * count);
      const randomRes = await axios.get(
        `https://picsum.photos/id/${randomIndex}/info`
      );
      const randomImage = randomRes.data.download_url;
      return randomImage;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  function handleScroll() {
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    const scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;
    if (scrollTop + window.innerHeight + 50 >= scrollHeight) {
      setPage((prevPage) => prevPage + 1);
    }
  }

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

  function limitarDescripcion(descripcion) {
    const words = descripcion.split(" ");
    if (words.length > 19) {
      return words.slice(0, 19).join(" ") + "...";
    } else {
      return descripcion;
    }
  }

  const [likedPlans, setLikedPlans] = useState([]);

  const darLike = (planId) => {
    if (likedPlans.includes(planId)) {
      quitarLike(planId);
      return;
    }
    axios
      .post(`http://localhost:8080/planes/liked/${planId}`)
      .then((response) => {
        console.log(response.data); // Imprime "Todo bien" si la operación fue exitosa
        console.log(planId);
        setLikedPlans((prevLikedPlans) => [...prevLikedPlans, planId]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const quitarLike = (planId) => {
    axios
      .post(`http://localhost:8080/planes/unliked/${planId}`)
      .then((response) => {
        console.log(response.data); // Imprime "Todo bien" si la operación fue exitosa
        console.log(planId);
        setLikedPlans((prevLikedPlans) =>
          prevLikedPlans.filter((id) => id !== planId)
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [addedPlans, setAddedPlans] = useState([]);

  const unirsePlan = (planId) => {
    if (addedPlans.includes(planId)) {
      quitarsePlan(planId);
      return;
    }
    axios
      .post(`http://localhost:8080/planes/add/${planId}`)
      .then((response) => {
        console.log(response.data); // Imprime "Todo bien" si la operación fue exitosa
        console.log(planId);
        setAddedPlans((prevAddedPlans) => [...prevAddedPlans, planId]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const quitarsePlan = (planId) => {
    axios
      .post(`http://localhost:8080/planes/quit/${planId}`)
      .then((response) => {
        console.log(response.data); // Imprime "Todo bien" si la operación fue exitosa
        console.log(planId);
        setAddedPlans((prevAddedPlans) =>
          prevAddedPlans.filter((id) => id !== planId)
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  moment.locale("es");

  return (
    <div>
      <div className="container mt-4 ">
        <div className="planes justify-content-center d-flex flex-column">
          {planes.map((plan, index) => {
            return (
              <div
                ref={lastPlanElementRef}
                key={Math.random()}
                className="plan mx-auto d-flex flex-row align-items-center"
              >
                <Card className="card-plan">
                  <div className="d-flex align-items-center position-absolute">
                    {loggedIn ? (
                      <FaUserCircle
                        className="userImg"
                        style={{
                          fontSize: "3rem",
                          margin: "0.3rem",
                          cursor: "pointer",
                        }}
                      />
                    ) : (
                      <FaUserCircle
                        onClick={handleShowLoginModal}
                        className="userImg"
                        style={{
                          fontSize: "3rem",
                          margin: "0.3rem",
                          cursor: "pointer",
                        }}
                      />
                    )}
                    {loggedIn ? (
                      <Link to={`http://localhost:3000/perfil/${plan.creador_id}`} className="username text-white aSub">
                        {getNombreCreador(plan.creador_id)}
                      </Link>
                    ) : (
                      <Link
                        className="username text-white aSub"
                        onClick={handleShowLoginModal}
                      > 
                        {getNombreCreador(plan.creador_id)}
                      </Link>
                    )}
                  </div>
                  <Card.Img variant="top" src={imageSrcs[index]} alt="plan" />
                  <Card.Body>
                    {loggedIn ? (
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
                    ) : (
                      <div
                        className="d-flex justify-content-between"
                        onClick={handleShowLoginModal}
                      >
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
                    )}

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
                <div
                  className="d-flex flex-column iconosPlanes"
                  onClick={() => unirsePlan(plan.id)}
                >
                  {loggedIn ? (
                    <FaPlusSquare className="iconoPlan" />
                  ) : (
                    <FaPlusSquare
                      onClick={handleShowLoginModal}
                      className="iconoPlan"
                    />
                  )}
                  <div className="d-flex justify-content-center">
                    {addedPlans.includes(plan.id) ? (
                      <span>{plan.participantes + 1}</span>
                    ) : (
                      <span>{plan.participantes}</span>
                    )}
                  </div>
                  {loggedIn ? (
                    <FaHeart
                      className="iconoPlan"
                      onClick={() => darLike(plan.id)}
                    />
                  ) : (
                    <FaHeart
                      onClick={handleShowLoginModal}
                      className="iconoPlan"
                    />
                  )}

                  <div
                    id={`likes_${plan.id}`}
                    className="d-flex justify-content-center"
                    onClick={() => darLike(plan.id)}
                  >
                    {likedPlans.includes(plan.id) ? (
                      <span>{plan.likes + 1}</span>
                    ) : (
                      <span>{plan.likes}</span>
                    )}
                  </div>

                  {loggedIn ? (
                    <FaRegCommentDots className="iconoPlan" />
                  ) : (
                    <FaRegCommentDots
                      onClick={handleShowLoginModal}
                      className="iconoPlan"
                    />
                  )}

                  <div className="d-flex justify-content-center">
                    {plan.comentarios}
                  </div>
                  {loggedIn ? (
                    <FaShareAlt className="iconoPlan" />
                  ) : (
                    <FaShareAlt
                      onClick={handleShowLoginModal}
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
      <Modal show={showLoginModal} onHide={handleCloseLoginModal}>
        <LoginModal show={showLoginModal} handleClose={handleCloseLoginModal} />
      </Modal>
    </div>
  );
}
export default Plan;
