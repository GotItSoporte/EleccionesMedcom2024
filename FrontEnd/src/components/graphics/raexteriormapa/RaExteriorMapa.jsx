import { FormatRaExteriorXml } from '../../../components';
import PropTypes from 'prop-types';

export const RaExteriorMapa = ({ data }) => {
  const filteredData = data?.PRESIDENTE;
  //const filteredDataAll = data?.DIPUTADO;
  //const escrutadoNacional = data?.PRESIDENTE?.find((item) => item.provincia === 'NACIONAL');

  return (
    <>
      <FormatRaExteriorXml data={filteredData || []} name="RAEXTERIORMAPA" />
    </>
  );
};

RaExteriorMapa.propTypes = {
  data: PropTypes.object.isRequired,
};
