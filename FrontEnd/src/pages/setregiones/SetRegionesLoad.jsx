import { useState } from 'react';
import { SetRegiones } from './SetRegiones';

export const SetRegionesLoad = () => {
  const [mostrarNavbar, setMostrarNavbar] = useState(true);
  const [graficoSeleccionado, setGraficoSeleccionado] = useState('SetRegiones360');
  return <SetRegiones 
  mostrarNavbar={mostrarNavbar}
  setMostrarNavbar={setMostrarNavbar}
  graficoSeleccionado={graficoSeleccionado}
  setGraficoSeleccionado={setGraficoSeleccionado}
  />;
};
