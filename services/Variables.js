

//-------------------  VARIABLES DE RUTA PARA DATOS XML -------------------
const RUTE_XML = "W:/VOTO 24 (medcom)/Elecciones Generales Mayo 5/archivosXML/"; //Z:/Voto24/ELECCIONES2024/
const RUTE_XMLTICKER = "W:/VOTO 24 (medcom)/Elecciones Generales Mayo 5/archivosXML/"; //Z:/TReporta/DataScrollTR/

const NAME_FILE_FULLSCREENPALACIO = 'Voto24_fullscreen' 
const NAME_FILE_FULLSCREENTRIBUNAL = 'Voto24_fullscreentribunal' 

const NAME_FILE_TOUCHSCREEN = 'Voto24_touchscreen'
const NAME_FILE_TOUCHSCREENALL = 'Voto24_touchscreenall'

const NAME_FILE_ESCRUTADONACIONAL = 'Voto24_escrutadonacional'


const NAME_FILE_TICKERARRIBA = 'Voto24_TickerArriba'
const NAME_FILE_TICKERARRIBA2 = 'Voto24_TickerAbajo_Canal'   //RECORDAR QUE ESTE VA ABAJO PERO CON LOS DATOS DE TICKER ARRIBA 
const NAME_FILE_TICKERABAJO = 'Voto24_TickerAbajo'

//-------------------  VARIABLES PARA ENVIAR DATOS WALL -------------------
const IP_ENGINE_WALL = "localhost"
const IP_ENGINE_SETREGIONES = "localhost"
const UDP_PORT = 7124;

//-------------------  VARIABLES PARA LECTURA EXCEL FOLLOWER -------------------
const NAME_FILE_EXCEL_FOLLOWER = 'Parlamentro_centroamericano'




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
    NAME_FILE_TICKERARRIBA,
    NAME_FILE_TICKERARRIBA2,
    NAME_FILE_TICKERABAJO,
    NAME_FILE_EXCEL_FOLLOWER
};