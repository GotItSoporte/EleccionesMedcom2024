import { FormatTouchXml } from './FormatTouchXml';
import sendInfoXml from '../../../apis/SendInfoXml';
import PropTypes from 'prop-types';
import xmlbuilder from 'xmlbuilder';
import { useEffect } from 'react';
import { useData } from '../../../context';

export const FormatTouchXmlLoad = ({ name, data }) => {
  const { curules } = useData();
  
  async function CreateFile(name, data) {
    const tickerfeed = xmlbuilder.create('tickerfeed');

    // Separar los datos por región
    const datosPorRegion = {};

    for (const dato of data) {
      if (!datosPorRegion[dato.provincia]) {
        datosPorRegion[dato.provincia] = [];
      }
      datosPorRegion[dato.provincia].push(dato);
    }
  
    // Imprimir los datos por región
    const elementData = tickerfeed.ele('data');
    for (const region in datosPorRegion) {
      const dataRegion = datosPorRegion[region];
      let tempData = [...dataRegion];
      for (let i = 0; i <= dataRegion.length - 1; i += dataRegion.length) {
        const element = elementData.ele(
          ('' + region)
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^\wÀ-ÿ]/g, '_'),
        );
        let lastCircuito;
        
        tempData.splice(0, dataRegion.length).forEach((dataSelect) => {          
          if (dataSelect.circuito !== lastCircuito) {
            const elementall = element.ele('element');
            elementall.ele('circuito', 'Circuito ' + dataSelect.circuito);
            elementall.ele('plurinominal', dataSelect.plurinominal);
          }
          lastCircuito = dataSelect.circuito;
        });
      }
    }
    
    const elementData2 = tickerfeed.ele('data2');
    for (const region in datosPorRegion) {
      const dataRegion = datosPorRegion[region];
      let tempData = [...dataRegion];
      for (let i = 0; i <= dataRegion.length - 1; i += dataRegion.length) {
        let lastCircuito;
        let element2;
        tempData.splice(0, dataRegion.length).forEach((dataSelect) => {
          if (dataSelect.circuito !== lastCircuito) {
            element2 = elementData2.ele('circuito' + dataSelect.circuito);
          }
          const element3 = element2.ele('datos');

          element3.ele('cedula', dataSelect.cedula || '');
          element3.ele('nombre', dataSelect.nombre || '');
          element3.ele('porcentaje', dataSelect.porcentaje?.toString() || '');
          element3.ele('votos', dataSelect.votos?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') || '');
          element3.ele('circuito', dataSelect.circuito || '');
          element3.ele('curules', curules[dataSelect.circuito] || '');
          element3.ele('plurinominal', dataSelect.plurinominal || '');
          element3.ele('ganadorplurinominal', dataSelect.ganadorplurinominal || '');
          element3.ele('codigo_partido', dataSelect.codigo_partido || '');
          element3.ele('codigo_partido2', dataSelect.codigo_partido2 || '');
          element3.ele('codigo_partido3', dataSelect.codigo_partido3 || '');
          element3.ele('codigo_partido4', dataSelect.codigo_partido4 || '');
          element3.ele('nombre_partido', dataSelect.nombre_partido || '');
          element3.ele('participacion', (Math.random() * 99.99).toFixed(2) || '');
          element3.ele('escrutado', (Math.random() * 99.99).toFixed(2) || '');
          lastCircuito = dataSelect.circuito;
        });
      }
    }
    
    const elementData3 = tickerfeed.ele('data3');
    for (const region in datosPorRegion) {
      const dataRegion = datosPorRegion[region];
      let tempData = [...dataRegion];
      for (let i = 0; i <= dataRegion.length - 1; i += dataRegion.length) {
        let lastProvincia;

        tempData.splice(0, dataRegion.length).forEach((dataSelect) => {
          if (dataSelect.provincia !== lastProvincia) {
            var provincia = (dataSelect.provincia || '')
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .replace(/[^\wÀ-ÿ]/g, '_');
            elementData3.ele('provincia', provincia || '');
          }
          lastProvincia = dataSelect.provincia;
        });
      }
    }
    //console.log(tickerfeed.end({ pretty: true }).toString())
    const xml = tickerfeed.end({ pretty: true }).toString();
    await sendInfoXml(name, xml);
  }

  useEffect(() => {
    CreateFile(name, data);
  }, [name, data]);

  return <FormatTouchXml />;
};

FormatTouchXmlLoad.propTypes = {
  data: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};
