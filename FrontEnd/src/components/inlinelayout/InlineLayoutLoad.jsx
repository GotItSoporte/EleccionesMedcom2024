import { InlineLayout } from './InlineLayout';
import { InlineLayoutTicker } from './InlineLayoutTicker';
import PropTypes from 'prop-types';

export const InlineLayoutLoad = ({ ActiveTicker, ...props }) => {
  if (ActiveTicker) return <InlineLayoutTicker {...props} />;
  if (!ActiveTicker) return <InlineLayout {...props} />;
};

InlineLayoutLoad.propTypes = {
  ActiveTicker: PropTypes.bool.isRequired,
};
