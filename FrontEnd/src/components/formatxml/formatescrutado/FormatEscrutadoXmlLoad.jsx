import { FormatEscrutadoXml } from './FormatEscrutadoXml';
import sendInfoXml from '../../../apis/SendInfoXml';
import PropTypes from 'prop-types';
import xmlbuilder from 'xmlbuilder';
import { useEffect } from 'react';

export const FormatEscrutadoXmlLoad = ({ name, data }) => {
  async function CreateFile(name, data) {
    const tickerfeed = xmlbuilder.create('data');
    const element = tickerfeed.ele('element');
    element.ele('escrutado', data?.escrutado?.toString() || ''); //data.escrutado
    const xml = tickerfeed.end({ pretty: true }).toString();
    await sendInfoXml(name, xml);
  }

  useEffect(() => {
    CreateFile(name, data);
  }, [name, data]);

  return <FormatEscrutadoXml />;
};

FormatEscrutadoXmlLoad.propTypes = {
  data: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};
