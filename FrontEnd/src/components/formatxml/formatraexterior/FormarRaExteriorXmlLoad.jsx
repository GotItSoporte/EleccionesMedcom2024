import { FormatRaExteriorXml } from './FormatRaExteriorXml';
import sendInfoXml from '../../../apis/SendInfoXml';
import PropTypes from 'prop-types';
import xmlbuilder from 'xmlbuilder';
import { useEffect } from 'react';

export const FormatRaExteriorXmlLoad = ({ name, data }) => {
  async function CreateFile(name, data) {
    const tickerfeed = xmlbuilder.create('data');

    // Separar los datos por región
    const datosPorRegion = {};

    for (const dato of data) {
      if (!datosPorRegion[dato.provincia]) {
        datosPorRegion[dato.provincia] = [];
      }
      datosPorRegion[dato.provincia].push(dato);
    }

    const nombrePorRegion = {};

    for (const provincia in datosPorRegion) {
      if (!nombrePorRegion[datosPorRegion[provincia][0].nombre]) {
        nombrePorRegion[datosPorRegion[provincia][0].nombre] = {
          contador: 0,
          nacional: datosPorRegion['NACIONAL'].find((item) => item.nombre === datosPorRegion[provincia][0].nombre),
        };
      }
      if (provincia !== 'NACIONAL') {
        nombrePorRegion[datosPorRegion[provincia][0].nombre].contador++;
      }
    }

    const clavesCandidatos = Object.keys(nombrePorRegion);
    clavesCandidatos.sort((a, b) => nombrePorRegion[b].contador - nombrePorRegion[a].contador);
    const top4Candidatos = clavesCandidatos.slice(0, 8);

    const elementData = tickerfeed.ele('data1');
    top4Candidatos.map((nameSelect) => {
      const element1 = elementData.ele('candidato');
      /*let index = 0
      for (const provincia in datosPorRegion) {
        
        const primerCandidato = datosPorRegion[provincia][0].nombre;
        const provincia2 = datosPorRegion[provincia][0].provincia;
        if (primerCandidato === nameSelect && provincia2 !=='NACIONAL') {
          elementData.ele('provincia' + [++index], provincia2  || '');
        }
      }*/
      //elementData.ele('NumeroProvincia', ++index-1 || '');

      element1.ele('provincia', nombrePorRegion?.[nameSelect]?.contador || '');
      element1.ele('cedula', nombrePorRegion?.[nameSelect]?.nacional?.cedula || '');
      element1.ele('nombre', nombrePorRegion?.[nameSelect]?.nacional?.nombre || '');
      element1.ele(
        'votos',
        nombrePorRegion?.[nameSelect]?.nacional?.votos.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') || '',
      );
      element1.ele('porcentaje', nombrePorRegion?.[nameSelect]?.nacional?.porcentaje.toString() || '');
      element1.ele('escrutado', nombrePorRegion?.[nameSelect]?.nacional?.escrutado.toString() || '');
    });

    const elementData2 = tickerfeed.ele('data2');
    for (const provincia in datosPorRegion) {
      if (provincia !== 'NACIONAL') {
      const element2 = elementData2.ele('elemento');
     
        const primerCedula = datosPorRegion[provincia][0].cedula;

        element2.ele('provincia', provincia || '');
        element2.ele('cedula', primerCedula || '');
      }
    }

    const xml = tickerfeed.end({ pretty: true }).toString();

    await sendInfoXml(name, xml);
  }

  useEffect(() => {
    CreateFile(name, data);
  }, [name, data]);

  return <FormatRaExteriorXml />;
};

FormatRaExteriorXmlLoad.propTypes = {
  data: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};
