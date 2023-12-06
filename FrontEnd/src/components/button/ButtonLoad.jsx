import PropTypes from 'prop-types';
import { ButtonPrincipal } from './ButtonPrincipal';

export const ButtonLoad = ({ name, type, icon, rute }) => {
  if (type === 'Principal') return <ButtonPrincipal name={name} icon={icon} rute={rute} />;
};

ButtonLoad.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  rute: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
