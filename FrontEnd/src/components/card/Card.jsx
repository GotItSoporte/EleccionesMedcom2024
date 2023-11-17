import PropTypes from 'prop-types';

export const Card = ({ name, image }) => {
  return (
    <>
      <a href="#" className="">
        <div className="max-w-xs  border  rounded-lg shadow bg-gray-800 border-gray-700 mx-auto max-h-40 md:max-h-80  flex items-center opacity-70 hover:opacity-100">
          <div className="">
            <img className="w-full h-32 md:h-52  mx-auto  " src={image} alt="" />
            <h1 className="bg-red-800 max-w-sm mx-auto p-2 md:text-lg lg:text-xl font-light text-center tracking-tight text-white  rounded-b-lg  focus:ring-4 focus:outline-none ">
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
