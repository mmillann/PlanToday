import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Galeria from "../components/Galeria/Galeria";
import Slidebar from "../components/Slidebar/Slidebar";
import axios from "axios";
import "./Explorar.css"; // Importa el archivo CSS personalizado

function Explorar() {
    const [users, setUsers] = useState([]);
    const { id } = useParams();

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

    return (
        <div className="d-flex-column justify-content-center">
            <div className="container-fluid position-fixed fixed-top cab">
                <Navbar />
            </div>
            <div className="mt-3">
                <div className="slidebar mt-5">
                    <Slidebar />
                </div>
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="infoPerfil d-flex flex-column mt-5 center-container">
                        <div className="categorias-container row">
                            <div className="col-4">
                                <Link to="/explorar/deportes">
                                    <div className="btn btn-primary categoria-button">
                                        Deportes
                                    </div>
                                </Link>
                            </div>
                            <div className="col-4">
                                <Link to="/explorar/arte">
                                    <div className="btn btn-primary categoria-button">
                                        Arte
                                    </div>
                                </Link>
                            </div>
                            <div className="col-4">
                                <Link to="/explorar/musica">
                                    <div className="btn btn-primary categoria-button">
                                        Música
                                    </div>
                                </Link>
                            </div>
                            <div className="col-4">
                                <Link to="/explorar/gastronomia">
                                    <div className="btn btn-primary categoria-button">
                                        Gastronomía
                                    </div>
                                </Link>
                            </div>
                            <div className="col-4">
                                <Link to="/explorar/viajes">
                                    <div className="btn btn-primary categoria-button">
                                        Viajes
                                    </div>
                                </Link>
                            </div>
                            <div className="col-4">
                                <Link to="/explorar/cine">
                                    <div className="btn btn-primary categoria-button">
                                        Cine
                                    </div>
                                </Link>
                            </div>
                            <div className="col-4">
                                <Link to="/explorar/fiestas">
                                    <div className="btn btn-primary categoria-button">
                                        Fiestas
                                    </div>
                                </Link>
                            </div>
                            <div className="col-4">
                                <Link to="/explorar/educacion">
                                    <div className="btn btn-primary categoria-button">
                                        Educación
                                    </div>
                                </Link>
                            </div>
                            <div className="col-4">
                                <Link to="/explorar/otro">
                                    <div className="btn btn-primary categoria-button">
                                        Otro
                                    </div>
                                </Link>
                            </div>
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

export default Explorar;
