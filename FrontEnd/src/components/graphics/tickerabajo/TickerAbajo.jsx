import { Navbar, Table, FormatTickerXml, InlineLayout } from '../..';
import PropTypes from 'prop-types';

export const TickerAbajo = ({
  nameGrafico,
  mostrarNavbar,
  setDataSelect,
  selectOption,
  setSelectOption,
  dataGroupe,
  isChecked,
  setIsChecked,
  children,
}) => {
  return (
    <>
      <div className={`float-left w-0 ${mostrarNavbar ? 'lg:w-auto' : 'lg:w-0'}`}>
        <Navbar
          type="navbarMulti"
          mostrarNavbar={mostrarNavbar}
          setDataSelect={setDataSelect}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          //NO APLICA
          rol={''}
          graficoSeleccionado={''}
          setGraficoSeleccionado={() => {}}
          activePresentador={false}
          setLastFile={() => {}}
          setMostrarNavbar={() => {}}
          nameCorporacion={[]}
        />
      </div>
      {children}

      <div className="w-auto px-2 overflow-x-auto mt-2 ">
        {dataGroupe.length > 0 && <InlineLayout option={selectOption} setOption={setSelectOption} />}
        <Table data={dataGroupe} type="" />
        <FormatTickerXml name={nameGrafico} data={dataGroupe} />
      </div>
    </>
  );
};

TickerAbajo.propTypes = {
  nameGrafico: PropTypes.string.isRequired,
  mostrarNavbar: PropTypes.bool.isRequired,
  setDataSelect: PropTypes.func.isRequired,
  selectOption: PropTypes.number.isRequired,
  setSelectOption: PropTypes.func.isRequired,
  dataGroupe: PropTypes.array.isRequired,
  isChecked: PropTypes.object.isRequired,
  setIsChecked: PropTypes.func.isRequired,
  children: PropTypes.node,
};
