import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Slidebar from "../components/Slidebar/Slidebar";
import axios from "axios";
import "./Explorar.css"; // Importa el archivo CSS personalizado
import PlanCategoria from "../components/PlanCategoria/PlanCategoria";

function Explorar() {
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
                                <Link to="/explorar/1">
                                    <div className="btn btn-primary categoria-button">
                                        Deportes
                                    </div>
                                </Link>
                            </div>
                            <div className="col-4">
                                <Link to="/explorar/2">
                                    <div className="btn btn-primary categoria-button">
                                        Arte
                                    </div>
                                </Link>
                            </div>
                            <div className="col-4">
                                <Link to="/explorar/3">
                                    <div className="btn btn-primary categoria-button">
                                        Música
                                    </div>
                                </Link>
                            </div>
                            <div className="col-4">
                                <Link to="/explorar/4">
                                    <div className="btn btn-primary categoria-button">
                                        Gastronomía
                                    </div>
                                </Link>
                            </div>
                            <div className="col-4">
                                <Link to="/explorar/5">
                                    <div className="btn btn-primary categoria-button">
                                        Viajes
                                    </div>
                                </Link>
                            </div>
                            <div className="col-4">
                                <Link to="/explorar/6">
                                    <div className="btn btn-primary categoria-button">
                                        Cine
                                    </div>
                                </Link>
                            </div>
                            <div className="col-4">
                                <Link to="/explorar/7">
                                    <div className="btn btn-primary categoria-button">
                                        Fiestas
                                    </div>
                                </Link>
                            </div>
                            <div className="col-4">
                                <Link to="/explorar/8">
                                    <div className="btn btn-primary categoria-button">
                                        Educación
                                    </div>
                                </Link>
                            </div>
                            <div className="col-4">
                                <Link to="/explorar/9">
                                    <div className="btn btn-primary categoria-button">
                                        Otro
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center mt-5">
                    <PlanCategoria />
                </div>
            </div>
        </div>
    );
}

export default Explorar;
