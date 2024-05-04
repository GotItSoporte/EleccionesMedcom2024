import { useEffect } from 'react';
import { FollowerCarrera } from './FollowerCarrera';
import sendInfoFollower from '../../../apis/SendInfoFollower';
import { useData } from '../../../context';

export const FollowerCarreraLoad = () => {
  const { data } = useData();

  async function postDataFollower(filteredData) {
    await sendInfoFollower('CARRERA', filteredData);
  }

  useEffect(() => {
    const filteredData = data?.PRESIDENTE?.filter((item) => item.provincia === 'NACIONAL')?.slice(0, 4) || [];
    postDataFollower(filteredData);
  }, [data]);

  return <FollowerCarrera />;
};
