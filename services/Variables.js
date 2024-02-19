

//-------------------  VARIABLES DE RUTA PARA DATOS XML -------------------
const RUTE_XML = "W:/VOTO 24 (medcom)/Elecciones Generales Mayo 5/archivosXML/";

const NAME_FILE_TICKERARRIBA = 'Voto24_Ticker'
const NAME_FILE_TICKERARRIBA2 = 'Voto24_Ticker_2'   //RECORDAR QUE ESTE VA ABAJO PERO CON LOS DATOS DE TICKER ARRIBA 
const NAME_FILE_TICKERABAJO = 'Voto24_TickerAbajo'

//-------------------  VARIABLES PARA ENVIAR DATOS WALL -------------------
const IP_ENGINE_WALL = "localhost"
const IP_ENGINE_SETREGIONES = "192.168.0.15"
const UDP_PORT = 7124;




module.exports = {
    RUTE_XML,
    UDP_PORT,
    IP_ENGINE_WALL,
    IP_ENGINE_SETREGIONES,
    NAME_FILE_TICKERARRIBA,
    NAME_FILE_TICKERARRIBA2,
    NAME_FILE_TICKERABAJO 
};