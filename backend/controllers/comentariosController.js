import express from "express";
import db from "../db/dbconnection.js";

const router = express.Router();

// GET all comentarios
router.get("/", (req, res) => {
    const query = `SELECT * FROM comentarios;`;
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

// GET comentario by ID
router.get("/:id", (req, res) => {
    const { id } = req.params;
    const query = `SELECT * FROM comentarios WHERE id = ${id};`;
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

// GET comentarios by plan ID
router.get("/plan/:plan_id", (req, res) => {
    const { plan_id } = req.params;
    const query = `SELECT * FROM comentarios WHERE plan_id = ${plan_id};`;
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

// POST a new comentario
router.post("/", (req, res) => {
    const { usuario_id, plan_id, contenido } = req.body;
    const query = `INSERT INTO comentarios (usuario_id, plan_id, contenido) VALUES (${usuario_id}, ${plan_id}, '${contenido}');`;
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        return res.json({ message: "Comentario creado correctamente" });
    });
});

// PUT update an existing comentario
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { contenido } = req.body;
    const query = `UPDATE comentarios SET contenido='${contenido}' WHERE id=${id};`;
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        return res.json({ message: "Comentario actualizado correctamente" });
    });
});

// DELETE a comentario
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const query = `DELETE FROM comentarios WHERE id=${id};`;
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        return res.json({ message: "Comentario eliminado correctamente" });
    });
});

export default router;
