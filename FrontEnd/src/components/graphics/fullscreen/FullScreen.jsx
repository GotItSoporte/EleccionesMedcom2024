import { Navbar, Table, FormatFullscreenXml, InlineLayout } from '../../../components';
import PropTypes from 'prop-types';

export const FullScreen = ({
  mostrarNavbar,
  setMostrarNavbar,
  rol,
  setDataSelect,
  selectOption,
  setSelectOption,
  dataGroupe,
  lastFile,
  setLastFile,
  dataLastFile,
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
          activePresentador={false}
          //NO APLICA
          graficoSeleccionado={''}
          setGraficoSeleccionado={() => {}}
          setLastFile={setLastFile}
          isChecked={{}}
          setIsChecked={() => {}}
        />
      </div>
      {children}

      <div className="w-auto px-2 overflow-x-auto">
        {lastFile && (
          <div className="fixed bg-gray-900 border-green border-2 rounded-sm w-[95%]  p-2 mt-10  z-10 max-h-[50%] overflow-y-auto  md:w-auto mr-2 ">
            <div className="flex justify-end">
              <svg
                className="h-12 left-0 text-red cursor-pointer"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                onClick={() => setLastFile(false)}
              >
                {' '}
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /> <line x1="9" y1="9" x2="15" y2="15" />{' '}
                <line x1="15" y1="9" x2="9" y2="15" />
              </svg>
            </div>
            <div className="  overflow-x-auto w-auto  ">
              <Table data={dataLastFile} type="" />
            </div>
          </div>
        )}
        <InlineLayout option={selectOption} setOption={setSelectOption} />
        <Table data={dataGroupe} type="" />
        <div className="w-fit mx-auto mt-2 p-1">
          <FormatFullscreenXml data={dataGroupe} />
        </div>
      </div>
    </>
  );
};

FullScreen.propTypes = {
  rol: PropTypes.string.isRequired,
  mostrarNavbar: PropTypes.bool.isRequired,
  setMostrarNavbar: PropTypes.func.isRequired,
  setDataSelect: PropTypes.func.isRequired,
  selectOption: PropTypes.number.isRequired,
  setSelectOption: PropTypes.func.isRequired,
  dataGroupe: PropTypes.array.isRequired,
  lastFile: PropTypes.bool.isRequired,
  setLastFile: PropTypes.func.isRequired,
  dataLastFile: PropTypes.array.isRequired,
  children: PropTypes.node,
};
