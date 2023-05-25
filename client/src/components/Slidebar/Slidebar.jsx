import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./slidebar.css";
import { FaHome, FaSearch, FaUser, FaCog, FaArrowCircleDown, FaArrowCircleRight, FaAd, FaBaby, FaPlus, FaPaintBrush, FaEdit } from "react-icons/fa";
import LoginModal from "../LoginModal/LoginModal";
import { Modal, Button } from "react-bootstrap";


function Slidebar() {
  const screenWidth = useRef(window.innerWidth);
  const loggedIn = sessionStorage.getItem("isLoggedIn");
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleShowLoginModal = () => setShowLoginModal(true);
  const handleCloseLoginModal = () => setShowLoginModal(false);

  const initialShowSidebar = screenWidth.current >= 1600 ? true : false;
  const [showSidebar, setShowSidebar] = useState(initialShowSidebar);

  const [isOpen, setIsOpen] = useState(false);
  const idUsuario = sessionStorage.getItem("id");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick = (button) => {
    // Lógica para manejar el clic en los botones
    console.log(`Botón ${button} clickeado`);
  };

  useEffect(() => {
    const handleResize = () => {
      screenWidth.current = window.innerWidth;
      setShowSidebar(screenWidth.current >= 1600);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        className="hide-sidebar-button"
        onClick={() => setShowSidebar(!showSidebar)}
        style={{ display: screenWidth.current < 1600 ? "block" : "none", borderRadius: "35px", padding: "0" }}
      >
      </div>
      <div className={`menuIzq p-4`}>

        {loggedIn ? (
          <span>
            <Button
              onClick={() => {
                window.location.href = "/";
              }}

              className="link list-group-item font-weight-bold mb-3 p-3 d-flex align-items-center"
            >
              <FaHome style={{ fontSize: "24px", color:"rgb(255, 15, 155)" }} />
              <span style={{ paddingLeft: "10px" }}>Inicio</span>
            </Button>
          </span>
        ) : (
          <span>
            <Button
              onClick={() => {
                window.location.href = "/";
              }}

              className="link list-group-item font-weight-bold mb-3 p-3 d-flex align-items-center"
            >
              <FaHome style={{ fontSize: "24px", color:"rgb(255, 15, 155)" }} />
              <span style={{ paddingLeft: "10px" }}>Inicio</span>
            </Button>
          </span>
        )}

        {loggedIn ? (
          <Link
            to={`http://localhost:3000/perfil/${idUsuario}`}
            className="link list-group-item font-weight-bold mb-3 p-3 d-flex align-items-center"
          >
            <FaUser style={{ fontSize: "24px", color:"rgb(255, 15, 155)" }} />
            <span style={{ paddingLeft: "10px" }}>Perfil Usuario</span>
          </Link>
        ) : (
          <></>
        )}

        {loggedIn ? (
          <span>
            <Button
              onClick={() => {
                window.location.href = "/";
              }}

              className="link list-group-item font-weight-bold mb-3 p-3 d-flex align-items-center"
            >
              <FaPlus style={{ fontSize: "24px", color:"rgb(255, 15, 155)" }} />
              <span style={{ paddingLeft: "10px" }}>Añadir Plan</span>
            </Button>
          </span>
        ) : (
          <span>
            <Button
              onClick={handleShowLoginModal}
              className="link list-group-item font-weight-bold mb-3 p-3 d-flex align-items-center"
            >
              <FaPlus style={{ fontSize: "24px", color:"rgb(255, 15, 155)" }} />
              <span style={{ paddingLeft: "10px" }}>Añadir Plan</span>
            </Button>
          </span>
        )}


        {loggedIn ? (
          <Button
            
            className="link list-group-item font-weight-bold mb-3 p-3 d-flex align-items-center"
          >
            <FaSearch style={{ fontSize: "24px",color:"rgb(255, 15, 155)" }} />
            <span style={{ paddingLeft: "10px" }}>Explorar</span>
          </Button>
        ) : (
          <Button
            onClick={handleShowLoginModal}
            className="link list-group-item font-weight-bold mb-3 p-3 d-flex align-items-center"
          >
            <FaSearch style={{ fontSize: "24px", color:"rgb(255, 15, 155)" }} />
            <span style={{ paddingLeft: "10px" }}>Explorar</span>
          </Button>
          
        )}

        

        <span>
          {loggedIn ? (
            <div class="dropdown">
              <Button
                onClick={toggleDropdown}
                className="link list-group-item font-weight-bold mb-3 p-3 d-flex align-items-center" >
                <FaCog style={{ fontSize: "24px",color:"rgb(255, 15, 155)" }} />
                <span style={{ paddingLeft: "10px" }}>Configuración
                </span>
              </Button>
              {isOpen && (
                <div className="submenu" >
                  <Button
                    onClick={() => {
                      window.location.href="http://localhost:3000/perfil"
                    }}
                    className="link list-group-item font-weight-bold mb-3 p-3 d-flex align-items-center" >
                    <FaEdit style={{ fontSize: "18px", color:"rgb(255, 15, 155)" }} />
                    <span style={{ paddingLeft: "10px" }}>Editar Perfil</span>
                  </Button>

                  <Button
                    onClick={() => {
                      sessionStorage.clear();
                      window.location.href = "/";
                    }}
                    className="link list-group-item font-weight-bold mb-3 p-3 d-flex align-items-center"
                  >
                    <FaArrowCircleRight style={{ fontSize: "18px",color:"rgb(255, 15, 155)" }} />
                    <span style={{ paddingLeft: "10px" }}>Cerrar Sesión</span>
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <></>
          )}
            
        </span>
      </div>
      <style>
        {`
          .hidden {
            display: none;
          }
        `}
      </style>
      <Modal show={showLoginModal} onHide={handleCloseLoginModal}>
        <LoginModal
          show={showLoginModal}
          handleClose={handleCloseLoginModal}
        />
      </Modal>
    </>
  );
}

export default Slidebar;