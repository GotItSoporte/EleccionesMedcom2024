import { useEffect, useState } from 'react';
import { FollowerResultados } from './FollowerResultados';
import { useFunctions } from '../../../context';
import sendInfoFollower from '../../../apis/SendInfoFollower';

export const FollowerResultadosLoad = ({ ...props }) => {
  const [dataSelect, setDataSelect] = useState([]);
  const [selectOption, setSelectOption] = useState(0);
  const [dataGroupe, setDataGroupe] = useState([]);

  const { seleccionarYAgruparDatos } = useFunctions();

  async function postDataFollower() {
    await sendInfoFollower('', dataGroupe);
  }

  useEffect(() => {
    setDataGroupe(seleccionarYAgruparDatos(dataSelect, selectOption));
  }, [selectOption, dataSelect]);

  return (
    <FollowerResultados
      {...props}
      dataSelect={dataSelect}
      setDataSelect={setDataSelect}
      dataGroupe={dataGroupe}
      selectOption={selectOption}
      setSelectOption={setSelectOption}
      postDataFollower={postDataFollower}
    />
  );
};
