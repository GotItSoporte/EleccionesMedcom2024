import { useState } from 'react';
import { Ticker } from './Ticker';

export const TickerLoad = ({ ...props }) => {
  const [dataSelect, setDataSelect] = useState([]);

  return <Ticker {...props} dataSelect={dataSelect} setDataSelect={setDataSelect} />;
};
