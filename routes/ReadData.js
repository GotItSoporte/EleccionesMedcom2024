const express = require("express");
const router = express.Router();
const mysql = require("mysql2/promise");
const dbconfig = require('../config/config')



router.get("/PRESIDENTE", async function (req, res) {
  try {
    // Ejecutar la consulta y obtener los resultados
    const [rows, fields] = await dbconfig.query(
      "SELECT * FROM presidente ORDER BY provincia,posicion ASC,partido"
    );

    const result = dbconfig("SELECT * FROM presidente ORDER BY provincia,posicion ASC,partido")
    
    res.json(result);
  } catch (error) {
    //console.error(error);
    //res.status(500).json({ error: "Database error" });
  }
});

/*router.get("/ALCALDE", async function (req, res) {
  try {
    // Ejecutar la consulta y obtener los resultados
    const [rows, fields] = await dbconfig.query(
      "SELECT * FROM alcalde ORDER BY provincia,partido,posicion ASC"
    );

    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
});

router.get("/DIPUTADO", async function (req, res) {
  try {
    // Ejecutar la consulta y obtener los resultados
    const [rows, fields] = await dbconfig.query(
      "SELECT * FROM diputado ORDER BY provincia,partido, posicion ASC"
    );

    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
});*/

module.exports = router;