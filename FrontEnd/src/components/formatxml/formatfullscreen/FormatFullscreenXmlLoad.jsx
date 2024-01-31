import { FormatFullscreenXml } from './FormatFullscreenXml';
import sendInfoXml from '../../../apis/SendInfoXml';
import PropTypes from 'prop-types';
import xmlbuilder from 'xmlbuilder';

export const FormatFullscreenXmlLoad = ({ data }) => {
  async function CreateFile(data) {
    const tickerfeed = xmlbuilder.create('data');
    data.forEach((dataSelect) => {
      const element = tickerfeed.ele('element');
      element.ele('nombre', dataSelect.nombre || '');
      element.ele('cedula', dataSelect.cedula || '');
      element.ele('votos', dataSelect.votos || '');
      element.ele('porcentaje', dataSelect.porcentaje || '');
      element.ele('provincia', dataSelect.provincia || '');
      element.ele('distrito', dataSelect.distrito || '');
      element.ele('circuito', dataSelect.circuito || '');
      element.ele('corporacion', dataSelect.corporacion || '');
      element.ele('participacion', dataSelect.participacion || '');
      element.ele('escrutado', dataSelect.escrutado || '');
      element.ele('nombre_partido', dataSelect.nombre_partido || '');
    });
    const xml = tickerfeed.end({ pretty: true }).toString();
    await sendInfoXml('FULLSCREEN', xml);
  }

  return <FormatFullscreenXml CreateFile={CreateFile} data={data} />;
};

FormatFullscreenXmlLoad.propTypes = {
  data: PropTypes.array.isRequired,
};
