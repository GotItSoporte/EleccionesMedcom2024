import PropTypes from 'prop-types';
import { Card, Verificacion } from '../../components';
import Logo from '../../assets/logoMedcom.svg';
import Operador from '../../assets/profiles/Operador.jpg';
import Presentador from '../../assets/profiles/Presentador.jpg';
import Follower from '../../assets/profiles/Programador.jpg';
import CentroComercial from '../../assets/profiles/CentroCOmercial.jpg';

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
        <div className="gap-16 items-center py-8 px-2 mx-auto max-w-screen-xl  lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light  sm:text-lg text-gray-400">
            <h2 className="mb-4 md:mb-4 text-2xl md:text-4xl tracking-tight font-extrabold text-white text-center lg:text-left">
              Elecciones presidenciales Telemetro Reporta 2024
            </h2>
            <p className="mb-4 md:mb-4 text-center lg:text-left">
              Aplicativo web de control de datos para crear gráficos de noticias.{' '}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 md:gap-4">
            <div
              className=""
              onClick={() => {
                setMostrarVerificacion(true), setRol('Operador');
              }}
            >
              <Card name="Operador" image={Operador} />
            </div>
            <div
              className=""
              onClick={() => {
                setMostrarVerificacion(true), setRol('Presentador');
              }}
            >
              <Card name="Presentador" image={Presentador} />
            </div>
            <div
              className=""
              onClick={() => {
                setMostrarVerificacion(true), setRol('Follower');
              }}
            >
              <Card name="Follower" image={Follower} />
            </div>
            <div
              className=""
              onClick={() => {
                setMostrarVerificacion(true), setRol('Metromall');
              }}
            >
              <Card name="Metromall" image={CentroComercial} />
            </div>
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
