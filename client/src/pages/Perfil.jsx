import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { FaUserCircle } from 'react-icons/fa';
import Galeria from "../components/Galeria";


function Perfil() {

  return (
    <div>
      <div className="container-fluid">
        <Navbar />
        </div>
        <div className="infoPerfil d-flex justify-content-center mt-5">
            <FaUserCircle style={{fontSize: "10rem"}}/>
        </div>
        <div className="mt-5">
          <Galeria />
        </div>
    </div>
  );
}

export default Perfil;