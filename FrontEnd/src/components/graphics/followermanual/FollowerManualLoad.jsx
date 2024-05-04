import { useState } from 'react';
import { FollowerManual } from './FollowerManual';
import sendInfoFollower from '../../../apis/SendInfoFollower';

export const FollowerManualLoad = ({ ...props }) => {
  const [componentes, setComponentes] = useState([
    {
      id: 0,
      corporacion: 'PRESIDENTE',
      provincia: '',
      participacion: '',
      escrutado: '',
      nombre: '',
      votos: 0,
      porcentaje: '',
      codigo_partido: 0,
      codigo_partido2: 0,
    },
  ]);

  const duplicarComponente = () => {
    const newComponentes = [...componentes, { id: componentes.length, nombre: '' }];
    setComponentes(newComponentes);
  };

  const eliminarComponente = (id) => {
    const newComponentes = componentes.filter((componente) => componente.id !== id);
    setComponentes(newComponentes);
  };

  const handleCorporacionChange = (event) => {
    const newComponentes = [...componentes];
    const index = newComponentes.findIndex((componente) => componente);
    newComponentes[index].corporacion = event.target.value.toUpperCase();
    setComponentes(newComponentes);
  };
  
  const handleRegionChange = (event) => {
    const newComponentes = [...componentes];
    const index = newComponentes.findIndex((componente) => componente);
    newComponentes[index].provincia = event.target.value.toUpperCase();
    setComponentes(newComponentes);
  };

  const handleParticipacionChange = (event) => {
    const newComponentes = [...componentes];
    const index = newComponentes.findIndex((componente) => componente);
    newComponentes[index].participacion = parseFloat(event.target.value);
    setComponentes(newComponentes);
  };

  const handleEscrutadoChange = (event) => {
    const newComponentes = [...componentes];
    const index = newComponentes.findIndex((componente) => componente);
    newComponentes[index].escrutado = event.target.value;
    setComponentes(newComponentes);
  };

  const handleCedulaChange = (id, event) => {
    const newComponentes = [...componentes];
    const index = newComponentes.findIndex((componente) => componente.id === id);
    newComponentes[index].cedula = event.target.value;
    setComponentes(newComponentes);
  };

  const handleNombreChange = (id, event) => {
    const newComponentes = [...componentes];
    const index = newComponentes.findIndex((componente) => componente.id === id);
    newComponentes[index].nombre = event.target.value.toUpperCase();
    setComponentes(newComponentes);
  };

  const handleVotosChange = (id, event) => {
    const newComponentes = [...componentes];
    const index = newComponentes.findIndex((componente) => componente.id === id);
    newComponentes[index].votos = parseFloat(event.target.value);
    setComponentes(newComponentes);
  };

  const handlePartido1Change = (id, event) => {
    const newComponentes = [...componentes];
    const index = newComponentes.findIndex((componente) => componente.id === id);
    newComponentes[index].codigo_partido = event.target.value;
    setComponentes(newComponentes);
  };

  const handlePartido2Change = (id, event) => {
    const newComponentes = [...componentes];
    const index = newComponentes.findIndex((componente) => componente.id === id);
    newComponentes[index].codigo_partido2 = event.target.value;
    setComponentes(newComponentes);
  };
  

  const handlePorcentajeChange = (id, event) => {
    const newComponentes = [...componentes];
    const index = newComponentes.findIndex((componente) => componente.id === id);
    newComponentes[index].porcentaje = parseFloat(event.target.value);
    setComponentes(newComponentes);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log({ componentes });
    await sendInfoFollower('', componentes);
    // Aquí puedes realizar cualquier acción que desees con los datos del formulario
  };

  return (
    <FollowerManual
      {...props}
      componentes={componentes}
      duplicarComponente={duplicarComponente}
      eliminarComponente={eliminarComponente}
      handleCorporacionChange={handleCorporacionChange}
      handleRegionChange={handleRegionChange}
      handleParticipacionChange={handleParticipacionChange}
      handleEscrutadoChange={handleEscrutadoChange}
      handleCedulaChange={handleCedulaChange}
      handleNombreChange={handleNombreChange}
      handleVotosChange={handleVotosChange}
      handlePartido1Change={handlePartido1Change}
      handlePartido2Change={handlePartido2Change}
      handlePorcentajeChange={handlePorcentajeChange}
      handleSubmit={handleSubmit}
    />
  );
};
