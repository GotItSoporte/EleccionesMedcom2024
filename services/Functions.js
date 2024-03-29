var fs = require("fs");
var convert = require("xml-js");
const xml2js = require("xml2js");
const udp = require("dgram");
const client = udp.createSocket("udp4");
const Variables = require("./Variables");

//------------------- FORMATEAR DATA PARA UNREAL ENGINE -------------------
function ChangeFormat(data) {
  return data
    .map((elemento, indice) => ({
      [`cantidad`]: data.length,
      [`corporacion`]: data[0].corporacion || "",
      [`participacion`]:
        data[0].participacion || (Math.random() * 99.99).toFixed(2),
      [`escrutado`]: data[0].escrutado || (Math.random() * 99.99).toFixed(2),
      [`region`]:
        data[0].corporacion === "PRESIDENTE"
          ? data[0].provincia
          : data[0].corporacion === "ALCALDE"
          ? data[0].distrito
          : data[0].corporacion === "DIPUTADO"
          ? "CIRCUITO " + data[0].circuito
          : null || data[0].region || "",
      [`cedula${indice}`]: elemento.cedula || "SIN IDENTIFICACION",
      [`nombre${indice}`]: elemento.nombre.split(" ")[0] || "",
      [`apellido${indice}`]: elemento.nombre.split(" ").pop() || "",
      [`votos${indice}`]:
        elemento.votos.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || "", // elemento.votos ||
      [`porcentaje${indice}`]:
        elemento.porcentaje.toString() || "",
    }))
    .reduce((resultado, elemento) => ({ ...resultado, ...elemento }), {});
}

//------------------- CREAR XML EN LAS RUTAS ESPECIFICADAS -------------------
async function CreateXml(ruteFile ,data, rute) {
  return new Promise((resolve, reject) => {
    fs.writeFile(`${ruteFile}${rute}.xml`, data, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve("Archivo XML creado exitosamente");
      }
    });
  });
}

//-------------------  LEER XML QUE SE ENCUENTRAN EN LAS RUTAS ESPECIFICADAS -------------------
function ReadXml(rute) {
  return new Promise((resolve, reject) => {
    fs.readFile(`${Variables.RUTE_XML}${rute}.xml`, "utf8", (err, xmlData) => {
      if (err) {
        console.error("Error reading XML file:", err);
        reject({ error: "Error reading XML file" });
        return;
      }

      const parser = new xml2js.Parser();

      parser.parseString(xmlData, (parseErr, result) => {
        if (parseErr) {
          console.error("Error parsing XML:", parseErr);
          reject({ error: "Error parsing XML" });
        } else {
          const dataArray = result.data.element.map((element) => {
            const item = {
              nombre: element.nombre?.[0] || "",
              cedula: element.cedula?.[0] || "",
              votos: element.votos?.[0] || "",
              provincia: element.provincia?.[0] || "",
              distrito: element.distrito?.[0] || "",
              circuito: element.circuito?.[0] || "",
              corporacion: element.corporacion?.[0] || "",
              participacion: element.participacion?.[0] || "",
              escrutado: element.escrutado?.[0] || "",
              nombre_partido: element.nombre_partido?.[0] || "",
              // ...agrega los demás campos aquí con asignaciones condicionales
            };
            return item;
          });
          resolve(dataArray);
        }
      });
    });
  });
}

//-------------------  ENVIAR DATOS A WALL Y RA A TRAVES DE SOCKETS -------------------
function SendUDPMessages(msg, ip) {
  console.log(msg)
  client.send(msg, 7124, ip, function (error) {
    if (error) {
      console.log(error);
      client.close();
    }
  });
}

module.exports = {
  ChangeFormat,
  CreateXml,
  ReadXml,
  SendUDPMessages,
};
