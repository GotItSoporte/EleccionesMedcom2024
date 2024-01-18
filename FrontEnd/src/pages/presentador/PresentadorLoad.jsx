import { useState } from 'react';
import { Presentador } from './Presentador';

export const PresentadorLoad = () => {
  const [mostrarNavbar, setMostrarNavbar] = useState(true);
  const [graficoSeleccionado, setGraficoSeleccionado] = useState('Wall');

  return (
    <Presentador
      mostrarNavbar={mostrarNavbar}
      setMostrarNavbar={setMostrarNavbar}
      graficoSeleccionado={graficoSeleccionado}
      setGraficoSeleccionado={setGraficoSeleccionado}
    />
  );
};
