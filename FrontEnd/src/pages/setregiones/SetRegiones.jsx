import PropTypes from 'prop-types';
import { Navbar, SetRegiones360 } from '../../components';

export const SetRegiones = ({ mostrarNavbar, setMostrarNavbar, graficoSeleccionado, setGraficoSeleccionado }) => {
  let rol = 'SetRegiones';
return (
  <>
    <Navbar
      type="navbarHorizontal"
      mostrarNavbar={mostrarNavbar}
      setMostrarNavbar={setMostrarNavbar}
      rol={rol}
      graficoSeleccionado={graficoSeleccionado}
      setGraficoSeleccionado={setGraficoSeleccionado}
      //NO APLICA
      setDataSelect={() => {}}
      activePresentador={false}
      setLastFile={() => {}}
      isChecked={{}}
      setIsChecked={() => {}}
      nameCorporacion={[]}
    />


    {/*------------------- SETREGIONES360 -------------------*/}
    <div className={`${graficoSeleccionado === 'SetRegiones360' ? 'block' : 'hidden'}`}>
      <SetRegiones360 mostrarNavbar={mostrarNavbar} setMostrarNavbar={setMostrarNavbar} rol={rol}>
        <h1 className="text-2xl md:text-5xl font-extrabold  tracking-tight  text-center  text-white py-5">
          SetRegiones -
          <span className="text-2xl md:text-5xl font-semibold md:font-extrabold mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-gray-800 ml-2">
            {graficoSeleccionado}
          </span>
        </h1>
      </SetRegiones360>
    </div>
  </>
);
};

SetRegiones.propTypes = {
mostrarNavbar: PropTypes.bool.isRequired,
setMostrarNavbar: PropTypes.func.isRequired,
graficoSeleccionado: PropTypes.string.isRequired,
setGraficoSeleccionado: PropTypes.func.isRequired,
};
