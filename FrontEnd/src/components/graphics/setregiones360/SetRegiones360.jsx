import { Navbar, Table, InlineLayout, SequenceButton } from '../..';
import PropTypes from 'prop-types';

export const SetRegiones360 = ({
  nameGrafico,
  mostrarNavbar,
  rol,
  setMostrarNavbar,
  dataSelectReference,
  setDataSelect,
  selectOption,
  setSelectOption,
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
        {dataGroupe.length > 0 && (
          <InlineLayout
            option={selectOption}
            setOption={setSelectOption}
            dataSelect={dataSelectReference}
            ActiveTicker={false}
          />
        )}
        <Table data={dataSelectReference} type="" option={selectOption} />
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

SetRegiones360.propTypes = {
  nameGrafico: PropTypes.string.isRequired,
  rol: PropTypes.string.isRequired,
  mostrarNavbar: PropTypes.bool.isRequired,
  setMostrarNavbar: PropTypes.func.isRequired,
  setDataSelect: PropTypes.func.isRequired,
  dataSelectReference: PropTypes.array.isRequired,
  selectOption: PropTypes.number.isRequired,
  setSelectOption: PropTypes.func.isRequired,
  dataGroupe: PropTypes.array.isRequired,
  setActiveNavbar: PropTypes.func.isRequired,
  children: PropTypes.node,
};
