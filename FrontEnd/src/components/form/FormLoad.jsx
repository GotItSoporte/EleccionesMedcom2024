import { useState } from 'react';
import { Form } from './Form';
import PropTypes from 'prop-types';

export const FormLoad = ({ setMostrarFormulario }) => {
  const [selectedName, setSelectedName] = useState('');
  const [selectedTipoNavbar, setSelectedTipoNavbar] = useState('Selecciona la sección del gráfico');

  const listFiltrado = {
    clasificacion: ['Estudio 1', 'Estudio 2 ', 'Estudio 3'],
    TipoNavbar: ['Multiple', 'Unico'],
    TipoDato: ['Socket', 'XML'],
  };

  return (
    <Form
      setMostrarFormulario={setMostrarFormulario}
      selectedName={selectedName}
      setSelectedName={setSelectedName}
      selectedTipoNavbar={selectedTipoNavbar}
      setSelectedTipoNavbar={setSelectedTipoNavbar}
      listFiltrado={listFiltrado}
    />
  );
};

FormLoad.propTypes = {
  setMostrarFormulario: PropTypes.func.isRequired,
};
