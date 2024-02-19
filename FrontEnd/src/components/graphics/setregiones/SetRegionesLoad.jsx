import { useEffect, useRef, useState } from 'react';
import { SetRegiones } from './SetRegiones';
import { useFunctions } from '../../../context';

export const SetRegionesLoad = ({ ...props }) => {
  const nameGrafico = 'SETREGIONES';
  const [dataSelect, setDataSelect] = useState([]);
  const [selectOption, setSelectOption] = useState(0);
  const [dataGroupe, setDataGroupe] = useState([]);
  const { seleccionarYAgruparDatos } = useFunctions();

  const [activeData, setActiveData] = useState(true); //para pausar la data mientras la interaccion con la tableta
  const lastRegion = useRef(null);

  useEffect(() => {
    if (dataSelect[0]?.distrito !== lastRegion.current) {
      setActiveData(true);
    }
    lastRegion.current = dataSelect[0]?.distrito;

    if (activeData) {
      setDataGroupe(seleccionarYAgruparDatos(dataSelect, selectOption));
    }
  }, [selectOption, dataSelect, activeData]);

  return (
    <SetRegiones
      {...props}
      nameGrafico={nameGrafico}
      setDataSelect={setDataSelect}
      selectOption={selectOption}
      setSelectOption={setSelectOption}
      dataGroupe={dataGroupe}
      setActiveData={setActiveData}
      dataSelect={dataSelect}
    />
  );
};
