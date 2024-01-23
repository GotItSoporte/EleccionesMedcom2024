const express = require("express");
const router = express.Router();
const { editOracle } = require('../config/config')

router.put("/", async function (req, res) {
    try {
        const ganadorPlurinominal = req.body.ganadorPlurinominal
        const cedula = req.body.cedula
        const updateQuery = 'UPDATE VOTO2024.DIPUTADO_GOTIT SET ganadorPlurinominal = :ganadorPlurinominal WHERE nombre = :cedula';
        await editOracle(updateQuery, { ganadorPlurinominal, cedula });
        res.json({ success: true, message: "Oracle: datos Editados correctamente" });
        console.log(`Oracle: datos Editados correctamente`);

    } catch (err) {
      console.error("Error en la data enviada de WALL ", err.message);
    
    }
  });
  
module.exports = router;