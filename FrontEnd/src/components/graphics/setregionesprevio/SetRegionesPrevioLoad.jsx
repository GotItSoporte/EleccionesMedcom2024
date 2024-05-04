import { useEffect, useRef, useState } from 'react';
import { SetRegionesPrevio } from './SetRegionesPrevio';
import { useFunctions, useData } from '../../../context';

export const SetRegionesPrevioLoad = ({ ...props }) => {
  const nameGrafico = 'SETREGIONESPREVIO';
  const [dataSelect, setDataSelect] = useState([]);
  const [dataSelectReference, setDataSelectReference] = useState(dataSelect || []);
  const [selectOption] = useState(0);
  const [dataGroupe, setDataGroupe] = useState([]);
  const { seleccionarYAgruparDatos } = useFunctions();
  const { blockWallScreen, setBlockWallScreen } = useData();

  const [activeNavbar, setActiveNavbar] = useState(true); //para pausar la data mientras la interaccion con la tableta

  const [activeData, setActiveData] = useState(true);

  const lastRegion = useRef(null);

  useEffect(() => {
    if (activeNavbar) {
      setBlockWallScreen({ ...blockWallScreen, ['setRegionesPrevio']: false });
    } else {
      // setBlockWallScreen({...blockWallScreen,['wallTribunal']:true})
      setBlockWallScreen({ ...blockWallScreen, ['setRegionesPrevio']: true });
      setActiveData(false);
      console.log({ blockWallScreen });
      // setBlockWallScreen({...blockWallScreen,['setRegiones']:false})
    }
  }, [activeNavbar]);

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
    <SetRegionesPrevio
      {...props}
      nameGrafico={nameGrafico}
      setDataSelect={setDataSelect}
      dataGroupe={dataGroupe}
      setActiveNavbar={setActiveNavbar}
    />
  );
};
