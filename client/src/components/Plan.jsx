import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import moment from "moment";
import Card from "react-bootstrap/Card";
import { FaMapMarkedAlt, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import "./Plan.css";

function Plan() {
    const [planes, setPlanes] = useState([]);
    const [usuarios, setUsuarios] = useState([]);
    const [imageSrcs, setImageSrcs] = useState([]);
    const [creador_id, setCreador_id] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [plansToShow, setPlansToShow] = useState(5);

    const observer = useRef();
    const lastPlanElementRef = useCallback(
        (node) => {
            if (loading) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    setPage((prevPage) => prevPage + 1);
                    setPlansToShow((prevPlansToShow) => prevPlansToShow + 5);
                }
            });
            if (node) observer.current.observe(node);
        },
        [loading]
    );

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:8080/planes?page=${page}`)
            .then((res) => {
                const creador_id = res.data.map((plan) => plan.id_creador);
                setCreador_id(creador_id);
                setPlanes((prevPlanes) => [
                    ...prevPlanes,
                    ...res.data.map((plan) => ({
                        ...plan,
                        creador_id: plan.id_creador,
                        random: Math.random(), // generate a random number
                    })),
                ]);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, [page]);

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
        const words = descripcion.split(" ");
        if (words.length > 19) {
            return words.slice(0, 19).join(" ") + "...";
        } else {
            return descripcion;
        }
    }

    moment.locale("es");

    return (
        <div>
            <div className="container mt-4 ">
                <h1 className="text-center">Planes</h1>
                <div className="planes justify-content-center d-flex flex-column">
                    {planes.map((plan, index) => {
                        if (planes.length === index + 1) {
                            return (
                                <div
                                    ref={lastPlanElementRef}
                                    key={plan.id}
                                    className="plan mb-4"
                                >
                                    <Card className="card-plan">
                                        <Card.Img
                                            variant="top"
                                            src={imageSrcs[index]}
                                            alt="plan"
                                        />
                                        <Card.Body>
                                            <Card.Title>
                                                {plan.titulo}
                                            </Card.Title>
                                            <Card.Text>
                                                {plan.ubicacion}
                                            </Card.Text>
                                            <Card.Text>
                                                {limitarDescripcion(
                                                    plan.descripcion
                                                )}
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer className="d-flex justify-content-between">
                                            <small className="text-muted">
                                                {moment(plan.fecha).fromNow()}
                                            </small>
                                            <small className="text-muted">
                                                <FaUser className="mb-1" />{" "}
                                                {getNombreCreador(
                                                    plan.id_creador
                                                )}
                                            </small>
                                        </Card.Footer>
                                    </Card>
                                </div>
                            );
                        } else {
                            return (
                                <div
                                    key={plan.id}
                                    className="plan mb-5 mx-auto"
                                >
                                    <Card className="card-plan">
                                        <Card.Img
                                            variant="top"
                                            src={imageSrcs[index]}
                                            alt="plan"
                                        />
                                        <Card.Body>
                                            <div className="row">
                                                <div className="col-md-6 justify-content-start">
                                                    <Card.Title>
                                                        {plan.titulo}
                                                    </Card.Title>
                                                </div>
                                                <div className="col-md-6 justify-content-end">
                                                    <Card.Text>
                                                        <FaMapMarkerAlt />
                                                        {plan.ubicacion}
                                                    </Card.Text>
                                                </div>
                                            </div>
                                            <Card.Text>
                                                {limitarDescripcion(
                                                    plan.descripcion
                                                )}
                                            </Card.Text>
                                        </Card.Body>

                                        <Card.Footer className="d-flex justify-content-between">
                                            <small className="text-muted">
                                                {moment(plan.fecha).format(
                                                    "DD/MM/YYYY"
                                                )}
                                            </small>
                                            <small className="text-muted">
                                                <FaUser className="mb-1" />{" "}
                                                {getNombreCreador(
                                                    plan.id_creador
                                                )}
                                            </small>
                                        </Card.Footer>
                                    </Card>
                                </div>
                            );
                        }
                    })}
                    {loading && (
                        <div className="d-flex justify-content-center">
                            <div
                                className="spinner-border text-primary"
                                role="status"
                            >
                                <span className="visually-hidden">
                                    Loading...
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Plan;
