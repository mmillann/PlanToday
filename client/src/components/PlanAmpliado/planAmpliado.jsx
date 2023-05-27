import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { FaPlusSquare, FaUserCircle } from "react-icons/fa";
import Slidebar from "../Slidebar/Slidebar";
import axios from "axios";

function PlanAmpliado() {
  const [plan, setPlan] = useState([]);
  const [comentarios, setComentarios] = useState([]);
  const [, setName] = useState([]);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const obtenerPlan = async () => {
      try {
        const respuesta = await axios.get(`http://localhost:8080/planes/${id}`);
        setPlan(respuesta.data);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerPlan();
  }, [id]);

  useEffect(() => {
    const obtenerNombre = async () => {
      try {
        const respuesta = await axios.get(
          `http://localhost:8080/usuarios/nombre/${id}`
        );
        setName(respuesta.data);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerNombre();
  }, [id]);

  useEffect(() => {
    const obtenerComentarios = async () => {
      try {
        const respuesta = await axios.get(
          `http://localhost:8080/comentarios/plan/${id}`
        );
        console.log(respuesta.data);
        setComentarios(respuesta.data);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerComentarios();
  }, [id]);

  const nombre = sessionStorage.getItem("nombre");
  const [users, setUsers] = useState([]);

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

  const getNombreCreador = (idUser) => {
    const user = users.find((user) => idUser === user.id); // Comparar `idUser` directamente con `user.id`
    console.log("user", user);
    if (user) {
      return user.nombre_usuario; // Usar `user.nombre_completo` en lugar de `user.nombre_usuario`
    } else {
      return "username";
    }
  };

  return (
    <div className="d-flex-column justify-content-center">
      <div className="container-fluid position-fixed fixed-top cab">
        <Navbar />
      </div>
      <div className="mt-3">
        <div className="slidebar mt-5">
          <Slidebar />
        </div>
      </div>
      <div className="d-flex flex-row justify-content-center align-items-center">

      <div className="d-flex flex-column align-items-center justify-content-center">
        <h1 className="mt-5 tituloPlanA align-left">{plan.titulo}</h1>
        <img src="https://media.traveler.es/photos/613760adcb06ad0f20e11980/master/w_1600%2Cc_limit/202931.jpg" width={"35%"}/>
        </div>
      <div className="comments-container">
        <div className="comments-box">
          {comentarios.map((comentario) => (
            <div key={comentario.id} className="comment d-flex flex-column">
              <div className="comment-user d-flex flex-row align-items-center">
                <FaUserCircle />
                <p className="m-1">{getNombreCreador(comentario.usuario_id)}</p>
              </div>
              <div className="comment-content">
                <p>{comentario.contenido}</p>
              </div>
              <hr className="sep" />
            </div>
          ))}
        </div>
      </div>
      </div>
      <p className="m-4 descripcionPlanA">{plan.descripcion}</p>
      
      <div className="botonesPlanA d-flex flex-row align-items-center">
            <div className="d-flex flex-column">
            <FaPlusSquare
              className="iconoPlan"
            />
            </div>
      </div>
    </div>
  );
}

export default PlanAmpliado;
