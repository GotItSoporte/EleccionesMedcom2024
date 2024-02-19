import PropTypes from 'prop-types';
import { Dropdown } from '../../components';

export const TableEdicion = ({
  data,
  HandleDataSubmit,
  HandleDataPartidoSubmit,
  checkPlurinominal,
  listPartido,
  listClasificacion,
}) => {
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
          <thead className="text-xs  uppercase  bg-blue-500 text-white  sticky top-0 z-10  ">
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
                    className={`bg-gray-700 border-b  border-gray-700 ${
                      checkPlurinominal ? '' : 'hover:bg-gray-600 hover:text-white'
                    }  font-light md:font-normal  whitespace-nowrap  overflow-y-auto`}
                  >
                    <td className="px-1 py-2 lg:px-6 lg:py-4 border border-gray-500  ">{data.nombre}</td>
                    <td className="px-1 py-2 lg:px-6 lg:py-4 border border-gray-500">{data.votos}</td>
                    <td className="px-1 py-2 lg:px-6 lg:py-4 border border-gray-500">{data.porcentaje}</td>
                    <td className="px-1 py-2 lg:px-6 lg:py-4 text-center border border-gray-500">{data.provincia}</td>

                    <td
                      className={`px-1 py-2 lg:px-6 lg:py-4 text-center ${
                        data.circuito ? 'text-green-500' : 'text-red-500'
                      } border border-gray-500`}
                    >
                      {data.circuito || 'NO APLICA'}
                    </td>

                    <td className="px-1 py-2 lg:px-6 lg:py-4 text-center border border-gray-500">
                      {data.nombre_partido}
                    </td>
                    <td className="px-1 py-2 lg:px-6 text-center border border-gray-500">
                      <Dropdown
                        selectedOption={data.nombre_partido2 || 'NO APLICA'}
                        setList={Object.keys(listPartido) || []}
                        nameData="partido2"
                        id={data.nombre}
                        HandleDataSubmit={HandleDataPartidoSubmit}
                        loading={checkPlurinominal}
                      />
                    </td>
                    <td className="px-1 py-2 lg:px-6 text-center border border-gray-500">
                      <Dropdown
                        selectedOption={data.nombre_partido3 || 'NO APLICA'}
                        setList={Object.keys(listPartido) || []}
                        nameData="partido3"
                        id={data.nombre}
                        HandleDataSubmit={HandleDataPartidoSubmit}
                        loading={checkPlurinominal}
                      />
                    </td>
                    <td className="px-1 py-2 lg:px-6 text-center border border-gray-500">
                      <Dropdown
                        selectedOption={data.nombre_partido4 || 'NO APLICA'}
                        setList={Object.keys(listPartido) || []}
                        nameData="partido4"
                        id={data.nombre}
                        HandleDataSubmit={HandleDataPartidoSubmit}
                        loading={checkPlurinominal}
                      />
                    </td>
                    <td className="px-1 py-2 lg:px-6 lg:py-4 text-center border border-gray-500 ">
                      <Dropdown
                        selectedOption={data.orden_clasificacion || 'NO APLICA'}
                        setList={
                          (listClasificacion?.find((item) => item.circuito === data.circuito) || {})
                            .arrayClasificacion || []
                        }
                        nameData="orden_clasificacion"
                        id={data.nombre}
                        HandleDataSubmit={HandleDataSubmit}
                        loading={checkPlurinominal}
                      />
                    </td>
                    <td className={`px-1 py-2 lg:px-6 lg:py-4 text-center  border border-gray-500    justify-center `}>
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
