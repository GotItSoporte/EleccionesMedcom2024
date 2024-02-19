import PropTypes from 'prop-types';

export const ButtonControl = ({ name, rute, icon, color, loading }) => {
  return (
    <>
      <div className="relative">
        <a
          href={rute ? rute : undefined}
          className={` flex  w-fit mx-auto h-full relative rounded p-2 overflow-hidden  ${color}  text-sm hover:bg-gradient-to-r text-white ${
            loading
              ? 'opacity-20 cursor-not-allowed '
              : 'cursor-pointer group hover:from-blue-500 hover:to-blue-400  hover:ring-2 hover:ring-offset-2 hover:ring-blue-400'
          } transition-all ease-out duration-300`}
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <div className={`flex ${name ? 'space-x-2 ' : ''}  items-center w-auto`}>
            <span className="relative ">{name}</span>
            <img className="w-8 h-8 invert" src={icon} alt="" />
          </div>
        </a>
        {loading && (
          <div className="absolute top-1/2 cursor-not-allowed  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="border-gray-300 h-10 w-10 animate-spin rounded-full border-8 border-t-blue-600   " />
          </div>
        )}
      </div>
    </>
  );
};

ButtonControl.propTypes = {
  name: PropTypes.string.isRequired,
  rute: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};
