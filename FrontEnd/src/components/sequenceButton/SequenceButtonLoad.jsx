import { useState } from 'react';
import { SequenceButton } from './SequenceButton';
import { SequenceSetRegiones } from './SequenceSetRegiones';
import sendInfoSocket from '../../apis/SendInfoSocket';
import PropTypes from 'prop-types';

export const SequenceButtonLoad = ({ type, data, setMostrarNavbar, setActiveData }) => {
  const [sequence, setSequence] = useState(0);
  const [loading, setLoading] = useState(false);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  async function postData(type) {
    setActiveData(false);

    const formattedData = data
      .map(
        (entry, index) =>
          `Data[${index}]={{${Object.entries(entry)
            .map(([key, value]) => `${key}=${value}`)
            .join(';')}}}`,
      )
      .join(';');

    const message = `${formattedData};EntradaData${type}=1;READER_NUM_RECORDS=${data.length}`;

    const udpMessage = {
      data: message,
    };

    setLoading(true);
    setMostrarNavbar(false);
    await sendInfoSocket(type, udpMessage);
    await delay(7000);
    setLoading(false);
    setSequence(type === 'SETREGIONES' ? (data.length > 4 ? 1 : 0) : data.length + 1);
    type === 'SETREGIONES' ? (data.length > 4 ? null : setActiveData(true)) : null;
  }

  async function postContinue(type) {
    const message = `ContinueData${type}=1`;
    const udpMessage = {
      data: message,
    };

    setLoading(true);

    await sendInfoSocket(type, udpMessage);
    await delay(5000);
    setLoading(false);
    setSequence(sequence - 1);
    type === 'SETREGIONES' && setActiveData(true);
  }

  async function postSalida(type) {
    const message = `SalidaData${type}=1`;
    const udpMessage = {
      data: message,
    };

    setLoading(true);
    await sendInfoSocket(type, udpMessage);
    await delay(5000);
    setSequence(0);
    setLoading(false);
    setMostrarNavbar(true);

    setActiveData(true);
  }

  async function postSalidaForzada(type) {
    const message = `SalidaForzadaData${type}=1`;
    const udpMessage = {
      data: message,
    };

    setLoading(true);
    await sendInfoSocket(type, udpMessage);
    await delay(5000);
    setSequence(0);
    setLoading(false);
    setMostrarNavbar(true);

    setActiveData(true);
  }

  if (type === 'SETREGIONES')
    return (
      <SequenceSetRegiones
        type={type}
        data={data}
        postData={postData}
        postContinue={postContinue}
        sequence={sequence}
        loading={loading}
      />
    );

  if (type !== 'SETREGIONES')
    return (
      <SequenceButton
        type={type}
        data={data}
        postData={postData}
        postContinue={postContinue}
        sequence={sequence}
        loading={loading}
        postSalida={postSalida}
        postSalidaForzada={postSalidaForzada}
      />
    );
};

SequenceButtonLoad.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  setMostrarNavbar: PropTypes.func.isRequired,
  setActiveData: PropTypes.func.isRequired,
};
