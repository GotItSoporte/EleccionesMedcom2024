import { useEffect, useState } from 'react';
import { SetRegiones } from './SetRegiones';
import { useFunctions } from '../../../context';

export const SetRegionesLoad = ({ ...props }) => {
  const nameGrafico = 'SETREGIONES';
  const [dataSelect, setDataSelect] = useState([]);
  const [selectOption, setSelectOption] = useState(0);
  const [dataGroupe, setDataGroupe] = useState([]);
  const { seleccionarYAgruparDatos } = useFunctions();

  useEffect(() => {
    setDataGroupe(seleccionarYAgruparDatos(dataSelect, selectOption));
  }, [selectOption, dataSelect]);

  return (
    <SetRegiones
      {...props}
      nameGrafico={nameGrafico}
      setDataSelect={setDataSelect}
      selectOption={selectOption}
      setSelectOption={setSelectOption}
      dataGroupe={dataGroupe}
    />
  );
};
