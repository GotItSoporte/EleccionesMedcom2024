import { useState } from 'react';
import { SequenceButton } from './SequenceButton';
import sendInfoSocket from '../../apis/SendInfoSocket';
import PropTypes from 'prop-types';

export const SequenceButtonLoad = ({ type, data, setMostrarNavbar }) => {
  const [sequence, setSequence] = useState(0);
  const [loading, setLoading] = useState(false);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  async function postData(type) {
    const formattedData = data
      .map(
        (entry, index) =>
          `Data[${index}]={{${Object.entries(entry)
            .map(([key, value]) => `${key}=${value}`)
            .join(';')}}}`,
      )
      .join(';');

    const message = `${formattedData};EntradaData${type.toUpperCase()}=1`;
    const udpMessage = {
      data: message,
    };

    setLoading(true);
    setMostrarNavbar(false);
    await sendInfoSocket(type, udpMessage);
    await delay(7000);
    setLoading(false);
    setSequence(data.length + 1);
  }

  async function postContinue(type) {
    const message = `ContinueData${type.toUpperCase()}=1`;
    const udpMessage = {
      data: message,
    };

    setLoading(true);

    await sendInfoSocket(type, udpMessage);
    await delay(3000);
    setLoading(false);
    setSequence(sequence - 1);
  }

  async function postSalida() {
    const message = `SalidaData${type.toUpperCase()}=1`;
    const udpMessage = {
      data: message,
    };

    setLoading(true);
    await sendInfoSocket(type, udpMessage);
    await delay(5000);
    setSequence(0);
    setLoading(false);
    setMostrarNavbar(true);
  }

  async function postSalidaForzada() {
    const message = `SalidaForzadaData${type.toUpperCase()}=1`;
    const udpMessage = {
      data: message,
    };

    setLoading(true);
    await sendInfoSocket(type, udpMessage);
    await delay(5000);
    setSequence(0);
    setLoading(false);
    setMostrarNavbar(true);
  }

  return (
    <SequenceButton
      data={data}
      postData={postData}
      postContinue={postContinue}
      postSalida={postSalida}
      postSalidaForzada={postSalidaForzada}
      sequence={sequence}
      loading={loading}
    />
  );
};

SequenceButtonLoad.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  setMostrarNavbar: PropTypes.func.isRequired,
};
