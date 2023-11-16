import PropTypes from 'prop-types';

export const Card = ({ name, image }) => {
  return (
    <>
      <a href="#" className="">
        <div className="max-w-xs p-2 md:p-6  border  rounded-lg shadow bg-gray-800 border-gray-700 mx-auto max-h-40 md:max-h-80  flex items-center hover:bg-gray-700 ">
          <div className="">
            <img className="w-2/3 h-2/3 mx-auto  " src={image} alt="" />
            <h1 className="max-w-sm mx-auto p-2 md:text-lg lg:text-xl font-medium text-center tracking-tight text-white  rounded-lg  focus:ring-4 focus:outline-none ">
              {name}
            </h1>
          </div>
        </div>
      </a>
    </>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
