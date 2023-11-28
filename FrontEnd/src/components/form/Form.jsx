import PropTypes from 'prop-types';
import { Dropdown, Button } from '../../components';

export const Form = ({
  setMostrarFormulario,
  selectedName,
  setSelectedName,
  selectedTipoNavbar,
  setSelectedTipoNavbar,
  listFiltrado,
}) => {
  return (
    <>
      <div
        className="p-10 w-full sm:w-3/4 lg:w-2/3  bg-gray-900 border-4 border-red-500 rounded-xl mx-auto overflow-auto h-2/3 sm:h-fit"
        id="ventanaFormulario"
      >
        <div className="flex justify-end mb-5" onClick={() => setMostrarFormulario(false)}>
          <Button type="Principal" name="Cerrar" rute="" />
        </div>

        <form onSubmit={''} className="">
          <div className="grid grid-cols-1  lg:grid-cols-8 md:gap-6 my-5 mx-auto w-full gap-4 text-center   ">
            <div className="lg:col-span-2 w-fit mx-auto my-auto">
              <Dropdown
                selectedOption={selectedTipoNavbar}
                setSelectedOption={setSelectedTipoNavbar}
                setList={listFiltrado.clasificacion}
              />
            </div>
            <div className="lg:col-span-2 w-fit mx-auto my-auto">
              <Dropdown
                selectedOption={selectedTipoNavbar}
                setSelectedOption={setSelectedTipoNavbar}
                setList={listFiltrado.clasificacion}
              />
            </div>

            <div className="lg:col-span-4 md:gap-5 items-center w-full mx-auto bg-gray-800 rounded-lg p-10 ">
              <div className="relative z-0 w-full group">
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  value={selectedName}
                  onChange={(e) => setSelectedName(e.target.value)}
                  className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none  text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer uppercase"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="nombre"
                  className="peer-focus:font-medium absolute text-sm left-0  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Nombre del gráfico
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

Form.propTypes = {
  setMostrarFormulario: PropTypes.func.isRequired,
  selectedName: PropTypes.string.isRequired,
  setSelectedName: PropTypes.func.isRequired,
  selectedTipoNavbar: PropTypes.string.isRequired,
  setSelectedTipoNavbar: PropTypes.func.isRequired,
  listFiltrado: PropTypes.object.isRequired,
};
