import PropTypes from 'prop-types';
import { useEffect } from 'react';

export const InlineLayout = ({ option, setOption, dataSelect, blockWallScreen }) => {
  useEffect(() => {
    if (dataSelect.length > 4) {
      setOption(4);
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
      <div className="flex justify-between pt-1 pb-1 pl-1 border border-gray-400 w-auto  ">
        <div className={`flex ${Object.values(blockWallScreen).includes(true) ? 'opacity-40' : ''} `}>
          <h1 className="mr-5 text-sm md:text-base font-semibold text-white inline-flex items-center">CANDIDATOS:</h1>
          <div className={`grid grid-cols-4 gap-2 md:grid-cols-8 `}>
            {Array.from(
              { length: dataSelect.length },
              (_, index) =>
                index < 8 && (
                  <div
                    key={index + 1}
                    className={`flex items-center mr-6 ${
                      Object.values(blockWallScreen).includes(true) ? 'cursor-not-allowed ' : ' cursor-pointer '
                    } `}
                    onClick={() =>
                      Object.values(blockWallScreen).every((value) => value === false) && setOption(index + 1)
                    }
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
        <div className="md:flex md:space-x-2 mx-4 my-auto ">
          <h1 className=" text-sm  font-semibold text-white ">
            PARTICIPACIÓN: {dataSelect[0]?.participacion?.toFixed(2)?.toString()}
          </h1>
          <h1 className="text-sm font-semibold text-white ">ESCRUTADO: {dataSelect[0]?.escrutado}</h1>
        </div>
      </div>
    </div>
  );
};

InlineLayout.propTypes = {
  option: PropTypes.number.isRequired,
  setOption: PropTypes.func.isRequired,
  dataSelect: PropTypes.array.isRequired,
  blockWallScreen: PropTypes.object.isRequired,
};
