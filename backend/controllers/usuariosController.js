import express from "express";
import db from "../db/dbconnection.js";

const router = express.Router();

// obtener todos los usuarios
router.get("/", (req, res) => {
    const query = "SELECT * FROM usuarios;";
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

// obtener un usuario por id
router.get("/:id", (req, res) => {
    const { id } = req.params;
    const query = `SELECT * FROM usuarios WHERE id = ${id};`;
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

// agregar un nuevo usuario
router.post("/", (req, res) => {
    console.log("Body recibido: ", req.body);
    const { nombre_usuario, nombre_completo, correo, password } = req.body;
    console.log("Valores de campos: ", nombre_usuario, nombre_completo, correo, password);
    const query = `INSERT INTO usuarios (nombre_usuario, nombre_completo, correo, password) VALUES ("${nombre_usuario}", "${nombre_completo}", "${correo}", "${password}");`;
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        return res.json({ message: "Usuario agregado correctamente" });
    });
});

// actualizar un usuario por id
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { nombre_usuario, nombre_completo, correo, password } = req.body;
    const query = `UPDATE usuarios SET nombre_usuario = "${nombre_usuario}", nombre_completo = "${nombre_completo}", correo = "${correo}", password = "${password}" WHERE id = ${id};`;
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        return res.json({ message: "Usuario actualizado correctamente" });
    });
});

// eliminar un usuario por id
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const query = `DELETE FROM usuarios WHERE id = ${id};`;
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        return res.json({ message: "Usuario eliminado correctamente" });
    });
});

export default router;
