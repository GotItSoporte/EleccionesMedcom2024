import { Navbar, Table, InlineLayout, SequenceButton } from '../../../components';
import PropTypes from 'prop-types';

export const Wall = ({
  mostrarNavbar,
  rol,
  setMostrarNavbar,
  setDataSelect,
  selectOption,
  setSelectOption,
  dataGroupe,
  children,
}) => {
  return (
    <>
      <div className={`float-left w-0 ${mostrarNavbar ? 'lg:w-auto' : 'lg:w-0'}`}>
        <Navbar
          type="navbarOnly"
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
        <InlineLayout option={selectOption} setOption={setSelectOption} />
        <Table data={dataGroupe} type="" />
        <SequenceButton type="Wall" data={dataGroupe} setMostrarNavbar={setMostrarNavbar} />
      </div>
    </>
  );
};

Wall.propTypes = {
  rol: PropTypes.string.isRequired,
  mostrarNavbar: PropTypes.bool.isRequired,
  setMostrarNavbar: PropTypes.func.isRequired,
  setDataSelect: PropTypes.func.isRequired,
  selectOption: PropTypes.number.isRequired,
  setSelectOption: PropTypes.func.isRequired,
  dataGroupe: PropTypes.array.isRequired,
  children: PropTypes.node,
};
