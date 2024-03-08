import PropTypes from 'prop-types';
import { Navbar, Follower, FollowerReeleccion, FollowerManual, SetRegiones } from '../../components';

export const EstudioVirtual = ({ mostrarNavbar, setMostrarNavbar, graficoSeleccionado, setGraficoSeleccionado }) => {
  let rol = 'EstudioVirtual';

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
      <div className={`${graficoSeleccionado === 'Follower' ? 'block' : 'hidden'}`}>
        <Follower mostrarNavbar={mostrarNavbar} setMostrarNavbar={setMostrarNavbar} rol={rol}>
          <h1 className="text-2xl md:text-5xl font-extrabold  tracking-tight  text-center  text-white py-5">
            EstudioVirtual -
            <span className="text-2xl md:text-5xl font-semibold md:font-extrabold mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-gray-800 ml-2">
              {graficoSeleccionado}
            </span>
          </h1>
        </Follower>
      </div>

      {/*------------------- FOLLOWER REELECCION -------------------*/}
      <div className={`${graficoSeleccionado === 'FollowerReeleccion' ? 'block' : 'hidden'}`}>
        <FollowerReeleccion mostrarNavbar={mostrarNavbar} setMostrarNavbar={setMostrarNavbar} rol={rol}>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold  tracking-tight  text-center  text-white py-5">
            EstudioVirtual -
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
            EstudioVirtual -
            <span className="text-2xl md:text-5xl font-semibold md:font-extrabold mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-gray-800 ml-2">
              {graficoSeleccionado}
            </span>
          </h1>
        </FollowerManual>
      </div>

      {/*------------------- SETREGIONES -------------------*/}
      <div className={`${graficoSeleccionado === 'SetRegiones' ? 'block' : 'hidden'}`}>
        <SetRegiones mostrarNavbar={mostrarNavbar} setMostrarNavbar={setMostrarNavbar} rol={rol}>
          <h1 className="text-2xl md:text-5xl font-extrabold  tracking-tight  text-center  text-white py-5">
            EstudioVirtual -
            <span className="text-2xl md:text-5xl font-semibold md:font-extrabold mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-gray-800 ml-2">
              {graficoSeleccionado}
            </span>
          </h1>
        </SetRegiones>
      </div>
    </>
  );
};

EstudioVirtual.propTypes = {
  mostrarNavbar: PropTypes.bool.isRequired,
  setMostrarNavbar: PropTypes.func.isRequired,
  graficoSeleccionado: PropTypes.string.isRequired,
  setGraficoSeleccionado: PropTypes.func.isRequired,
};
