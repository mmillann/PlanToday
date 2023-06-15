import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"; // Agrega esta línea
import Navbar from "../components/Navbar/Navbar";
import { FaPencilAlt, FaUserCircle } from "react-icons/fa";
import Galeria from "../components/Galeria/Galeria";
import Slidebar from "../components/Slidebar/Slidebar";
import axios from "axios";
import { UploadPerfil } from "../components/firebase/config.js";
import PlanPendiente from "../components/PlanPendiente/PlanPendiente";

function PlanesPendientes() {
  const nombre = sessionStorage.getItem("nombre");
  const [users, setUsers] = useState([]);
  const { id } = useParams();
  const usuarioId = sessionStorage.getItem("id");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    const obtenerAvatar = async () => {
      try {
        const respuesta = await axios.get(
          `http://localhost:8080/usuarios/obteneravatar/${id}`
        );
        setAvatar(respuesta.data[0].AVATAR);
        console.log(respuesta.data[0].AVATAR);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerAvatar();
  }, []);
  const [seguido, setSeguido] = useState(false);

  const handleSeguir = () => {
    seguido ? setSeguido(false) : setSeguido(true);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:8080/usuarios");
        setUsers(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsers();
  }, []);


  console.log(id);
  return (
    <div className="d-flex-column justify-content-center">
      <div className="container-fluid position-fixed fixed-top cab">
        <Navbar />
      </div>
      <div className="mt-3">
        <div className="slidebarEE">
          <Slidebar />
        </div>
        <div className="galeria">
            
          <PlanPendiente idUsuario={id}/>
        </div>
    </div>
    </div>
  );
}

export default PlanesPendientes;