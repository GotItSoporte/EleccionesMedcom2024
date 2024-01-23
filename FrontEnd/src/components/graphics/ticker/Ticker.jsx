import { Navbar, Table, FormatTickerXml, InlineLayout } from '../../../components';
import PropTypes from 'prop-types';

export const Ticker = ({
  mostrarNavbar,
  rol,
  setMostrarNavbar,
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
          setMostrarNavbar={setMostrarNavbar}
          setDataSelect={setDataSelect}
          rol={rol}
          //NO APLICA
          graficoSeleccionado={''}
          setGraficoSeleccionado={() => {}}
          activePresentador={false}
          setLastFile={() => {}}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
        />
      </div>
      {children}

      <div className="w-auto px-2 overflow-x-auto mt-2 ">
        {dataGroupe.length > 0 && <InlineLayout option={selectOption} setOption={setSelectOption} />}
        <Table data={dataGroupe} type="" />
        <FormatTickerXml data={dataGroupe} />
      </div>
    </>
  );
};

Ticker.propTypes = {
  rol: PropTypes.string.isRequired,
  mostrarNavbar: PropTypes.bool.isRequired,
  setMostrarNavbar: PropTypes.func.isRequired,
  setDataSelect: PropTypes.func.isRequired,
  selectOption: PropTypes.number.isRequired,
  setSelectOption: PropTypes.func.isRequired,
  dataGroupe: PropTypes.array.isRequired,
  isChecked: PropTypes.object.isRequired,
  setIsChecked: PropTypes.func.isRequired,
  children: PropTypes.node,
};
