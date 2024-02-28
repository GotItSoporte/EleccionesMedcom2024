import { useState } from 'react';
import { FollowerReeleccion } from './FollowerReeleccion';
import sendInfoFollower from '../../../apis/SendInfoFollower';

export const FollowerReeleccionLoad = ({ ...props }) => {
  const [dataSelect, setDataSelect] = useState([]);

  async function postDataFollower() {
    await sendInfoFollower('', dataSelect);
  }

  return (
    <FollowerReeleccion
      {...props}
      dataSelect={dataSelect}
      setDataSelect={setDataSelect}
      postDataFollower={postDataFollower}
    />
  );
};
