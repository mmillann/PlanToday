import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PlanCategoria from "../components/PlanCategoria/PlanCategoria";
import ExplorarLayout from "../components/ExplorarLayout/ExplorarLayout";
import CategoriaButtons from "../components/CategoriaButtons/CategoriaButtons";

function ExplorarCategoria() {
  const { categoria_id } = useParams();
  const [planes, setPlanes] = useState([]);

  useEffect(() => {
    const fetchPlanes = async () => {
      try {
        const res = await axios.get(
          `http://52.47.191.228:8080/planes?categoria=${categoria_id}`
        );
        setPlanes(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPlanes();
  }, [categoria_id]);

  return (
    <ExplorarLayout>
      <CategoriaButtons />
      {/* Renderizar los planes aquí */}
      <PlanCategoria planes={planes} />
    </ExplorarLayout>
  );
}

export default ExplorarCategoria;
