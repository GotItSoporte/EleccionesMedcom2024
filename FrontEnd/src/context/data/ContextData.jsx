import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

const ContextData = React.createContext();

export function UseData() {
  return useContext(ContextData);
}

export function DataProvider({ children }) {
  const [listCorporacion, setListCorporacion] = useState(['PRESIDENTE', 'ALCALDES', 'DIPUTADOS']);

  const [listProvincia, setListProvincia] = useState([
    'NACIONAL',
    'BOCAS DEL TORO',
    'COCLÉ',
    'COLÓN',
    'CHIRIQUÍ',
    'DARIÉN',
    'HERRERA',
    'LOS SANTOS',
    'PANAMÁ',
    'VERAGUAS',
    'KUNA YALA',
    'EMBERÁ',
    'NGÄBE BUGLÉ',
    'PANAMÁ OESTE',
    'MADUNGANDÍ',
    'WARGANDÍ',
    'NASO TJËR DI',
  ]);

  const [listCiudad, setListCiudad] = useState([
    'BOCAS DEL TORO',
    'PENONOMÉ',
    'COLÓN',
    'DAVID',
    'CHITRÉ',
    'LAS TABLAS',
    'LOS SANTOS',
    'PANAMÁ',
    'SAN MIGUELITO',
    'SANTIAGO',
    'LA CHORRERA',
    'ARRAIJÁN',
  ]);

  const [listCircuito, setListCircuito] = useState({
    'BOCAS DEL TORO': ['CIRCUITO 1-1'],
    COCLÉ: ['CIRCUITO 2-2', 'CIRCUITO 2-3', 'CIRCUITO 2-4'],
    COLÓN: ['CIRCUITO 3-1'],
    CHIRIQUÍ: ['CIRCUITO 4-2', 'CIRCUITO 4-3', 'CIRCUITO 4-4', 'CIRCUITO 4-5'],
    DARIÉN: ['CIRCUITO 5-1', 'CIRCUITO 5-2'],
    HERRERA: ['CIRCUITO 6-3'],
    PANAMÁ: ['CIRCUITO 8-1', 'CIRCUITO 8-3', 'CIRCUITO 8-4', 'CIRCUITO 8-5', 'CIRCUITO 8-6'],
    VERAGUAS: ['CIRCUITO 9-1'],
    'GUNA YALA': ['CIRCUITO 10-1'], //"NASO TJËR DI":[],
    'NGÖBE BUGLÉ': ['CIRCUITO 12-1', 'CIRCUITO 12-2'],
  });

  const value = {
    listCorporacion,
    setListCorporacion,
    listProvincia,
    setListProvincia,
    listCiudad,
    setListCiudad,
    listCircuito,
    setListCircuito,
  };

  return <ContextData.Provider value={value}>{children}</ContextData.Provider>;
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};




