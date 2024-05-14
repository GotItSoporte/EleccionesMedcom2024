import React, { useContext } from 'react';
import PropTypes from 'prop-types';

const ContextFunctions = React.createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function useFunctions() {
  return useContext(ContextFunctions);
}

//------------------- FUNCION COMPARAR FILTROS CON DATA  -------------------
function mostrarInformacion(distritosTrue, datos, Reeleccion = false) {
  const datosFiltradosTotales = [];
  for (const tipo in datos) {
    const datosFiltrados =
      tipo === 'PRESIDENTE'
        ? datos[tipo].filter((entry) => distritosTrue[tipo]?.[entry.provincia] === true)
        : tipo === 'ALCALDE'
          ? datos[tipo].filter((entry) => distritosTrue[tipo]?.[entry.provincia]?.[entry.distrito] === true)
          : tipo === 'DIPUTADO'
            ? datos[tipo]
                .filter((entry) => distritosTrue[tipo]?.[entry.provincia]?.[entry.circuito] === true)
                .filter((item) =>
                  Reeleccion
                    ? item.reeleccion === '1'
                    : item.plurinominal === '1'
                      ? item.ganadorplurinominalvalor === '1'
                      : item,
                )
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

    //if (a.provincia === 'NACIONAL') return -1;
    //if (b.provincia === 'NACIONAL') return 1;
    //if (a.provincia === 'PANAMÁ') return -1;
    //if (b.provincia === 'PANAMÁ') return -1;

    if (a.provincia === 'NACIONAL') {
      if (b.provincia === 'NACIONAL') {
        return b.votos - a.votos;
      } else {
        return -1;
      }
    }
    if (b.provincia === 'NACIONAL') {
      return 1;
    }

    if (a.provincia === 'PANAMÁ') {
      if (b.provincia === 'PANAMÁ') {
        if (a.plurinominal === '1' && b.plurinominal === '1') {
          return a.orden_clasificacion - b.orden_clasificacion;
        } else {
          return b.votos - a.votos;
        }
      } else {
        return -1;
      }
    }
    if (b.provincia === 'PANAMÁ') {
      return 1;
    }

    if (a.provincia === b.provincia) {
      // Comparar distritos para ALCALDE o circuitos para DIPUTADO
      if (a.plurinominal === '1' && b.plurinominal === '1') {
        return a.orden_clasificacion - b.orden_clasificacion;
      } else {
        return (a.distrito || a.circuito || a.provincia).localeCompare(b.distrito || b.circuito || b.provincia);
      }
    }

    return a.provincia.localeCompare(b.provincia);
  });

  return datosOrdenados;
}

//------------------- FUNCION PARA DELAY DE TIEMPO -------------------
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

//------------------- FUNCION PARA AGRUPAR DATA POR 1,2,3 O TODAS LA SELECCION -------------------
const seleccionarYAgruparDatos = (datos, cantidad = null) => {
  if (cantidad === 0) {
    return datos; // Devolver los mismos datos sin modificación
  }

  const agrupados = {};
  const seleccionados = [];

  for (const dato of datos) {
    const { distrito, provincia, circuito, corporacion } = dato;

    if (corporacion === 'ALCALDE' && (agrupados[distrito]?.length || 0) < cantidad) {
      agrupados[distrito] = agrupados[distrito] || [];
      agrupados[distrito].push(dato);
      seleccionados.push(dato);
    } else if (corporacion === 'PRESIDENTE' && (agrupados[provincia]?.length || 0) < cantidad) {
      agrupados[provincia] = agrupados[provincia] || [];
      agrupados[provincia].push(dato);
      seleccionados.push(dato);
    } else if (corporacion === 'DIPUTADO' && (agrupados[circuito]?.length || 0) < cantidad) {
      agrupados[circuito] = agrupados[circuito] || [];
      agrupados[circuito].push(dato);
      seleccionados.push(dato);
    }
  }

  return seleccionados;
};

export function FunctionsProvider({ children }) {
  const value = {
    mostrarInformacion,
    delay,
    seleccionarYAgruparDatos,
  };

  return <ContextFunctions.Provider value={value}>{children}</ContextFunctions.Provider>;
}

FunctionsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
