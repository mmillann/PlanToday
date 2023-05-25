import express from "express";
import db from "../db/dbconnection.js";

const router = express.Router();

// Seguir a un usuario
router.post("/seguir/:seguidor_id/:seguido_id", (req, res) => {
  const { seguidor_id, seguido_id } = req.params;
  const query = `INSERT INTO seguimiento (id_usuario_seguidor, id_usuario_seguido) VALUES (${seguidor_id}, ${seguido_id});`;

  db.query(query, (err, data) => {
    if (err) return res.json(err);

    const resultado = {
      message: "Se ha seguido al usuario.",
      id_seguimiento: data.insertId
    };
    return res.json(resultado);
  });
});

// Dejar de seguir a un usuario
router.delete("/dejarseguir/:seguidor_id/:seguido_id", (req, res) => {
  const { seguidor_id, seguido_id } = req.params;
  const query = `DELETE FROM seguimiento WHERE id_usuario_seguidor = ${seguidor_id} AND id_usuario_seguido = ${seguido_id};`;

  db.query(query, (err, data) => {
    if (err) return res.json(err);

    const resultado = {
      message: "Se ha dejado de seguir al usuario.",
      id_seguimiento: data.insertId
    };
    return res.json(resultado);
  });
});

// Verificar si un usuario sigue a otro
router.get("/verificarseguimiento/:seguidor_id/:seguido_id", (req, res) => {
  const { seguidor_id, seguido_id } = req.params;
  const query = `SELECT COUNT(*) AS count FROM seguimiento WHERE id_usuario_seguidor = ${seguidor_id} AND id_usuario_seguido = ${seguido_id};`;

  db.query(query, (err, data) => {
    if (err) return res.json(err);

    const isFollowing = data[0].count > 0;

    return res.json({ isFollowing });
  });
});

export default router;