import { Navbar, Table, Button } from '../../../components';
import iconSend from '../../../assets/icons/send.svg';
import PropTypes from 'prop-types';

export const Wall = ({ mostrarNavbar, rol, setMostrarNavbar, setDataSelect, dataSelect, postDataWall, children }) => {
  return (
    <>
      <div className={`float-left w-0 ${mostrarNavbar ? 'lg:w-auto' : 'lg:w-0'}`}>
        <Navbar
          type="navbarOnly"
          mostrarNavbar={mostrarNavbar}
          setMostrarNavbar={setMostrarNavbar}
          setDataSelect={setDataSelect}
          rol={rol}
          activePresentador={true}
          //NO APLICA
          graficoSeleccionado={''}
          setGraficoSeleccionado={() => {}}
          setLastFile={() => {}}
          isChecked={{}}
          setIsChecked={() => {}}
        />
      </div>
      {children}

      <div className="w-auto px-2 overflow-x-auto">
        <Table data={dataSelect} type="" />
        <div className="w-fit mx-auto mt-2 p-1" onClick={() => postDataWall()}>
          <Button type="Alert" rute="" name="Cargar datos" icon={iconSend} color="bg-green" />
        </div>
      </div>
    </>
  );
};

Wall.propTypes = {
  rol: PropTypes.string.isRequired,
  mostrarNavbar: PropTypes.bool.isRequired,
  setMostrarNavbar: PropTypes.func.isRequired,
  dataSelect: PropTypes.array.isRequired,
  setDataSelect: PropTypes.func.isRequired,
  postDataWall:PropTypes.func.isRequired,
  children: PropTypes.node,
  
};
