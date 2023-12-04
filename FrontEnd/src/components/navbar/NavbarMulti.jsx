import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchReadData from '../../apis/ReadData';

export const NavbarMulti = ({ setDataSelect, mostrarNavbar, setMostrarNavbar }) => {
  const [nameCorporacion] = useState(['PRESIDENTE', 'ALCALDE', 'DIPUTADO']);
  const [open, setOpen] = useState({});
  const [openProvincia, setOpenProvincia] = useState({});
  const [openCircuito, setOpenCircuito] = useState({});
  const [data, setData] = useState({});
  const [corporacion, setCorporacion] = useState({});

  //checked
  const [isChecked, setIsChecked] = useState({});
  console.log({ isChecked });

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

  useEffect(() => {
    const fetchMultipleData = async () => {
      const newData = {};
      for (const corporacion in open) {
        if (open[corporacion]) {
          const apiData = await fetchReadData(corporacion);
          newData[corporacion] = apiData;
        }
      }
      setData(newData);
    };
    fetchMultipleData();
  }, [open]);

  const miObjeto = {};

  // Tu código actual para obtener provincias únicas y asignar true a cada una

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
  }, [corporacion, data, miObjeto]);


  console.log({data})


  return (
    <>
      <div className={`block navbar-menu relative  ${mostrarNavbar ? 'z-50' : ''}  `}>
        <nav
          className={` lg:static h-[calc(100vh-8.4vh)] top-0 left-0 bottom-0 flex flex-col w-72 lg:w-80 sm:max-w-xs  pb-8 pt-5    ${
            mostrarNavbar ? 'overflow-y-auto bg-gray-900 ' : '  overflow-hidden '
          }`}
        >
          <div className={`${mostrarNavbar ? '' : 'w-0 -translate-x-56 '}`}>
            <div className="px-4 pb-6">
              <h3 className="mb-2 text-xs uppercase text-gray-500 font-medium">SELECCIONA UNA SOLA OPCION</h3>

              <ul className="mb-8 text-sm font-medium">
                {nameCorporacion.map((corporacion, idx) => {
                  return (
                    <li key={idx}>
                      <a
                        className="flex items-center pl-3 py-3 pr-4 text-gray-50 bg-gray-900 hover:bg-blue-500 rounded"
                        href="#"
                        onClick={() => {
                          toggleOpen(corporacion),
                            setCorporacion(corporacion),
                            setIsChecked((prevState) => ({
                              ...prevState,
                              [corporacion]: prevState[corporacion] ? undefined : {},
                            }));
                        }}
                      >
                        <span>
                          <label>{corporacion}</label>
                        </span>

                        <span className="inline-block ml-auto">
                          <input
                            type="checkbox"
                            id={corporacion}
                            name={corporacion}
                            checked={isChecked[corporacion] || false}
                            onChange={() => {}}
                          />
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
                                  }  hover:bg-blue-500 `}
                                  href="#"
                                 
                                  onClick={() => {
                                    corporacion === 'PRESIDENTE'
                                      ? setDataSelect(
                                          data[corporacion].filter((item) => item.corporacion === 'PRESIDENTE'),
                                        )
                                      : null;
                                    corporacion === 'PRESIDENTE' && toggleOpenProvincia(el.provincia);
                                    corporacion === 'ALCALDE' ? toggleOpenProvincia(el.provincia) : null;
                                    corporacion === 'DIPUTADO' ? toggleOpenCircuito(el.provincia) : null;
                                    setIsChecked((prevState) => ({
                                      ...prevState,
                                      [corporacion]: {
                                        ...prevState[corporacion],
                                        [el.provincia]: prevState[corporacion]?.[el.provincia] ? undefined : {},
                                      },
                                    }));
                                  }}
                                >
                                  <span>{el.provincia}</span>
                                  {corporacion !== 'PRESIDENTE' ? (
                                    <span className="inline-block ml-auto">
                                      <input
                                        type="checkbox"
                                        id={corporacion}
                                        name={corporacion}
                                        checked={isChecked[corporacion][el.provincia] || false}
                                        onChange={() => {}}
                                      />
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
                                {openProvincia[el.provincia] &&
                                  corporacion === 'ALCALDE' &&
                                  data[corporacion]
                                    .filter((item) => item.provincia === el.provincia)
                                    .sort((a, b) => a.distrito.localeCompare(b.distrito))
                                    ?.map((el2, idx2) => {
                                      if (!miObjeto[el.provincia][corporacion][el2.distrito]) {
                                        miObjeto[el.provincia][corporacion][el2.distrito] = true;
                                        console.log('nombre',el2.distrito)
                                        console.log('valor',isChecked[corporacion][el.provincia][el2.distrito])
                                        return (
                                          <div key={idx2}>
                                            <a
                                              className="flex items-center pl-3 py-3 pr-4 text-gray-50 bg-gray-600 hover:bg-blue-500 "
                                              href="#"
                                              
                                              onClick={() => {
                                                isChecked[corporacion][el.provincia][el2.distrito]?
                                                setDataSelect(prevState =>
                                                    prevState.filter(
                                                      item =>
                                                        !(
                                                          item.provincia === el.provincia &&
                                                          item.distrito === el2.distrito
                                                        )
                                                    )
                                                  ):
                                                setDataSelect(  prevState =>[...prevState,
                                                  ...data[corporacion].filter(
                                                    (item) =>
                                                      item.provincia === el.provincia && item.distrito === el2.distrito,
                                                  )]
                                                ),
                                                setIsChecked((prevState) => ({
                                                    ...prevState,
                                                    [corporacion]: {
                                                      ...prevState[corporacion],
                                                      [el.provincia]: {
                                                        ...prevState[corporacion]?.[el.provincia],
                                                        [el2.distrito]: !prevState[corporacion]?.[el.provincia]?.[
                                                          el2.distrito
                                                        ]
                                                          ,
                                                      },
                                                    },
                                                  }))
                                              }}
                                            >
                                              <span>{el2.distrito}</span>
                                              <span className="inline-block ml-auto">
                                                <input
                                                  type="checkbox"
                                                  id={corporacion}
                                                  name={corporacion}
                                                  checked={isChecked[corporacion][el.provincia][el2.distrito] || false}
                                                  onChange={() => {}
                                             
                                                  }
                                                />
                                              </span>
                                            </a>
                                          </div>
                                        );
                                      }
                                    })}
                                {/*DIPUTADO*/}
                                {openCircuito[el.provincia] &&
                                  corporacion === 'DIPUTADO' &&
                                  data[corporacion]
                                    .filter((item) => item.provincia === el.provincia)
                                    .sort((a, b) => a.circuito.localeCompare(b.circuito))
                                    ?.map((el3, idx3) => {
                                      if (!miObjeto[el.provincia][corporacion][el3.circuito]) {
                                        miObjeto[el.provincia][corporacion][el3.circuito] = true;
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

NavbarMulti.propTypes = {
  mostrarNavbar: PropTypes.bool.isRequired,
  setMostrarNavbar: PropTypes.func.isRequired,
  setDataSelect: PropTypes.func.isRequired,
};
