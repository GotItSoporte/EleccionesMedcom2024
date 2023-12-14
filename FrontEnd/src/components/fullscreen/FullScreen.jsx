import { Navbar, Table } from '..';
import PropTypes from 'prop-types';

export const FullScreen = ({ mostrarNavbar, setMostrarNavbar, dataSelect, setDataSelect, children }) => {
  return (
    <>
      <div className={`float-left w-0 ${mostrarNavbar ? 'lg:w-auto' : 'lg:w-0'}`}>
        <Navbar
          type="navbarOnly"
          mostrarNavbar={mostrarNavbar}
          setMostrarNavbar={setMostrarNavbar}
          setDataSelect={setDataSelect}
          rol="Operador"
          graficoSeleccionado={''}
          setGraficoSeleccionado={() => {}}
        />
      </div>
      {children}

      <div className="w-auto px-2 overflow-x-auto ">
        <Table data={dataSelect} />
      </div>
    </>
  );
};

FullScreen.propTypes = {
  mostrarNavbar: PropTypes.bool.isRequired,
  setMostrarNavbar: PropTypes.func.isRequired,
  dataSelect: PropTypes.array.isRequired,
  setDataSelect: PropTypes.func.isRequired,
  children: PropTypes.node,
};
