import { useState } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from './Dropdown';

export const DropdownLoad = ({ selectedOption, setSelectedOption, setList }) => {
  const [open, setOpen] = useState(false);

  return (
    <Dropdown
      open={open}
      setOpen={setOpen}
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
      setList={setList}
    />
  );
};

DropdownLoad.propTypes = {
  selectedOption: PropTypes.string.isRequired,
  setSelectedOption: PropTypes.func.isRequired,
  setList: PropTypes.array.isRequired,
};
