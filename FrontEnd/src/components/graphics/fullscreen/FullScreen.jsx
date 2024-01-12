import { useEffect, useState } from 'react';
import { Navbar, Table, FormatFullscreenXml } from '../../../components';
import PropTypes from 'prop-types';
import fetchReadXml from '../../../apis/ReadXml';

export const FullScreen = ({ mostrarNavbar, rol, setMostrarNavbar, dataSelect, setDataSelect, children }) => {

  const [lastFile,setLastFile] = useState(false);
  const [dataLastFile,setDataLastFile] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newData = await fetchReadXml('FULLSCREEN');
        setDataLastFile(newData);
      } catch (error) {
        // Manejar el error según sea necesario
        console.error('Error al realizar la petición:', error);
      }
    };
    fetchData(); // Llamada a la función asincrónica
  }, [lastFile]);

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
        />
      </div>
      {children}

      <div className="w-auto px-2 overflow-x-auto">
        {lastFile &&
        
        <div className="fixed bg-gray-900 border-green border-2 rounded-sm   p-2 mt-20  z-10 max-h-[50%] overflow-y-auto w-screen md:w-auto md:mx-10">
          <div className='flex justify-end'>
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
            <Table data={dataLastFile} />
          </div>
        </div>
        }
        <Table data={dataSelect} />
        <div className="w-fit mx-auto mt-2 p-1">
          <FormatFullscreenXml data={dataSelect} />
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
