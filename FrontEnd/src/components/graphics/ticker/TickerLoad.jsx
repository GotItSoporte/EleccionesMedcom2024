import { useEffect, useState } from 'react';
import { Ticker } from './Ticker';
import { useFunctions } from '../../../context';

export const TickerLoad = ({ ...props }) => {
  const nameGrafico = 'Voto_Arriba_Voto24';
  const [dataSelect, setDataSelect] = useState([]);
  const [selectOption, setSelectOption] = useState(() => {
    const dataMemory = localStorage.getItem('option' + nameGrafico);

    return dataMemory ? parseInt(dataMemory, 10) : 0;
  });

  const [dataGroupe, setDataGroupe] = useState([]);

  const [isChecked, setIsChecked] = useState(() => {
    const dataMemory = localStorage.getItem(nameGrafico);
    return dataMemory ? JSON.parse(dataMemory) : {};
  });
  const { seleccionarYAgruparDatos } = useFunctions();

  useEffect(() => {
    setDataGroupe(seleccionarYAgruparDatos(dataSelect, selectOption));
  }, [selectOption, dataSelect]);

  useEffect(() => {
    // Almacenar el contador en localStorage
    localStorage.setItem(nameGrafico, JSON.stringify(isChecked));
  }, [isChecked]);

  useEffect(() => {
    // Almacenar el contador en localStorage
    localStorage.setItem('option' + nameGrafico, selectOption.toString());
  }, [selectOption]);

  return (
    <Ticker
      {...props}
      nameGrafico={nameGrafico}
      dataSelect={dataSelect}
      setDataSelect={setDataSelect}
      selectOption={selectOption}
      setSelectOption={setSelectOption}
      isChecked={isChecked}
      setIsChecked={setIsChecked}
      dataGroupe={dataGroupe}
    />
  );
};
