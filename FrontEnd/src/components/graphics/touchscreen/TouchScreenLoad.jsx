import { TouchScreen } from './TouchScreen';
import { useData } from '../../../context';

export const TouchScreenLoad = () => {
  const { data } = useData();

  return <TouchScreen data={data} />;
};
