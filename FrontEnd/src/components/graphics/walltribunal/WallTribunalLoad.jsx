import { useEffect, useState } from 'react';
import { WallTribunal } from './WallTribunal';
import { useFunctions, useData } from '../../../context';

export const WallTribunalLoad = ({ ...props }) => {
  const nameGrafico = 'WALL';
  const [dataSelect, setDataSelect] = useState([]);
  const [dataSelectReference, setDataSelectReference] = useState(dataSelect || []);
  const [selectOption, setSelectOption] = useState(0);
  const [dataGroupe, setDataGroupe] = useState([]);
  const { seleccionarYAgruparDatos } = useFunctions();
  const { blockWallScreen ,setBlockWallScreen } = useData();

  const [activeData, setActiveData] = useState(true); //para pausar la data mientras la interaccion con la tableta
  useEffect(() => {
    if (activeData) {
      setDataSelectReference(dataSelect);
      setDataGroupe(seleccionarYAgruparDatos(dataSelect, selectOption));
      setBlockWallScreen({...blockWallScreen,['wallTribunal']:false})
    } else {
      setBlockWallScreen({...blockWallScreen,['wallTribunal']:true})
    }
  }, [selectOption, dataSelect, activeData]);

  return (
    <WallTribunal
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
