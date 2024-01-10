const express = require("express");
const router = express.Router();
const { dbConfig } = require('../config/config')

//------------------- PRESIDENTE -------------------
router.get("/PRESIDENTE", async function (req, res) {
    try {
      const result = await dbConfig("SELECT * FROM VOTO2024.PRESIDENTE_GOTIT");
      res.json(result);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error en la consulta de la base de datos" });
    }
});

//------------------- ALCALDE -------------------
router.get("/ALCALDE", async function (req, res) {
  try {
    const result = await dbConfig("SELECT * FROM VOTO2024.ALCALDE_GOTIT");
    res.json(result);

  } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error en la consulta de la base de datos" });
  }
});

//------------------- DIPUTADO -------------------
router.get("/DIPUTADO", async function (req, res) {
  try {
    const result = await dbConfig("SELECT * FROM VOTO2024.DIPUTADO_GOTIT");
    res.json(result);

  } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error en la consulta de la base de datos" });
  }
});

module.exports = router;


