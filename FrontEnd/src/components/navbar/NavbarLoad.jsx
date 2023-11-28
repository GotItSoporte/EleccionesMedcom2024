import { useState } from 'react';
import PropTypes from 'prop-types';
import { NavbarOnly } from './NavbarOnly';
import { NavbarHorizontal } from './NavbarHorizontal';

export const NavbarLoad = ({
  data,
  type,
  mostrarNavbar,
  setMostrarNavbar,
  rol,
  graficoSeleccionado,
  setGraficoSeleccionado,
}) => {
  const [setDataSelect] = useState([]);

  if (type === 'navbarHorizontal')
    return (
      <NavbarHorizontal
        setDataSelect={setDataSelect}
        mostrarNavbar={mostrarNavbar}
        setMostrarNavbar={setMostrarNavbar}
        rol={rol}
        graficoSeleccionado={graficoSeleccionado}
        setGraficoSeleccionado={setGraficoSeleccionado}
      />
    );
  if (type === 'navbarOnly')
    return (
      <NavbarOnly
        setDataSelect={setDataSelect}
        mostrarNavbar={mostrarNavbar}
        setMostrarNavbar={setMostrarNavbar}
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

  data: PropTypes.array.isRequired,
};
