import { useEffect, useState } from 'react';
import { FullScreenTribunal } from './FullScreentribunal';
import { useFunctions } from '../../../context';
import fetchReadXml from '../../../apis/ReadXml';

export const FullScreenTribunalLoad = ({ ...props }) => {
  const [dataSelect, setDataSelect] = useState([]);
  const [selectOption, setSelectOption] = useState(0);
  const [dataGroupe, setDataGroupe] = useState([]);
  const [lastFile, setLastFile] = useState(false);
  const [dataLastFile, setDataLastFile] = useState([]);

  const { seleccionarYAgruparDatos } = useFunctions();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newData = await fetchReadXml('FULLSCREENTRIBUNAL');
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
    <FullScreenTribunal
      {...props}
      setDataSelect={setDataSelect}
      dataSelect={dataSelect}
      selectOption={selectOption}
      setSelectOption={setSelectOption}
      lastFile={lastFile}
      setLastFile={setLastFile}
      dataLastFile={dataLastFile}
      setDataLastFile={setDataLastFile}
      dataGroupe={dataGroupe}
    />
  );
};
