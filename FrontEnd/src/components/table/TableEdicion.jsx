import PropTypes from 'prop-types';

export const TableEdicion = ({ data, HandleDataSubmit, checkPlurinominal }) => {
  return (
    <div>
      <div
        className={`relative overflow-x-auto     max-h-[70vh]  ${
          checkPlurinominal ? 'overflow-hidden ' : 'overflow-y-auto'
        }   `}
      >
        <table
          className={`relative  text-xs lg:text-sm text-center  text-gray-300   ${
            checkPlurinominal ? 'opacity-40 cursor-default' : ''
          } `}
        >
          <thead className="text-xs  uppercase  bg-blue-500 text-white   ">
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
                    className="bg-gray-700 border-b  border-gray-700 hover:bg-gray-600 font-light md:font-normal  whitespace-nowrap hover:text-white "
                  >
                    <td className="px-1 py-2 lg:px-6 lg:py-4 border border-gray-500">{data.nombre}</td>
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
                    <td
                      className={`px-1 py-2 lg:px-6 lg:py-4 text-center  border border-gray-500  flex items-center justify-center `}
                    >
                      <input
                        checked={data.ganadorplurinominal === '1'}
                        className={`w-4 h-4 mr-2 md:mr-5 cursor-pointer ${
                          checkPlurinominal ? 'opacity-50 cursor-default' : ''
                        } `}
                        id="inline-radio"
                        type="checkbox"
                        value=""
                        name="inline-radio-group"
                        onChange={() =>
                          !checkPlurinominal &&
                          HandleDataSubmit(data.ganadorplurinominal === '0' ? '1' : '0', data.nombre)
                        }
                      />
                      <span
                        className={`relative inline-block px-3 py-1 font-semibold ${
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
  checkPlurinominal: PropTypes.bool.isRequired,
};
