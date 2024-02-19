import PropTypes from 'prop-types';
import { NavbarOnly } from './NavbarOnly';
import { NavbarHorizontal } from './NavbarHorizontal';
import { NavbarMulti } from './NavbarMulti';
import { useData } from '../../context';

export const NavbarLoad = ({
  type,
  nameCorporacion,
  mostrarNavbar,
  setMostrarNavbar,
  rol,
  graficoSeleccionado,
  setGraficoSeleccionado,
  setDataSelect,
  activePresentador,
  setLastFile,
  isChecked,
  setIsChecked,
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
    return (
      <NavbarOnly
        nameCorporacion={nameCorporacion}
        setDataSelect={setDataSelect}
        mostrarNavbar={mostrarNavbar}
        data={data}
        rol={rol}
        setMostrarNavbar={setMostrarNavbar}
        setLastFile={setLastFile}
        activePresentador={activePresentador}
      />
    );

  if (type === 'navbarMulti')
    return (
      <NavbarMulti
        nameCorporacion={nameCorporacion}
        setDataSelect={setDataSelect}
        mostrarNavbar={mostrarNavbar}
        data={data}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
      />
    );
};

NavbarLoad.propTypes = {
  type: PropTypes.string.isRequired,
  nameCorporacion: PropTypes.array.isRequired,
  mostrarNavbar: PropTypes.bool.isRequired,
  setMostrarNavbar: PropTypes.func.isRequired,
  rol: PropTypes.string.isRequired,
  graficoSeleccionado: PropTypes.string.isRequired,
  setGraficoSeleccionado: PropTypes.func.isRequired,
  setDataSelect: PropTypes.func.isRequired,
  isChecked: PropTypes.object.isRequired,
  setIsChecked: PropTypes.func.isRequired,
  setLastFile: PropTypes.func.isRequired,
  activePresentador: PropTypes.bool.isRequired,
};
