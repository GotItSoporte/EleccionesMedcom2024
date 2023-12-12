import PropTypes from 'prop-types';

export const Table = ({ data }) => {
  return (
    <>
      <div className="relative overflow-x-auto     max-h-[70vh] overflow-y-auto   md:px-5   ">
        <table className="  text-xs lg:text-sm text-center  text-gray-300 ">
          <thead className="text-xs  uppercase  bg-blue-500 text-white  ">
            {data.length > 0 ? (
              <tr className="">
                <th scope="col" className=" px-1 py-2 lg:px-6 lg:py-3 text-center w-screen font-normal md:font-bold">
                  Nombre
                </th>
                <th scope="col" className=" px-1 py-2 lg:px-6 lg:py-3 text-center w-screen font-normal md:font-bold">
                  Votos
                </th>
                <th scope="col" className=" px-1 py-2 lg:px-6 lg:py-3 text-center w-screen font-normal md:font-bold">
                  Porcentaje
                </th>
                <th scope="col" className=" px-1 py-2 lg:px-6 lg:py-3 text-center w-screen font-normal md:font-bold">
                  Provincia
                </th>

                <>
                  {data ? (
                    data[0].distrito ? (
                      <th
                        scope="col"
                        className=" px-1 py-2 lg:px-6 lg:py-3 text-center w-screen font-normal md:font-bold"
                      >
                        Distrito
                      </th>
                    ) : data[0].circuito ? (
                      <th
                        scope="col"
                        className=" px-1 py-2 lg:px-6 lg:py-3 text-center w-screen font-normal md:font-bold"
                      >
                        Circuito
                      </th>
                    ) : null
                  ) : null}

                  <th scope="col" className=" px-1 py-2 lg:px-6 lg:py-3 text-center w-screen font-normal md:font-bold">
                    Corporación
                  </th>
                </>
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
                    className="bg-gray-700 border-b border-gray-700 hover:bg-gray-600 font-light md:font-normal  whitespace-nowrap hover:text-white "
                  >
                    <td className="px-1 py-2 lg:px-6 lg:py-4 ">{data.nombre}</td>
                    <td className="px-1 py-2 lg:px-6 lg:py-4 ">{data.votos}</td>
                    <td className="px-1 py-2 lg:px-6 lg:py-4 ">FALTA</td>
                    <td className="px-1 py-2 lg:px-6 lg:py-4 text-center">{data.provincia}</td>

                    {data.distrito ? (
                      <td className="px-1 py-2 lg:px-6 lg:py-4 text-center">{data.distrito}</td>
                    ) : data.circuito === 'DIPUTADO' ? (
                      <td className="px-1 py-2 lg:px-6 lg:py-4 text-center">{data.circuito}</td>
                    ) : null}

                    <td className="px-1 py-2 lg:px-6 lg:py-4 text-center">{data.corporacion}</td>
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
      </div>
    </>
  );
};

Table.propTypes = {
  data: PropTypes.array.isRequired,
};
