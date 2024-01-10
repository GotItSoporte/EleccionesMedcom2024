import { Navbar, Table, FormatFullscreenXml } from '../../../components';
import PropTypes from 'prop-types';

export const FullScreen = ({ mostrarNavbar, rol, setMostrarNavbar, dataSelect, setDataSelect, children }) => {
  return (
    <>
      <div className={`float-left w-0 ${mostrarNavbar ? 'lg:w-auto' : 'lg:w-0'}`}>
        <Navbar
          type="navbarOnly"
          mostrarNavbar={mostrarNavbar}
          setMostrarNavbar={setMostrarNavbar}
          setDataSelect={setDataSelect}
          rol={rol}
          activePresentador={false}
          //NO APLICA
          graficoSeleccionado={''}
          setGraficoSeleccionado={() => {}}
        />
      </div>
      {children}

      <div className="w-auto px-2 overflow-x-auto ">
        <Table data={dataSelect} />
        <div className='w-fit mx-auto mt-2 p-1'>
        <FormatFullscreenXml data={dataSelect}/>
        </div>
   
      </div>
    </>
  );
};

FullScreen.propTypes = {
  rol: PropTypes.string.isRequired,
  mostrarNavbar: PropTypes.bool.isRequired,
  setMostrarNavbar: PropTypes.func.isRequired,
  dataSelect: PropTypes.array.isRequired,
  setDataSelect: PropTypes.func.isRequired,
  children: PropTypes.node,
};
