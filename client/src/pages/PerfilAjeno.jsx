import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { FaUserCircle } from "react-icons/fa";
import GaleriaAjena from "../components/Galeria/GaleriaAjena";
import Slidebar from "../components/Slidebar/Slidebar";
import { useParams } from "react-router-dom";

function PerfilAjeno() {
  const { idUsuario } = useParams();
  const nombre = sessionStorage.getItem("nombre");
    console.log();
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
            <FaUserCircle style={{ fontSize: "10rem" }} />
            <h5 className="text-center mt-2">{nombre}</h5>
          </div>
        </div>
        <div className="e">
          <GaleriaAjena idUsuario={idUsuario} />
        </div>
      </div>
    </div>
  );
}

export default PerfilAjeno;