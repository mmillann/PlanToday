import express from "express";
import cors from "cors";
import usuariosController from "./controllers/usuariosController.js";
import planesController from "./controllers/planesController.js";
import comentariosController from "./controllers/comentariosController.js";
import imagenesController from "./controllers/imagenesController.js";
import likesController from "./controllers/likesController.js";
import participantesController from "./controllers/participantesController.js";
import db from "./db/dbconnection.js";


const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.json("Backend funcionando");
});

app.use("/usuarios", usuariosController);
app.use("/planes", planesController);
app.use("/comentarios", comentariosController);
app.use("/imagenes", imagenesController);
app.use("/likes", likesController);
app.use("/participantes", participantesController);

app.listen(8080, () => {
    console.log("server.js funcionando");
});
