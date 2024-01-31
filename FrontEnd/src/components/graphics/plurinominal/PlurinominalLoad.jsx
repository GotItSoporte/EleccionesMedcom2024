import { Plurinominal } from './Plurinominal';
import { useData } from '../../../context';
import { useEffect, useState } from 'react';

export const PlurinominalLoad = ({ ...props }) => {
  const { data } = useData();
  const [searchTerm, setSearchTerm] = useState('');
  const [dataFilter, setDataFilter] = useState([]);
  const [openMenu, setOpenMenu] = useState(false);
  const [circuitoSelect, setCircuitoSelect] = useState('');

  const { checkPlurinominal, setCheckPlurinominal, delayCheckPlurinominal, setDelayCheckPlurinominal } = useData(false);

  const handleChange = () => {
    // Filtrar datos por nombre y circuito
    const filteredData = data?.DIPUTADO?.filter((item) => item.plurinominal === '1').filter((item) => {
      const isSameCircuito = circuitoSelect.trim() === '' || item.circuito === circuitoSelect;
      const isSameNombre = searchTerm.trim() === '' || item.nombre.includes(searchTerm);
      return isSameCircuito && isSameNombre;
    });

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
  }, [data, searchTerm, circuitoSelect]);

  return (
    <Plurinominal
      data={data}
      dataFilter={dataFilter}
      searchTerm={searchTerm}
      circuitoSelect={circuitoSelect}
      setSearchTerm={setSearchTerm}
      setCircuitoSelect={setCircuitoSelect}
      openMenu={openMenu}
      setOpenMenu={setOpenMenu}
      {...props}
    />
  );
};
