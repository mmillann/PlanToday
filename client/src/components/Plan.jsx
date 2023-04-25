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
import LoginModal from "./LoginModal";
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

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8080/planes?page=${page}`)
      .then((res) => {
        setPlanes((prevPlanes) => [
          ...prevPlanes,
          ...res.data.slice(0, 10).map((plan) => ({
            ...plan,
            random: Math.random(),
          })),
        ]);

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

  moment.locale("es");

  return (
    <div>
      <div className="container mt-4 ">
        <h1 className="text-center">Planes</h1>
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
                    <FaUserCircle onClick={handleShowLoginModal}
                      style={{ fontSize: "3rem", margin: "0.3rem", cursor: "pointer"}}
                    />
                    <Link className="username text-white" onClick={handleShowLoginModal}>
                      {getNombreCreador(plan.creador_id)}
                    </Link>
                  </div>
                  <Card.Img variant="top" src={imageSrcs[index]} alt="plan" />
                  <Card.Body>
                    <div className="d-flex justify-content-between" onClick={handleShowLoginModal}>
                      <Card.Title style={{cursor: "pointer"}}>{plan.titulo}</Card.Title>
                      <Card.Text style={{cursor: "pointer"}}>{plan.ubicacion}</Card.Text>
                    </div>
                    <Card.Text>
                      {limitarDescripcion(plan.descripcion)}
                    </Card.Text>
                  </Card.Body >
                  <Card.Footer className="d-flex justify-content-between" style={{cursor: "default"}}>
                    <small className="text-muted">
                      {moment(plan.fecha).format("DD/MM/YYYY")}
                    </small>
                  </Card.Footer>
                </Card>
                <div className="d-flex flex-column iconosPlanes">
                  <FaPlusSquare
                    onClick={handleShowLoginModal}
                    className="iconoPlan"
                  />
                  <FaHeart
                    onClick={handleShowLoginModal}
                    className="iconoPlan"
                  />
                  <FaRegCommentDots
                    onClick={handleShowLoginModal}
                    className="iconoPlan"
                  />
                  <FaShareAlt
                    onClick={handleShowLoginModal}
                    className="share"
                  />
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
