import { FormatTickerXml } from './FormatTickerXml';
import sendInfoXml from '../../../apis/SendInfoXml';
import PropTypes from 'prop-types';
import xmlbuilder from 'xmlbuilder';
import { useEffect } from 'react';

export const FormatTickerXmlLoad = ({ name, data }) => {
  const nameTemplate = {
    Voto_Arriba_Voto24: 'Voto24_Arriba',
    Voto_Abajo_Canal_V24: 'Voto24_Abajo_Canal',
    Voto_Abajo_Voto24: 'Voto24_Abajo',
  };

  async function CreateFile(name, data) {
    const tickerfeed = xmlbuilder.create('tickerfeed');
    const playlist = tickerfeed.ele('playlist', {
      type: 'flipping_carousel',
      name: name.toUpperCase(),
      target: 'carousel',
    });

    // Separar los datos por región
    const datosPorRegion = {};

    for (const dato of data) {
      if (!datosPorRegion[dato.distrito ?? dato.circuito ?? dato.provincia]) {
        datosPorRegion[dato.distrito ?? dato.circuito ?? dato.provincia] = [];
      }
      datosPorRegion[dato.distrito ?? dato.circuito ?? dato.provincia].push(dato);
    }
    // Imprimir los datos por región
    for (const region in datosPorRegion) {
      const dataRegion = datosPorRegion[region];
      let tempData = [...dataRegion];
      for (let i = 0; i <= dataRegion.length - 1; i += 4) {
        const element = playlist.ele('element');
        let lastidx;
        tempData.splice(0, 4).forEach((dataSelect, idx) => {
          if (idx === 0) {
            element.ele('template', nameTemplate[name]);
            if (name !== 'Voto_Abajo_Voto24') {
              element.ele('field', { name: `escrutado` }, dataSelect.escrutado?.toString() || ''); //dataSelect.escrutado
              element.ele('field', { name: `participacion` }, dataSelect.participacion?.toString() || ''); //dataSelect.participacion
            }
            element.ele('field', { name: `corporacion` }, dataSelect.corporacion || '');
            element.ele(
              'field',
              { name: `region` },
              dataSelect.corporacion === 'PRESIDENTE'
                ? dataSelect.provincia
                : dataSelect.corporacion === 'ALCALDE'
                  ? dataSelect.distrito
                  : dataSelect.corporacion === 'DIPUTADO'
                    ? 'Circuito ' + dataSelect.circuito
                    : null || '',
            );
          }
          if (name !== 'Voto_Abajo_Voto24') {
            element.ele('field', { name: `cedula${idx + 1}` }, dataSelect.cedula || '');
          }
          element.ele('field', { name: `nombre${idx + 1}` }, dataSelect.nombre.trimEnd().split(' ').pop() || '');
          element.ele('field', { name: `porcentaje${idx + 1}` }, dataSelect.porcentaje?.toString() || ''); //dataSelect.porcentaje
          if (name !== 'Voto_Abajo_Voto24') {
            element.ele('field', { name: `votos${idx + 1}` }, dataSelect.votos?.toString() || '');
          }
          lastidx = idx + 1;
        });
        element.ele('field', { name: `registros` }, lastidx);
      }
    }
    const xml = tickerfeed.end({ pretty: true }).toString();
    await sendInfoXml(name.toUpperCase(), xml);
  }

  useEffect(() => {
    CreateFile(name, data);
  }, [data]);

  return <FormatTickerXml />;
};

FormatTickerXmlLoad.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};
