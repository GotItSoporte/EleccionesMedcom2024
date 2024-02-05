const express = require("express");
const router = express.Router();
const Functions = require('../services/Functions')

//------------------- ENVIA DATOS DE LA ESTRUCTURA XML DE TICKER AL SERVIDOR -------------------
router.post("/TICKER", async function (req, res) {
    try {
      await Functions.CreateXml(req.body.postData,'Voto24_Ticker')
      res.json({ success: true, message: "Ticker: datos XML cargados correctamente" });
      console.log(`Ticker: datos XML cargados correctamente`);
      
     
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error en la data enviada de ticker " });
    }
});

router.post("/TICKERABAJO", async function (req, res) {
  try {
    await Functions.CreateXml(req.body.postData,'Voto24_TickerAbajo')
    res.json({ success: true, message: "TickerAbajo: datos XML cargados correctamente" });
    console.log(`TickerAbajo: datos XML cargados correctamente`);
    
   
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error en la data enviada de ticker " });
  }
});

router.post("/FULLSCREEN", async function (req, res) {
    try {
      await Functions.CreateXml(req.body.postData,'Voto24_fullscreen')
      res.json({ success: true, message: "Fullscreen: datos XML cargados correctamente" });
      console.log(`Fullscreen: datos XML cargados correctamente`);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error en la data enviada de fullscreen " });
    }
});

router.post("/TOUCHSCREEN", async function (req, res) {
  try {
    await Functions.CreateXml(req.body.postData,'Voto24_touchscreen')
    res.json({ success: true, message: "Touchscreen: datos XML cargados correctamente" });
    console.log(`Touchscreen: datos XML cargados correctamente`);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error en la data enviada de fullscreen " });
  }
});

module.exports = router;