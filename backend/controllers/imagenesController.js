import express from "express";
import db from "../db/dbconnection.js";

const router = express.Router();

// GET all images
router.get("/", (req, res) => {
    const query = "SELECT * FROM imagenes;";
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

// GET image by ID
router.get("/:id", (req, res) => {
    const { id } = req.params;
    const query = `SELECT * FROM imagenes WHERE id = ${id};`;
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

// POST a new image
router.post("/", (req, res) => {
    const { plan_id, url } = req.body;
    const query = `INSERT INTO imagenes (plan_id, url) VALUES (${plan_id}, '${url}');`;
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        return res.json({ message: "Image created successfully" });
    });
});

// PUT update an existing image
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { plan_id, url } = req.body;
    const query = `UPDATE imagenes SET plan_id = ${plan_id}, url = '${url}' WHERE id = ${id};`;
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        return res.json({ message: "Image updated successfully" });
    });
});

// DELETE an image
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const query = `DELETE FROM imagenes WHERE id = ${id};`;
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        return res.json({ message: "Image deleted successfully" });
    });
});

export default router;
