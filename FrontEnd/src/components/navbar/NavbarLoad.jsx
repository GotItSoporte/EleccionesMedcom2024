import { useState } from 'react';
import { NavbarOnly } from './NavbarOnly';

export const NavbarLoad = () => {
  const [dataSelect, SetdataSelect] = useState([]);

  return <NavbarOnly dataSelect={SetdataSelect} />;
};
