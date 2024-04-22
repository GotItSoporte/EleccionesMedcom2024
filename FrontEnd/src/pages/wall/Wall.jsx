import PropTypes from 'prop-types';
import { Navbar, WallPalacio, WallTribunal } from '../../components';
export const Wall = ({ mostrarNavbar, setMostrarNavbar, graficoSeleccionado, setGraficoSeleccionado }) => {
  let rol = 'Wall';

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
      {/*------------------- WALL PALACIO -------------------*/}
      <div className={`${graficoSeleccionado === 'WallPalacio' ? 'block' : 'hidden'}`}>
        <WallPalacio mostrarNavbar={mostrarNavbar} setMostrarNavbar={setMostrarNavbar} rol={rol}>
          <h1 className="text-2xl md:text-5xl font-extrabold  tracking-tight  text-center  text-white py-5">
            WallPalacio -
            <span className="text-2xl md:text-5xl font-semibold md:font-extrabold mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-gray-800 ml-2">
              {graficoSeleccionado}
            </span>
          </h1>
        </WallPalacio>
      </div>

      {/*------------------- WALL TRIBUNAL-------------------*/}
      <div className={`${graficoSeleccionado === 'WallTribunal' ? 'block' : 'hidden'}`}>
        <WallTribunal mostrarNavbar={mostrarNavbar} setMostrarNavbar={setMostrarNavbar} rol={rol}>
          <h1 className="text-2xl md:text-5xl font-extrabold  tracking-tight  text-center  text-white py-5">
            Wall -
            <span className="text-2xl md:text-5xl font-semibold md:font-extrabold mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-gray-800 ml-2">
              {graficoSeleccionado}
            </span>
          </h1>
        </WallTribunal>
      </div>
    </>
  );
};

Wall.propTypes = {
  mostrarNavbar: PropTypes.bool.isRequired,
  setMostrarNavbar: PropTypes.func.isRequired,
  graficoSeleccionado: PropTypes.string.isRequired,
  setGraficoSeleccionado: PropTypes.func.isRequired,
};
