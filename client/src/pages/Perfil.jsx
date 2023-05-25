import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";  // Agrega esta línea
import Navbar from "../components/Navbar/Navbar";
import { FaUserCircle } from 'react-icons/fa';
import Galeria from "../components/Galeria/Galeria";
import LoginModal from "../components/LoginModal/LoginModal";
import Slidebar from "../components/Slidebar/Slidebar";
import axios from "axios";

function Perfil() {
  const nombre = sessionStorage.getItem("nombre");
  const [users, setUsers] = useState([]);
  const { id } = useParams();
  const [usuariosSeguidos, setUsuariosSeguidos] = useState([]);

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

  const seguirUsuario = (usuarioId) => {
    const seguidorId = sessionStorage.getItem("id");

    axios
      .post(`http://localhost:8080/perfil/seguir/${seguidorId}/${usuarioId}`)
      .then((response) => {
        const respuesta = response.data.message;
        console.log("Respuesta de seguirUsuario: " + respuesta);
        if (respuesta === "Se ha seguido al usuario.") {
          // Actualizar el estado de usuarios seguidos solo si se siguió correctamente
          setUsuariosSeguidos((prevUsuariosSeguidos) => [...prevUsuariosSeguidos, usuarioId]);
        } else {
          return dejarDeSeguirUsuario(usuarioId);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const dejarDeSeguirUsuario = (usuarioId) => {
    const seguidorId = sessionStorage.getItem("id");

    axios
      .delete(`http://localhost:8080/dejarseguir/${seguidorId}/${usuarioId}`)
      .then((response) => {
        const respuesta = response.data.message;
        console.log("Respuesta de dejarDeSeguirUsuario: " + respuesta);
        if (respuesta === "Se ha dejado de seguir al usuario.") {
          setUsuariosSeguidos((prevUsuariosSeguidos) =>
            prevUsuariosSeguidos.filter((id) => id !== usuarioId)
          );
        } else {
          return seguirUsuario(usuarioId);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };



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
            <FaUserCircle style={{ fontSize: "10rem" }} />
            <h5 className="text-center mt-2">{getNombreCreador(id)}</h5>
            <span className="m-1 text-muted text-center">
              {getNombreCompletoCreador(id)}
            </span>
            <div className="d-flex justify-content-center mt-3">
              {usuariosSeguidos.includes(id) ? (
                <button
                  className="btn btn-danger"
                  onClick={() => dejarDeSeguirUsuario(id)}>
                  Dejar de seguir
                </button>
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={() => seguirUsuario(id)}
                >
                  Seguir
                </button>
              )}
            </div>
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