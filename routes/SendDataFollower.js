const express = require("express");
const router = express.Router();
const Functions = require("../services/Functions");
const variables = require("../services/Variables");

// Array para almacenar el historial de solicitudes
let reivedData;
let reivedDataCarrera;

//------------------- ENVIA DATOS AL SERVIDOR -------------------
router.post("/", async function (req, res) {
  try {
    reivedData = req.body;
    res.json({
      success: true,
      message: "Follower:Datos cargados correctamente.",
    });
    console.log(`Follower:Datos cargados correctamente.`);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en la data enviada " });
  }
});

//------------------- ENVIA DATOS AL SERVIDOR -------------------
router.post("/CARRERA", async function (req, res) {
  try {
    reivedDataCarrera = req.body;
    res.json({
      success: true,
      message: "FollowerCarrera:Datos cargados correctamente.",
    });
    console.log(`FollowerCarrera:Datos cargados correctamente.`);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en la data enviada " });
  }
});



//------------------- ENVIA DATOS DESDE EL SERVIDOR -------------------
router.get("/", function (req, res) {
  try {
    res.json(Functions.ChangeFormat(reivedData));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener la data de Follower" });
  }
});

router.get("/CARRERA", function (req, res) {
  try {
    res.json(Functions.ChangeFormat(reivedDataCarrera));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener la data de Follower" });
  }
});

router.get("/EXCEL", function (req, res) {
  try {
    res.json(
      Functions.ReadExcelFollower(
        variables.RUTE_XML,
        variables.NAME_FILE_EXCEL_FOLLOWER
      )
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener la data de Follower" });
  }
});

router.get("/EXCELFORMULA", function (req, res) {
  try {
    res.json(
      Functions.ReadExcelFormulaFollower(
        variables.RUTE_XML,
        variables.NAME_FILE_EXCEL_FORMULA_FOLLOWER
      )
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener la data de Follower" });
  }
});

module.exports = router;
