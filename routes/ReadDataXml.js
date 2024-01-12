const express = require("express");
const router = express.Router();
const Functions = require('../services/Functions')

//------------------- ENVIA DATOS DESDE EL SERVIDOR AL FRONTEND -------------------

router.get("/FULLSCREEN", async function (req, res) {
    try {    
      res.json(await Functions.ReadXml('Voto24_fullscreen'))
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error en la data enviada de fullscreen " });
    }
});

module.exports = router;