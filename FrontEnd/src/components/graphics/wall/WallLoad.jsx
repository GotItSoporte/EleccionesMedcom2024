import { useState } from 'react';
import { Wall } from './Wall';
import sendInfoWall from '../../../apis/SendInfoWall';

export const WallLoad = ({ ...props }) => {
  const [dataSelect, setDataSelect] = useState([]);

  async function postDataWall() {
    await sendInfoWall('', dataSelect);

  }

  

  return <Wall {...props} setDataSelect={setDataSelect} dataSelect={dataSelect} postDataWall={postDataWall} />;
};
