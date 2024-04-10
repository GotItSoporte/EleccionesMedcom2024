import { RaExteriorMapa } from './RaExteriorMapa';
import { useData } from '../../../context';

export const RaExteriorMapaLoad = () => {
  const { data } = useData();

  return <RaExteriorMapa data={data} />;
};
