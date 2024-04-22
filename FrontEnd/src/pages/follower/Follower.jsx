import PropTypes from 'prop-types';
import { Navbar, FollowerResultados, FollowerReeleccion, FollowerManual } from '../../components';

export const Follower = ({ mostrarNavbar, setMostrarNavbar, graficoSeleccionado, setGraficoSeleccionado }) => {
  let rol = 'Follower';

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

      {/*------------------- FOLLOWER -------------------*/}
      <div className={`${graficoSeleccionado === 'FollowerResultados' ? 'block' : 'hidden'}`}>
        <FollowerResultados mostrarNavbar={mostrarNavbar} setMostrarNavbar={setMostrarNavbar} rol={rol}>
          <h1 className="text-2xl md:text-5xl font-extrabold  tracking-tight  text-center  text-white py-5">
            Follower -
            <span className="text-2xl md:text-5xl font-semibold md:font-extrabold mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-gray-800 ml-2">
              {graficoSeleccionado}
            </span>
          </h1>
        </FollowerResultados>
      </div>

      {/*------------------- FOLLOWER REELECCION -------------------*/}
      <div className={`${graficoSeleccionado === 'FollowerReeleccion' ? 'block' : 'hidden'}`}>
        <FollowerReeleccion mostrarNavbar={mostrarNavbar} setMostrarNavbar={setMostrarNavbar} rol={rol}>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold  tracking-tight  text-center  text-white py-5">
            Follower -
            <span className="text-2xl md:text-4xl lg:text-5xl font-semibold md:font-extrabold mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-gray-800 ml-2 ">
              {graficoSeleccionado}
            </span>
          </h1>
        </FollowerReeleccion>
      </div>

      {/*------------------- FOLLOWER MANUAL -------------------*/}
      <div className={`${graficoSeleccionado === 'FollowerManual' ? 'block' : 'hidden'}`}>
        <FollowerManual mostrarNavbar={mostrarNavbar} setMostrarNavbar={setMostrarNavbar} rol={rol}>
          <h1 className="text-2xl md:text-5xl font-extrabold  tracking-tight  text-center  text-white py-5">
            Follower -
            <span className="text-2xl md:text-5xl font-semibold md:font-extrabold mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-gray-800 ml-2">
              {graficoSeleccionado}
            </span>
          </h1>
        </FollowerManual>
      </div>

    </>
  );
};

Follower.propTypes = {
  mostrarNavbar: PropTypes.bool.isRequired,
  setMostrarNavbar: PropTypes.func.isRequired,
  graficoSeleccionado: PropTypes.string.isRequired,
  setGraficoSeleccionado: PropTypes.func.isRequired,
};
