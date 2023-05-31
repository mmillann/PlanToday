import express from "express";
import db from "../db/dbconnection.js";

const router = express.Router();

// Obtener todos los planes
router.get("/", (req, res) => {
    const query = "SELECT * FROM planes;";
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

// Obtener un plan por ID
router.get("/:id", (req, res) => {
    const { id } = req.params;
    const query = `SELECT * FROM planes WHERE id = ${id};`;
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        return res.json(data[0]);
    });
});

//Obtener los likes de un plan
router.get("/likes/:id", (req, res) => {
    const { creador_id } = req.params;
    const query = `SELECT LIKES FROM planes WHERE creador_id = ${creador_id};`;
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

//Dar like
router.post("/liked/:plan_id", (req, res) => {
    const { plan_id } = req.params;
    const query = `UPDATE PLANES SET LIKES = LIKES + 1 WHERE ID = ${plan_id};`;
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        res.send("Like dado");
    });
})

//Quitar like
router.post("/unliked/:plan_id", (req, res) => {
    const { plan_id } = req.params;
    const query = `UPDATE PLANES SET LIKES = LIKES - 1 WHERE ID = ${plan_id};`;
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        res.send("Like quitado");
    });
})


//Unirse a plam
router.post("/add/:plan_id", (req, res) => {
    const { plan_id } = req.params;
    const query = `UPDATE PLANES SET PARTICIPANTES = PARTICIPANTES + 1 WHERE ID = ${plan_id};`;
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        res.send("Plan añadido");
    });
})

//Cancelar plan
router.post("/quit/:plan_id", (req, res) => {
    const { plan_id } = req.params;
    const query = `UPDATE PLANES SET PARTICIPANTES = PARTICIPANTES - 1 WHERE ID = ${plan_id};`;
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        res.send("Plan cancelado");
    });
})


// Obtener todos los planes de un usuario por su ID
router.get("/usuario/:creador_id", (req, res) => {
    const { creador_id } = req.params;
    const query = `SELECT * FROM planes WHERE creador_id = ${creador_id};`;
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});



// Crear un nuevo plan
router.post("/:creador_id", (req, res) => {
    const titulo = req.body.titulo;
    const descripcion = req.body.descripcion;
    const ubicacion = req.body.ubicacion;
    const categoria = req.body.categoria;
    const creador_id = req.params.creador_id;
    const query = `INSERT INTO planes (titulo, descripcion, categoria, ubicacion, creador_id) VALUES ('${titulo}', '${descripcion}', '${categoria}', '${ubicacion}',  ${creador_id});`;
    db.query(query, (err, data) => {
        if (err) res.send(err)
        res.send(data);
    });
});

// Actualizar un plan existente
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { titulo, descripcion } = req.body;
    const query = `UPDATE planes SET titulo='${titulo}', descripcion='${descripcion}' WHERE id=${id};`;
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        return res.json("Plan actualizado correctamente");
    });
});

// Eliminar un plan por ID
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const query = `DELETE FROM planes WHERE id=${id};`;
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        return res.json("Plan eliminado correctamente");
    });
});

//función para pillar el último id
router.get("/ultimoId", (req, res) => {
    const { id } = req.params;
    const query = `SELECT id FROM planes ORDER BY id DESC LIMIT 1;`;
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        return res.json("Plan eliminado correctamente");
    });
});

export default router;
