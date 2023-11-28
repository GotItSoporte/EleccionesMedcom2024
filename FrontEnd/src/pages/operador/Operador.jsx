import PropTypes from 'prop-types';
import { Navbar } from '../../components';
export const Operador = ({ mostrarNavbar, setMostrarNavbar, graficoSeleccionado, setGraficoSeleccionado }) => {
  console.log({ graficoSeleccionado });

  return (
    <>
      <Navbar
        type="navbarHorizontal"
        mostrarNavbar={mostrarNavbar}
        setMostrarNavbar={setMostrarNavbar}
        rol="Operador"
        graficoSeleccionado={graficoSeleccionado}
        setGraficoSeleccionado={setGraficoSeleccionado}
      />
      <div className={`float-left w-0 ${mostrarNavbar ? 'lg:w-auto' : 'lg:w-0'}`}>
        <Navbar type="navbarOnly" mostrarNavbar={mostrarNavbar} setMostrarNavbar={setMostrarNavbar} />
      </div>
      <h1 className="mb-4 text-2xl md:text-5xl font-extrabold  tracking-tight  text-center  text-white my-5">
        Operador -{' '}
        <span className="text-2xl md:text-5xl font-semibold md:font-extrabold mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-gray-800 ml-2">
          {graficoSeleccionado}
        </span>
      </h1>
    </>
  );
};

Operador.propTypes = {
  mostrarNavbar: PropTypes.bool.isRequired,
  setMostrarNavbar: PropTypes.func.isRequired,
  graficoSeleccionado: PropTypes.string.isRequired,
  setGraficoSeleccionado: PropTypes.func.isRequired,
};
