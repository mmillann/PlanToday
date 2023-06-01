import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Explorar.css"; // Importa el archivo CSS personalizado
import CategoriaButtons from "../components/CategoriaButtons/CategoriaButtons";
import ExplorarLayout from "../components/ExplorarLayout/ExplorarLayout";

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
    <ExplorarLayout>
      <CategoriaButtons />
    </ExplorarLayout>
  );
}

export default Explorar;
