import { useState } from 'react';
import { Operador } from './Operador';

export const OperadorLoad = () => {
  const [mostrarNavbar, setMostrarNavbar] = useState(true);
  const [graficoSeleccionado, setGraficoSeleccionado] = useState('Ticker');
  const [dataSelect, setDataSelect] = useState([]);

  return (
    <Operador
      mostrarNavbar={mostrarNavbar}
      setMostrarNavbar={setMostrarNavbar}
      graficoSeleccionado={graficoSeleccionado}
      setGraficoSeleccionado={setGraficoSeleccionado}
      dataSelect={dataSelect}
      setDataSelect={setDataSelect}
    />
  );
};
