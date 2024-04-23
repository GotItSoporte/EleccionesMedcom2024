import { Table } from '../../../components';
import PropTypes from 'prop-types';

export const Plurinominal = ({
  data,
  dataFilter,
  searchTerm,
  setSearchTerm,
  corporacionSelect,
  setCorporacionSelect,
  provinciaSelect,
  setProvinciaSelect,
  datoSelect,
  setDatoSelect,
  openCorporacion,
  setOpenCorporacion,
  children,
}) => {
  return (
    <>
      {children}

      <div className="w-auto px-2 overflow-x-auto ">
        <form>
          <div className=" mb-2">
            <div className="flex">
              <button
                onClick={() => setOpenCorporacion(!openCorporacion)}
                id="dropdown-button"
                data-dropdown-toggle="dropdown"
                className="flex-shrink-0 z-30 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center  border  rounded-s-lg  focus:ring-4 focus:outline-none  bg-gray-700 hover:bg-gray-600 focus:ring-gray-700 text-white border-gray-600"
                type="button"
              >
                Corporación{' '}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/*<button
                onClick={() => setOpenMenu(!openMenu)}
                id="dropdown-button"
                data-dropdown-toggle="dropdown"
                className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center  border  focus:ring-4 focus:outline-none  bg-gray-700 hover:bg-gray-600 focus:ring-gray-700 text-white border-gray-600"
                type="button"
              >
                Diputados{' '}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
  </button> */}

              <div className="relative w-full ">
                <input
                  type="search"
                  id="search-dropdown"
                  className="block p-2.5 w-full z-30 text-sm   rounded-e-lg border-s-2 border  focus:ring-blue-500  bg-gray-700 border-s-gray-700  border-gray-600 placeholder-gray-400 text-white focus:border-blue-500"
                  placeholder="Buscar por nombre..."
                  required
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                />
              </div>
            </div>
            {openCorporacion && (
              <div className="z-30 fixed   divide-x divide-gray-600 rounded-lg shadow w-auto bg-gray-700 flex max-h-[20vh] ">
                <ul className="md:py-2 text-sm text-gray-200 md:p-2" aria-labelledby="dropdown-button">
                  <li
                    className={`w-full flex  items-center hover:bg-gray-600 hover:text-white ${
                      corporacionSelect === 'Diputado' ? 'bg-gray-500' : ''
                    } `}
                    onClick={() => {
                      setCorporacionSelect('Diputado'), setDatoSelect(''), setProvinciaSelect('');
                    }}
                  >
                    <button type="button" className="inline-flex w-full pl-1 md:pl-5 py-2 ">
                      Diputado
                    </button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 mr-1"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </li>
                </ul>

                {/*------ SEGUNDA COLUMNA ------- */}
                <ul className="md:py-2 text-sm text-gray-200" aria-labelledby="dropdown-button">
                  {/*------ DIPUTADO ------- */}
                  {corporacionSelect === 'Diputado' && (
                    <div className="grid grid-cols-1 md:grid-cols-2  mx-1 md:mx-2 w-24 md:w-72 overflow-y-auto h-full md:h-full">
                      <li
                        className={`w-full  hover:bg-gray-600 hover:text-white  ${
                          datoSelect === '' && provinciaSelect === '' ? 'bg-gray-500 ' : ''
                        } `}
                        onClick={() => {
                          setProvinciaSelect(''), setDatoSelect('');
                        }}
                      >
                        <button type="button" className="inline-flex w-full px-1 py-2 justify-center ">
                          Todos
                        </button>
                      </li>

                      {Array.from(new Set(data.DIPUTADO?.map((item) => item.provincia))).map((provincia) => (
                        <li
                          key={provincia}
                          className={`w-full flex items-center hover:bg-gray-600 hover:text-white ${
                            provincia === provinciaSelect ? 'bg-gray-500' : ''
                          }`}
                          onClick={() => {
                            setProvinciaSelect(provincia);
                          }}
                        >
                          <button type="button" className="inline-flex w-full justify-center py-2 ">
                            {provincia?.charAt(0).toUpperCase() + provincia?.slice(1).toLowerCase()}
                          </button>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-4 h-4 mr-1"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                          </svg>
                        </li>
                      ))}
                    </div>
                  )}
                </ul>

                {/*------ TERCER COLUMNA ------- */}
                <ul className="py-2 text-sm text-gray-200" aria-labelledby="dropdown-button">                  
                  {corporacionSelect === 'Diputado' && (
                    <div className="md:grid  md:grid-cols-3 mx-1 md:mx-2 w-24 md:w-64 overflow-y-auto h-full md:h-auto">
                      {Array.from(
                        new Set(
                          data.DIPUTADO?.filter(item=>item.plurinominal ==='1')?.filter((item) => item.provincia === provinciaSelect).map(
                            (item) => item.circuito,
                          ),
                        ),
                      ).map((circuito) => (
                        <li
                          key={circuito}
                          className={`w-full flex items-center hover:bg-gray-600 hover:text-white ${
                            circuito === datoSelect ? 'bg-gray-500' : ''
                          }`}
                          onClick={() => {
                            setDatoSelect(circuito);
                          }}
                        >
                          <button type="button" className="inline-flex w-full justify-center py-2 ">
                            {circuito}
                          </button>
                        </li>
                      ))}
                    </div>
                  )}
                </ul>
              </div>
            )}

            {/*{openMenu && (
              <div className="z-20 fixed   divide-y divide-gray-100 rounded-lg shadow w-44 bg-gray-700 ">
                <ul className="py-2 text-sm text-gray-200" aria-labelledby="dropdown-button">
                  <li className={`w-full ${datoSelect === '' ? 'bg-gray-500' : ''}`} onClick={() => setDatoSelect('')}>
                    <button type="button" className="inline-flex w-full px-5 py-2 hover:bg-gray-600 hover:text-white">
                      Todos
                    </button>
                  </li>
                  {Array.from(
                    new Set(data.DIPUTADO?.filter((item) => item.plurinominal === '1').map((item) => item.circuito)),
                  ).map((circuito) => (
                    <li
                      key={circuito}
                      className={`w-full ${circuito === datoSelect ? 'bg-gray-500' : ''}`}
                      onClick={() => {
                        setDatoSelect(circuito);
                      }}
                    >
                      <button type="button" className="inline-flex w-full px-5 py-2 hover:bg-gray-600 hover:text-white">
                        {circuito}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
                    )}*/}
          </div>
        </form>
        <Table data={dataFilter} type="Edicion" option={0} />
      </div>
    </>
  );
};

Plurinominal.propTypes = {
  children: PropTypes.node,
  data: PropTypes.object.isRequired,
  dataFilter: PropTypes.array.isRequired,
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  corporacionSelect: PropTypes.string.isRequired,
  setCorporacionSelect: PropTypes.func.isRequired,
  provinciaSelect: PropTypes.string.isRequired,
  setProvinciaSelect: PropTypes.func.isRequired,
  datoSelect: PropTypes.string.isRequired,
  setDatoSelect: PropTypes.func.isRequired,
  openCorporacion: PropTypes.bool.isRequired,
  setOpenCorporacion: PropTypes.func.isRequired,
};
