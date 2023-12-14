import { useState } from 'react';
import { FullScreen } from './FullScreen';

export const FullScreenLoad = ({ ...props }) => {
  const [dataSelect, setDataSelect] = useState([]);

  return <FullScreen {...props} dataSelect={dataSelect} setDataSelect={setDataSelect} />;
};
