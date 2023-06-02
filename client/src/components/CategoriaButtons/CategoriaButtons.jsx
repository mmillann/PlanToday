import React from "react";
import { Link } from "react-router-dom";

function CategoriaButtons() {
    return (
        <div className="categorias-container row text-center">
            <div className="col-4">
                <div className="col-4"></div>
                <Link to="/explorar/1">
                    <div className="btn btn-primary categoria-button">
                        Deportes
                    </div>
                </Link>
            </div>
            <div className="col-4">
                <Link to="/explorar/2">
                    <div className="btn btn-primary categoria-button">Arte</div>
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
                    <div className="btn btn-primary categoria-button">Cine</div>
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
                    <div className="btn btn-primary categoria-button">Otro</div>
                </Link>
            </div>
        </div>
    );
}

export default CategoriaButtons;
