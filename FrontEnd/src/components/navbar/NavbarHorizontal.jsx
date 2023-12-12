import PropTypes from 'prop-types';
import logoMedcom from '../../assets/logoMedcom.svg';
export const NavbarHorizontal = ({
  mostrarNavbar,
  setMostrarNavbar,
  rol,
  graficoSeleccionado,
  setGraficoSeleccionado,
  listaGraficos,
}) => {

  return (
    <>
      <div className=" ">
        <nav>
          <div className="flex justify-between bg-gray-900 p-2 md:pr-10 md:py-4 items-center">
            <div className="md:flex items-center ">
              <div className="order-last md:ml-5">
                <img className="w-auto h-10  " src={logoMedcom} alt="" />
              </div>
              <div className="flex justify-start  cursor-pointer ">
                {mostrarNavbar ? (
                  <svg
                    className="h-12 w-12 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    onClick={() => setMostrarNavbar(false)}
                  >
                    {' '}
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /> <line x1="9" y1="9" x2="15" y2="15" />{' '}
                    <line x1="15" y1="9" x2="9" y2="15" />
                  </svg>
                ) : (
                  <svg
                    className={`h-12 w-12 text-white `}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={() => setMostrarNavbar(true)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 10h16M4 14h16M4 18h16"
                    />
                  </svg>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-2">
              {listaGraficos[rol].map((listado, index) => {
                return (
                  <a
                    key={index}
                    className={` w-32 text-center cursor-pointer  hover:text-red text-white border-2 ${
                      graficoSeleccionado === listado ? 'border-red-500' : ''
                    } rounded-md`}
                    onClick={() => setGraficoSeleccionado(listado)}
                  >
                    {listado}
                  </a>
                );
              })}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

NavbarHorizontal.propTypes = {
  mostrarNavbar: PropTypes.bool.isRequired,
  setMostrarNavbar: PropTypes.func.isRequired,
  graficoSeleccionado: PropTypes.string.isRequired,
  setGraficoSeleccionado: PropTypes.func.isRequired,
  rol: PropTypes.string.isRequired,
  listaGraficos: PropTypes.object.isRequired,
};
