import PropTypes from 'prop-types';
import { NavbarOnly } from './NavbarOnly';
import { NavbarHorizontal } from './NavbarHorizontal';
import { NavbarMulti } from './NavbarMulti';
import { useData } from '../../context';

export const NavbarLoad = ({
  type,
  mostrarNavbar,
  setMostrarNavbar,
  rol,
  graficoSeleccionado,
  setGraficoSeleccionado,
  setDataSelect,
  activePresentador
}) => {
  const { data, listaGraficos } = useData();

  if (type === 'navbarHorizontal')
    return (
      <NavbarHorizontal
        setDataSelect={setDataSelect}
        mostrarNavbar={mostrarNavbar}
        setMostrarNavbar={setMostrarNavbar}
        rol={rol}
        graficoSeleccionado={graficoSeleccionado}
        setGraficoSeleccionado={setGraficoSeleccionado}
        listaGraficos={listaGraficos}
      />
    );
  if (type === 'navbarOnly')
    return <NavbarOnly setDataSelect={setDataSelect} mostrarNavbar={mostrarNavbar} data={data}         setMostrarNavbar={setMostrarNavbar}
    activePresentador={activePresentador} />;

  if (type === 'navbarMulti')
    return (
      <NavbarMulti
        setDataSelect={setDataSelect}
        mostrarNavbar={mostrarNavbar}
        data={data}
      />
    );
};

NavbarLoad.propTypes = {
  type: PropTypes.string.isRequired,
  mostrarNavbar: PropTypes.bool.isRequired,
  setMostrarNavbar: PropTypes.func.isRequired,
  rol: PropTypes.string.isRequired,
  graficoSeleccionado: PropTypes.string.isRequired,
  setGraficoSeleccionado: PropTypes.func.isRequired,
  setDataSelect: PropTypes.func.isRequired,
  activePresentador: PropTypes.bool.isRequired,
};
