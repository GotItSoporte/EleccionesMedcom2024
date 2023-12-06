import PropTypes from 'prop-types';

export const ButtonPrincipal = ({ name, rute, icon }) => {
  return (
    <a
      href={rute ? rute : undefined}
      className="flex  relative rounded p-2 overflow-hidden group bg-red-500 cursor-pointer  hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300"
    >
      <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
      <div className={`flex ${name ? 'space-x-2' : ''}  items-center w-auto`}>
        <span className="relative ">{name}</span>
        <img className="w-8 h-8 invert" src={icon} alt="" />
      </div>
    </a>
  );
};

ButtonPrincipal.propTypes = {
  name: PropTypes.string.isRequired,
  rute: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
