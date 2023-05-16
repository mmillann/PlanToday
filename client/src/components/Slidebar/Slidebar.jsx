import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./slidebar.css";
import { FaHome, FaSearch, FaUser, FaCog, FaBars } from "react-icons/fa";
import LoginModal from "../LoginModal/LoginModal";
import { Modal } from "react-bootstrap";

function Slidebar() {
  const screenWidth = useRef(window.innerWidth);
  const loggedIn = sessionStorage.getItem("isLoggedIn");
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleShowLoginModal = () => setShowLoginModal(true);
  const handleCloseLoginModal = () => setShowLoginModal(false);

  const initialShowSidebar = screenWidth.current >= 1600 ? true : false;
  const [showSidebar, setShowSidebar] = useState(initialShowSidebar);
  const idUsuario = sessionStorage.getItem("id");
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
        style={{ display: screenWidth.current < 1600 ? "block" : "none" , borderRadius: "35px", padding: "0"}}
      >
        <div className="menuMovil d-flex align-items-center">
          {showSidebar ? <FaBars className="text-white"/> : <FaBars />}
          {!showSidebar ? <span className="menuSpan">&nbsp; Menu</span> : ""}
        </div>
      </div>
      <div className={`menuIzq p-4 ${showSidebar ? "" : "hidden"}`}>
        
        {loggedIn ? (
            <span>
              <Link
              to={"http://localhost:3000/"}
              className="link list-group-item font-weight-bold mb-3 p-3 d-flex align-items-center"
            >
              <FaHome style={{ fontSize: "24px" }} />
              <span style={{ paddingLeft: "10px" }}>Inicio</span>
            </Link>
            </span>
            ) : (
              <span>
              <Link
            onClick={handleShowLoginModal}
            className="link list-group-item font-weight-bold mb-3 p-3 d-flex align-items-center"
          >
            <FaHome style={{ fontSize: "24px" }} />
            <span style={{ paddingLeft: "10px" }}>Inicio</span>
          </Link>
              </span>
              
            )}

          
        {loggedIn ? (
              <Link 
              to=""
              className="link list-group-item font-weight-bold mb-3 p-3 d-flex align-items-center"
            >
              <FaSearch style={{ fontSize: "24px" }} />
              <span style={{ paddingLeft: "10px" }}>Explorar</span>
            </Link>
            ) : (
              <Link 
            onClick={handleShowLoginModal}
            className="link list-group-item font-weight-bold mb-3 p-3 d-flex align-items-center"
          >
            <FaSearch style={{ fontSize: "24px" }} />
            <span style={{ paddingLeft: "10px" }}>Explorar</span>
          </Link>
            )}
          
        {loggedIn ? (
          <Link 
          to={`http://localhost:3000/perfil/${idUsuario}`}
          className="link list-group-item font-weight-bold mb-3 p-3 d-flex align-items-center"
        >
           <FaUser style={{ fontSize: "24px" }} />
            <span style={{ paddingLeft: "10px" }}>Perfil</span>
          </Link>
        ) : (
          <Link
            onClick={handleShowLoginModal}
            className="link list-group-item font-weight-bold mb-3 p-3 d-flex align-items-center"
          >
            <FaUser style={{ fontSize: "24px" }} />
            <span style={{ paddingLeft: "10px" }}>Perfil</span>
          </Link>
        )}
        <span>
          
        {loggedIn ? (
          <Link
          to={""}
          className="link list-group-item font-weight-bold mb-3 p-3 d-flex align-items-center"
        >
          <FaCog style={{ fontSize: "24px" }} />
          <span style={{ paddingLeft: "10px" }}>Configuración</span>
        </Link>
        ) : (
          <Link
            onClick={handleShowLoginModal}
            className="link list-group-item font-weight-bold mb-3 p-3 d-flex align-items-center"
          >
            <FaCog style={{ fontSize: "24px" }} />
            <span style={{ paddingLeft: "10px" }}>Configuración</span>
          </Link>
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