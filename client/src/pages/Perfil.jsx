import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";  // Agrega esta línea
import Navbar from "../components/Navbar/Navbar";
import { FaUserCircle } from 'react-icons/fa';
import Galeria from "../components/Galeria/Galeria";
import LoginModal from "../components/LoginModal/LoginModal";
import Slidebar from "../components/Slidebar/Slidebar";

function Perfil() {
  const nombre = sessionStorage.getItem("nombre");
  const { id } = useParams();
  console.log(id);
  return (

    <div className="d-flex-column justify-content-center">
    <div className="container-fluid position-fixed fixed-top cab">
      <Navbar />
    </div>
    <div className="mt-3">
    <div className="slidebar mt-5">
      <Slidebar />
    </div>
    <div className="d-flex justify-content-center">
        <div className="infoPerfil d-flex flex-column mt-5">
            <FaUserCircle style={{fontSize: "10rem"}}/>
            <h5 className="text-center mt-2">{nombre}</h5>
        </div>
        </div>
        <div className="galeria">
          <Galeria idUsuario={id}/>
        </div>
        </div>
  </div>
  );
}

export default Perfil;