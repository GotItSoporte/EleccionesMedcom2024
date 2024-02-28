import PropTypes from 'prop-types';
import { useEffect } from 'react';

export const InlineLayout = ({ option, setOption, dataSelect }) => {
  useEffect(() => {
    setOption(dataSelect.length);
  }, []);

  useEffect(() => {
    if (dataSelect.length > 0) {
      if (dataSelect.length <= option) {
        setOption(dataSelect.length);
      }
    }
  }, [dataSelect, option]);

  return (
    <div>
      <div className="flex pt-2 pb-2 pl-2 border border-gray-400  ">
        {Array.from(
          { length: dataSelect.length },
          (_, index) =>
            index < 8 && (
              <div
                key={index + 1}
                className="flex items-center mr-4 cursor-pointer "
                onClick={() => setOption(index + 1)}
              >
                <span
                  id="inline-radio"
                  className={`w-4 h-4 ${
                    option === index + 1 ? 'bg-blue-500' : 'bg-white'
                  } border border-gray-300 rounded-full `}
                ></span>
                <label htmlFor="inline-radio" className="ml-1 text-xs md:text-sm font-semibold text-white">
                  {index + 1} CANDIDATOS
                </label>
              </div>
            ),
        )}
      </div>
    </div>
  );
};

InlineLayout.propTypes = {
  option: PropTypes.number.isRequired,
  setOption: PropTypes.func.isRequired,
  dataSelect: PropTypes.array.isRequired,
};
