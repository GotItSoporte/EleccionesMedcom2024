const express = require("express");
const router = express.Router();
const { editOracle } = require("../config/config");

router.put("/", async function (req, res) {
  try {
    const corporacion = req.body.corporacion;  //VOTO2024.DIPUTADO_REF_GOTIT 
    const nameVariableSelected = req.body.nameVariableSelected;
    const variableSelected =
      req.body.variableSelected === "NO APLICA"
        ? null
        : req.body.variableSelected;
    const cedula = req.body.cedula;
    const partido = req.body.partido;
    const updateQuery = `UPDATE VOTO2024.${corporacion}_REF_GOTIT SET ${nameVariableSelected} = :variableSelected WHERE nombre = :cedula and nombre_partido = :partido`;
    await editOracle(updateQuery, { variableSelected, cedula,partido  });
    res.json({
      success: true,
      message: "Oracle: datos Editados correctamente",
    });
    console.log(`Oracle: datos Editados correctamente`);
  } catch (err) {
    console.error("Error en la data enviada de WALL ", err.message);
  }
});

router.put("/Partido", async function (req, res) {
  try {
    const corporacion = req.body.corporacion;
    const nameCodigoSelected = req.body.nameCodigoSelected;
    const codigoSelected = req.body.codigoSelected;
    const nameVariableSelected = req.body.nameVariableSelected;
    const variableSelected = req.body.variableSelected;
    const cedula = req.body.cedula;
    const updateQuery = `UPDATE VOTO2024.${corporacion}_REF_GOTIT SET ${nameCodigoSelected} = :codigoSelected, ${nameVariableSelected} = :variableSelected WHERE nombre = :cedula `;
    await editOracle(updateQuery, { codigoSelected, variableSelected, cedula});
    res.json({
      success: true,
      message: "Oracle: datos Editados correctamente",
    });
    console.log(`Oracle: datos Editados correctamente`);
  } catch (err) {
    console.error("Error en la data enviada de WALL ", err.message);
  }
});

module.exports = router;
