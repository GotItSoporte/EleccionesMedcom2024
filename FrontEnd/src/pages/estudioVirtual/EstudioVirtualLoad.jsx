import { useState } from 'react';
import { EstudioVirtual } from './EstudioVirtual';

export const EstudioVirtualLoad = () => {
  const [mostrarNavbar, setMostrarNavbar] = useState(true);
  const [graficoSeleccionado, setGraficoSeleccionado] = useState('Follower');

  return (
    <EstudioVirtual
      mostrarNavbar={mostrarNavbar}
      setMostrarNavbar={setMostrarNavbar}
      graficoSeleccionado={graficoSeleccionado}
      setGraficoSeleccionado={setGraficoSeleccionado}
    />
  );
};
