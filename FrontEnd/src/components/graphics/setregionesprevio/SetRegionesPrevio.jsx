import { Navbar, SequenceButton } from '../..';
import PropTypes from 'prop-types';

export const SetRegionesPrevio = ({
  nameGrafico,
  mostrarNavbar,
  rol,
  setMostrarNavbar,
  setDataSelect,
  dataGroupe,
  setActiveNavbar,
  children,
}) => {
  return (
    <>
      <div className={`float-left w-0 ${mostrarNavbar ? 'lg:w-auto' : 'lg:w-0'}`}>
        <Navbar
          type="navbarOnly"
          nameCorporacion={['ALCALDE']}
          mostrarNavbar={mostrarNavbar}
          setMostrarNavbar={setMostrarNavbar}
          setDataSelect={setDataSelect}
          rol={rol}
          activePresentador={true}
          //NO APLICA
          graficoSeleccionado={''}
          setGraficoSeleccionado={() => {}}
          setLastFile={() => {}}
          isChecked={{}}
          setIsChecked={() => {}}
        />
      </div>
      {children}

      <div className="w-auto px-2 overflow-x-auto">
        <SequenceButton
          type={nameGrafico}
          data={dataGroupe}
          setMostrarNavbar={setMostrarNavbar}
          setActiveData={setActiveNavbar}
        />
      </div>
    </>
  );
};

SetRegionesPrevio.propTypes = {
  nameGrafico: PropTypes.string.isRequired,
  rol: PropTypes.string.isRequired,
  mostrarNavbar: PropTypes.bool.isRequired,
  setMostrarNavbar: PropTypes.func.isRequired,
  setDataSelect: PropTypes.func.isRequired,
  dataGroupe: PropTypes.array.isRequired,
  setActiveNavbar: PropTypes.func.isRequired,
  children: PropTypes.node,
};
