import { useState } from 'react';
import { EstudioWall } from './EstudioWall';

export const EstudioWallLoad = () => {
  const [mostrarNavbar, setMostrarNavbar] = useState(true);
  const [graficoSeleccionado, setGraficoSeleccionado] = useState('Wall');

  return (
    <EstudioWall
      mostrarNavbar={mostrarNavbar}
      setMostrarNavbar={setMostrarNavbar}
      graficoSeleccionado={graficoSeleccionado}
      setGraficoSeleccionado={setGraficoSeleccionado}
    />
  );
};
