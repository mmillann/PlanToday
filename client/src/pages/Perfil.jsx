import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Navbar from "../components/Navbar";
import { FaUser } from 'react-icons/fa';
import Plan from "../components/Plan";
import MyCarousel from "../components/MyCarousel";
import PlanPerfil from "../components/PlanPerfil";


function Perfil() {

  return (
    <div>
      <div className="container-fluid">
        <Navbar />
        </div>
        <div className="infoPerfil">
            <PlanPerfil />
        </div>
        
    </div>
  );
}

export default Perfil;