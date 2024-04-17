import { useEffect, useState } from 'react';
import { Wall } from './Wall';
import { useFunctions, useData } from '../../../context';

export const WallLoad = ({ ...props }) => {
  const nameGrafico = 'WALL';
  const [dataSelect, setDataSelect] = useState([]);
  const [dataSelectReference, setDataSelectReference] = useState(dataSelect || []);
  const [selectOption, setSelectOption] = useState(0);
  const [dataGroupe, setDataGroupe] = useState([]);
  const { seleccionarYAgruparDatos } = useFunctions();
  const { blockWallScreen ,setBlockWallScreen } = useData();

  const [activeData, setActiveData] = useState(true);  //para pausar la data mientras la interaccion con la tableta
  useEffect(() => {
    if (activeData) {
      setDataSelectReference(dataSelect);
      setDataGroupe(seleccionarYAgruparDatos(dataSelect, selectOption));
      //setBlockWallScreen(false)
      setBlockWallScreen({...blockWallScreen,['wall']:false})
    } else {
      //setBlockWallScreen(true)
      setBlockWallScreen({...blockWallScreen,['wall']:true})
    }
  }, [selectOption, dataSelect, activeData]);

  return (
    <Wall
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
