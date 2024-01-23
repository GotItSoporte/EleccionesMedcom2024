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
    Operador: ['Ticker', 'FullScreen', 'Follower', 'Plurinominal'],
    Presentador: ['Wall', 'RA'],
  };

  //------------------- GET DATA -------------------
  const [listCorporacion] = useState({
    PRESIDENTE: [],
    ALCALDE: [],
    DIPUTADO: [],
  });
  const [data, setData] = useState({});

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
    setTimeout(getData, 1000);
  }

  //------------------- CHECK GANADOR PLURINOMINAL-------------------
  const [checkPlurinominal, setCheckPlurinominal] = useState(false);
  const [delayCheckPlurinominal, setDelayCheckPlurinominal] = useState(false);

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
  };

  return <ContextData.Provider value={value}>{children}</ContextData.Provider>;
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
