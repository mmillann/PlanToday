import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { FaRegUserCircle } from "react-icons/fa";
import moment from "moment";
import "./PlanCard.css"
import { Link } from "react-router-dom";

function PlanCard({ plan }) {
  const { id, ubicacion, descripcion, imagen, creador_id, fecha_hora } = plan;
  const [imageSrc, setImageSrc] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchRandomImage = async () => {
      const randomImage = await getRandomImage();
      setImageSrc(randomImage);
    };
    fetchRandomImage();
  }, []);

  async function getRandomImage() {
    try {
      const countRes = await axios.get("https://picsum.photos/v2/list");
      const count = countRes.data.length;
      const randomIndex = Math.floor(Math.random() * count);
      const randomRes = await axios.get(
        `https://picsum.photos/id/${randomIndex}/info`
      );
      const randomImage = randomRes.data.download_url;
      return randomImage;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  function limitarDescripcion(descripcion) {
    const words = descripcion.split(" ");
    if (words.length > 10) {
      return words.slice(0, 10).join(" ") + "...";
    } else {
      return descripcion;
    }
  }

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:8080/usuarios");
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsers();
  }, []);

  const getNombreCreador = (idCreador) => {
    const user = users.find((user) => idCreador === user.id);
    if (user) {
      return user.nombre_usuario;
    } else {
      return "username";
    }
  };

  return (
    <Card
      style={{
        width: "18rem",
        height: "20rem",
        color: "#ffffff",
      }}
    >
      <div className="d-flex align-items-center position-absolute">
        <Link className="nombre text-white aSub">
          {getNombreCreador(plan.creador_id)}
        </Link>
      </div>
      <Card.Img
        variant="top"
        src={imageSrc}
        style={{ height: "12rem", objectFit: "cover" }}
      />
      <Card.Body
        className="text-white"
        style={{ backgroundColor: "transparent", height: "3px" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Card.Title style={{ marginRight: "1rem" }}><Link className="aSub">{ubicacion}</Link></Card.Title>
          <Card.Subtitle className="text-white text-muted">
            {moment(fecha_hora).format("DD/MM/YYYY")}
          </Card.Subtitle>
        </div>
        <Card.Text style={{ height: "7rem", overflow: "hidden" }}>
          {limitarDescripcion(descripcion)}
        </Card.Text>
        <div className="">
          <div className="infoUser">
            <div className="user-info">
              <Card.Text className="m-1 position-absolute top-0 start-0">
                <FaRegUserCircle size={"2rem"} />
              </Card.Text>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PlanCard;
