import PropTypes from 'prop-types';
import { Card, Verificacion } from '../../components';
import Logo from '../../assets/logoMedcom.svg';
import Operador from '../../assets/profiles/Operador.png';

export const Home = ({ mostrarVerificacion, setMostrarVerificacion, setRol, rol }) => {
  return (
    <>
      <div className="w-screen h-32 fixed bg-gray-950  flex justify-center items-center ">
        <img className="h-12" src={Logo} alt="" />
      </div>

      <div className="h-screen flex items-center ">
        <div className="w-screen h-2/3 mx-auto p-5 md:p-10 items-center grid grid-cols-2 md:grid-cols-2  lg:grid-cols-5 gap-4 bg-gray-900">
          <div
            onClick={() => {
              setMostrarVerificacion(true), setRol('operador');
            }}
          >
            <Card name="Operador" image={Operador} />
          </div>

          <Card name="Presentador" image={Operador} />
          <Card name="Operador" image={Operador} />
          <Card name="Operador" image={Operador} />
          <Card name="Operador" image={Operador} />
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
