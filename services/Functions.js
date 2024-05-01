var fs = require("fs");
var convert = require("xml-js");
const xml2js = require("xml2js");
const udp = require("dgram");
const client = udp.createSocket("udp4");
const Variables = require("./Variables");
const xlsx = require("xlsx");

const listPartido = {
  "NO APLICA": {
    id: 0,
  },
  PRD: {
    id: 2,
    nombre: "PARTIDO REVOLUCIONARIO DEMOCRÁTICO",
  },
  PP: {
    id: 3,
    nombre: "PARTIDO POPULAR",
  },
  MOL: {
    id: 4,
    nombre: "MOLIRENA",
  },
  PAN: {
    id: 8,
    nombre: "PARTIDO PANAMEÑISTA",
  },
  CD: {
    id: 32,
    nombre: "CAMBIO DEMOCRÁTICO",
  },
  ALIANZA: {
    id: 51,
    nombre: "PARTIDO ALIANZA",
  },
  RM: {
    id: 56,
    nombre: "REALIZANDO METAS",
  },
  PAIS: {
    id: 52,
    nombre: "PAÍS",
  },
  MOCA: {
    id: 53,
    nombre: "MOVIMIENTO OTRO CAMINO",
  },
  "LIBRE POST.": {
    id: 57,
    nombre: "LIBRE POSTULACIÓN",
  },
  "LIBRE POST 2.": {
    id: 58,
    nombre: "LIBRE POSTULACIÓN 2",
  },
  "LIBRE POST 3.": {
    id: 59,
    nombre: "LIBRE POSTULACIÓN 3",
  },
  "PP ZULAY": {
    id: 501,
    nombre: "PARTIDO ZULAY",
  },
  "PP ARROCHA": {
    id: 503,
    nombre: "PARTIDO ARROCHA",
  },
  "PP GORDON": {
    id: 502,
    nombre: "PARTIDO GORDON",
  },
};

const curules = {
  '1-1': 2,
  '2-1': 2,
  '2-2': 1,
  '2-3': 1,
  '2-4': 1,
  '3-1': 4,
  '3-2': 1,
  '4-1': 3,
  '4-2': 1,
  '4-3': 2,
  '4-4': 1,
  '4-5': 1,
  '4-6': 1,
  '5-1': 1,
  '5-2': 1,
  '6-1': 1,
  '6-2': 1,
  '6-3': 1,
  '7-1': 1,
  '7-2': 1,
  '8-1': 1,
  '8-2': 7,
  '8-3': 5,
  '8-4': 5,
  '8-5': 3,
  '8-6': 4,
  '9-1': 2,
  '9-2': 1,
  '9-3': 1,
  '9-4': 1,
  '10-1': 1,
  '10-2': 1,
  '12-1': 1,
  '12-2': 1,
  '12-3': 1,
  '13-1': 3,
  '13-2': 1,
  '13-3': 1,
  '13-4': 3,
};



//------------------- FORMATEAR DATA PARA UNREAL ENGINE -------------------
function ChangeFormat(data) {
  return data
    ?.map((elemento, indice) => ({
      [`cantidad`]: data?.length,
      [`corporacion`]: data[0]?.corporacion || "",
      ["seleccion"]:
        data[0].corporacion === "PRESIDENTE"
          ? "PRESIDENCIAL"
          : data[0].corporacion === "DIPUTADO"
          ? data[0].plurinominal === "1"
            ? "PLURINOMINAL"
            : "UNINOMINAL"
          : "UNINOMINAL",
      [`participacion`]: data[0]?.participacion?.toFixed(2)?.toString() || "", // (Math.random() * 99.99).toFixed(2)
      [`escrutado`]: parseFloat(data[0]?.escrutado)?.toFixed(2)?.toString() || "",
      [`provincia`]: data[0]?.provincia || "",
      [`region`]:
        data[0]?.corporacion === "PRESIDENTE"
          ? data[0]?.provincia
          : data[0]?.corporacion === "ALCALDE"
          ? data[0]?.distrito
          : data[0]?.corporacion === "DIPUTADO"
          ? "CIRCUITO " + data[0]?.circuito
          : null || data[0]?.region || "",
      [`cedula${indice}`]: elemento?.cedula || "SIN IDENTIFICACION",
      [`cedulavideoganador`]:
        data[0]?.cedula + "-Gana_Video" || "SIN IDENTIFICACION",
      [`cedulavideo${indice}`]:
        elemento?.cedula + "_Video" || "SIN IDENTIFICACION",
      [`nombre${indice}`]:
        elemento.cedula === "8-766-2490"
          ? "JOSÉ G."
          : elemento.cedula === "4-132-245"
          ? "JOSÉ R."
          : elemento?.nombre?.split(" ")[0]?.toUpperCase() || "",
      [`apellido${indice}`]: 
        elemento?.nombre?.split(" ")?.slice(1)?.join(" ")?.toUpperCase()  || "",  //elemento?.nombre?.split(" ").pop().toUpperCase() 
      [`votos${indice}`]:
        elemento?.votos?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || "", // elemento.votos ||
      [`porcentaje${indice}`]: elemento.porcentaje?.toFixed(2)?.toString() || "", //(Math.random() * 99.99).toFixed(2), //elemento.porcentaje?.toFixed(2)?.toString()
      [`codigo_partido1_${indice}`]: elemento?.codigo_partido?.toString() || "",
      [`codigo_partido2_${indice}`]:
        elemento?.codigo_partido2?.toString() || "",
      [`codigo_partido3_${indice}`]:
        elemento?.codigo_partido3?.toString() || "",
      [`codigo_partido4_${indice}`]:
        elemento?.codigo_partido4?.toString() || "",
      [`ganadorplurinominal${indice}`]:
        elemento.ganadorplurinominal?.toString() || "0",
        [`curules`]:
        curules[elemento?.circuito]?.toString() || "",
    }))
    .reduce((resultado, elemento) => ({ ...resultado, ...elemento }), {});
}

//------------------- CREAR XML EN LAS RUTAS ESPECIFICADAS -------------------
async function CreateXml(ruteFile, data, rute) {
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
              porcentaje: element.porcentaje?.[0] || "",
              provincia: element.provincia?.[0] || "",
              distrito: element.distrito?.[0] || "",
              circuito: element.circuito?.[0] || "",
              corporacion: element.corporacion?.[0] || "",
              participacion: element.participacion?.[0] || "",
              escrutado: element.escrutado?.[0] || "",
              nombre_partido: element.nombre_partido?.[0] || "",
              nombre_partido2: element.nombre_partido2?.[0] || "",
              nombre_partido3: element.nombre_partido3?.[0] || "",
              nombre_partido4: element.nombre_partido4?.[0] || "",
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
  //console.log(msg);
  client.send(msg, 7124, ip, function (error) {
    if (error) {
      console.log(error);
      client.close();
    }
  });
}

//-------------------  LECTURA DE EXCEL PARLAMENTO-------------------
function ReadExcelFollower(ruteFile, rute) {
  const workbook = xlsx.readFile(`${ruteFile}${rute}.xlsx`);
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = [];

  // Itera sobre las primeras 20 filas de la hoja de trabajo
  for (let index = 2; index <= 21; index++) {
    const celdaCedula = worksheet[`B${index}`];
    const celdaNombre = worksheet[`C${index}`];
    const celdaApellido = worksheet[`D${index}`];

    const cedula = celdaCedula ? celdaCedula.v : "";
    const nombre = celdaNombre ? celdaNombre.v : "";
    const apellido = celdaApellido ? celdaApellido.v : "";
    data.push({
      cedula: cedula.toString(),
      nombre: nombre.toUpperCase(),
      apellido: apellido.toUpperCase(),
    });
  }

  return data
    .map((elemento, indice) => ({
      [`cedula${indice}`]: elemento.cedula || "",
      [`nombre${indice}`]: elemento.nombre || "",
      [`apellido${indice}`]: elemento.apellido || "",
    }))
    .reduce((resultado, elemento) => ({ ...resultado, ...elemento }), {});
}



//-------------------  LECTURA DE EXCEL FORMULA-------------------
function ReadExcelFormulaFollower(ruteFile, rute) {
  const workbook = xlsx.readFile(`${ruteFile}${rute}.xlsx`);
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = [];

  // Itera sobre las primeras 20 filas de la hoja de trabajo
  for (let index = 2; index <= 10; index++) {
    const celdaCedula = worksheet[`B${index}`];
    const celdaNombrePresidencial = worksheet[`C${index}`];
    const celdaApellidoPresidencial = worksheet[`D${index}`];
    const celdaNombreVicepresidencial = worksheet[`E${index}`];
    const celdaApellidoVicepresidencial = worksheet[`F${index}`];
    const celdaBandera1 = worksheet[`G${index}`];
    const celdaBandera2 = worksheet[`H${index}`];
    const celdaBandera3 = worksheet[`I${index}`];
    const celdaBandera4 = worksheet[`J${index}`];

    const cedula = celdaCedula ? celdaCedula.v : "";
    const nombrePresidencial = celdaNombrePresidencial
      ? celdaNombrePresidencial.v
      : "";
    const apellidoPresidencial = celdaApellidoPresidencial
      ? celdaApellidoPresidencial.v
      : "";
    const nombreVicepresidencial = celdaNombreVicepresidencial
      ? celdaNombreVicepresidencial.v
      : "";
    const apellidoVicepresidencial = celdaApellidoVicepresidencial
      ? celdaApellidoVicepresidencial.v
      : "";
    const bandera1 = celdaBandera1 ? celdaBandera1.v : "NO APLICA";
    const bandera2 = celdaBandera2 ? celdaBandera2.v : "NO APLICA";
    const bandera3 = celdaBandera3 ? celdaBandera3.v : "NO APLICA";
    const bandera4 = celdaBandera4 ? celdaBandera4.v : "NO APLICA";

    data.push({
      cedula: cedula.toString(),
      nombrePresidencial: nombrePresidencial.toUpperCase(),
      apellidoPresidencial: apellidoPresidencial.toUpperCase(),
      nombreVicepresidencial: nombreVicepresidencial.toUpperCase(),
      apellidoVicepresidencial: apellidoVicepresidencial.toUpperCase(),
      bandera1: bandera1.toUpperCase(),
      bandera2: bandera2.toUpperCase(),
      bandera3: bandera3.toUpperCase(),
      bandera4: bandera4.toUpperCase(),
    });
  }

  return data
    .map((elemento, indice) => ({
      [`cedula${indice}`]: elemento.cedula + "_Presi" || "",
      [`cedulavice${indice}`]: elemento.cedula + "_Vice" || "",
      [`nombrePresidencial${indice}`]: elemento.nombrePresidencial || "",
      [`apellidoPresidencial${indice}`]: elemento.apellidoPresidencial || "",
      [`nombreVicepresidencial${indice}`]:
        elemento.nombreVicepresidencial || "",
      [`apellidoVicepresidencial${indice}`]:
        elemento.apellidoVicepresidencial || "",
      [`codigo_partido1_${indice}`]:
        listPartido[elemento.bandera1]?.id?.toString() || "",
      [`codigo_partido2_${indice}`]:
        listPartido[elemento.bandera2]?.id?.toString() || "",
      [`codigo_partido3_${indice}`]:
        listPartido[elemento.bandera3]?.id?.toString() || "",
      [`codigo_partido4_${indice}`]:
        listPartido[elemento.bandera4]?.id?.toString() || "",
    }))
    .reduce((resultado, elemento) => ({ ...resultado, ...elemento }), {});
}

module.exports = {
  ChangeFormat,
  CreateXml,
  ReadXml,
  SendUDPMessages,
  ReadExcelFollower,
  ReadExcelFormulaFollower,
};
