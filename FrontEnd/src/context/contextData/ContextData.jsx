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
    Operador: ['Ticker', 'FullScreen', 'Wall', 'Follower'],
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
    const newData = {};
    for (const corporacion in listCorporacion) {
      if (listCorporacion[corporacion]) {
        const apiData = await fetchReadData(corporacion);
        newData[corporacion] = apiData;
      }
    }
    setData(newData);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getData();
    }, 60000);
    getData();
    return () => clearInterval(interval);
  }, []);

  //------------------- CONTEXTOS-------------------
  const value = {
    listaGraficos,
    data,
    setData,
  };

  return <ContextData.Provider value={value}>{children}</ContextData.Provider>;
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
