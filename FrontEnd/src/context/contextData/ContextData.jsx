import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchReadData from '../../apis/ReadData';

const ContextData = React.createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function useData() {
  return useContext(ContextData);
}

export function DataProvider({ children }) {
  //------------------- GRAFICOS EXISTENTES -------------------
  const listaGraficos = {
    Master: ['Voto_Arriba_Voto24', 'Voto_Abajo_Voto24', 'FullScreen', 'Plurinominal'],
    EstudioWall: ['Wall', 'RA'],
    EstudioVirtual: ['Follower', 'FollowerManual', 'SetRegiones'],
  };

  //------------------- GET DATA -------------------
  const [listCorporacion] = useState({
    PRESIDENTE: [],
    ALCALDE: [],
    DIPUTADO: [],
  });

  //------------------- VARIABLE DATA -------------------
  const [data, setData] = useState({});

  //------------------- TIEMPO CARGA DE DATA-------------------
  const timeLoad = 100000;

  //------------------- LISTA PARTIDOS SECUNDARIOS-------------------
  const listPartido = {
    'NO APLICA': {
      id: 0,
    },
    PRD: {
      id: 9,
      nombre: 'PARTIDO REVOLUCIONARIO DEMOCRÁTICO',
    },
    PP: {
      id: 8,
      nombre: 'PARTIDO POPULAR',
    },
    MOL: {
      id: 3,
      nombre: 'MOLIRENA',
    },
    PAN: {
      id: 7,
      nombre: 'PARTIDO PANAMEÑISTA',
    },
    CD: {
      id: 1,
      nombre: 'CAMBIO DEMOCRÁTICO',
    },
    PA: {
      id: 5,
      nombre: 'PARTIDO ALIANZA',
    },
    RM: {
      id: 10,
      nombre: 'REALIZANDO METAS',
    },
    PAIS: {
      id: 6,
      nombre: 'PAÍS',
    },
    MOCA: {
      id: 4,
      nombre: 'MOVIMIENTO OTRO CAMINO',
    },
    'LIBRE POST.': {
      id: 2,
      nombre: 'LIBRE POSTULACIÓN',
    },
  };

  //------------------- LISTA CURULES-------------------
  const curules = {
    '1-1': 2,
    '2-1': 2,
    '2-2': 1,
    '2-3': 1,
    '2-4': 1,
    '3-1': 4,
    '3-2': 1,
    '4-1': 3,
    '4-2': 1,
    '4-3': 2,
    '4-4': 1,
    '4-5': 1,
    '4-6': 1,
    '5-1': 1,
    '5-2': 1,
    '6-1': 1,
    '6-2': 1,
    '6-3': 1,
    '7-1': 1,
    '7-2': 1,
    '8-1': 1,
    '8-2': 7,
    '8-3': 5,
    '8-4': 5,
    '8-5': 3,
    '8-6': 4,
    '9-1': 2,
    '9-2': 1,
    '9-3': 1,
    '9-4': 1,
    '10-1': 1,
    '10-2': 1,
    '12-1': 1,
    '12-2': 1,
    '12-3': 1,
    '13-1': 3,
    '13-2': 1,
    '13-3': 1,
    '13-4': 3,
  };

  //------------------- CHECK GANADOR PLURINOMINAL-------------------
  const [checkPlurinominal, setCheckPlurinominal] = useState(false);
  const [delayCheckPlurinominal, setDelayCheckPlurinominal] = useState(false);

  async function getData() {
    const newData = await Promise.all(
      Object.keys(listCorporacion).map(async (corporacion) => {
        if (listCorporacion[corporacion]) {
          const apiData = await fetchReadData(corporacion);
          return { [corporacion]: apiData };
        }
        return null;
      }),
    );

    setData((prevData) => Object.assign({}, prevData, ...newData.filter(Boolean)));

    // Programar la próxima actualización después de recibir los datos
    setTimeout(getData, timeLoad);
  }

  useEffect(() => {
    getData(); // Iniciar la primera actualización
  }, [checkPlurinominal]);

  //------------------- CONTEXTOS-------------------
  const value = {
    listaGraficos,
    data,
    setData,
    checkPlurinominal,
    setCheckPlurinominal,
    delayCheckPlurinominal,
    setDelayCheckPlurinominal,
    listPartido,
    curules,
  };

  return <ContextData.Provider value={value}>{children}</ContextData.Provider>;
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
