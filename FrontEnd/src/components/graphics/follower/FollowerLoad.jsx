import { useEffect, useState } from 'react';
import { Follower } from './Follower';
import { useFunctions } from '../../../context';
import sendInfoFollower from '../../../apis/SendInfoFollower';

export const FollowerLoad = ({ ...props }) => {
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
    <Follower
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
