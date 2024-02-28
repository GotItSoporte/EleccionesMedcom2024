import { Plurinominal } from './Plurinominal';
import { useData } from '../../../context';
import { useEffect, useState } from 'react';

export const PlurinominalLoad = ({ ...props }) => {
  const { data } = useData();
  const [searchTerm, setSearchTerm] = useState('');
  const [dataFilter, setDataFilter] = useState([]);
  const [openCorporacion, setOpenCorporacion] = useState(false);

  const [corporacionSelect, setCorporacionSelect] = useState('');
  const [provinciaSelect, setProvinciaSelect] = useState('');
  const [datoSelect, setDatoSelect] = useState('');

  const { checkPlurinominal, setCheckPlurinominal, delayCheckPlurinominal, setDelayCheckPlurinominal } = useData(false);

  const handleChange = () => {
    // Filtrar datos por nombre y circuito
    const corporacion=corporacionSelect?.toUpperCase()
    const filteredData = data?.[corporacion]?.filter((item) => {
      const isSameDato = 
      (corporacion === 'PRESIDENTE' && (datoSelect.trim() === '' || item.provincia === datoSelect)) ||
      (corporacion === 'ALCALDE' && (datoSelect.trim() === '' || item.distrito === datoSelect && item.provincia === provinciaSelect)) ||
      (corporacion === 'DIPUTADO' && (datoSelect.trim() === '' || item.circuito === datoSelect ));
      const isSameNombre = searchTerm.trim() === '' || item.nombre.includes(searchTerm);

      
      return isSameDato && isSameNombre;
     
    });

    console.log({filteredData})

    setDataFilter(filteredData ? filteredData : []);
  };

  useEffect(() => {
    const fetchData = async () => {
      await handleChange(); // Simular evento con valor actual de searchTerm
      if (checkPlurinominal === true && delayCheckPlurinominal == true) {
        setCheckPlurinominal(false);
        setDelayCheckPlurinominal(false);
      }
    };

    fetchData();
  }, [data, searchTerm, datoSelect,corporacionSelect]);

  return (
    <Plurinominal
      data={data}
      dataFilter={dataFilter}
      searchTerm={searchTerm}
      corporacionSelect={corporacionSelect}
      setCorporacionSelect={setCorporacionSelect}
      provinciaSelect={provinciaSelect}
      setProvinciaSelect={setProvinciaSelect}
      datoSelect={datoSelect}
      setDatoSelect={setDatoSelect}
      setSearchTerm={setSearchTerm}
      openCorporacion={openCorporacion}
      setOpenCorporacion={setOpenCorporacion}
      {...props}
    />
  );
};
