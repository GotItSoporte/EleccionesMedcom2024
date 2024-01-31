import PropTypes from 'prop-types';
import { Table } from './Table';
import { TableEdicion } from './TableEdicion';
import { useData } from '../../context';
import editDataInTable from '../../apis/EditDataInTable';
import { useEffect, useState } from 'react';

export const TableLoad = ({ type, data }) => {
  const { checkPlurinominal, setCheckPlurinominal, setDelayCheckPlurinominal } = useData();
  const [listClasificacion, setListClasificacion] = useState(() => {
    return handleRangeClasificacion(data) || [];
  });

  const [listPartido] = useState({
    'NO APLICA': {},
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
  });

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
