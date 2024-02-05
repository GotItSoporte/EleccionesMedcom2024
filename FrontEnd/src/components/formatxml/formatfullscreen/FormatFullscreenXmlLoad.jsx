import { FormatFullscreenXml } from './FormatFullscreenXml';
import sendInfoXml from '../../../apis/SendInfoXml';
import PropTypes from 'prop-types';
import xmlbuilder from 'xmlbuilder';

export const FormatFullscreenXmlLoad = ({ data }) => {
  async function CreateFile(data) {
    const tickerfeed = xmlbuilder.create('data');
    data.forEach((dataSelect) => {
      const element = tickerfeed.ele('element');
      element.ele('orden_clasificacion', dataSelect.orden_clasificacion || '');
      element.ele('plurinominal', dataSelect.plurinominal || '');
      element.ele('ganadorplurinominal', dataSelect.ganadorplurinominal || '');
      element.ele('nombre', dataSelect.nombre || '');
      element.ele('cedula', dataSelect.cedula || '');
      element.ele('votos', dataSelect.votos || '');
      element.ele('porcentaje', dataSelect.porcentaje || '');
      element.ele('provincia', dataSelect.provincia || '');
      element.ele('distrito', dataSelect.distrito || '');
      element.ele('circuito', dataSelect.circuito || '');
      element.ele('corporacion', dataSelect.corporacion || '');
      element.ele('participacion', dataSelect.participacion || '99.99');
      element.ele('escrutado', dataSelect.escrutado || '20.11');
      element.ele('codigo_partido', dataSelect.codigo_partido || '');
      element.ele('nombre_partido', dataSelect.nombre_partido || '');
      element.ele('codigo_partido2', dataSelect.codigo_partido2 || '');
      element.ele('nombre_partido2', dataSelect.nombre_partido2 || '');
      element.ele('codigo_partido3', dataSelect.codigo_partid3 || '');
      element.ele('nombre_partido3', dataSelect.nombre_partido3 || '');
      element.ele('codigo_partido4', dataSelect.codigo_partido4 || '');
      element.ele('nombre_partido4', dataSelect.nombre_partido4 || '');
    });
    const xml = tickerfeed.end({ pretty: true }).toString();
    await sendInfoXml('FULLSCREEN', xml);
  }

  return <FormatFullscreenXml CreateFile={CreateFile} data={data} />;
};

FormatFullscreenXmlLoad.propTypes = {
  data: PropTypes.array.isRequired,
};
