const express = require("express");
const router = express.Router();
const Functions = require('../services/Functions')
// Array para almacenar el historial de solicitudes
let reivedData

router.post("/", async function (req, res) {
    try {
       reivedData = req.body;
       console.log(reivedData)
      res.json(reivedData)
     
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error en la data enviada " });
    }
});

router.get("/", function (req, res) {
  try {
    
    res.json(Functions.ChangeFormat(reivedData));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener la data de Follower" });
  }
});

module.exports = router;