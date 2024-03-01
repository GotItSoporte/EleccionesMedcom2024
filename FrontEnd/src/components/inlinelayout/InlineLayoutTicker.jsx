import PropTypes from 'prop-types';

export const InlineLayoutTicker = ({ option, setOption }) => {
  return (
    <div>
      <div className="flex pt-2 pb-2 pl-2 border border-gray-400  ">
      <h1 className='mr-5 text-sm md:text-base font-semibold text-white inline-flex items-center'>
          CANDIDATOS: 
        </h1>
        <div className="flex items-center mr-4 cursor-pointer" onClick={() => setOption(2)}>
          <span
            id="inline-radio3"
            className={`w-4 h-4 ${
              option === 2 ? 'bg-blue-500' : 'bg-white'
            } border border-gray-300 rounded-full `}
          ></span>
          <label htmlFor="inline-radio3" className="ml-1 text-sm font-semibold text-white">
            2 
          </label>
        </div>
        <div className="flex items-center mr-4 cursor-pointer" onClick={() => setOption(4)}>
          <span
            id="inline-radio3"
            className={`w-4 h-4 ${
              option === 4 ? 'bg-blue-500' : 'bg-white'
            } border border-gray-300 rounded-full `}
          ></span>
          <label htmlFor="inline-radio3" className="ml-1 text-sm font-semibold text-white">
            4 
          </label>
        </div>
        <div className="flex items-center mr-4 cursor-pointer" onClick={() => setOption(0)}>
          <span
            id="inline-radio3"
            className={`w-4 h-4 ${
              option === 0 ? 'bg-blue-500' : 'bg-white'
            } border border-gray-300 rounded-full`}
          ></span>
          <label htmlFor="inline-radio3" className="ml-1 text-sm font-semibold text-white">
            TODOS
          </label>
        </div>
      </div>
    </div>
  );
};

InlineLayoutTicker.propTypes = {
  option: PropTypes.number.isRequired,
  setOption: PropTypes.func.isRequired,
  dataSelect: PropTypes.array.isRequired,
};
