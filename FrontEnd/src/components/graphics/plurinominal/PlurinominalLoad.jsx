import { Plurinominal } from './Plurinominal';
import { useData } from '../../../context';
import { useEffect, useState } from 'react';

export const PlurinominalLoad = ({ ...props }) => {
  const { data } = useData();
  const [apiData, setApiData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [dataFilter, setDataFilter] = useState([]);
  const [openMenu, setOpenMenu] = useState(false);
  const [circuitoSelect, setCircuitoSelect] = useState('');

  const handleChange = (event) => {
    const inputValue = event.target.value.toLowerCase();
    setSearchTerm(inputValue);
    // Filtrar datos por nombre
    const filteredData = data?.DIPUTADO?.filter((item) => item.nombre.toLowerCase().includes(inputValue)) || [];
    setDataFilter(filteredData);
  };

  const handleChangeCircuito = (inputValue) => {
    const isSameCircuito = circuitoSelect === inputValue;

    // Filtrar datos por circuito
    const filteredData = isSameCircuito
      ? data?.DIPUTADO || []
      : data?.DIPUTADO?.filter((item) => item.circuito === inputValue) || [];
    const filteredCircuitoSelect = isSameCircuito ? '' : inputValue;

    setDataFilter(filteredData);
    setCircuitoSelect(filteredCircuitoSelect);
  };

  useEffect(() => {
    if (apiData === null && Object.keys(data).length !== 0) {
      setApiData(data);
      setDataFilter(data?.DIPUTADO || []);
    } else if (circuitoSelect.trim() === '' && searchTerm.trim() === '') {
      setDataFilter(data?.DIPUTADO || []);
    }
  }, [apiData, data, circuitoSelect, searchTerm]);

  return (
    <Plurinominal
      data={data}
      dataFilter={dataFilter}
      searchTerm={searchTerm}
      handleChange={handleChange}
      handleChangeCircuito={handleChangeCircuito}
      openMenu={openMenu}
      setOpenMenu={setOpenMenu}
      {...props}
    />
  );
};
