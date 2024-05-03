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
    Master: [
      'Voto_Arriba_Voto24',
      'Voto_Abajo_Voto24',
      'FullScreenPalacio',
      'FullScreenTribunal',
      'ResultadosRaExterior',
      'Editable',
      'Plurinominal',
    ],
    Wall: ['WallPalacio', 'WallTribunal'],
    Follower: ['FollowerResultados', 'FollowerManual'],
    SetRegiones: ['SetRegiones360', 'SetRegionesPrevio'],
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
  const timeLoad = 3000;

  //------------------- LISTA PARTIDOS SECUNDARIOS-------------------
  const listPartido = {
    'NO APLICA': {
      id: 0,
    },
    PRD: {
      id: 2,
      nombre: 'PARTIDO REVOLUCIONARIO DEMOCRÁTICO',
    },
    PP: {
      id: 3,
      nombre: 'PARTIDO POPULAR',
    },
    MOL: {
      id: 4,
      nombre: 'MOLIRENA',
    },
    PAN: {
      id: 8,
      nombre: 'PARTIDO PANAMEÑISTA',
    },
    CD: {
      id: 32,
      nombre: 'CAMBIO DEMOCRÁTICO',
    },
    ALIANZA: {
      id: 51,
      nombre: 'PARTIDO ALIANZA',
    },
    RM: {
      id: 56,
      nombre: 'REALIZANDO METAS',
    },
    PAIS: {
      id: 52,
      nombre: 'PAÍS',
    },
    MOCA: {
      id: 53,
      nombre: 'MOVIMIENTO OTRO CAMINO',
    },
    'LIBRE POST.': {
      id: 57,
      nombre: 'LIBRE POSTULACIÓN',
    },
    'LIBRE POST 2.': {
      id: 58,
      nombre: 'LIBRE POSTULACIÓN 2',
    },
    'LIBRE POST 3.': {
      id: 59,
      nombre: 'LIBRE POSTULACIÓN 3',
    },
    'PP ZULAY': {
      id: 501,
      nombre: 'PARTIDO ZULAY',
    },
    'PP ARROCHA': {
      id: 503,
      nombre: 'PARTIDO ARROCHA',
    },
    'PP GORDON': {
      id: 502,
      nombre: 'PARTIDO GORDON',
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

  // PARA PAUSAR LA DATA QUE ENTRA
  const [blockWallScreen, setBlockWallScreen] = useState({
    wall: false,
    wallTribunal: false,
    setRegiones: false,
    setRegionesPrevio: false,
  });

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

    blockWallScreen,
    setBlockWallScreen,
  };

  return <ContextData.Provider value={value}>{children}</ContextData.Provider>;
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
