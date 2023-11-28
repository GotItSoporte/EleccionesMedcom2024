import { useState } from 'react';
import { Programador } from './Programador';

export const ProgramadorLoad = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  return <Programador mostrarFormulario={mostrarFormulario} setMostrarFormulario={setMostrarFormulario} />;
};
