import { useState } from 'react';
import { SequenceButton } from './SequenceButton';
import sendInfoWall from '../../apis/SendInfoWall';
import PropTypes from 'prop-types';

export const SequenceButtonLoad = ({ type, data, setMostrarNavbar }) => {
  const [sequence, setSequence] = useState(0);
  const [loading, setLoading] = useState(false);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  async function postDataWall() {
    const formattedData = data
      .map(
        (entry, index) =>
          `Data[${index}]={{${Object.entries(entry)
            .map(([key, value]) => `${key}=${value}`)
            .join(';')}}}`,
      )
      .join(';');

    const WALLMessage = `${formattedData};EntradaDataWALL=1`;
    const WALL_UDPMessage = {
      data: WALLMessage,
    };

    setLoading(true);
    setMostrarNavbar(false);
    await sendInfoWall('', WALL_UDPMessage);
    await delay(7000);
    setLoading(false);
    setSequence(data.length + 1);
  }

  async function postContinueWall() {
    const WALLMessage = 'ContinueDataWALL=1';
    const WALL_UDPMessage = {
      data: WALLMessage,
    };

    setLoading(true);

    await sendInfoWall('', WALL_UDPMessage);
    await delay(3000);
    setLoading(false);
    setSequence(sequence - 1);
  }

  async function postSalidaWall() {
    const WALLMessage = 'ContinueDataWALL=1';
    const WALL_UDPMessage = {
      data: WALLMessage,
    };

    setLoading(true);
    await sendInfoWall('', WALL_UDPMessage);
    await delay(5000);
    setSequence(0);
    setLoading(false);
    setMostrarNavbar(true);
  }

  async function postSalidaForzadaWall() {
    const WALLMessage = 'ContinueDataWALL=1';
    const WALL_UDPMessage = {
      data: WALLMessage,
    };

    setLoading(true);
    await sendInfoWall('', WALL_UDPMessage);
    await delay(5000);
    setSequence(0);
    setLoading(false);
    setMostrarNavbar(true);
  }

  return (
    <SequenceButton
      data={data}
      postData={postDataWall}
      postContinue={postContinueWall}
      postSalida={postSalidaWall}
      postSalidaForzada={postSalidaForzadaWall}
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
