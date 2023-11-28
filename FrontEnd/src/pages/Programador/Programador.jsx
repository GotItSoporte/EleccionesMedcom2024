import PropTypes from 'prop-types';
import { Table, Button, Form } from '../../components';

export const Programador = ({ mostrarFormulario, setMostrarFormulario }) => {
  return (
    <>
      <div className="mx-3 lg:mx-32 mt-10 ">
        <div className="flex space-x-5 h-fit mb-5 justify-between ">
          <div className="flex" onClick={() => setMostrarFormulario(true)}>
            <Button name="Añadir Grafico" type="Principal" rute="" />
          </div>
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-12 h-12 text-white cursor-pointer opacity-80 hover:opacity-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </a>
        </div>
        <Table admin={true} />
        <div className={`fixed inset-0 flex items-center justify-center ${mostrarFormulario ? '' : 'hidden'}`}>
          <Form setMostrarFormulario={setMostrarFormulario} mostrarFormulario={mostrarFormulario} />
        </div>
      </div>
    </>
  );
};
Programador.propTypes = {
  mostrarFormulario: PropTypes.bool.isRequired,
  setMostrarFormulario: PropTypes.func.isRequired,
};
