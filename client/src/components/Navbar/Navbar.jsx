import React, { useState } from "react";
import { FaHome, FaPlus, FaSistrix, FaUser } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, Form } from "react-bootstrap";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal"; // Importa LoginModal aquí

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [tipoModal, setTipoModal] = useState("Login");
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const nombre = sessionStorage.getItem("nombre");

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
      <nav className="navbar navbar-expand-lg navbar-light" style={{padding:"20px"}}>
        
        <strong><a className="navbar-brand text-white" href="/">
        <a style={{color:"rgb(255, 15, 155)"}}>P</a>lan <a style={{color:"rgb(255, 15, 155)"}}>T</a>oday </a></strong>
        
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        
        <div className="justify-content-center mx-auto d-flex">
          <div
            className="collapse navbar-collapse position-relative"
            id="navbarNavDropdown"
          >
            <Form className="iconos d-flex">
              <Form.Control
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Search"
              />
              <Button
                className="busca"
                variant="warning"
              >
                <FaSistrix />
              </Button>
            </Form>
            {loggedIn ? (
              <div className="upload d-flex align-items-center">
              <Button variant="light" className="uploadBoton">
                <FaPlus />
              </Button>
            </div>
            ) : (
              <div className="upload d-flex align-items-center">
              <Button variant="light" className="uploadBoton" onClick={handleShowLoginModal}>
                <FaPlus />
              </Button>
            </div>
            )}
            
            {loggedIn ? (
              <b><div className="botones">
                Bienvenido {nombre} 👋 
              </div></b>
            ) : (
              <div className="botones">
                <Button variant="dark" onClick={() => 
                {
                    handleShowModal(); setTipoModal("Login");  
                }}>
                  Iniciar sesión
                </Button>
                <Button variant="dark" onClick={() => 
                {
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
          /> }
        </Modal>
      </nav>
    </header>
  );
}

export default Navbar;
