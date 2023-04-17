import React, { useState } from "react";
import { FaHome, FaSearch, FaUser } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, Form } from "react-bootstrap";

function Navbar() {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);

    const handleShowLoginModal = () => setShowLoginModal(true);
    const handleCloseLoginModal = () => setShowLoginModal(false);

    const handleShowRegisterModal = () => setShowRegisterModal(true);
    const handleCloseRegisterModal = () => setShowRegisterModal(false);

    return (
        <header className="header container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand text-white" href="/">
                    Plan Today
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="justify-content-center mx-auto d-flex">
                    <div
                        className="collapse navbar-collapse position-relative"
                        id="navbarNavDropdown"
                    >
                        <div className="iconos">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item active">
                                    <a
                                        className="nav-link mx-3 text-dark"
                                        href="/"
                                    >
                                        <FaHome color="white"/>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link mx-3 text-dark"
                                        href="/"
                                    >
                                        <FaSearch color="white"/>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link mx-3 text-dark"
                                        href="/"
                                    >
                                        <FaUser color="white"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="botones">
                            <Button
                                variant="dark"
                                onClick={handleShowLoginModal}
                            >
                                Iniciar sesión
                            </Button>
                            <Button
                                variant="dark"
                                onClick={handleShowRegisterModal}
                            >
                                Registrarse
                            </Button>
                        </div>
                    </div>
                </div>

                <Modal show={showLoginModal} onHide={handleCloseLoginModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Iniciar sesión</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Ingresa tu correo electrónico"
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Contraseña"
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Iniciar sesión
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>

                <Modal
                    show={showRegisterModal}
                    onHide={handleCloseRegisterModal}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Registrarse</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Ingresa tu correo electrónico"
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Contraseña"
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicConfirmPassword">
                                <Form.Label>Confirmar contraseña</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Confirmar contraseña"
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Registrarse
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </nav>
        </header>
    );
}

export default Navbar;
