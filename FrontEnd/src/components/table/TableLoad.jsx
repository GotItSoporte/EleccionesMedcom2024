import PropTypes from 'prop-types';
import { Table } from './Table';
import { TableEdicion } from './TableEdicion';
import { useData } from '../../context';
import editDataInTable from '../../apis/EditDataInTable';
import { useEffect, useState } from 'react';

export const TableLoad = ({ type, data }) => {
  const { checkPlurinominal, setCheckPlurinominal, setDelayCheckPlurinominal, listPartido, curules } = useData();
  const [listClasificacion, setListClasificacion] = useState(() => {
    return handleRangeClasificacion(data) || [];
  });

  function handleRangeClasificacion(data) {
    const filteredData = data?.filter((item) => item.circuito);

    const ClasificacionByCircuito = {};

    // Iterar sobre los datos filtrados para clasificar y encontrar números faltantes
    filteredData.forEach((item) => {
      const { circuito, orden_clasificacion } = item;

      // Inicializar el array si no existe para el circuito actual
      if (!ClasificacionByCircuito[circuito]) {
        ClasificacionByCircuito[circuito] = [];
      }

      // Agregar el número de orden_clasificacion actual al array correspondiente
      ClasificacionByCircuito[circuito].push(orden_clasificacion);
    });

    // Crear el array 'orden_clasificacion' con los números faltantes
    const orden_clasificacion = Object.entries(ClasificacionByCircuito).map(([circuito, clasificacion]) => {
      //const totalNominas = filteredData.filter((item) => item.circuito === circuito).length;
      const totalNominas = curules[circuito];

      const arrayClasificacion = ['NO APLICA', ...Array.from({ length: totalNominas }, (_, index) => index + 1)].filter(
        (num) => !clasificacion.includes(num),
      );
      return { circuito, arrayClasificacion };
    });
    return orden_clasificacion;
  }

  async function HandleDataSubmit(nameVariableSelected, variableSelected, identificationNumber) {
    setCheckPlurinominal(true);

    const editedData = {
      nameVariableSelected: nameVariableSelected,
      variableSelected: variableSelected,
      cedula: identificationNumber,
    };

    await editDataInTable(editedData, '');
    setDelayCheckPlurinominal(true);
  }

  async function HandleDataPartidoSubmit(nameVariableSelected, variableSelected, identificationNumber) {
    setCheckPlurinominal(true);

    const editedData = {
      nameCodigoSelected: 'codigo_' + nameVariableSelected,
      codigoSelected: listPartido[variableSelected].id,
      nameVariableSelected: 'nombre_' + nameVariableSelected,
      variableSelected: variableSelected,
      cedula: identificationNumber,
    };

    await editDataInTable(editedData, 'Partido');
    setDelayCheckPlurinominal(true);
  }

  useEffect(() => {
    setListClasificacion(handleRangeClasificacion(data));
  }, [data]);

  if (type === '') return <Table data={data ? data : []} />;
  if (type === 'Edicion')
    return (
      <TableEdicion
        data={data ? data : []}
        HandleDataSubmit={HandleDataSubmit}
        HandleDataPartidoSubmit={HandleDataPartidoSubmit}
        checkPlurinominal={checkPlurinominal}
        listPartido={listPartido}
        listClasificacion={listClasificacion}
      />
    );
};

TableLoad.propTypes = {
  data: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
};
