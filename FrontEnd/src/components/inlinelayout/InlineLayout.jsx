import PropTypes from 'prop-types';

export const InlineLayout = ({ option, setOption }) => {
 
  return (
    <div>
      <div className="flex pt-2 pb-2 pl-2 border border-gray-400 ">
        <div className="flex items-center mr-4 ">
          <input
            checked={option === 2}
            className="w-4 h-4"
            id="inline-radio"
            type="radio"
            value=""
            name="inline-radio-group"
            onChange={() => setOption(2)}
          />
          <label htmlFor="inline-radio" className="ml-2 text-xs md:text-sm font-semibold text-white">
            2 CANDIDATOS
          </label>
        </div>
        <div className="flex items-center mr-4 " onClick={() => setOption(4)}>
          <input
            checked={option === 4}
            className="w-4 h-4"
            id="inline-radio2"
            type="radio"
            value=""
            name="inline-radio-group2"
            onChange={() => setOption(4)}
          />
          <label htmlFor="inline-radio2" className="ml-2 text-xs md:text-sm font-semibold text-white">
            4 CANDIDATOS
          </label>
        </div>
        <div className="flex items-center mr-4">
          <input
            checked={!option || option === 0}
            className="w-4 h-4"
            id="inline-radio3"
            type="radio"
            value=""
            name="inline-radio-group3"
            onChange={() => setOption(0)}
          />
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
