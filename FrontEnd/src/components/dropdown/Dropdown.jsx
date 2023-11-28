import PropTypes from 'prop-types';

export const Dropdown = ({ open, setOpen, selectedOption, setSelectedOption, setList }) => {
  return (
    <div>
      <button
        className="flex justify-between text-white min-w-min w-52     focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center  items-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
        type="button"
        onClick={() => setOpen(!open)}
      >
        {selectedOption ? selectedOption : ''}
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

      {open ? (
        <div id="dropdown" className="z-10 fixed ivide-y divide-gray-100 rounded-lg shadow w-44 bg-gray-700">
          <ul className="py-2 text-sm  text-gray-200 max-h-36 overflow-auto" aria-labelledby="dropdownDefaultButton">
            {setList.map((el, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="block px-4 py-2  hover:bg-gray-600 hover:text-white"
                  onClick={() => {
                    setSelectedOption(el);
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
  selectedOption: PropTypes.string.isRequired,
  setSelectedOption: PropTypes.func.isRequired,
  setList: PropTypes.array.isRequired,
};
