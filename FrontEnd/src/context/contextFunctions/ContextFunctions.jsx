import React, { useContext } from 'react';
import PropTypes from 'prop-types';

const ContextFunctions = React.createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function useFunctions() {
  return useContext(ContextFunctions);
}

//------------------- FUNCION COMPARAR FILTROS CON DATA  -------------------
function mostrarInformacion(distritosTrue, datos) {
  const datosFiltradosTotales = [];
  for (const tipo in datos) {
    const datosFiltrados =
      tipo === 'PRESIDENTE'
        ? datos[tipo].filter((entry) => distritosTrue[tipo]?.[entry.provincia] === true)
        : tipo === 'ALCALDE'
          ? datos[tipo].filter((entry) => distritosTrue[tipo]?.[entry.provincia]?.[entry.distrito] === true)
          : tipo === 'DIPUTADO'
            ? datos[tipo].filter((entry) => distritosTrue[tipo]?.[entry.provincia]?.[entry.circuito] === true)
            : null;

    if (datosFiltrados && datosFiltrados.length > 0) {
      datosFiltradosTotales.push(...datosFiltrados);
    }
  }
  // Ordenar el array resultante primero por corporacion, luego por provincias y secundario por distritos o circuitos
  const datosOrdenados = datosFiltradosTotales.sort((a, b) => {
    const ordenDeseado = ['PRESIDENTE', 'ALCALDE', 'DIPUTADO'];

    if (a.corporacion !== b.corporacion) {
      return ordenDeseado.indexOf(a.corporacion) - ordenDeseado.indexOf(b.corporacion);
    }
    if (a.provincia === b.provincia) {
      // Comparar distritos para ALCALDE o circuitos para DIPUTADO

      return (a.distrito || a.circuito).localeCompare(b.distrito || b.circuito);
    }
    return a.provincia.localeCompare(b.provincia);
  });
  return datosOrdenados;
}

//------------------- FUNCION PARA DELAY DE TIEMPO -------------------
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export function FunctionsProvider({ children }) {
  const value = {
    mostrarInformacion,
    delay,
  };

  return <ContextFunctions.Provider value={value}>{children}</ContextFunctions.Provider>;
}

FunctionsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
