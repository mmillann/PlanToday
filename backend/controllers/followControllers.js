import express from "express";
import db from "../db/dbconnection.js";

const router = express.Router();

// Seguir a un usuario
router.post("/follow/:follower_id/:user_id", (req, res) => {
  const { follower_id, user_id } = req.params;
  const query = `INSERT INTO follow (follower_id, user_id) VALUES (${follower_id}, ${user_id});`;

  db.query(query, (err, data) => {
    if (err) return res.json(err);

    data.message = "Se ha seguido al usuario.";
    return res.json(data);
  });
});

// Dejar de seguir a un usuario
router.delete("/unfollow/:follower_id/:user_id", (req, res) => {
  const { follower_id, user_id } = req.params;
  const query = `DELETE FROM follow WHERE follower_id = ${follower_id} AND user_id = ${user_id};`;

  db.query(query, (err, data) => {
    if (err) return res.json(err);

    data.message = "Se ha dejado de seguir al usuario.";
    return res.json(data);
  });
});

// Verificar si un usuario sigue a otro
router.get("/isfollowing/:follower_id/:user_id", (req, res) => {
  const { follower_id, user_id } = req.params;
  const query = `SELECT COUNT(*) AS count FROM follow WHERE follower_id = ${follower_id} AND user_id = ${user_id};`;

  db.query(query, (err, data) => {
    if (err) return res.json(err);

    const isFollowing = data[0].count > 0;

    return res.json({ isFollowing });
  });
});

export default router;