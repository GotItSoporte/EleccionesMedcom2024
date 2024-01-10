
var fs = require('fs');
var convert = require('xml-js');

//------------------- FORMATEAR DATA PARA UNREAL ENGINE -------------------
function ChangeFormat (data){
    return data.map((elemento, indice) => ({
        [`nombre${indice}`]: elemento.nombre || "",
        [`votos${indice}`]: elemento.votos || "",
      })).reduce((resultado, elemento) => ({ ...resultado, ...elemento }), {});
}

//------------------- CREAR XML EN LAS RUTAS ESPECIFICADAS -------------------
async function CreateXml (data,rute) {
    return new Promise((resolve, reject) => {
        fs.writeFile(`W:/VOTO 24 (medcom)/Elecciones Generales Mayo 5/archivosXML/${rute}.xml`, data, function (err) { 
            if (err) {
            reject(err);
            } else {
            resolve("Archivo XML creado exitosamente");
            }
        });
    });
}

module.exports = {
    ChangeFormat,
    CreateXml
}