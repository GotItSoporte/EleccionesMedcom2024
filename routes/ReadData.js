const express = require("express");
const router = express.Router();
const { readOracle } = require("../config/config");

//------------------- PRESIDENTE -------------------
router.get("/PRESIDENTE", async function (req, res) {
  try {
    const result = await readOracle(
      "SELECT * FROM VOTO2024.PRESIDENTE_GOTIT ORDER BY provincia_id asc,votos desc,nomina asc"
    );
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en la consulta de la base de datos" });
  }
});

//------------------- ALCALDE -------------------
router.get("/ALCALDE", async function (req, res) {
  try {
    const result = await readOracle(
      "SELECT * FROM VOTO2024.ALCALDE_GOTIT ORDER BY provincia_id asc ,distrito_id asc,votos desc,nomina asc "
    );
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en la consulta de la base de datos" });
  }
});

//------------------- DIPUTADO -------------------
router.get("/DIPUTADO", async function (req, res) {
  try {
    const result = await readOracle(
      "SELECT * FROM VOTO2024.DIPUTADO_GOTIT ORDER BY provincia_id asc,circuito_id asc ,orden_clasificacion asc, votos desc,nombre asc"
    );
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en la consulta de la base de datos" });
  }
});

module.exports = router;
