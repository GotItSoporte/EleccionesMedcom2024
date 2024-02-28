import { FormatTouchXml } from '../../../components';
import PropTypes from 'prop-types';

export const TouchScreen = ({ data }) => {
  const filteredData = data?.DIPUTADO?.filter((item) => item.reeleccion === '1') || [];
  const filteredDataAll = data?.DIPUTADO;
  return (
    <>
      <FormatTouchXml data={filteredData || []} name="TOUCHSCREEN" />
      <FormatTouchXml data={filteredDataAll || []} name="TOUCHSCREENALL" />
    </>
  );
};

TouchScreen.propTypes = {
  data: PropTypes.object.isRequired,
};
