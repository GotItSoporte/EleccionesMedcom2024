//-------------------  VARIABLES DE RUTA PARA DATOS XML -------------------
const RUTE_XML = "Z:/Voto24/ELECCIONES2024/"; //Z:/Voto24/ELECCIONES2024/
const RUTE_XMLTICKER = "Z:/TReporta/DataScrollTR/"; //Z:/TReporta/DataScrollTR/

const NAME_FILE_FULLSCREENPALACIO = "Voto24_fullscreen";
const NAME_FILE_FULLSCREENTRIBUNAL = "Voto24_fullscreentribunal";

const NAME_FILE_TOUCHSCREEN = "Voto24_touchscreen";
const NAME_FILE_TOUCHSCREENALL = "Voto24_touchscreenall";

const NAME_FILE_ESCRUTADONACIONAL = "Voto24_escrutadonacional";

const NAME_FILE_RAEXTERIORMAPA = "Voto24_raexteriormapa";

const NAME_FILE_TICKERARRIBA = "Voto24_TickerArriba";
const NAME_FILE_TICKERARRIBA2 = "Voto24_TickerAbajo_Canal"; //RECORDAR QUE ESTE VA ABAJO PERO CON LOS DATOS DE TICKER ARRIBA
const NAME_FILE_TICKERABAJO = "Voto24_TickerAbajo";

//-------------------  VARIABLES PARA ENVIAR DATOS WALL -------------------
const IP_ENGINE_WALL = "192.168.70.116"; //192.168.70.116
const IP_ENGINE_SETREGIONES = "192.168.70.129"; //192.168.70.129
const UDP_PORT = 7124;

//-------------------  VARIABLES PARA LECTURA EXCEL FOLLOWER -------------------
const NAME_FILE_EXCEL_FOLLOWER = "Parlamentro_centroamericano";
const NAME_FILE_EXCEL_FORMULA_FOLLOWER = "Formula_Presidencial";


module.exports = {
  RUTE_XML,
  RUTE_XMLTICKER,
  UDP_PORT,
  IP_ENGINE_WALL,
  IP_ENGINE_SETREGIONES,
  NAME_FILE_FULLSCREENPALACIO,
  NAME_FILE_FULLSCREENTRIBUNAL,
  NAME_FILE_TOUCHSCREEN,
  NAME_FILE_TOUCHSCREENALL,
  NAME_FILE_ESCRUTADONACIONAL,
  NAME_FILE_RAEXTERIORMAPA,
  NAME_FILE_TICKERARRIBA,
  NAME_FILE_TICKERARRIBA2,
  NAME_FILE_TICKERABAJO,
  NAME_FILE_EXCEL_FOLLOWER,
  NAME_FILE_EXCEL_FORMULA_FOLLOWER,
};
