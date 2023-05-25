import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Galeria from "../../components/Galeria/Galeria";
import Slidebar from "../../components/Slidebar/Slidebar";
import axios from "axios";

function Arte() {
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
                        /* CONTENIDO */
                    </div>
                </div>
                <div className="galeria">
                    <Galeria idUsuario={id} />
                </div>
            </div>
        </div>
    );
}

export default Arte;
