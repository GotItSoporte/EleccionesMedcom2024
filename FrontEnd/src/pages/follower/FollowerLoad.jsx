import { useState } from 'react';
import { Follower } from './Follower';

export const FollowerLoad = () => {
  const [mostrarNavbar, setMostrarNavbar] = useState(true);
  const [graficoSeleccionado, setGraficoSeleccionado] = useState('Ticker');

  return (
    <Follower
      mostrarNavbar={mostrarNavbar}
      setMostrarNavbar={setMostrarNavbar}
      graficoSeleccionado={graficoSeleccionado}
      setGraficoSeleccionado={setGraficoSeleccionado}
    />
  );
};
