const express = require("express");
const router = express.Router();
const Functions = require('../services/Functions')

//------------------- ENVIA DATOS DE LA ESTRUCTURA XML DE TICKER AL SERVIDOR -------------------
router.post("/TICKER", async function (req, res) {
    try {
      res.json(await Functions.CreateXml(req.body.postData,'Voto24_ticker'))
      
     
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error en la data enviada de ticker " });
    }
});

router.post("/FULLSCREEN", async function (req, res) {
    try {
      res.json(await Functions.CreateXml(req.body.postData,'Voto24_fullscreen'))
      
     
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error en la data enviada de fullscreen " });
    }
});

module.exports = router;