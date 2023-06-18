import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"; // Agrega esta línea
import Navbar from "../components/Navbar/Navbar";
import { FaPencilAlt, FaUserCircle } from "react-icons/fa";
import Galeria from "../components/Galeria/Galeria";
import Slidebar from "../components/Slidebar/Slidebar";
import axios from "axios";
import { UploadPerfil } from "../components/firebase/config.js";

function Perfil() {
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

  const getNombreCreador = (id) => {
    const user = users.find((user) => id === user.id.toString()); // Convertir `id` a una cadena antes de comparar
    if (user) {
      return user.nombre_usuario; // Cambiar `user.nombre_usuario` por `user.nombre_completo` para obtener el nombre completo del creador
    } else {
      return "username";
    }
    
  };

  const getNombreCompletoCreador = (id) => {
    const user = users.find((user) => id === user.id.toString()); // Convertir `id` a una cadena antes de comparar
    if (user) {
      return user.nombre_completo; // Cambiar `user.nombre_usuario` por `user.nombre_completo` para obtener el nombre completo del creador
    } else {
      return "username";
    }
  };

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
            {avatar != "default" && avatar != "" ? (
              <img
                src={avatar}
                alt=""
                className="d-flex align-content-center"
                style={{
                  width: "10rem",
                  height: "10rem",
                  borderRadius: "50%",
                }}
              />
            ) : (
              <FaUserCircle
                className="useimg"
                style={{ width: "400px", height: "10rem" }}
              />
            )}
            
            {id == usuarioId ? (
              <label htmlFor="avatarInput" className="faPencilAltIcon">
              <FaPencilAlt className="iconoAvatar"/>
              <input
                type="file"
                id="avatarInput"
                className="fileInput"
                style={{ display: "none" }}
                onChange={(e) => UploadPerfil(e.target.files[0])}
              />
            </label>
            ) : (
              <div></div>
            )}
              
            <h5 className="text-center mt-2">{getNombreCreador(id)}</h5>
            <span className="m-1 text-muted text-center">
              {getNombreCompletoCreador(id)}
            </span>
          </div>
        </div>
        <div className="galeria">
          <Galeria idUsuario={id} />
        </div>
      </div>
    </div>
  );
}

export default Perfil;
