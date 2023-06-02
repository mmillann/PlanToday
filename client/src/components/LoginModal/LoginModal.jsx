import { Card, Form, Button } from "react-bootstrap";
import styles from './LoginModal.css';
import { FaRegUser, FaLowVision, FaRegWindowClose } from "react-icons/fa";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import bcrypt from "bcryptjs";

function LoginModal(props) {
  const { show, handleClose } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState();

    // Verificar si hay un estado de inicio de sesión guardado en sessionStorage al cargar la página
    useEffect(() => {
        const loggedIn = sessionStorage.getItem("isLoggedIn");
        if (loggedIn === "true") {
            setIsLoggedIn(true);
        }
    }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:8080/usuarios/login", JSON.stringify({ correo: email, password }), {
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.status === 200) {
        // Almacenar el estado de inicio de sesión en sessionStorage
        sessionStorage.setItem("isLoggedIn", "true");
        setIsLoggedIn(true);
  
        handleClose();
        window.location.reload();
      } else {
        setError("Credenciales inválidas");
        setShowError(true);
      }
    } catch (error) {
      console.error(error);
      setError("Ocurrió un error al iniciar sesión");
      setShowError(true);
    }
  };
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/usuarios/user/${email}`)
        if (res.data && res.data.length > 0) {
          setUser(res.data[0]);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, [email]);

    // seteo de propiedades del usuario
    sessionStorage.setItem("id", user?.id);
    sessionStorage.setItem("nombre", user?.nombre_usuario);
    sessionStorage.setItem("nombre_completo", user?.nombre_completo);
    sessionStorage.setItem("email", email);

  return (
    <div>
        <Card className={styles['login-card']}>
          <Card.Header>Iniciar sesión
            <FaRegWindowClose className="closeLogin" size={26} onClick={handleClose}/>
          </Card.Header>
          <Card.Body>
            <h5 className="bienvenida">¡Te damos la bienvenida a Plan Today!</h5>
            <Form className="loginForm" onSubmit={handleSubmit}>
            
              <Form.Group controlId="formBasicEmail">
                <Form.Label><FaRegUser/> Correo electrónico</Form.Label>
                <Form.Control type="email" placeholder="Ingresa tu correo electrónico" value={email} onChange={(event) => setEmail(event.target.value)} />
              </Form.Group>
        
              <Form.Group controlId="formBasicPassword">
                <Form.Label><FaLowVision /> Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Contraseña" value={password} onChange={(event) => setPassword(event.target.value)} />
              </Form.Group>
        
              <Button className="botonLogin" variant="warning" type="submit" block="true">
                Iniciar sesión
              </Button>
            </Form>
            <p className="text-center mt-3">
              ¿No tienes cuenta?{" "}
              <a href="#">
                Regístrate aquí
              </a>
            </p>
          </Card.Body>
          <Card.Footer>
            {showError && <p className="text-danger text-center">{error}</p>}
          </Card.Footer>
        </Card>
    </div>
  );
}

export default LoginModal;
