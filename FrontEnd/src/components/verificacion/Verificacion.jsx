import PropTypes from 'prop-types';
export const Verificacion = ({ setMostrarVerificacion, nameValidacion, setNameValidacion, checkValidacion, Error }) => {
  return (
    <>
      <form className="w-full max-w-lg bg-gray-950 p-20 rounded-xl">
        {Error ? <div className="text-red-600">Clave mal digitada*</div> : <></>}
        <div className=" items-center border-b border-teal-500 py-2 my-5">
          <input
            className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="password"
            placeholder="Digita la Clave"
            value={nameValidacion}
            onChange={(e) => setNameValidacion(e.target.value)}
            aria-label="Full name"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
          onClick={(e) => checkValidacion(e)}
        >
          Si,
        </button>
        <button
          data-modal-hide="popup-modal"
          type="button"
          className=" focus:ring-4 focus:outline-none rounded-lg border  text-sm font-medium px-5 py-2.5  focus:z-10 bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600 focus:ring-gray-600"
          onClick={() => setMostrarVerificacion(false)}
        >
          No, cancelar
        </button>
      </form>
    </>
  );
};

Verificacion.propTypes = {
  Error: PropTypes.bool.isRequired,
  setMostrarVerificacion: PropTypes.func.isRequired,
  nameValidacion: PropTypes.string.isRequired,
  setNameValidacion: PropTypes.func.isRequired,
  checkValidacion: PropTypes.func.isRequired,
};
