import { Button } from '../../components';
import PropTypes from 'prop-types';
import iconCheck from '../../assets/icons/check.svg';
import iconXmark from '../../assets/icons/xmark.svg';

export const Verificacion = ({ setMostrarVerificacion, nameValidacion, setNameValidacion, checkValidacion, Error, rol }) => {
  return (
    <>
      <form className="w-full max-w-lg bg-gray-900 p-20 rounded-xl border-2">
        <h1 className="max-w-sm mx-auto p-2 md:text-lg lg:text-xl font-normal text-center tracking-tight text-white  rounded-b-lg  focus:ring-4 focus:outline-none ">
          {rol}
        </h1>
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
        <div className='flex space-x-2'>
        <button type="submit" onClick={(e) => checkValidacion(e)}>
        <Button type="Principal" rute="" name="Si" icon={iconCheck} color="bg-green"/>
        </button>
        <button type="submit" data-modal-hide="popup-modal"  onClick={() => setMostrarVerificacion(false)}>
        <Button type="Principal" rute="" name="No, cancelar" icon={iconXmark} color="bg-red"/>
        </button>
        </div>

       

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
  rol: PropTypes.string.isRequired,
};
