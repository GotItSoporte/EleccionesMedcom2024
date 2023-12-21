import { Navbar, Table, Button } from '../../../components';
import iconSend from '../../../assets/icons/send.svg';
import PropTypes from 'prop-types';

export const Follower = ({ mostrarNavbar, rol, setMostrarNavbar, dataSelect, setDataSelect, children, postDataFollower }) => {
  console.log({dataSelect})
  return (
    <>
      <div className={`float-left w-0 ${mostrarNavbar ? 'lg:w-auto' : 'lg:w-0'}`}>
        <Navbar
          type="navbarOnly"
          mostrarNavbar={mostrarNavbar}
          setMostrarNavbar={setMostrarNavbar}
          setDataSelect={setDataSelect}
          rol={rol}
          activePresentador={false}
          //NO APLICA
          graficoSeleccionado={''}
          setGraficoSeleccionado={() => {}}
        />
      </div>
      {children}
      
      <div className="w-auto px-2 overflow-x-auto ">
        <Table data={dataSelect} />

        <div className='w-fit mx-auto mt-2 p-1' onClick={()=>{postDataFollower()}}>
        <Button type="Principal" rute="" name="Cargar datos" icon={iconSend} color="bg-green"/>
        </div>
      </div>
    </>
  );
};

Follower.propTypes = {
    rol: PropTypes.string.isRequired,
  mostrarNavbar: PropTypes.bool.isRequired,
  setMostrarNavbar: PropTypes.func.isRequired,
  dataSelect: PropTypes.array.isRequired,
  setDataSelect: PropTypes.func.isRequired,
  children: PropTypes.node,
  postDataFollower: PropTypes.func.isRequired,
};