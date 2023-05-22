import express from "express";
import db from "../db/dbconnection.js";

const router = express.Router();

router.get("/", (req, res) => {
    const query = "SELECT * FROM likes;";
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

// Dar like a un plan
router.post("/:plan_id/like/:user_id", (req, res) => {
  const { plan_id, user_id } = req.params;
  const query = `INSERT INTO likes (usuario_id, plan_id ) VALUES (${user_id}, ${plan_id});`;

  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json({ message: "Like registrado correctamente" });
  });
});

// Verificar si un usuario ha dado like a un plan
router.get("/:plan_id/like/:user_id", (req, res) => {
  const { plan_id, user_id } = req.params;
  const query = `SELECT COUNT(*) AS count FROM likes WHERE usuario_id = ${user_id} AND plan_id = ${plan_id};`;

  db.query(query, (err, data) => {
    if (err) return res.json(err);

    const hasLiked = data[0].count > 0;

    return res.json({ hasLiked });
  });
});

export default router;