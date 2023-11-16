import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Verificacion } from './Verificacion';


export const VerificacionLoad = ({ setMostrarVerificacion, rol }) => {
  const [nameValidacion, setNameValidacion] = useState('');
  const [Error, setError] = useState(false);
  const navigate = useNavigate();

  const password = {
    operador: 'medcom1',
    presentador: 'medcom2',
  };

  const checkValidacion = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    if (nameValidacion === password[rol]) {
      navigate('/Register', { state: { myVariable: nameValidacion } });
    } else {
      setError(true);
      setNameValidacion('');
    }
  };

  return (
    <Verificacion
      setMostrarVerificacion={setMostrarVerificacion}
      checkValidacion={checkValidacion}
      nameValidacion={nameValidacion}
      setNameValidacion={setNameValidacion}
      Error={Error}
    />
  );
};

VerificacionLoad.propTypes = {
  setMostrarVerificacion: PropTypes.func.isRequired,
  rol: PropTypes.string.isRequired,
};
