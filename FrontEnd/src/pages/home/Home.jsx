import PropTypes from 'prop-types';
import { Card, Verificacion } from '../../components';
import Logo from '../../assets/logoMedcom.svg';
import Operador from '../../assets/profiles/Operador.jpg';
import Presentador from '../../assets/profiles/Presentador.jpg';
import Programador from '../../assets/profiles/Programador.jpg';
import CentroComercial from '../../assets/profiles/CentroCOmercial.jpg';

export const Home = ({ mostrarVerificacion, setMostrarVerificacion, setRol, rol }) => {
  return (
    <>
      <div className="w-screen h-32 fixed bg-gray-700  flex justify-center items-center ">
        <img className="h-12" src={Logo} alt="" />
      </div>

      <div className="h-screen flex items-center ">
        <div className="w-screen lg:w-1/2 h-2/3 mx-auto p-5 md:p-10 items-center grid grid-cols-4 md:grid-cols-6 gap-4 ">
          <div
            className="col-span-2 md:col-span-2"
            onClick={() => {
              setMostrarVerificacion(true), setRol('operador');
            }}
          >
            <Card name="OPERADOR" image={Operador} />
          </div>
          <div
            className="col-span-2 md:col-span-2"
            onClick={() => {
              setMostrarVerificacion(true), setRol('operador');
            }}
          >
            <Card name="PRESENTADOR" image={Presentador} />
          </div>
          <div
            className="col-span-2 md:col-span-2"
            onClick={() => {
              setMostrarVerificacion(true), setRol('operador');
            }}
          >
            <Card name="PROGRAMADOR" image={Programador} />
          </div>
          <div
            className="col-span-2 md:col-start-2 md:col-span-2"
            onClick={() => {
              setMostrarVerificacion(true), setRol('operador');
            }}
          >
            <Card name="METROMOL" image={CentroComercial} />
          </div>
          <div
            className="col-start-2 col-span-2 md:col-start-4 md:col-span-2"
            onClick={() => {
              setMostrarVerificacion(true), setRol('operador');
            }}
          >
            <Card name="OPERADOR" image={Operador} />
          </div>
        </div>
      </div>
      {mostrarVerificacion ? (
        <div className="fixed inset-0 flex items-center justify-center">
          <Verificacion setMostrarVerificacion={setMostrarVerificacion} rol={rol} />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

Home.propTypes = {
  mostrarVerificacion: PropTypes.bool.isRequired,
  setMostrarVerificacion: PropTypes.func.isRequired,
  setRol: PropTypes.func.isRequired,
  rol: PropTypes.string.isRequired,
};
