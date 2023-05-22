import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil"
import React from "react";
import "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
    return (
        <div>
            <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/perfil/:id" element={<Perfil/>}/>
        </Routes>
        </BrowserRouter>
        
        </div>
        
    );
}

export default App;
