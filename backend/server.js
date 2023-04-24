import express from "express";
import cors from "cors";
import usuariosController from "./controllers/usuariosController.js";
import planesController from "./controllers/planesController.js";
import comentariosController from "./controllers/comentariosController.js";
import imagenesController from "./controllers/imagenesController.js";
import db from "./db/dbconnection.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(
    cors({
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true,
        preflightContinue: true,
    })
);
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.get("/", (req, res) => {
    res.json("Backend funcionando");
});

app.use("/usuarios", usuariosController);
app.use("/planes", planesController);
app.use("/comentarios", comentariosController);
app.use("/imagenes", imagenesController);

app.listen(8080, () => {
    console.log("server.js funcionando");
});
