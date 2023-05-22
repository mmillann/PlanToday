import { Card, Form, Button } from "react-bootstrap";
import { FaRegUser, FaLowVision, FaRegWindowClose } from "react-icons/fa";
import axios from "axios";
import { useState } from "react";

function RegisterModal(props) {
    const { show, handleClose } = props;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [username, setUsername] = useState("");
    const [fullname, setFullname] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setError("Las contraseñas no coinciden");
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:8080/usuarios/registro",
                JSON.stringify({
                    correo: email,
                    password,
                    nombreUsuario: username,
                    nombreCompleto: fullname,
                }),
                {
                    headers: { "Content-Type": "application/json" },
                }
            );

            if (response.status === 200) {
                handleClose();
            } else {
                setError("Ocurrió un error al registrar el usuario");
            }
        } catch (error) {
            console.error(error);
            setError("Ocurrió un error al registrar el usuario");
        }
    };

    return (
        <Card className={"login-card"}>
            <Card.Header>
                Regístrate
                <FaRegWindowClose
                    className="closeLogin"
                    size={26}
                    onClick={handleClose}
                />
            </Card.Header>
            <Card.Body>
                <h5 className="bienvenida">¡Únete a Plan Today!</h5>
                <Form className="registerForm" onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>
                            <FaRegUser /> Correo electrónico
                        </Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Ingresa tu correo electrónico"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>
                            <FaRegUser /> Nombre de usuario
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingresa tu nombre de usuario"
                            value={username}
                            onChange={(event) =>
                                setUsername(event.target.value)
                            }
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicFullname">
                        <Form.Label>
                            <FaRegUser /> Nombre completo
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingresa tu nombre completo"
                            value={fullname}
                            onChange={(event) =>
                                setFullname(event.target.value)
                            }
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>
                            <FaLowVision /> Contraseña
                        </Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicConfirmPassword">
                        <Form.Label>
                            <FaLowVision /> Confirmar Contraseña
                        </Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="ConfirmarContraseña"
                            value={confirmPassword}
                            onChange={(event) =>
                                setConfirmPassword(event.target.value)
                            }
                            required
                        />
                    </Form.Group>
                    <Button
                        className="botonLogin"
                        variant="warning"
                        type="submit"
                        block
                    >
                        Registrarse
                    </Button>
                </Form>
                <p className="text-center mt-3">
                    ¿Ya tienes cuenta?{" "}
                    <a href="#" onClick={props.handleLoginClick}>
                        Inicia sesión aquí
                    </a>
                </p>
                {error && <p className="text-danger text-center">{error}</p>}
            </Card.Body>
        </Card>
    );
}

export default RegisterModal;
