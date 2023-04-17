import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import Card from "react-bootstrap/Card";
import { FaUser } from "react-icons/fa";
import "./Plan.css";

function Plan() {
  const [planes, setPlanes] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [imageSrcs, setImageSrcs] = useState([]);
  const [creador_id, setCreador_id] = useState([]);

  useEffect(() => {
    const fetchPlanes = async () => {
      try {
        const res1 = await axios.get("http://localhost:8080/planes");
        const creador_id = res1.data.map((plan) => plan.id_creador);
        setCreador_id(creador_id);
        setPlanes(
          res1.data
            .map((plan) => ({
              ...plan,
              creador_id: plan.id_creador,
              random: Math.random(), // generate a random number
            }))
            .sort((a, b) => a.random - b.random) // sort the array by the generated random number
        );
        const fetchUsuarios = async () => {
          try {
            console.log(creador_id);
            console.log(res1.data)
            if (creador_id.length > 0) {
              const res2 = await axios.get(
                `http://localhost:8080/usuarios`
              );
              if (res2.data && res2.data.usuarios) {
                setUsuarios(res2.data.usuarios);
              }
            }
          } catch (err) {
            console.log(err);
          }
        };
        fetchUsuarios();
      } catch (err) {
        console.log(err);
      }
    };
    fetchPlanes();
  }, []);

  // Load images on component load
  useEffect(() => {
    const fetchImages = async () => {
      const images = [];
      for (let i = 0; i < planes.length; i++) {
        const image = await getRandomImage();
        images.push(image);
      }
      setImageSrcs(images);
    };
    fetchImages();
  }, [planes]);

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

  const getNombreCreador = (idCreador) => {
    const usuario = Object.fromEntries(
      usuarios.map((usuario) => [usuario.id, usuario])
    )[idCreador];
    return usuario ? usuario.nombre_usuario : "";
  };

  function limitarDescripcion(descripcion) {
    const words = descripcion.split(' ');
    if (words.length > 19) {
      return words.slice(0, 19).join(' ') + '...';
    } else {
      return descripcion;
    }
  }


      moment.locale('es');

    return (
        <div>
            <div className="container mt-4 ">
                <h1 className="text-center">Planes</h1>
                <div className="planes justify-content-center d-flex flex-column">
                    {planes.map((plan, index) => (
                        <div className="mx-auto" key={plan.id}>
                            <div className="mb-4 d-flex flex-direction-column mx-auto">
                                <Card>
                                    <div className="infoUser">
                                        <FaUser />
                                        <div className="user-info">
                                            <Card.Text className="username text-center">
                                            {getNombreCreador(plan.id_creador)}
                                            </Card.Text>
                                            <Card.Text className="ubi text-center">
                                                {plan.ubicacion}
                                            </Card.Text>
                                        </div>
                                    </div>

                                    <Card.Img
                                        variant="top"
                                        src={imageSrcs[index]}
                                        style={{
                                            height: "546px",
                                            width: "306",
                                            objectFit: "cover",
                                        }}
                                    />
                                    <Card.Body
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <Card.Title className="text-center">
                                            {plan.titulo}
                                        </Card.Title>
                                        <Card.Text
                                            className="text-center"
                                            style={{
                                                maxHeight: "100px",
                                                overflow: "hidden",
                                            }}
                                        >
                                            {limitarDescripcion(plan.descripcion)}
                                        </Card.Text>
                                        <Card.Text className="text-center">
                                            {moment(plan.fecha_hora).format("DD-MM-YYYY")}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Plan;
