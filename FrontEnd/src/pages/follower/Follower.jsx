import PropTypes from 'prop-types';
import { Navbar } from '../../components';

export const Follower = ({ mostrarNavbar, setMostrarNavbar, graficoSeleccionado, setGraficoSeleccionado }) => {
  return (
    <>
      <Navbar
        type="navbarHorizontal"
        mostrarNavbar={mostrarNavbar}
        setMostrarNavbar={setMostrarNavbar}
        rol="Operador"
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

      {/*------------------- FOLLOWER -------------------*/}
      <section className={`${graficoSeleccionado === 'Ticker' ? 'block' : 'hidden'}`}>
        <Follower mostrarNavbar={mostrarNavbar} setMostrarNavbar={setMostrarNavbar} rol="Operador">
          <h1 className="text-2xl md:text-5xl font-extrabold  tracking-tight  text-center  text-white py-5">
            Operador -
            <span className="text-2xl md:text-5xl font-semibold md:font-extrabold mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-gray-800 ml-2">
              {graficoSeleccionado}
            </span>
          </h1>
        </Follower>
      </section>
    </>
  );
};

Follower.propTypes = {
  mostrarNavbar: PropTypes.bool.isRequired,
  setMostrarNavbar: PropTypes.func.isRequired,
  graficoSeleccionado: PropTypes.string.isRequired,
  setGraficoSeleccionado: PropTypes.func.isRequired,
};
