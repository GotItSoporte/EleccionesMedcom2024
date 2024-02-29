import PropTypes from 'prop-types';
import { Dropdown } from '../../components';
import { useEffect, useState } from 'react';

export const TableEdicion = ({
  data,
  HandleDataSubmit,
  HandleDataPartidoSubmit,
  checkPlurinominal,
  listPartido,
  listClasificacion,
}) => {
  const [nombreEditado, setNombreEditado] = useState({ id: null, nombre: '', activeEdit: false });

  useEffect(()=>{
    setNombreEditado({
      ...nombreEditado,
      activeEdit:false,
    })
  },[data])

  return (
    <div>
      <div
        className={`relative overflow-x-auto     max-h-[70vh]  ${
          checkPlurinominal ? 'overflow-hidden ' : ' overflow-y-auto'
        }   `}
      >
        <table
          className={`relative  text-xs lg:text-sm text-center  text-gray-300   ${
            checkPlurinominal ? 'opacity-40 cursor-default' : ''
          } `}
        >
          <thead className="text-xs  uppercase  bg-blue-500 text-white  sticky top-0 z-20  ">
            {data.length > 0 ? (
              <tr className="">
                <th
                  scope="col"
                  className=" px-1 py-2 lg:px-6 lg:py-3 text-center w-screen font-normal md:font-semibold lg:font-bold border border-gray-400 "
                >
                  Nombre
                </th>
                <th
                  scope="col"
                  className=" px-1 py-2 lg:px-6 lg:py-3 text-center w-screen font-normal md:font-semibold lg:font-bold border border-gray-400"
                >
                  Votos
                </th>
                <th
                  scope="col"
                  className=" px-1 py-2 lg:px-6 lg:py-3 text-center w-screen font-normal md:font-semibold lg:font-bold border border-gray-400"
                >
                  Porcentaje
                </th>
                <th
                  scope="col"
                  className=" px-1 py-2 lg:px-6 lg:py-3 text-center w-screen font-normal md:font-semibold lg:font-bold border border-gray-400"
                >
                  Provincia
                </th>
                <th
                  scope="col"
                  className=" px-1 py-2 lg:px-6 lg:py-3 text-center w-screen font-normal md:font-semibold lg:font-bold border border-gray-400"
                >
                  Distrito
                </th>

                <th
                  scope="col"
                  className=" px-1 py-2 lg:px-6 lg:py-3 text-center w-screen font-normal md:font-semibold lg:font-bold border border-gray-400"
                >
                  Circuito
                </th>
                <th
                  scope="col"
                  className=" px-1 py-2 lg:px-6 lg:py-3 text-center w-screen font-normal md:font-semibold lg:font-bold border border-gray-400"
                >
                  Partido
                </th>
                <th
                  scope="col"
                  className=" px-1 py-2 lg:px-6 lg:py-3 text-center w-screen font-normal md:font-semibold lg:font-bold border border-gray-400"
                >
                  Partido 2
                </th>
                <th
                  scope="col"
                  className=" px-1 py-2 lg:px-6 lg:py-3 text-center w-screen font-normal md:font-semibold lg:font-bold border border-gray-400"
                >
                  Partido 3
                </th>
                <th
                  scope="col"
                  className=" px-1 py-2 lg:px-6 lg:py-3 text-center w-screen font-normal md:font-semibold lg:font-bold border border-gray-400"
                >
                  Partido 4
                </th>

                <th
                  scope="col"
                  className=" px-1 py-2 lg:px-6 lg:py-3 text-center w-screen font-normal md:font-semibold lg:font-bold border border-gray-400"
                >
                  Clasificacion
                </th>
                <th
                  scope="col"
                  className=" px-1 py-2 lg:px-6 lg:py-3 text-center w-screen font-normal md:font-semibold lg:font-bold border border-gray-400"
                >
                  Ganador <br></br> Plurinominal
                </th>
              </tr>
            ) : (
              <tr>
                <th scope="col" className="w-screen py-3 text-center"></th>
              </tr>
            )}
          </thead>

          <tbody>
            {data.length > 0 ? (
              data.map((data, idx) => {
                return (
                  <tr
                    key={idx}
                    className={`bg-gray-700 border-b  border-gray-700  ${
                      checkPlurinominal ? '' : 'hover:bg-gray-600 hover:text-white'
                    }  font-light md:font-normal  whitespace-nowrap  overflow-y-auto`}
                  >
                    <td className="px-1 py-2 lg:px-3  border border-gray-500  ">
                      <p className="invisible h-0">{data.nombre}</p>
                      <div className="w-full inline-flex border ">
                        <input
                          style={{ background: 'none' }}
                          type="text"
                          className="w-full focus:outline-none  p-2 uppercase"
                          value={
                            nombreEditado.id === idx && nombreEditado.activeEdit === true
                              ? nombreEditado.nombre
                              : data.nombre
                          }
                          onChange={(event) => {
                            setNombreEditado({
                              ...nombreEditado,
                              nombre: event.target.value.toUpperCase(),
                            });
                          }}
                          readOnly={nombreEditado.id === idx && nombreEditado.activeEdit ? false : true}
                        />
                        {nombreEditado.id === idx && nombreEditado.activeEdit === true ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-8 px-1 bg-green-500 mx-auto hover:bg-green-600 hover:cursor-pointer"
                            onClick={()=>{HandleDataSubmit('nombre',nombreEditado.nombre,data.nombre,data.corporacion)}}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className=" w-8 px-1  bg-yellow-500 mx-auto hover:bg-yellow-600 hover:cursor-pointer"
                            onClick={() => {
                              setNombreEditado({ id: idx, nombre: data.nombre, activeEdit: true });
                            }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                            />
                          </svg>
                        )}
                      </div>
                    </td>

                    <td className="px-1 py-2 lg:px-3  border border-gray-500">{data.votos}</td>
                    <td className="px-1 py-2 lg:px-3  border border-gray-500">{data.porcentaje}</td>
                    <td className="px-1 py-2 lg:px-3  text-center border border-gray-500">{data.provincia}</td>
                    <td
                      className={`px-1 py-2 lg:px-3 text-center  ${
                        data.distrito ? 'text-green-500' : 'text-red-500'
                      } border border-gray-500 `}
                    >
                      {data.distrito || 'NO APLICA'}
                    </td>
                    <td
                      className={`px-1 py-2 lg:px-3  text-center ${
                        data.circuito ? 'text-green-500' : 'text-red-500'
                      } border border-gray-500`}
                    >
                      {data.circuito || 'NO APLICA'}
                    </td>

                    <td className="px-1 py-2 lg:px-3  text-center border border-gray-500">
                      {data.nombre_partido}
                    </td>
                    <td className="px-1 py-2 lg:px-6 text-center border border-gray-500">
                      <Dropdown
                        selectedOption={data.nombre_partido2 || 'NO APLICA'}
                        setList={Object.keys(listPartido) || []}
                        corporacion={data.corporacion}
                        nameData="partido2"
                        id={data.nombre}
                        HandleDataSubmit={HandleDataPartidoSubmit}
                        loading={checkPlurinominal}
                        FuncionGanadorPlurinominal={false}
                      />
                    </td>
                    <td className="px-1 py-2 lg:px-6 text-center border border-gray-500">
                      <Dropdown
                        selectedOption={data.nombre_partido3 || 'NO APLICA'}
                        setList={Object.keys(listPartido) || []}
                        corporacion={data.corporacion}
                        nameData="partido3"
                        id={data.nombre}
                        HandleDataSubmit={HandleDataPartidoSubmit}
                        loading={checkPlurinominal}
                        FuncionGanadorPlurinominal={false}
                      />
                    </td>
                    <td className="px-1 py-2 lg:px-6 text-center border border-gray-500">
                      <Dropdown
                        selectedOption={data.nombre_partido4 || 'NO APLICA'}
                        setList={Object.keys(listPartido) || []}
                        corporacion={data.corporacion}
                        nameData="partido4"
                        id={data.nombre}
                        HandleDataSubmit={HandleDataPartidoSubmit}
                        loading={checkPlurinominal}
                        FuncionGanadorPlurinominal={false}
                      />
                    </td>
                    {data.plurinominal === '1' ? (
                      <>
                        <td className="px-1 py-2 lg:px-3  text-center border border-gray-500 ">
                          <Dropdown
                            selectedOption={data.orden_clasificacion || 'NO APLICA'}
                            setList={
                              (listClasificacion?.find((item) => item.circuito === data.circuito) || {})
                                .arrayClasificacion || []
                            }
                            corporacion={data.corporacion}
                            nameData="orden_clasificacion"
                            id={data.nombre}
                            HandleDataSubmit={HandleDataSubmit}
                            loading={checkPlurinominal}
                            FuncionGanadorPlurinominal={true}
                          />
                        </td>

                        <td
                          className={`px-1 py-2 lg:px-3  text-center  border border-gray-500    justify-center `}
                        >
                          <span
                            className={`relative inline-block px-3 py-1 font-semibold  ${
                              data.ganadorplurinominal === '1' ? 'text-green-900' : 'text-red-900'
                            }  leading-tight`}
                          >
                            <span
                              aria-hidden
                              className={`absolute inset-0 ${
                                data.ganadorplurinominal === '1' ? 'bg-green' : 'bg-red'
                              }  rounded-full`}
                            ></span>
                            <span className="relative">{data.ganadorplurinominal === '1' ? 'Verdadero' : 'Falso'}</span>
                          </span>
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="px-1 py-2 lg:px-3  text-center text-red-500 border border-gray-500">
                          NO APLICA
                        </td>
                        <td className="px-1 py-2 lg:px-3  text-center text-red-500 border border-gray-500">
                          NO APLICA
                        </td>
                      </>
                    )}
                  </tr>
                );
              })
            ) : (
              <tr className="bg-gray-700 border-b border-gray-700 hover:bg-gray-600 font-light md:font-medium  whitespace-nowrap hover:text-white text-center ">
                <th scope="row" className="px-1 py-2 lg:px-6 lg:py-4 ">
                  NO EXISTEN GRAFICOS
                </th>
              </tr>
            )}
          </tbody>
        </table>
        {checkPlurinominal && (
          <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600  fixed  inset-[50%]" />
        )}
      </div>
    </div>
  );
};

TableEdicion.propTypes = {
  data: PropTypes.array.isRequired,
  HandleDataSubmit: PropTypes.func.isRequired,
  HandleDataPartidoSubmit: PropTypes.func.isRequired,
  listPartido: PropTypes.object.isRequired,
  listClasificacion: PropTypes.array.isRequired,
  checkPlurinominal: PropTypes.bool.isRequired,
};
