import { InlineLayout } from './InlineLayout';
import { InlineLayoutTicker } from './InlineLayoutTicker';
import { useData } from '../../context';
import PropTypes from 'prop-types';

export const InlineLayoutLoad = ({ ActiveTicker, ...props }) => {
  const { blockWallScreen } = useData();

  if (ActiveTicker) return <InlineLayoutTicker {...props} />;
  if (!ActiveTicker) return <InlineLayout blockWallScreen={blockWallScreen} {...props} />;
};

InlineLayoutLoad.propTypes = {
  ActiveTicker: PropTypes.bool.isRequired,
};
