import { useEffect, useState } from 'react';
import { FormatTouchXml, FormatEscrutadoXml } from '../../../components';
import PropTypes from 'prop-types';
import { useData } from '../../../context';

export const TouchScreen = ({ data }) => {
  const { curules } = useData();
  const [dataFinalReeleccion, setDataFinalReeleccion] = useState([]);

  useEffect(() => {
    const datosGanadores = {};
    data?.DIPUTADO?.map((el) => {
      if (!datosGanadores[el.circuito]) {
        datosGanadores[el.circuito] = [];
      }

      if (el.plurinominal === '1' && el.orden_clasificacion > 0) {
        datosGanadores[el.circuito].push(el);
      } else if (el.plurinominal === '0') {
        datosGanadores[el.circuito].push(el);
      }
    });

    const claves = Object.keys(datosGanadores);
    claves.map((el) => {
      datosGanadores[el] = datosGanadores[el].slice(0, curules[el])?.filter((item) => item.reeleccion === '1');
    });

    // Contatena los array del objeto
    let arrayFinal = [];
    for (let key in datosGanadores) {
      arrayFinal = arrayFinal.concat(datosGanadores[key]);
    }

    setDataFinalReeleccion(arrayFinal);
  }, [data]);

  const filteredData = dataFinalReeleccion || [];
  //const filteredData = data?.DIPUTADO?.filter((item) => item.reeleccion === '1')?.filter((item) => item.plurinominal==='1' ? item?.orden_clasificacion > 0 : item) || [];
  const filteredDataAll = data?.DIPUTADO?.filter((item) => item.plurinominal==='1' ? item?.orden_clasificacion > 0 : item);
  const escrutadoNacional = data?.PRESIDENTE?.filter((item) => item.provincia === 'NACIONAL');

  return (
    <>
      <FormatTouchXml data={filteredData || []} name="TOUCHSCREEN" />
      <FormatTouchXml data={filteredDataAll || []} name="TOUCHSCREENALL" />
      <FormatEscrutadoXml data={escrutadoNacional || []} name="ESCRUTADONACIONAL" />
    </>
  );
};

TouchScreen.propTypes = {
  data: PropTypes.object.isRequired,
};
