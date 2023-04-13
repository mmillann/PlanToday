import mysql from "mysql";

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "plan_today",
});

db.connect((err) => {
    if (err) throw err;
    console.log("dbconnection.js funcionando");
});

export default db;
