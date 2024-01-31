import PropTypes from 'prop-types';

export const Table = ({ data }) => {
  return (
    <>
      <div className="relative overflow-x-auto     max-h-[70vh] overflow-y-auto      ">
        <table className="  text-xs lg:text-sm text-center  text-gray-300 ">
          <thead className="text-xs  uppercase  bg-blue-500 text-white sticky top-0  ">
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
                  Corporación
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
                    className="bg-gray-700 border-b border-gray-700 hover:bg-gray-600 font-light md:font-normal  whitespace-nowrap hover:text-white "
                  >
                    <td className="px-1 py-2 lg:px-6 lg:py-4 border border-gray-500">{data.nombre}</td>
                    <td className="px-1 py-2 lg:px-6 lg:py-4 border border-gray-500">{data.votos}</td>
                    <td className="px-1 py-2 lg:px-6 lg:py-4 border border-gray-500">{data.porcentaje}</td>
                    <td className="px-1 py-2 lg:px-6 lg:py-4 text-center border border-gray-500">{data.provincia}</td>
                    <td
                      className={`px-1 py-2 lg:px-6 lg:py-4 text-center ${
                        data.distrito ? 'text-green-500' : 'text-red-500'
                      } border border-gray-500`}
                    >
                      {data.distrito || 'NO APLICA'}
                    </td>
                    <td
                      className={`px-1 py-2 lg:px-6 lg:py-4 text-center ${
                        data.circuito ? 'text-green-500' : 'text-red-500'
                      } border border-gray-500`}
                    >
                      {data.circuito || 'NO APLICA'}
                    </td>
                    <td className="px-1 py-2 lg:px-6 lg:py-4 text-center border border-gray-500">{data.corporacion}</td>
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
