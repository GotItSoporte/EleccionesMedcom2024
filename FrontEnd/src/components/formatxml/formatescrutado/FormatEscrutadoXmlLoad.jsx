import { FormatEscrutadoXml } from './FormatEscrutadoXml';
import sendInfoXml from '../../../apis/SendInfoXml';
import PropTypes from 'prop-types';
import xmlbuilder from 'xmlbuilder';
import { useEffect } from 'react';

export const FormatEscrutadoXmlLoad = ({ name, data }) => {
  async function CreateFile(name, data) {
    const tickerfeed = xmlbuilder.create('data');
    const element = tickerfeed.ele('element');
    element.ele('escrutado', data[0]?.escrutado?.toString() || ''); //data[0]?.escrutado?.toFixed().toString()

    const data2 = tickerfeed.ele('data2');
    data?.forEach((dataSelect) => {
      const element2 = data2.ele('element2');
      element2.ele('nombre', dataSelect.nombre || '');
      element2.ele('cedula', dataSelect.cedula || '');
      element2.ele('votos', dataSelect.votos.toString() || '');
      element2.ele('porcentaje', dataSelect.porcentaje?.toString() || ''); // dataSelect.porcentaje
      element2.ele('corporacion', dataSelect.corporacion || '');
      element2.ele('codigo_partido', dataSelect.codigo_partido || '');
      element2.ele('nombre_partido', dataSelect.nombre_partido || '');
      element2.ele('codigo_partido2', dataSelect.codigo_partido2 || '');
      element2.ele('nombre_partido2', dataSelect.nombre_partido2 || '');
      element2.ele('codigo_partido3', dataSelect.codigo_partid3 || '');
      element2.ele('nombre_partido3', dataSelect.nombre_partido3 || '');
      element2.ele('codigo_partido4', dataSelect.codigo_partido4 || '');
      element2.ele('nombre_partido4', dataSelect.nombre_partido4 || '');
    });

    const xml = tickerfeed.end({ pretty: true }).toString();
    await sendInfoXml(name, xml);
  }

  useEffect(() => {
    CreateFile(name, data);
  }, [name, data]);

  return <FormatEscrutadoXml />;
};

FormatEscrutadoXmlLoad.propTypes = {
  data: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};
