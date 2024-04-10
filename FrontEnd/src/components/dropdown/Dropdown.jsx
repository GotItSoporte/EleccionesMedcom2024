import PropTypes from 'prop-types';

export const Dropdown = ({
  open,
  setOpen,
  selectedOption,
  HandleDataSubmit,
  corporacion,
  nameData,
  id,
  setList,
  loading,
  FuncionGanadorPlurinominalValor,
}) => {
  return (
    <div className="relative ">
      <button
        className={`flex-shrink-0 ${
          loading ? 'cursor-default' : 'cursor-pointer hover:bg-gray-600'
        }  inline-flex items-center py-2 px-3    text-center   border  rounded-lg  focus:ring-4 focus:outline-none  bg-gray-700  focus:ring-gray-700 text-white border-gray-600`}
        type="button"
        onClick={() => setOpen(!open)}
      >
        {selectedOption ? selectedOption : 'NO APLICA'}
        <svg
          className="w-2.5 h-2.5 ml-2.5 "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
      </button>

      {!loading && open ? (
        <div
          id="dropdown"
          className="z-10 mx-auto   divide-gray-100 rounded-lg shadow w-fit bg-gray-700 border border-gray-600  "
        >
          <ul className="py-2 text-sm  text-gray-200 max-h-36 overflow-auto" aria-labelledby="dropdownDefaultButton">
            {setList.map((el, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="block px-4 py-2  hover:bg-gray-600 hover:text-white"
                  onClick={() => {
                    if (FuncionGanadorPlurinominalValor) {
                      console.log({ el });
                      HandleDataSubmit(nameData, el, id, corporacion);
                      HandleDataSubmit('ganadorplurinominalvalor', el !== 'NO APLICA' ? '1' : '0', id, corporacion);
                      if (el === 'NO APLICA') {
                        HandleDataSubmit('ganadorplurinominal', '0', id, corporacion);
                      }
                    } else {
                      HandleDataSubmit(nameData, el, id, corporacion);
                    }
                    setOpen(!open);
                  }}
                >
                  {el}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  selectedOption: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  HandleDataSubmit: PropTypes.func.isRequired,
  setList: PropTypes.array.isRequired,
  corporacion: PropTypes.string.isRequired,
  nameData: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  FuncionGanadorPlurinominalValor: PropTypes.bool.isRequired,
};
