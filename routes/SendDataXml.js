const express = require("express");
const router = express.Router();
const Functions = require('../services/Functions')
const variables = require('../services/Variables')

//------------------- ENVIA DATOS DE LA ESTRUCTURA XML DE TICKER AL SERVIDOR -------------------
router.post("/VOTO_ARRIBA_VOTO24", async function (req, res) {
    try {
      await Functions.CreateXml(req.body.postData,variables.NAME_FILE_TICKERARRIBA)
      res.json({ success: true, message: "TickerArriba: datos XML cargados correctamente" });
      console.log(`TickerArriba: datos XML cargados correctamente`);
      
     
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error en la data enviada de ticker " });
    }
});
router.post("/VOTO_ABAJO_CANAL_V24", async function (req, res) {
  try {
    await Functions.CreateXml(req.body.postData,variables.NAME_FILE_TICKERARRIBA2)
    res.json({ success: true, message: "TickerArriba_Abajo: datos XML cargados correctamente" });
    console.log(`TickerArriba_Abajo: datos XML cargados correctamente`);
    
   
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error en la data enviada de ticker " });
  }
});


router.post("/VOTO_ABAJO_VOTO24", async function (req, res) {
  try {
    await Functions.CreateXml(req.body.postData,variables.NAME_FILE_TICKERABAJO)
    res.json({ success: true, message: "TickerAbajo: datos XML cargados correctamente" });
    console.log(`TickerAbajo: datos XML cargados correctamente`);
    
   
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error en la data enviada de ticker " });
  }
});

router.post("/FULLSCREEN", async function (req, res) {
    try {
      await Functions.CreateXml(req.body.postData,variables.NAME_FILE_FULLSCREEN)
      res.json({ success: true, message: "Fullscreen: datos XML cargados correctamente" });
      console.log(`Fullscreen: datos XML cargados correctamente`);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error en la data enviada de fullscreen " });
    }
});

router.post("/TOUCHSCREEN", async function (req, res) {
  try {
    await Functions.CreateXml(req.body.postData,variables.NAME_FILE_TOUCHSCREEN)
    res.json({ success: true, message: "Touchscreen: datos XML cargados correctamente" });
    console.log(`Touchscreen: datos XML cargados correctamente`);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error en la data enviada de fullscreen " });
  }
});

router.post("/TOUCHSCREENALL", async function (req, res) {
  try {
    await Functions.CreateXml(req.body.postData,variables.NAME_FILE_TOUCHSCREENALL)
    res.json({ success: true, message: "TouchscreenAll: datos XML cargados correctamente" });
    console.log(`TouchscreenAll: datos XML cargados correctamente`);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error en la data enviada de fullscreen " });
  }
});

module.exports = router;