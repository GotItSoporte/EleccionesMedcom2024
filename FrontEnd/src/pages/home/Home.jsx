import PropTypes from 'prop-types';
import { Card, Verificacion } from '../../components';
import Logo from '../../assets/logoMedcom.svg';
import Master from '../../assets/profiles/Operador.jpg';
import EstudioWall from '../../assets/profiles/Presentador.jpg';
import EstudioVirtual from '../../assets/profiles/Programador.jpg';
//import CentroComercial from '../../assets/profiles/CentroCOmercial.jpg';

export const Home = ({ mostrarVerificacion, setMostrarVerificacion, setRol, rol }) => {
  return (
    <>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <img className="h-12 m-5 lg:fixed opacity-70" src={Logo} alt="" />
      <div className="flex items-center lg:h-screen">
        <div className="gap-16 items-center  px-2 mx-auto max-w-screen-xl mt-2 lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light  sm:text-lg text-gray-400">
            <h2 className="mb-2 lg:mb-4 text-2xl md:text-5xl tracking-tight font-extrabold text-white text-center lg:text-left">
              Elecciones presidenciales Telemetro Reporta 2024
            </h2>
            <p className="mb-2 md:mb-4 lg:mb-0 text-center lg:text-left">
              Aplicativo web de control de datos para crear gráficos de noticias.{' '}
            </p>
          </div>
          <div className="grid grid-cols-8 gap-2 md:gap-4 md:mx-14 lg:mx-0">
            <div
              className="col-span-4"
              onClick={() => {
                setMostrarVerificacion(true), setRol('Master');
              }}
            >
              <Card name="Master" image={Master} />
            </div>
            <div
              className="col-span-4"
              onClick={() => {
                setMostrarVerificacion(true), setRol('EstudioWall');
              }}
            >
              <Card name="Estudio Wall" image={EstudioWall} />
            </div>
            <div
              className="col-start-3 col-span-4"
              onClick={() => {
                setMostrarVerificacion(true), setRol('EstudioVirtual');
              }}
            >
              <Card name="Estudio Virtual" image={EstudioVirtual} />
            </div>
            {/*<div
              className=""
              onClick={() => {
                setMostrarVerificacion(true), setRol('Metromall');
              }}
            >
              <Card name="Metromall" image={CentroComercial} />
            </div>*/}
          </div>
          {mostrarVerificacion ? (
            <div className="fixed inset-0 flex items-center justify-center">
              <Verificacion setMostrarVerificacion={setMostrarVerificacion} rol={rol} />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

Home.propTypes = {
  mostrarVerificacion: PropTypes.bool.isRequired,
  setMostrarVerificacion: PropTypes.func.isRequired,
  setRol: PropTypes.func.isRequired,
  rol: PropTypes.string.isRequired,
};
