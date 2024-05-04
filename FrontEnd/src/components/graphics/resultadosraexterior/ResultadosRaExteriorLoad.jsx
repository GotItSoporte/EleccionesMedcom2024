import { useEffect, useState } from 'react';
import { ResultadosRaExterior } from './ResultadosRaExterior';
import { useFunctions } from '../../../context';
import fetchReadXml from '../../../apis/ReadXml';

export const ResultadosRaExteriorLoad = ({ ...props }) => {
  const [dataSelect, setDataSelect] = useState([]);
  const [selectOption] = useState(8);
  const [dataGroupe, setDataGroupe] = useState([]);
  const [lastFile, setLastFile] = useState(false);
  const [dataLastFile, setDataLastFile] = useState([]);

  const { seleccionarYAgruparDatos } = useFunctions();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newData = await fetchReadXml('RESULTADOSRAEXTERIOR');
        setDataLastFile(newData);
      } catch (error) {
        // Manejar el error según sea necesario
        console.error('Error al realizar la petición:', error);
      }
    };
    fetchData(); // Llamada a la función asincrónica
  }, [lastFile]);

  useEffect(() => {
    setDataGroupe(seleccionarYAgruparDatos(dataSelect, selectOption));
  }, [selectOption, dataSelect]);

  return (
    <ResultadosRaExterior
      {...props}
      setDataSelect={setDataSelect}
      dataSelect={dataSelect}
      selectOption={selectOption}
      lastFile={lastFile}
      setLastFile={setLastFile}
      dataLastFile={dataLastFile}
      setDataLastFile={setDataLastFile}
      dataGroupe={dataGroupe}
    />
  );
};
