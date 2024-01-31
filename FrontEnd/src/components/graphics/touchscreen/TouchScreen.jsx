import { FormatTouchXml } from '../../../components';
import PropTypes from 'prop-types';

export const TouchScreen = ({ data }) => {
  console.log({ data });
  const filteredData = data?.DIPUTADO?.filter((item) => item.reeleccion === '1') || []; 
  console.log({ filteredData });
  return (
    <>
      <FormatTouchXml data={filteredData || []} />
    </>
  );
};

TouchScreen.propTypes = {
  data: PropTypes.object.isRequired,
};
