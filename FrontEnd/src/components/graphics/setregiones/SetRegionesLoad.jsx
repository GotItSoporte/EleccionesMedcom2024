import { useEffect, useRef, useState } from 'react';
import { SetRegiones } from './SetRegiones';
import { useFunctions } from '../../../context';

export const SetRegionesLoad = ({ ...props }) => {
  const nameGrafico = 'SETREGIONES';
  const [dataSelect, setDataSelect] = useState([]);
  const [dataSelectReference, setDataSelectReference] = useState(dataSelect || []);
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
      setDataSelectReference(dataSelect);
      setDataGroupe(seleccionarYAgruparDatos(dataSelect, selectOption));
    }
  }, [selectOption, dataSelect, activeData]);

  return (
    <SetRegiones
      {...props}
      nameGrafico={nameGrafico}
      dataSelectReference={dataSelectReference}
      setDataSelect={setDataSelect}
      selectOption={selectOption}
      setSelectOption={setSelectOption}
      dataGroupe={dataGroupe}
      setActiveData={setActiveData}
    />
  );
};
