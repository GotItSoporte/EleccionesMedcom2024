import { Navbar, Table } from '../../components';
import PropTypes from 'prop-types';

export const Ticker = ({ mostrarNavbar, setMostrarNavbar, dataSelect, setDataSelect, children }) => {
  return (
    <>
      <div className={`float-left w-0 ${mostrarNavbar ? 'lg:w-auto' : 'lg:w-0'}`}>
        <Navbar
          type="navbarMulti"
          mostrarNavbar={mostrarNavbar}
          setMostrarNavbar={setMostrarNavbar}
          setDataSelect={setDataSelect}
          rol="Operador"
          
          //NO APLICA
          graficoSeleccionado={''}
          setGraficoSeleccionado={() => {}}
          activePresentador={false}
        />
      </div>
      {children}

      <div className="w-auto px-2 overflow-x-auto ">
        <Table data={dataSelect} />
      </div>
    </>
  );
};

Ticker.propTypes = {
  mostrarNavbar: PropTypes.bool.isRequired,
  setMostrarNavbar: PropTypes.func.isRequired,
  dataSelect: PropTypes.array.isRequired,
  setDataSelect: PropTypes.func.isRequired,
  children: PropTypes.node,
};
