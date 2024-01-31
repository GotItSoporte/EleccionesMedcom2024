import { FormatTickerXml } from './FormatTickerXml';
import sendInfoXml from '../../../apis/SendInfoXml';
import PropTypes from 'prop-types';
import xmlbuilder from 'xmlbuilder';
import { useEffect } from 'react';

export const FormatTickerXmlLoad = ({ data }) => {
  async function CreateFile(data) {
    const tickerfeed = xmlbuilder.create('tickerfeed');
    const playlist = tickerfeed.ele('playlist', {
      type: 'flipping_carousel',
      name: 'tickerprueba',
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
            element.ele('template', 'prueba');
            element.ele('field', { name: `escrutado` }, dataSelect.escrutado || '');
            element.ele('field', { name: `participacion` }, dataSelect.participacion || '');
            element.ele('field', { name: `corporacion` }, dataSelect.corporacion || '');
            element.ele('field', { name: `provincia` }, dataSelect.provincia || '');
            element.ele('field', { name: `distrito` }, dataSelect.distrito || '');
            element.ele('field', { name: `circuito` }, dataSelect.circuito || '');
          }

          element.ele('field', { name: `cedula${idx + 1}` }, dataSelect.cedula || '');
          element.ele('field', { name: `nombre${idx + 1}` }, dataSelect.nombre.split(' ').pop() || '');
          element.ele('field', { name: `porcentaje${idx + 1}` }, dataSelect.porcentaje || '');
          element.ele('field', { name: `votos${idx + 1}` }, dataSelect.votos || '');
          lastidx = idx + 1;
        });
        element.ele('field', { name: `registros` }, lastidx);
      }
    }
    const xml = tickerfeed.end({ pretty: true }).toString();
    await sendInfoXml('TICKER', xml);
  }

  useEffect(() => {
    CreateFile(data);
  }, [data]);

  return <FormatTickerXml />;
};

FormatTickerXmlLoad.propTypes = {
  data: PropTypes.array.isRequired,
};
