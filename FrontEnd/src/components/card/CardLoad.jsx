import { Card } from './Card';
import PropTypes from 'prop-types';

export const CardLoad = ({ name, image }) => {
  return (
    <>
      <Card name={name} image={image} />
    </>
  );
};

CardLoad.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
