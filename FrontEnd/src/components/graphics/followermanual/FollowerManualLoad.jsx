import { useState } from 'react';
import { FollowerManual } from './FollowerManual';
import sendInfoFollower from '../../../apis/SendInfoFollower';

export const FollowerManualLoad = ({ ...props }) => {

  const [componentes, setComponentes] = useState([{ id: 0, corporacion: '', provincia: '', nombre: '', votos: 0, porcentaje: 0   }]);

  const duplicarComponente = () => {
    const newComponentes = [...componentes, { id: componentes.length, nombre: '' }];
    setComponentes(newComponentes);
  };

  const eliminarComponente = (id) => {
    const newComponentes = componentes.filter((componente) =>  componente.id !== id);
    setComponentes(newComponentes);
  };

  const handleCorporacionChange = (event) => {
    console.log('entro')
    const newComponentes = [...componentes];
    const index = newComponentes.findIndex((componente) => componente);
    newComponentes[index].corporacion = event.target.value;
    setComponentes(newComponentes);
  };
  const handleProvinciaChange = (event) => {
    const newComponentes = [...componentes];
    const index = newComponentes.findIndex((componente) => componente);
    newComponentes[index].provincia = event.target.value;
    setComponentes(newComponentes);
  };

  const handleCedulaChange = (id,event) => {
    const newComponentes = [...componentes];
    const index = newComponentes.findIndex((componente) => componente.id === id);
    newComponentes[index].cedula = event.target.value;
    setComponentes(newComponentes);
  };

  const handleNombreChange = (id,event) => {
    const newComponentes = [...componentes];
    const index = newComponentes.findIndex((componente) => componente.id === id);
    newComponentes[index].nombre = event.target.value;
    setComponentes(newComponentes);
  };

  const handleVotosChange = (id, event) => {
    const newComponentes = [...componentes];
    const index = newComponentes.findIndex((componente) => componente.id === id);
    newComponentes[index].votos = parseFloat(event.target.value);
    setComponentes(newComponentes);
  };

  const handlePorcentajeChange = (id, event) => {
    const newComponentes = [...componentes];
    const index = newComponentes.findIndex((componente) => componente.id === id);
    newComponentes[index].porcentaje = event.target.value
    setComponentes(newComponentes);
  };



  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log({componentes})
    await sendInfoFollower('', componentes);
    // Aquí puedes realizar cualquier acción que desees con los datos del formulario
  };

  console.log({componentes})

 
  return (
    <FollowerManual
      {...props}
      componentes={componentes}
      duplicarComponente={duplicarComponente}
      eliminarComponente={eliminarComponente}
      handleCorporacionChange={handleCorporacionChange}
      handleProvinciaChange={handleProvinciaChange}
      handleCedulaChange={handleCedulaChange}
      handleNombreChange={handleNombreChange}
      handleVotosChange={handleVotosChange}
      handlePorcentajeChange={handlePorcentajeChange}
      handleSubmit={handleSubmit}
    />
  );
};
