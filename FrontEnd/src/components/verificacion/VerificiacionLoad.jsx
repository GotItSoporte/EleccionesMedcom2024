import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Verificacion } from './Verificacion';

export const VerificacionLoad = ({ setMostrarVerificacion, rol }) => {
  const [nameValidacion, setNameValidacion] = useState('');
  const [Error, setError] = useState(false);
  const navigate = useNavigate();

  const credentials = {
    Master: {
      password: 'medcom1',
      route: '/Master',
    },
    EstudioWall: {
      password: 'medcom2',
      route: '/Estudio-Wall',
    },
    EstudioVirtual: {
      password: 'medcom3',
      route: '/Estudio-Virtual',
    },
    Metromall: {
      password: 'medcom4',
      route: '/Metromall',
    },
  };

  const checkValidacion = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    if (nameValidacion === credentials[rol].password) {
      navigate(credentials[rol].route, { state: { myVariable: nameValidacion } });
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
      rol={rol}
    />
  );
};

VerificacionLoad.propTypes = {
  setMostrarVerificacion: PropTypes.func.isRequired,
  rol: PropTypes.string.isRequired,
};
