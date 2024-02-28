

//-------------------  VARIABLES DE RUTA PARA DATOS XML -------------------
const RUTE_XML = "W:/VOTO 24 (medcom)/Elecciones Generales Mayo 5/archivosXML/";

const NAME_FILE_FULLSCREEN = 'Voto24_fullscreen' 

const NAME_FILE_TOUCHSCREEN = 'Voto24_touchscreen'
const NAME_FILE_TOUCHSCREENALL = 'Voto24_touchscreenall'


const NAME_FILE_TICKERARRIBA = 'Voto24_Ticker'
const NAME_FILE_TICKERARRIBA2 = 'Voto24_Ticker_2'   //RECORDAR QUE ESTE VA ABAJO PERO CON LOS DATOS DE TICKER ARRIBA 
const NAME_FILE_TICKERABAJO = 'Voto24_TickerAbajo'

//-------------------  VARIABLES PARA ENVIAR DATOS WALL -------------------
const IP_ENGINE_WALL = "192.168.2.8"
const IP_ENGINE_SETREGIONES = "192.168.0.15"
const UDP_PORT = 7124;




module.exports = {
    RUTE_XML,
    UDP_PORT,
    IP_ENGINE_WALL,
    IP_ENGINE_SETREGIONES,
    NAME_FILE_FULLSCREEN,
    NAME_FILE_TOUCHSCREEN,
    NAME_FILE_TOUCHSCREENALL,
    NAME_FILE_TICKERARRIBA,
    NAME_FILE_TICKERARRIBA2,
    NAME_FILE_TICKERABAJO 
};