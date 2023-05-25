import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import Explorar from "./pages/Explorar";
import React from "react";
import "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Otro from "./pages/Categorias/Otro";
import Viajes from "./pages/Categorias/Viajes";
import Musica from "./pages/Categorias/Musica";
import Gastronomia from "./pages/Categorias/Gastronomia";
import Fiestas from "./pages/Categorias/Fiestas";
import Educacion from "./pages/Categorias/Educacion";
import Deportes from "./pages/Categorias/Deportes";
import Cine from "./pages/Categorias/Cine";
import Arte from "./pages/Categorias/Arte";

function App() {
    return (
        <div>
            <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/perfil/:id" element={<Perfil/>}/>
            <Route path="/explorar" element={<Explorar/>}/>
            <Route path="/explorar/arte" element={<Arte/>}/>
            <Route path="/explorar/cine" element={<Cine/>}/>
            <Route path="/explorar/deportes" element={<Deportes/>}/>
            <Route path="/explorar/educacion" element={<Educacion/>}/>
            <Route path="/explorar/fiestas" element={<Fiestas/>}/>
            <Route path="/explorar/gastronomia" element={<Gastronomia/>}/>
            <Route path="/explorar/musica" element={<Musica/>}/>
            <Route path="/explorar/viajes" element={<Viajes/>}/>
            <Route path="/explorar/otro" element={<Otro/>}/>
        </Routes>
        </BrowserRouter>
        
        </div>
        
    );
}

export default App;
