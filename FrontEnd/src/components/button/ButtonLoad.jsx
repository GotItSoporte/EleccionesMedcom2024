import PropTypes from 'prop-types';
import { ButtonPrincipal } from './ButtonPrincipal';
import { ButtonAlert } from './ButtonAlert';

export const ButtonLoad = ({ name, type, icon, rute, color }) => {
  if (type === 'Principal') return <ButtonPrincipal name={name} icon={icon} rute={rute} color={color} />;
  if (type === 'Alert') return <ButtonAlert name={name} icon={icon} rute={rute} color={color} />;
};

ButtonLoad.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  rute: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
