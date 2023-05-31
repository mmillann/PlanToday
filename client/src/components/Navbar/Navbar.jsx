import React, { useEffect, useState } from "react";
import { FaHome, FaPlus, FaSistrix, FaUser } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, Form } from "react-bootstrap";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
//
import ReactSearchBox from "react-search-box";
import axios from "axios";
import { Link } from "react-router-dom";

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [tipoModal, setTipoModal] = useState("Login");
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const nombre = sessionStorage.getItem("nombre");
  const [dataSearch, setDataSearch] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };
  const handleUserChange = (value) => {
    setSelectedUser(value.toString().split(",")[1]);
  };
  var userData = [];

  useEffect(() => {
    var transformedData = [];
    axios.get(`http://localhost:8080/usuarios/nombre_usuario`).then((response) => {
      userData = response.data;
      transformedData = userData.map((obj) => {
        return {
          key: obj.id,
          value: "@" + obj.nombre_usuario,

        };
      });
      setDataSearch(transformedData);
    });

    axios.get(`http://localhost:8080/planes`).then((response) => {
      const planData = response.data;
      const transformedPlanData = planData.map((plan) => {
        return {
          key: plan.id,
          value: (plan.titulo).toLowerCase(),
        };
      });
      setDataSearch((prevData) => [...prevData, ...transformedPlanData]);
    });
  }, []);




  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);


  const handleShowSearchModal = () => setShowSearchModal(true);
  const handleCloseSearchModal = () => setShowSearchModal(false);


  const loggedIn = sessionStorage.getItem("isLoggedIn");


  // This function receives the value of isLoggedIn from the LoginModal
  const handleLogin = (value) => {
    setIsLoggedIn(value);
  };


  const handleLogout = () => {
    setIsLoggedIn(false);
    window.location.reload()
  };


  return (
    <header className="header container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light" style={{ padding: "20px" }}>

        <strong><a className="navbar-brand text-white" href="/">
          <a style={{ color: "rgb(255, 15, 155)" }}>P</a>lan <a style={{ color: "rgb(255, 15, 155)" }}>T</a>oday </a></strong>
        <div className="justify-content-center mx-0 d-flex">
          <div
            className="collapse navbar-collapse position-relative"
            id="navbarNavDropdown"
          >
            <Form className="iconos d-flex">
              <ReactSearchBox
                placeholder="🔍 Buscar"
                aria-label="Search"
                className="me-2"
                autoFocus="true"
                variant="warning"
                data={dataSearch}
                onSelect={(user) => () => {
                  handleUserSelect(user)
                }}
                onChange={handleUserChange}
              />
              {
                console.log(selectedUser)
                /*{ <Link to={`http://localhost:3000/perfil/${selectedUser}`} className="nombre text-white aSub">
                </Link> }*/
              }
            </Form>

            {loggedIn ? (
              <div className="upload d-flex align-items-center">
                <Button variant="light" className="uploadBoton">
                  <FaPlus />
                </Button>
              </div>
            ) : (
              <div className="upload d-flex align-items-center">
                <Button variant="light" className="uploadBoton" onClick={handleShowModal}>
                  <FaPlus />
                </Button>
              </div>
            )}

            {loggedIn ? (
              <div>
                <Button variant="light" className="uploadBoton1">
                <svg width="18" height="23" viewBox="0 1 18 19">
                <path d="M7.99999 19C9.10374 19 9.99905 18.1047 9.99905 17H6.00093C6.00093 18.1047 6.89624 19 7.99999 19ZM14.7309 14.3216C14.1272 13.6728 12.9975 12.6969 12.9975 9.5C12.9975 7.07188 11.295 5.12812 8.99937 4.65125V4C8.99937 3.44781 8.55187 3 7.99999 3C7.44812 3 7.00062 3.44781 7.00062 4V4.65125C4.70499 5.12812 3.00249 7.07188 3.00249 9.5C3.00249 12.6969 1.8728 13.6728 1.26905 14.3216C1.08155 14.5231 0.998429 14.7641 0.999991 15C1.00343 15.5125 1.40562 16 2.00312 16H13.9969C14.5944 16 14.9969 15.5125 15 15C15.0016 14.7641 14.9184 14.5228 14.7309 14.3216Z" fill="#C5C7CD">
                </path>
                <circle cx="12" cy="5" r="3.75" fill="blue" stroke="#F7F8FC" stroke-width="1.5">
                </circle>
                </svg>
                </Button>
              </div>
            ) : (
              <></>
            )}
<div class="separator-0-2-79"></div>
            {loggedIn ? (
              <b><div className="botones">
                Bienvenido {nombre} 👋
              </div>
            </b>
              
            ) : (
              <div className="botones">
                <Button variant="dark" onClick={() => {
                  handleShowModal(); setTipoModal("Login");
                }}>
                  Iniciar sesión
                </Button>
                <Button variant="dark" onClick={() => {
                  handleShowModal(); setTipoModal("Register");
                }}>
                  Registrarse
                </Button>
              </div>
            )}
          </div>
        </div>


        <Modal show={showModal} onHide={handleCloseModal}>
          {
            tipoModal == "Login" ? <LoginModal
              setTipoModal={setTipoModal}
              handleCloseModal={handleCloseModal}
            /> :
              <RegisterModal
                setTipoModal={setTipoModal}
                handleCloseModal={handleCloseModal}
              />}
        </Modal>
      </nav>
    </header>
  );
}


export default Navbar;
