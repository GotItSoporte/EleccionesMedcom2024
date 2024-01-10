import { FormatFullscreenXml } from './FormatFullscreenXml';
import sendInfoXml from '../../../apis/SendInfoXml';
import PropTypes from 'prop-types';
import xmlbuilder from 'xmlbuilder';




export const FormatFullscreenXmlLoad = ({data}) => {

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
      if (!datosPorRegion[dato.region]) {
        datosPorRegion[dato.region] = [];
      }
      datosPorRegion[dato.region].push(dato);
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
            element.ele('field', { name: `escrutado` }, dataSelect.escrutado);
            element.ele('field', { name: `participacion` }, dataSelect.participacion);
            element.ele('field', { name: `corporacion` }, dataSelect.corporacion);
            element.ele('field', { name: `region` }, dataSelect.region);
          }
  
            element.ele('field', { name: `id${idx + 1}` }, dataSelect.id ? dataSelect.id : 1);
            element.ele('field', { name: `nombre${idx + 1}` }, dataSelect.nombre.split(' ').pop());
            element.ele('field', { name: `porcentaje${idx + 1}` }, dataSelect.porcentaje);
            element.ele('field', { name: `votos${idx + 1}` }, dataSelect.votos);
            lastidx = idx + 1;
          });
          element.ele('field', { name: `registros` }, lastidx);
        }
      }
      const xml = tickerfeed.end({ pretty: true }).toString();
      await sendInfoXml ('FULLSCREEN',xml)
  }


 

  

  return <FormatFullscreenXml CreateFile={CreateFile} data={data} />;
};

FormatFullscreenXmlLoad.propTypes = {
  data: PropTypes.array.isRequired
}


