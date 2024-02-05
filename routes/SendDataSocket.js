const express = require("express");
const router = express.Router();
const Functions = require('../services/Functions')
const variables = require('../services/Variables')


router.post("/WALL", async function (req, res) {
    try {
              
      await Functions.SendUDPMessages(req.body, variables.IP_ENGINE_WALL);
      res.json({ message: "Wall: datos cargados correctamente" });
      console.log(`Wall:Datos cargados correctamente.`);

    } catch (err) {
      console.error("Error en la data enviada de WALL ", err.message);
    
    }
  });

  router.post("/RA", async function (req, res) {
    try {
              
      await Functions.SendUDPMessages(req.body, variables.IP_ENGINE_RA);
      res.json({ message: "Wall: datos cargados correctamente" });
      console.log(`Wall:Datos cargados correctamente.`);

    } catch (err) {
      console.error("Error en la data enviada de WALL ", err.message);
    
    }
  });
  
module.exports = router;