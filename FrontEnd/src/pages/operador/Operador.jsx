import PropTypes from 'prop-types';
import { Navbar, Ticker, TickerAbajo, FullScreen, Follower, Plurinominal, TouchScreen } from '../../components';

export const Operador = ({ mostrarNavbar, setMostrarNavbar, graficoSeleccionado, setGraficoSeleccionado }) => {
  let rol = 'Operador';

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

      {/*------------------- TICKER -------------------*/}
      <section className={`${graficoSeleccionado === 'Ticker' ? 'block' : 'hidden'}`}>
        <Ticker mostrarNavbar={mostrarNavbar} setMostrarNavbar={setMostrarNavbar} rol={rol}>
          <h1 className="text-2xl md:text-5xl font-extrabold  tracking-tight  text-center  text-white py-5">
            Operador -
            <span className="text-2xl md:text-5xl font-semibold md:font-extrabold mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-gray-800 ml-2">
              {graficoSeleccionado}
            </span>
          </h1>
        </Ticker>
      </section>

      {/*------------------- TICKERABAJO -------------------*/}
      <section className={`${graficoSeleccionado === 'TickerAbajo' ? 'block' : 'hidden'}`}>
        <TickerAbajo mostrarNavbar={mostrarNavbar} setMostrarNavbar={setMostrarNavbar} rol={rol}>
          <h1 className="text-2xl md:text-5xl font-extrabold  tracking-tight  text-center  text-white py-5">
            Operador -
            <span className="text-2xl md:text-5xl font-semibold md:font-extrabold mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-gray-800 ml-2">
              {graficoSeleccionado}
            </span>
          </h1>
        </TickerAbajo>
      </section>

      {/*------------------- FULLSCREEN -------------------*/}
      <div className={`${graficoSeleccionado === 'FullScreen' ? 'block' : 'hidden'}`}>
        <FullScreen mostrarNavbar={mostrarNavbar} setMostrarNavbar={setMostrarNavbar} rol={rol}>
          <h1 className="text-2xl md:text-5xl font-extrabold  tracking-tight  text-center  text-white py-5">
            Operador -
            <span className="text-2xl md:text-5xl font-semibold md:font-extrabold mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-gray-800 ml-2">
              {graficoSeleccionado}
            </span>
          </h1>
        </FullScreen>
      </div>

      {/*------------------- FOLLOWER -------------------*/}
      <div className={`${graficoSeleccionado === 'Follower' ? 'block' : 'hidden'}`}>
        <Follower mostrarNavbar={mostrarNavbar} setMostrarNavbar={setMostrarNavbar} rol={rol}>
          <h1 className="text-2xl md:text-5xl font-extrabold  tracking-tight  text-center  text-white py-5">
            Operador -
            <span className="text-2xl md:text-5xl font-semibold md:font-extrabold mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-gray-800 ml-2">
              {graficoSeleccionado}
            </span>
          </h1>
        </Follower>
      </div>

      {/*------------------- PLURINOMINAL -------------------*/}
      <div className={`${graficoSeleccionado === 'Plurinominal' ? 'block' : 'hidden'}`}>
        <Plurinominal>
          <h1 className="text-2xl md:text-5xl font-extrabold  tracking-tight  text-center  text-white py-5">
            Operador -
            <span className="text-2xl md:text-5xl font-semibold md:font-extrabold mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-gray-800 ml-2">
              {graficoSeleccionado}
            </span>
          </h1>
        </Plurinominal>
      </div>
      {/*------------------- TOUCHSCREEN -------------------*/}
      <div className="">
        <TouchScreen />
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
