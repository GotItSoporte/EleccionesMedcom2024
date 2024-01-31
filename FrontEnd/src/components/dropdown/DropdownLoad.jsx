import { useState } from 'react';

import { Dropdown } from './Dropdown';

export const DropdownLoad = ({ ...props }) => {
  const [open, setOpen] = useState(false);

  return <Dropdown open={open} setOpen={setOpen} {...props} />;
};
