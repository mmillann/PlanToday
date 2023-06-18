import React from "react";
import { Link } from "react-router-dom";

function CategoriaButtons() {
  const categorias = [
    { id: 1, nombre: "Deportes" },
    { id: 2, nombre: "Arte" },
    { id: 3, nombre: "Música" },
    { id: 4, nombre: "Gastronomía" },
    { id: 5, nombre: "Viajes" },
    { id: 6, nombre: "Cine" },
    { id: 7, nombre: "Fiestas" },
    { id: 8, nombre: "Educación" },
    { id: 9, nombre: "Otro" },
  ];

  return (
    <div className="categorias-container row text-center">
      {categorias.map((categoria) => (
        <div className={`col-4 `} key={categoria.id}>
          <Link to={`/explorar/${categoria.id}`}>
            <div className={`btn btn-primary categoria-button ${categoria.nombre.toLowerCase()}`}>
              <span>{categoria.nombre}</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CategoriaButtons;