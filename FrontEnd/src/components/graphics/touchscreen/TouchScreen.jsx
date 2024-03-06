import { FormatTouchXml, FormatEscrutadoXml } from '../../../components';
import PropTypes from 'prop-types';

export const TouchScreen = ({ data }) => {
  const filteredData = data?.DIPUTADO?.filter((item) => item.reeleccion === '1') || [];
  const filteredDataAll = data?.DIPUTADO;
  const escrutadoNacional = data?.PRESIDENTE?.find((item) => item.provincia === 'NACIONAL');

  return (
    <>
      <FormatTouchXml data={filteredData || []} name="TOUCHSCREEN" />
      <FormatTouchXml data={filteredDataAll || []} name="TOUCHSCREENALL" />
      <FormatEscrutadoXml data={escrutadoNacional || {}} name="ESCRUTADONACIONAL" />
    </>
  );
};

TouchScreen.propTypes = {
  data: PropTypes.object.isRequired,
};
