import { useEffect, useState } from 'react';
import { useFunctions } from '../../context';
import { Button } from '../../components';
import iconLastData from '../../assets/icons/lastxml.svg';
import PropTypes from 'prop-types';

export const NavbarOnly = ({
  nameCorporacion,
  setDataSelect,
  mostrarNavbar,
  setMostrarNavbar,
  rol,
  activePresentador,
  data,
  setLastFile,
  graficoSeleccionado,
}) => {
  const [open, setOpen] = useState({});
  const [openDistrito, setOpenDistrito] = useState({});
  const [openCircuito, setOpenCircuito] = useState({});
  const [corporacion, setCorporacion] = useState({});
  const [isChecked, setIsChecked] = useState({});

  const { mostrarInformacion } = useFunctions();

  const toggleOpen = (el) => {
    setOpen({
      ...open,
      [el]: !open[el],
    });
  };

  const toggleOpenDistrito = (el) => {
    setOpenDistrito({
      ...openDistrito,
      [el]: !openDistrito[el],
    });
  };

  const toggleOpenCircuito = (el) => {
    setOpenCircuito({
      ...openCircuito,
      [el]: !openCircuito[el],
    });
  };

  //------------------- OBJETO CONTENEDOR PARA EVITAR DATOS REPETIDOS -------------------
  const miObjeto = {};

  //------------------- ACTUALIZA EL FILTRO RESPECTO A DATA -------------------
  useEffect(() => {
    if (graficoSeleccionado === 'FollowerReeleccion') {
      setDataSelect(mostrarInformacion(isChecked, data, true));
    } else {
      setDataSelect(mostrarInformacion(isChecked, data));
    }
  }, [isChecked, data, graficoSeleccionado]);

  //------------------- EJECUCION PARA OBTENER PROVINCIAS, CIRCUITOS Y DISTRITOS UNICOS -------------------
  useEffect(() => {
    const provinciasUnicas = data[corporacion]
      ? data[corporacion]
          .map((objeto) => objeto.provincia)
          .filter((provincia, index, arr) => arr.indexOf(provincia) === index)
      : [];
    provinciasUnicas.forEach((provincia) => {
      if (!miObjeto[provincia]) {
        miObjeto[provincia] = {};
      }
      miObjeto[provincia][corporacion] = {};
    });
  }, [corporacion, data]);

  //------------------- TRAE LA DATA DEL ULTIMO XML GENERADO -------------------

  return (
    <>
      <div className={`block navbar-menu relative  ${mostrarNavbar ? 'z-50' : ''}  `}>
        <nav
          className={` lg:static h-[calc(100vh-8.4vh)] top-0 left-0 bottom-0 flex flex-col w-72 lg:w-80 sm:max-w-xs  pb-8 pt-5    ${
            mostrarNavbar ? 'overflow-y-auto bg-gray-900 ' : '  overflow-hidden invisible '
          }`}
        >
          <div className={`${mostrarNavbar ? '' : 'w-0 -translate-x-56 '}`}>
            <div className="px-4 pb-6">
              <h3 className="mb-2 text-xs uppercase text-gray-500 font-medium">SELECCIONA UNA SOLA OPCION</h3>
              {!activePresentador && (
                <div className="flex items-center mx-auto w-fit p-1" onClick={() => setLastFile(true)}>
                  <Button
                    type="Principal"
                    name="ULTIMO XML GENERADO"
                    icon={iconLastData}
                    rute="#"
                    color="bg-red"
                    loading={false}
                  />
                </div>
              )}

              <ul className="mb-8 text-sm font-medium">
                {nameCorporacion.map((corporacion, idx) => {
                  return (
                    <li key={idx}>
                      <a
                        className="flex items-center pl-3 py-3 pr-4 text-gray-50 bg-gray-900 hover:bg-blue-500 rounded"
                        href="#"
                        onClick={() => {
                          toggleOpen(corporacion), setCorporacion(corporacion);
                        }}
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
                        (corporacion === 'DIPUTADO'
                          ? data[corporacion]
                              ?.filter((item) =>
                                graficoSeleccionado === 'Follower' ? item.plurinominal === '1' : item,
                              )
                              .filter((item) =>
                                graficoSeleccionado === 'FollowerReeleccion' ? item.reeleccion === '1' : item,
                              )
                          : corporacion === 'ALCALDE'
                            ? data[corporacion].filter((item) => item.activo === '1')
                            : data[corporacion]
                        )?.map((el, idx) => {
                          if (!miObjeto[el.provincia]) {
                            miObjeto[el.provincia] = {};
                          }
                          if (!miObjeto[el.provincia][corporacion]) {
                            miObjeto[el.provincia][corporacion] = {};
                            return (
                              <div key={idx}>
                                <a
                                  className={`flex items-center pl-3 py-3 pr-4 text-gray-50 ${
                                    corporacion === 'PRESIDENTE' ? 'bg-gray-600' : 'bg-gray-800'
                                  }  hover:bg-blue-500 ${
                                    isChecked[corporacion]?.[el.provincia]
                                      ? corporacion === 'PRESIDENTE'
                                        ? 'bg-green-600'
                                        : 'bg-green-700'
                                      : ''
                                  }  `}
                                  href="#"
                                  onClick={() => {
                                    corporacion === 'PRESIDENTE'
                                      ? (setIsChecked({
                                          [corporacion]: {
                                            [el.provincia]: true,
                                          },
                                        }),
                                        rol !== 'Master' && activePresentador && setMostrarNavbar(false))
                                      : null;

                                    corporacion === 'ALCALDE' ? toggleOpenDistrito(el.provincia) : null;
                                    corporacion === 'DIPUTADO' ? toggleOpenCircuito(el.provincia) : null;
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
                                {/*ALCALDE*/}

                                {openDistrito[el.provincia] &&
                                  corporacion === 'ALCALDE' &&
                                  data[corporacion]
                                    .filter((item) => item.activo === '1')
                                    .filter((item) => item.provincia === el.provincia)
                                    .sort((a, b) => a.distrito.localeCompare(b.distrito))
                                    ?.map((el2, idx2) => {
                                      if (!miObjeto[el.provincia][corporacion][el2.distrito]) {
                                        miObjeto[el.provincia][corporacion][el2.distrito] = true;
                                        return (
                                          <div key={idx2}>
                                            <a
                                              className={`flex items-center pl-3 py-3 pr-4 text-gray-50 bg-gray-600 hover:bg-blue-500 ${
                                                isChecked[corporacion]?.[el.provincia]?.[el2.distrito]
                                                  ? 'bg-green-600'
                                                  : ''
                                              } `}
                                              href="#"
                                              onClick={() => {
                                                setIsChecked({
                                                  [corporacion]: {
                                                    [el.provincia]: {
                                                      [el2.distrito]: true,
                                                    },
                                                  },
                                                }),
                                                  rol !== 'Master' && activePresentador && setMostrarNavbar(false);
                                              }}
                                            >
                                              <span>{el2.distrito}</span>
                                            </a>
                                          </div>
                                        );
                                      }
                                    })}
                                {/*DIPUTADO*/}
                                {openCircuito[el.provincia] &&
                                  corporacion === 'DIPUTADO' &&
                                  data[corporacion]
                                    .filter((item) =>
                                      graficoSeleccionado === 'Follower' ? item.plurinominal === '1' : item,
                                    )
                                    .filter((item) =>
                                      graficoSeleccionado === 'FollowerReeleccion' ? item.reeleccion === '1' : item,
                                    )
                                    .filter((item) => item.provincia === el.provincia)
                                    .sort((a, b) => a.circuito.localeCompare(b.circuito))
                                    ?.map((el3, idx3) => {
                                      if (!miObjeto[el.provincia][corporacion][el3.circuito]) {
                                        miObjeto[el.provincia][corporacion][el3.circuito] = true;
                                        return (
                                          <div key={idx3}>
                                            <a
                                              className={`flex items-center pl-3 py-3 pr-4 text-gray-50 bg-gray-700 hover:bg-blue-500 ${
                                                isChecked[corporacion]?.[el.provincia]?.[el3.circuito]
                                                  ? 'bg-green-600'
                                                  : ''
                                              } `}
                                              href="#"
                                              onClick={() => {
                                                setIsChecked({
                                                  [corporacion]: {
                                                    [el.provincia]: {
                                                      [el3.circuito]: true,
                                                    },
                                                  },
                                                }),
                                                  rol !== 'Master' && activePresentador && setMostrarNavbar(false);
                                              }}
                                            >
                                              <span>CIRCUITO {el3.circuito}</span>
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
  nameCorporacion: PropTypes.array.isRequired,
  mostrarNavbar: PropTypes.bool.isRequired,
  setMostrarNavbar: PropTypes.func.isRequired,
  rol: PropTypes.string.isRequired,
  graficoSeleccionado: PropTypes.string.isRequired,
  activePresentador: PropTypes.bool.isRequired,
  setDataSelect: PropTypes.func.isRequired,
  setLastFile: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};
