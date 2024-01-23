import { Table } from '../../../components';
import PropTypes from 'prop-types';

export const Plurinominal = ({
  data,
  dataFilter,
  searchTerm,
  setSearchTerm,
  circuitoSelect,
  setCircuitoSelect,
  openMenu,
  setOpenMenu,
  children,
}) => {
  console.log({ data });

  return (
    <>
      {children}

      <div className="w-auto px-2 overflow-x-auto ">
        <form>
          <div className=" mb-2">
            <div className="flex">
              <button
                onClick={() => setOpenMenu(!openMenu)}
                id="dropdown-button"
                data-dropdown-toggle="dropdown"
                className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center   border  rounded-s-lg  focus:ring-4 focus:outline-none  bg-gray-700 hover:bg-gray-600 focus:ring-gray-700 text-white border-gray-600"
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
              </button>
              <div className="relative w-full ">
                <input
                  type="search"
                  id="search-dropdown"
                  className="block p-2.5 w-full z-20 text-sm   rounded-e-lg border-s-2 border  focus:ring-blue-500  bg-gray-700 border-s-gray-700  border-gray-600 placeholder-gray-400 text-white focus:border-blue-500"
                  placeholder="Buscar por nombre..."
                  required
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                />
              </div>
            </div>
            {openMenu && (
              <div className="z-10 fixed   divide-y divide-gray-100 rounded-lg shadow w-44 bg-gray-700">
                <ul className="py-2 text-sm text-gray-200" aria-labelledby="dropdown-button">
                  <li
                    className={`w-full ${circuitoSelect === '' ? 'bg-gray-500' : ''}`}
                    onClick={() => setCircuitoSelect('')}
                  >
                    <button type="button" className="inline-flex w-full px-5 py-2 hover:bg-gray-600 hover:text-white">
                      Todos
                    </button>
                  </li>
                  {Array.from(
                    new Set(data.DIPUTADO?.filter((item) => item.plurinominal === '1').map((item) => item.circuito)),
                  ).map((circuito) => (
                    <li
                      key={circuito}
                      className={`w-full ${circuito === circuitoSelect ? 'bg-gray-500' : ''}`}
                      onClick={() => {
                        setCircuitoSelect(circuito);
                      }}
                    >
                      <button type="button" className="inline-flex w-full px-5 py-2 hover:bg-gray-600 hover:text-white">
                        {circuito}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </form>
        <Table data={dataFilter} type="Edicion" />
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
  circuitoSelect: PropTypes.string.isRequired,
  setCircuitoSelect: PropTypes.func.isRequired,
  openMenu: PropTypes.bool.isRequired,
  setOpenMenu: PropTypes.func.isRequired,
};
