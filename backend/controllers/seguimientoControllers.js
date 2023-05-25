import express from "express";
import db from "../db/dbconnection.js";

const router = express.Router();

// Seguir a un usuario
router.post("/seguir/:id_usuario_seguidor/:id_usuario_seguido", (req, res) => {
  const { id_usuario_seguidor, id_usuario_seguido } = req.params;
  const query = `INSERT INTO seguimiento (id_usuario_seguidor, id_usuario_seguido) VALUES (${id_usuario_seguidor}, ${id_usuario_seguido});`;

  db.query(query, (err, data) => {
    if (err) return res.json(err);

    const resultado = {
      message: "Se ha seguido al usuario."
    };
    return res.json(resultado);
  });
});

// Dejar de seguir a un usuario
router.delete("/dejarseguir/:id_usuario_seguidor/:id_usuario_seguido", (req, res) => {
  const { id_usuario_seguidor, id_usuario_seguido } = req.params;
  const query = `DELETE FROM seguimiento WHERE id_usuario_seguidor = ${id_usuario_seguidor} AND id_usuario_seguido = ${id_usuario_seguido};`;

  db.query(query, (err, data) => {
    if (err) return res.json(err);

    const resultado = {
      message: "Se ha dejado de seguir al usuario."
    };
    return res.json(resultado);
  });
});

// Verificar si un usuario sigue a otro
router.get("/verificarseguimiento/:id_usuario_seguidor/:seguido_id", (req, res) => {
  const { id_usuario_seguidor, id_usuario_seguido } = req.params;
  const query = `SELECT COUNT(*) AS count FROM seguimiento WHERE id_usuario_seguidor = ${ id_usuario_seguidor} AND id_usuario_seguido = ${id_usuario_seguido};`;

  db.query(query, (err, data) => {
    if (err) return res.json(err);

    const isFollowing = data[0].count > 0;

    return res.json({ isFollowing });
  });
});
export default router;