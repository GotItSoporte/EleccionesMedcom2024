import PropTypes from 'prop-types';
import {
  Navbar,
  Ticker,
  TickerAbajo,
  FullScreen,
  FullScreenTribunal,
  Editable,
  Plurinominal,
  TouchScreen,
  RaExteriorMapa,
  FollowerCarrera,
} from '../../components';

export const Master = ({ mostrarNavbar, setMostrarNavbar, graficoSeleccionado, setGraficoSeleccionado }) => {
  let rol = 'Master';

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
      <section className={`${graficoSeleccionado === 'Voto_Arriba_Voto24' ? 'block' : 'hidden'}`}>
        <Ticker mostrarNavbar={mostrarNavbar} setMostrarNavbar={setMostrarNavbar} rol={rol}>
          <h1 className="text-2xl md:text-5xl font-extrabold  tracking-tight  text-center  text-white py-5">
            Master -
            <span className="text-2xl md:text-5xl font-semibold md:font-extrabold mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-gray-800 ml-2">
              {graficoSeleccionado}
            </span>
          </h1>
        </Ticker>
      </section>

      {/*------------------- TICKERABAJO -------------------*/}
      <section className={`${graficoSeleccionado === 'Voto_Abajo_Voto24' ? 'block' : 'hidden'}`}>
        <TickerAbajo mostrarNavbar={mostrarNavbar} setMostrarNavbar={setMostrarNavbar} rol={rol}>
          <h1 className="text-2xl md:text-5xl font-extrabold  tracking-tight  text-center  text-white py-5">
            Master -
            <span className="text-2xl md:text-5xl font-semibold md:font-extrabold mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-gray-800 ml-2">
              {graficoSeleccionado}
            </span>
          </h1>
        </TickerAbajo>
      </section>

      {/*------------------- FULLSCREEN -------------------*/}
      <div className={`${graficoSeleccionado === 'FullScreenPalacio' ? 'block' : 'hidden'}`}>
        <FullScreen mostrarNavbar={mostrarNavbar} setMostrarNavbar={setMostrarNavbar} rol={rol}>
          <h1 className="text-2xl md:text-5xl font-extrabold  tracking-tight  text-center  text-white py-5">
            Master -
            <span className="text-2xl md:text-5xl font-semibold md:font-extrabold mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-gray-800 ml-2">
              {graficoSeleccionado}
            </span>
          </h1>
        </FullScreen>
      </div>

      {/*------------------- FULLSCREEN TRIBUNAL -------------------*/}
      <div className={`${graficoSeleccionado === 'FullScreenTribunal' ? 'block' : 'hidden'}`}>
        <FullScreenTribunal mostrarNavbar={mostrarNavbar} setMostrarNavbar={setMostrarNavbar} rol={rol}>
          <h1 className="text-2xl md:text-5xl font-extrabold  tracking-tight  text-center  text-white py-5">
            Master -
            <span className="text-2xl md:text-5xl font-semibold md:font-extrabold mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-gray-800 ml-2">
              {graficoSeleccionado}
            </span>
          </h1>
        </FullScreenTribunal>
      </div>

      {/*------------------- EDITABLE -------------------*/}
      <div className={`${graficoSeleccionado === 'Editable' ? 'block' : 'hidden'}`}>
        <Editable>
          <h1 className="text-2xl md:text-5xl font-extrabold  tracking-tight  text-center  text-white py-5">
            Master -
            <span className="text-2xl md:text-5xl font-semibold md:font-extrabold mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-gray-800 ml-2">
              {graficoSeleccionado}
            </span>
          </h1>
        </Editable>
      </div>

      {/*------------------- PLURINOMINAL -------------------*/}
      <div className={`${graficoSeleccionado === 'Plurinominal' ? 'block' : 'hidden'}`}>
        <Plurinominal>
          <h1 className="text-2xl md:text-5xl font-extrabold  tracking-tight  text-center  text-white py-5">
            Master -
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

      {/*------------------- RA EXTERIOR MAPA -------------------*/}
      <div className="">
        <RaExteriorMapa />
      </div>

      {/*------------------- RA EXTERIOR MAPA -------------------*/}
      <div className="">
        <FollowerCarrera />
      </div>
    </>
  );
};

Master.propTypes = {
  mostrarNavbar: PropTypes.bool.isRequired,
  setMostrarNavbar: PropTypes.func.isRequired,
  graficoSeleccionado: PropTypes.string.isRequired,
  setGraficoSeleccionado: PropTypes.func.isRequired,
};
