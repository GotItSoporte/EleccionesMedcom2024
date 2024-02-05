import { FormatTouchXml } from '../../../components';
import PropTypes from 'prop-types';

export const TouchScreen = ({ data }) => {
  const filteredData = data?.DIPUTADO?.filter((item) => item.reeleccion === '1') || [];

  return (
    <>
      <FormatTouchXml data={filteredData || []} />
    </>
  );
};

TouchScreen.propTypes = {
  data: PropTypes.object.isRequired,
};
