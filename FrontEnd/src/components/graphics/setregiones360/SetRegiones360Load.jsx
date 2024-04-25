import { useEffect, useRef, useState } from 'react';
import { SetRegiones360 } from './SetRegiones360';
import { useFunctions, useData } from '../../../context';

export const SetRegiones360Load = ({ ...props }) => {
  const nameGrafico = 'SETREGIONES';
  const [dataSelect, setDataSelect] = useState([]);
  const [dataSelectReference, setDataSelectReference] = useState(dataSelect || []);
  const [selectOption, setSelectOption] = useState(0);
  const [dataGroupe, setDataGroupe] = useState([]);
  const { seleccionarYAgruparDatos } = useFunctions();
  const { blockWallScreen, setBlockWallScreen } = useData();

  const [activeNavbar, setActiveNavbar] = useState(true); //para pausar la data mientras la interaccion con la tableta
  
  const [activeData, setActiveData] = useState(true);
  
  const lastRegion = useRef(null);
  console.log({activeData})
  console.log({activeNavbar})
console.log({blockWallScreen})
  useEffect(()=>{
    if (activeNavbar){
      setBlockWallScreen({...blockWallScreen,['setRegiones']:false})
    } else {
     // setBlockWallScreen({...blockWallScreen,['wallTribunal']:true})
     setBlockWallScreen({...blockWallScreen,['setRegiones']:true})
      setActiveData(false)
      console.log({blockWallScreen})
     // setBlockWallScreen({...blockWallScreen,['setRegiones']:false})
    }
  },[activeNavbar])


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
    <SetRegiones360
      {...props}
      nameGrafico={nameGrafico}
      dataSelectReference={dataSelectReference}
      setDataSelect={setDataSelect}
      selectOption={selectOption}
      setSelectOption={setSelectOption}
      dataGroupe={dataGroupe}
      setActiveNavbar={setActiveNavbar}
    />
  );
};
