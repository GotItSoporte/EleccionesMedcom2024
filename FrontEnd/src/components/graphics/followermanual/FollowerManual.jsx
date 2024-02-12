import { FormFollower, Button } from '../../../components';
import iconPlus from '../../../assets/icons/plus.svg';
import iconSend from '../../../assets/icons/Send.svg';
import PropTypes from 'prop-types';


export const FollowerManual = ({
  children,
  componentes,
  duplicarComponente,
  eliminarComponente,
  handleCorporacionChange,
  handleProvinciaChange,
  handleCedulaChange,
  handleNombreChange,
  handleVotosChange,
  handlePorcentajeChange,
  handleSubmit,
}) => {
  return (
    <>
      {children}
      <section className="  bg-opacity-50 w-screen">
        <div >
        <form onSubmit={(event)=>handleSubmit(event)} className='w-[80%] mx-auto' >
          <div className='flex justify-center mb-5 mt-10 w-fit mx-auto' onClick={duplicarComponente}>
          <Button type="Principal" rute="" name="Agregar candidato" icon={iconPlus} color="bg-red" loading={false} />
          </div>
          <div className='grid grid-cols-6 gap-4 mb-5'>
          <div className='col-start-2 col-span-2'>
              <label className="text-sm text-gray-400">Corporación</label>
              <div className="w-full inline-flex border">
                <div className="w-1/12 pt-2 bg-gray-300">

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 text-white  mx-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                  </svg>
                </div>
                <input
                  type="text"
                  className="w-11/12 focus:outline-none text-black p-2"
                  placeholder="Presidentes"
                  onChange={(event)=>handleCorporacionChange(event)}
                />
              </div>
            </div>
          <div className='col-start-4 col-span-2'>
              <label className="text-sm text-gray-400">Provincia</label>
              <div className="w-full inline-flex border">
                <div className="w-1/12 pt-2 bg-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 text-white  mx-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                  </svg>
                </div>
                <input
                  type="text"
                  className="w-11/12 focus:outline-none text-black p-2"
                  placeholder="Bocas del Toro"
                  onChange={(event)=>handleProvinciaChange(event)}
                />
              </div>
            </div>
            </div>

          <div className={`flex justify-center  max-h-[calc(50vh)] overflow-y-auto ${componentes.length > 2 ? 'grid grid-cols-2 gap-4' : ''}`}>
          {componentes.map((componente, index) => (
            <div key={componente.id} className="mx-auto container max-w-2xl md:w-34 ">
                <FormFollower
                  index={index}
                  OnChangeCedula={(event) => handleCedulaChange(componente.id, event) }
                  OnChangeNombre={(event) => handleNombreChange(componente.id, event) }
                  OnChangeVotos={(event) => handleVotosChange(componente.id, event) }
                  OnChangePorcentaje={(event) => handlePorcentajeChange(componente.id, event) }
                  DeleteCandidato={() =>componente.id!==0 && eliminarComponente(componente.id)}
                />         
            
            </div>

            
          ))}
          </div>
        <div className='w-fit mx-auto p-5 '>
        <button type="submit" >
        <Button type="Alert" rute="" name="Cargar datos" icon={iconSend} color="bg-green" loading={false} />
        </button>
        </div>
        </form>
        </div>
      </section>
    </>
  );
};

FollowerManual.propTypes = {
  children: PropTypes.node,
  componentes: PropTypes.array.isRequired,
  duplicarComponente: PropTypes.func.isRequired,
  eliminarComponente: PropTypes.func.isRequired,
  handleCorporacionChange: PropTypes.func.isRequired,
  handleProvinciaChange: PropTypes.func.isRequired,
  handleCedulaChange: PropTypes.func.isRequired,
  handleNombreChange: PropTypes.func.isRequired,
  handleVotosChange: PropTypes.func.isRequired,
  handlePorcentajeChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  
};
