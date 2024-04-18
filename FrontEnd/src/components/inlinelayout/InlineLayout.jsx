import PropTypes from 'prop-types';
import { useEffect } from 'react';

export const InlineLayout = ({ option, setOption, dataSelect }) => {
  useEffect(() => {
    if (dataSelect.length>8){
      setOption(8);
    } else {
      setOption(dataSelect.length);
    }
    
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
      <div className="flex pt-1 pb-1 pl-1 border border-gray-400 w-auto  ">
        <h1 className="mr-5 text-sm md:text-base font-semibold text-white inline-flex items-center">CANDIDATOS:</h1>
        <div className="grid grid-cols-4 gap-2 md:grid-cols-8">
          {Array.from(
            { length: dataSelect.length },
            (_, index) =>
              index < 8 && (
                <div
                  key={index + 1}
                  className="flex items-center mr-6 cursor-pointer "
                  onClick={() => setOption(index + 1)}
                >
                  <span
                    id="inline-radio"
                    className={`w-6 h-6 ${
                      option === index + 1 ? 'bg-blue-500' : 'bg-white'
                    } border border-gray-300 rounded-full `}
                  ></span>
                  <label htmlFor="inline-radio" className="ml-1  md:text-sm font-semibold text-white">
                    {index + 1}
                  </label>
                </div>
              ),
          )}
        </div>
      </div>
    </div>
  );
};

InlineLayout.propTypes = {
  option: PropTypes.number.isRequired,
  setOption: PropTypes.func.isRequired,
  dataSelect: PropTypes.array.isRequired,
};
