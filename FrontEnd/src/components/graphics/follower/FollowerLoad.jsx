import { useState } from 'react';
import { Follower } from './Follower';
import sendInfoFollower from '../../../apis/SendInfoFollower';

export const FollowerLoad = ({ ...props }) => {
  const [dataSelect, setDataSelect] = useState([]);


  async function postDataFollower() {
    await sendInfoFollower('',dataSelect)
    console.log('informacion follower enviada con exito ')
  }

  return <Follower {...props} dataSelect={dataSelect} setDataSelect={setDataSelect} postDataFollower={postDataFollower}/>;
};