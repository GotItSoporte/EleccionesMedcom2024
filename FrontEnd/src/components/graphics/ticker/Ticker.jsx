import { Navbar, Table, FormatTickerXml, InlineLayout } from '../../../components';
import PropTypes from 'prop-types';

export const Ticker = ({
  nameGrafico,
  mostrarNavbar,
  dataSelect,
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
          nameCorporacion={['PRESIDENTE']}
        />
      </div>
      {children}

      <div className="w-auto px-2 overflow-x-auto mt-2 ">
        {dataGroupe.length > 0 && (
          <InlineLayout option={selectOption} setOption={setSelectOption} dataSelect={dataSelect} ActiveTicker={true} />
        )}
        <Table data={dataGroupe} type="" option={0} />
        <FormatTickerXml name={nameGrafico} data={dataGroupe} />
        {/* TICKER SECUNDARIO */}
        <FormatTickerXml name="Voto_Abajo_Canal_V24" data={dataGroupe} />
      </div>
    </>
  );
};

Ticker.propTypes = {
  nameGrafico: PropTypes.string.isRequired,
  mostrarNavbar: PropTypes.bool.isRequired,
  dataSelect: PropTypes.array.isRequired,
  setDataSelect: PropTypes.func.isRequired,
  selectOption: PropTypes.number.isRequired,
  setSelectOption: PropTypes.func.isRequired,
  dataGroupe: PropTypes.array.isRequired,
  isChecked: PropTypes.object.isRequired,
  setIsChecked: PropTypes.func.isRequired,
  children: PropTypes.node,
};
