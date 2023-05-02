import React, { useState } from "react";
import { FaHome, FaSistrix, FaUser } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, Form } from "react-bootstrap";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal"; // Importa LoginModal aquí

function Navbar() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleShowLoginModal = () => setShowLoginModal(true);
  const handleCloseLoginModal = () => setShowLoginModal(false);

  const handleShowRegisterModal = () => setShowRegisterModal(true);
  const handleCloseRegisterModal = () => setShowRegisterModal(false);

  const handleShowSearchModal = () => setShowSearchModal(true);
  const handleCloseSearchModal = () => setShowSearchModal(false);

  // This function receives the value of isLoggedIn from the LoginModal
  const handleLogin = (value) => {
    setIsLoggedIn(value);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <header className="header container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand text-white" href="/">
          Plan Today
        </a>
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
                className="d-flex align-items-center"
                variant="warning"
                onClick={handleShowSearchModal}
              >
                <FaSistrix />
              </Button>
            </Form>

            {isLoggedIn ? (
              <div>
                Bienvenido
                <Button variant="dark" onClick={handleLogout}>
                  Cerrar sesión
                </Button>
              </div>
            ) : (
              <div className="botones">
                <Button variant="dark" onClick={handleShowLoginModal}>
                  Iniciar sesión
                </Button>
                <Button variant="dark" onClick={handleShowRegisterModal}>
                  Registrarse
                </Button>
              </div>
            )}
          </div>
        </div>

        <Modal show={showLoginModal} onHide={handleCloseLoginModal}>
          {/* Pass the handleLogin function to the LoginModal */}
          <LoginModal
            show={showLoginModal}
            handleClose={handleCloseLoginModal}
            handleLogin={handleLogin}
          />
        </Modal>

        <Modal show={showRegisterModal} onHide={handleCloseRegisterModal}>
          <RegisterModal
            show={showRegisterModal}
            handleClose={handleCloseRegisterModal}
          />
        </Modal>
      </nav>
    </header>
  );
}

export default Navbar;