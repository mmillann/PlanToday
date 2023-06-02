import express from "express";
import db from "../db/dbconnection.js";

const router = express.Router();

// GET all categorias
router.get("/", (req, res) => {
    const query = `SELECT * FROM categorias;`;
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

// GET categoria by ID
router.get("/:id", (req, res) => {
    const { id } = req.params;
    const query = `SELECT * FROM categorias WHERE id = ${id};`;
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

// POST a new categoria
router.post("/", (req, res) => {
    const { nombre } = req.body;
    const query = `INSERT INTO categorias (nombre) VALUES ('${nombre}');`;
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        return res.json({ message: "Categoría creada correctamente" });
    });
});

// PUT update an existing categoria
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;
    const query = `UPDATE categorias SET nombre='${nombre}' WHERE id=${id};`;
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        return res.json({ message: "Categoría actualizada correctamente" });
    });
});

// DELETE a categoria
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const query = `DELETE FROM categorias WHERE id=${id};`;
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        return res.json({ message: "Categoría eliminada correctamente" });
    });
});

export default router;