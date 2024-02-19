import { Navbar, Table, InlineLayout, SequenceButton } from '../../../components';
import PropTypes from 'prop-types';

export const Wall = ({
  nameGrafico,
  mostrarNavbar,
  rol,
  setMostrarNavbar,
  dataSelect,
  setDataSelect,
  selectOption,
  setSelectOption,
  dataGroupe,
  setActiveData,
  children,
}) => {
  return (
    <>
      <div className={`float-left w-0 ${mostrarNavbar ? 'lg:w-auto' : 'lg:w-0'} `}>
        <Navbar
          type="navbarOnly"
          nameCorporacion={['PRESIDENTE', 'ALCALDE', 'DIPUTADO']}
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
            dataSelect={dataSelect}
            ActiveTicker={false}
          />
        )}
        <Table data={dataSelect} type="" option={selectOption} />
        <SequenceButton
          type={nameGrafico}
          data={dataGroupe}
          setMostrarNavbar={setMostrarNavbar}
          setActiveData={setActiveData}
        />
      </div>
    </>
  );
};

Wall.propTypes = {
  nameGrafico: PropTypes.string.isRequired,
  rol: PropTypes.string.isRequired,
  mostrarNavbar: PropTypes.bool.isRequired,
  setMostrarNavbar: PropTypes.func.isRequired,
  dataSelect: PropTypes.array.isRequired,
  setDataSelect: PropTypes.func.isRequired,
  selectOption: PropTypes.number.isRequired,
  setSelectOption: PropTypes.func.isRequired,
  dataGroupe: PropTypes.array.isRequired,
  setActiveData: PropTypes.func.isRequired,
  children: PropTypes.node,
};
