const express = require("express");
const router = express.Router();
const Functions = require('../services/Functions')

// Array para almacenar el historial de solicitudes
let reivedData

//------------------- ENVIA DATOS AL SERVIDOR -------------------
router.post("/", async function (req, res) {
    try {
       reivedData = req.body;
        res.json(reivedData)
        res.json({ success: true, message: "Follower:Datos cargados correctamente." });
        console.log(`Follower:Datos cargados correctamente.`);
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

module.exports = router;