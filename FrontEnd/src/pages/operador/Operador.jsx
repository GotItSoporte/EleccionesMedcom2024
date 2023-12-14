import PropTypes from 'prop-types';
import { Navbar, Ticker,FullScreen } from '../../components';
export const Operador = ({ mostrarNavbar, setMostrarNavbar, graficoSeleccionado, setGraficoSeleccionado }) => {

  return (
    <>
      <Navbar
        type="navbarHorizontal"
        mostrarNavbar={mostrarNavbar}
        setMostrarNavbar={setMostrarNavbar}
        rol="Operador"
        graficoSeleccionado={graficoSeleccionado}
        setGraficoSeleccionado={setGraficoSeleccionado}
        setDataSelect={() => {}}
      />

      

      {/*------------------- TICKER -------------------*/}
      <section className={`${graficoSeleccionado==='Ticker'?'block':'hidden'}`}>
      <Ticker mostrarNavbar={mostrarNavbar} setMostrarNavbar={setMostrarNavbar} rol="Operador">
        <h1 className="text-2xl md:text-5xl font-extrabold  tracking-tight  text-center  text-white py-5">
          Operador -
          <span className="text-2xl md:text-5xl font-semibold md:font-extrabold mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-gray-800 ml-2">
            {graficoSeleccionado}
          </span>
        </h1>
      </Ticker> 
      </section>

      {/*------------------- FULLSCREEN -------------------*/}
      <div className={`${graficoSeleccionado==='FullScreen'?'block':'hidden'}`}>
      <FullScreen mostrarNavbar={mostrarNavbar} setMostrarNavbar={setMostrarNavbar} rol="Operador">
        <h1 className="text-2xl md:text-5xl font-extrabold  tracking-tight  text-center  text-white py-5">
          Operador -
          <span className="text-2xl md:text-5xl font-semibold md:font-extrabold mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-gray-800 ml-2">
            {graficoSeleccionado}
          </span>
        </h1>
      </FullScreen> 
      </div>
    </>
  );
};

Operador.propTypes = {
  mostrarNavbar: PropTypes.bool.isRequired,
  setMostrarNavbar: PropTypes.func.isRequired,
  graficoSeleccionado: PropTypes.string.isRequired,
  setGraficoSeleccionado: PropTypes.func.isRequired,
};
