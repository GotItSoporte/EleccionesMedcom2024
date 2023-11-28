import { useState } from 'react';
import PropTypes from 'prop-types';

export const NavbarOnly = ({ data, setDataSelect, mostrarNavbar, setMostrarNavbar }) => {
  const [nameCorporacion] = useState(['PRESIDENTE', 'ALCALDES', 'DIPUTADOS']);

  const provinciaRepetida = {
    PRESIDENTE: {},
    ALCALDES: {},
    DIPUTADOS: {},
  };

  const DistritoRepetido = {
    'BOCAS DEL TORO': {},
    COCLÉ: {},
    COLÓN: {},
    CHIRIQUÍ: {},
    DARIÉN: {},
    'EMBERÁ WOUNAAN': {},
    HERRERA: {},
    'LOS SANTOS': {},
    PANAMÁ: {},
    'PANAMÁ OESTE': {},
    VERAGUAS: {},
    'NGÖBE BUGLÉ': {},
  };

  const CircuitoRepetido = {
    'BOCAS DEL TORO': {},
    COCLÉ: {},
    COLÓN: {},
    CHIRIQUÍ: {},
    DARIÉN: {},
    'EMBERÁ WOUNAAN': {},
    HERRERA: {},
    'LOS SANTOS': {},
    PANAMÁ: {},
    'PANAMÁ OESTE': {},
    VERAGUAS: {},
    'NGÖBE BUGLÉ': {},
  };

  const [open, setOpen] = useState({});
  const [openProvincia, setOpenProvincia] = useState({});
  const [openCircuito, setOpenCircuito] = useState({});

  const toggleOpen = (el) => {
    setOpen({
      ...open,
      [el]: !open[el],
    });
  };

  const toggleOpenProvincia = (el) => {
    setOpenProvincia({
      ...openProvincia,
      [el]: !openProvincia[el],
    });
  };

  const toggleOpenCircuito = (el) => {
    setOpenCircuito({
      ...openCircuito,
      [el]: !openCircuito[el],
    });
  };

  return (
    <>
      <div className="block navbar-menu relative z-50  ">
        <nav
          className={` lg:static h-[calc(100vh-8.4vh)] top-0 left-0 bottom-0 flex flex-col w-72 lg:w-80 sm:max-w-xs  pb-8 pt-5    ${
            mostrarNavbar ? 'overflow-y-auto bg-gray-900 ' : '  overflow-hidden '
          }`}
        >
          <div className={`${mostrarNavbar ? '' : 'w-0 -translate-x-56 '}`}>
            <div className="px-4 pb-6">
              <h3 className="mb-2 text-xs uppercase text-gray-500 font-medium">SELECCIONA UNA SOLA OPCION</h3>

              <a
                className="flex items-center pl-3 py-3 pr-4 text-sm text-gray-50 bg-red-900 hover:bg-blue-500 rounded mb-5 w-fit mx-auto"
                href="#"
                onClick={() => setDataSelect([])}
              >
                <span>ULTIMO XML GENERADO</span>
              </a>

              <ul className="mb-8 text-sm font-medium">
                {nameCorporacion.map((corporacion, idx) => {
                  return (
                    <li key={idx}>
                      <a
                        className="flex items-center pl-3 py-3 pr-4 text-gray-50 bg-gray-900 hover:bg-blue-500 rounded"
                        href="#"
                        onClick={() => toggleOpen(corporacion)}
                      >
                        <span>{corporacion}</span>
                        <span className="inline-block ml-auto">
                          <svg className="text-gray-400 w-3 h-3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M9.08329 0.666626C8.74996 0.333293 8.24996 0.333293 7.91663 0.666626L4.99996 3.58329L2.08329 0.666626C1.74996 0.333293 1.24996 0.333293 0.916626 0.666626C0.583293 0.999959 0.583293 1.49996 0.916626 1.83329L4.41663 5.33329C4.58329 5.49996 4.74996 5.58329 4.99996 5.58329C5.24996 5.58329 5.41663 5.49996 5.58329 5.33329L9.08329 1.83329C9.41663 1.49996 9.41663 0.999959 9.08329 0.666626Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                      </a>
                      {open[corporacion] &&
                        data[corporacion]?.map((el, idx) => {
                          if (!provinciaRepetida[corporacion][el.provincia]) {
                            provinciaRepetida[corporacion][el.provincia] = true;
                            return (
                              <div key={idx}>
                                <a
                                  className={`flex items-center pl-3 py-3 pr-4 text-gray-50 ${
                                    corporacion === 'PRESIDENTE' ? 'bg-gray-600' : 'bg-gray-800'
                                  }  hover:bg-blue-500 `}
                                  href="#"
                                  onClick={() => {
                                    corporacion === 'PRESIDENTE'
                                      ? setDataSelect(
                                          data[corporacion].filter((item) => item.corporacion === 'PRESIDENTE'),
                                        )
                                      : null;
                                    corporacion === 'PRESIDENTE' && setMostrarNavbar(false);
                                    corporacion === 'ALCALDES' ? toggleOpenProvincia(el.provincia) : null;
                                    corporacion === 'DIPUTADOS' ? toggleOpenCircuito(el.provincia) : null;
                                  }}
                                >
                                  <span>{el.provincia}</span>
                                  {corporacion !== 'PRESIDENTE' ? (
                                    <span className="inline-block ml-auto">
                                      <svg
                                        className="text-gray-400 w-3 h-3"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M9.08329 0.666626C8.74996 0.333293 8.24996 0.333293 7.91663 0.666626L4.99996 3.58329L2.08329 0.666626C1.74996 0.333293 1.24996 0.333293 0.916626 0.666626C0.583293 0.999959 0.583293 1.49996 0.916626 1.83329L4.41663 5.33329C4.58329 5.49996 4.74996 5.58329 4.99996 5.58329C5.24996 5.58329 5.41663 5.49996 5.58329 5.33329L9.08329 1.83329C9.41663 1.49996 9.41663 0.999959 9.08329 0.666626Z"
                                          fill="currentColor"
                                        ></path>
                                      </svg>
                                    </span>
                                  ) : (
                                    <></>
                                  )}
                                </a>
                                {/*ALCALDES*/}

                                {openProvincia[el.provincia] &&
                                  corporacion === 'ALCALDES' &&
                                  data[corporacion]
                                    .filter((item) => item.provincia === el.provincia)
                                    .sort((a, b) => a.distrito.localeCompare(b.distrito))
                                    ?.map((el2, idx2) => {
                                      if (!DistritoRepetido[el.provincia][el2.distrito]) {
                                        DistritoRepetido[el.provincia][el2.distrito] = true;
                                        return (
                                          <div key={idx2}>
                                            <a
                                              className="flex items-center pl-3 py-3 pr-4 text-gray-50 bg-gray-600 hover:bg-blue-500 "
                                              href="#"
                                              onClick={() =>
                                                setDataSelect(
                                                  data[corporacion].filter(
                                                    (item) =>
                                                      item.provincia === el.provincia && item.distrito === el2.distrito,
                                                  ),
                                                )
                                              }
                                            >
                                              <span>{el2.distrito}</span>
                                            </a>
                                          </div>
                                        );
                                      }
                                    })}
                                {/*DIPUTADOS*/}
                                {openCircuito[el.provincia] &&
                                  corporacion === 'DIPUTADOS' &&
                                  data[corporacion]
                                    .filter((item) => item.provincia === el.provincia)
                                    .sort((a, b) => a.circuito.localeCompare(b.circuito))
                                    ?.map((el3, idx3) => {
                                      if (!CircuitoRepetido[el.provincia][el3.circuito]) {
                                        CircuitoRepetido[el.provincia][el3.circuito] = true;
                                        return (
                                          <div key={idx3}>
                                            <a
                                              className="flex items-center pl-3 py-3 pr-4 text-gray-50 bg-gray-700 hover:bg-blue-500 "
                                              href="#"
                                              onClick={() => {
                                                setDataSelect(
                                                  data[corporacion].filter(
                                                    (item) =>
                                                      item.provincia === el.provincia && item.circuito === el3.circuito,
                                                  ),
                                                );
                                              }}
                                            >
                                              <span>CIRCUITO {el3.circuito}</span>
                                              <span className="inline-block ml-auto">
                                                <svg
                                                  className="text-gray-400 w-3 h-3"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <path
                                                    d="M9.08329 0.666626C8.74996 0.333293 8.24996 0.333293 7.91663 0.666626L4.99996 3.58329L2.08329 0.666626C1.74996 0.333293 1.24996 0.333293 0.916626 0.666626C0.583293 0.999959 0.583293 1.49996 0.916626 1.83329L4.41663 5.33329C4.58329 5.49996 4.74996 5.58329 4.99996 5.58329C5.24996 5.58329 5.41663 5.49996 5.58329 5.33329L9.08329 1.83329C9.41663 1.49996 9.41663 0.999959 9.08329 0.666626Z"
                                                    fill="currentColor"
                                                  ></path>
                                                </svg>
                                              </span>
                                            </a>
                                          </div>
                                        );
                                      }
                                    })}
                              </div>
                            );
                          }
                          return null;
                        })}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="mx-auto lg:ml-80"></div>
    </>
  );
};

NavbarOnly.propTypes = {
  mostrarNavbar: PropTypes.bool.isRequired,
  setMostrarNavbar: PropTypes.func.isRequired,
  setDataSelect: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};
