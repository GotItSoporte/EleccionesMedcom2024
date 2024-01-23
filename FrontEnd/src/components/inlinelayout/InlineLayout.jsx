import PropTypes from 'prop-types';

export const InlineLayout = ({ option, setOption }) => {
  return (
    <div>
      <div className="flex pt-2 pb-2 pl-2 border border-gray-400  ">
        <div className="flex items-center mr-4 cursor-pointer " onClick={() => setOption(2)}>
          <span
            id="inline-radio"
            className={`w-4 h-4 ${
              option === 2 ? 'bg-blue-500' : 'bg-white'
            } border border-gray-300 rounded-full md:mr-2`}
          ></span>
          <label htmlFor="inline-radio" className="ml-2 text-xs md:text-sm font-semibold text-white">
            2 CANDIDATOS
          </label>
        </div>
        <div className="flex items-center mr-4 cursor-pointer " onClick={() => setOption(4)}>
          <span
            id="inline-radio2"
            className={`w-4 h-4 ${
              option === 4 ? 'bg-blue-500' : 'bg-white'
            } border border-gray-300 rounded-full md:mr-2`}
          ></span>
          <label htmlFor="inline-radio2" className="ml-2 text-xs md:text-sm font-semibold text-white">
            4 CANDIDATOS
          </label>
        </div>
        <div className="flex items-center mr-4 cursor-pointer" onClick={() => setOption(0)}>
          <span
            id="inline-radio3"
            className={`w-4 h-4 ${
              option === 0 ? 'bg-blue-500' : 'bg-white'
            } border border-gray-300 rounded-full md:mr-2`}
          ></span>
          <label htmlFor="inline-radio3" className="ml-2 text-sm font-semibold text-white">
            TODOS
          </label>
        </div>
      </div>
    </div>
  );
};

InlineLayout.propTypes = {
  option: PropTypes.number.isRequired,
  setOption: PropTypes.func.isRequired,
};