import express from "express";
import db from "../db/dbconnection.js";

const router = express.Router();

// obtener todos los usuarios
router.get("/", (req, res) => {
    const query = "SELECT * FROM usuarios;";
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

// obtener nombre los usuarios
router.get("/nombre_usuario", (req, res) => {
    const query = "SELECT nombre_usuario FROM usuarios;";
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

router.get("/nombre/:id", (req, res) => {
    const { id } = req.params;
    const query = `SELECT nombre_usuario FROM usuarios where id = ${id};`;
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});


// obtener un usuario por id
router.get("/:id", (req, res) => {
    const { id } = req.params;
    const query = `SELECT * FROM usuarios WHERE id = ${id};`;
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

// obtener un usuario por password
router.get("/user/:correo", (req, res) => {
    const { correo } = req.params;
    const query = "SELECT * FROM usuarios WHERE correo = ?";
    db.query(query, [correo], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

// agregar un nuevo usuario
router.post("/", (req, res) => {
    console.log("Body recibido: ", req.body);
    const { nombre_usuario, nombre_completo, correo, password } = req.body;
    console.log(
        "Valores de campos: ",
        nombre_usuario,
        nombre_completo,
        correo,
        password
    );
    const query = `INSERT INTO usuarios (nombre_usuario, nombre_completo, correo, password) VALUES ("${nombre_usuario}", "${nombre_completo}", "${correo}", "${password}");`;
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        return res.json({ message: "Usuario agregado correctamente" });
    });
});

// actualizar un usuario por id
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { nombre_usuario, nombre_completo, correo, password } = req.body;
    const query = `UPDATE usuarios SET nombre_usuario = "${nombre_usuario}", nombre_completo = "${nombre_completo}", correo = "${correo}", password = "${password}" WHERE id = ${id};`;
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        return res.json({ message: "Usuario actualizado correctamente" });
    });
});

// eliminar un usuario por id
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const query = `DELETE FROM usuarios WHERE id = ${id};`;
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        return res.json({ message: "Usuario eliminado correctamente" });
    });
});

// verificar si el usuario existe y las credenciales son válidas
router.post("/login", (req, res) => {
    const { correo, password } = req.body;
    const query = `SELECT * FROM usuarios WHERE correo = "${correo}" AND password = "${password}";`;

    db.query(query, (err, data) => {
        if (err) return res.json(err);

        if (data.length > 0) {
            // el usuario y la contraseña son válidos, devolver los datos del usuario
            const usuario = data[0];
            return res.json({ message: "Inicio de sesión exitoso", usuario });
        } else {
            // las credenciales son inválidas
            return res.status(401).json({ message: "Credenciales inválidas" });
        }
    });
});

// agregar un nuevo usuario
router.post("/registro", (req, res) => {
  const { correo, password, nombreUsuario, nombreCompleto } = req.body;
  const query =
      "INSERT INTO usuarios (correo, password, nombre_usuario, nombre_completo, admin) VALUES (?, ?, ?, ?, false)";
  db.query(
      query,
      [correo, password, nombreUsuario, nombreCompleto],
      (err, result) => {
          if (err) {
              console.error(err);
              return res
                  .status(500)
                  .json({
                      message: "Ocurrió un error al registrar el usuario",
                  });
          }
          return res
              .status(200)
              .json({ message: "Usuario registrado exitosamente" });
      }
  );
});

router.post("/avatar/:id", (req, res) => {
    const { id } = req.params;
    const {url} = req.body
    const query = `UPDATE USUARIOS SET AVATAR =  '${url}' WHERE ID = ${id};`;
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        res.send("Imagen subida");
    });
})

router.get("/obteneravatar/:id", (req, res) => {
    const { id } = req.params;
    const query = `SELECT AVATAR FROM USUARIOS WHERE ID = ${id};`;
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        return  res.send(data);
    });
})


export default router;
