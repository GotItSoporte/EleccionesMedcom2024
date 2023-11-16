import { useState } from 'react';
import { Home } from './Home';

export const HomeLoad = () => {
  const [mostrarVerificacion, setMostrarVerificacion] = useState(false);
  const [rol, setRol] = useState('');

  return (
    <Home
      mostrarVerificacion={mostrarVerificacion}
      setMostrarVerificacion={setMostrarVerificacion}
      setRol={setRol}
      rol={rol}
    />
  );
};
