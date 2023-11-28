import PropTypes from 'prop-types';

export const ButtonPrincipal = ({ name, rute }) => {
  return (
    <a
      href={rute ? rute : undefined}
      className="relative rounded px-5 py-2.5 overflow-hidden group bg-red-500 cursor-pointer  hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300"
    >
      <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
      <span className="relative">{name}</span>
    </a>
  );
};

ButtonPrincipal.propTypes = {
  name: PropTypes.string.isRequired,
  rute: PropTypes.string.isRequired,
};
