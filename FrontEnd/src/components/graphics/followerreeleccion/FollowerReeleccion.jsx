import { Navbar, Table, Button } from '../../../components';
import iconSend from '../../../assets/icons/send.svg';
import PropTypes from 'prop-types';

export const FollowerReeleccion = ({
  mostrarNavbar,
  rol,
  setMostrarNavbar,
  dataSelect,
  setDataSelect,
  children,
  postDataFollower,
}) => {
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
          nameCorporacion={['DIPUTADO']}
          graficoSeleccionado="FollowerReeleccion"
          //NO APLICA
          setGraficoSeleccionado={() => {}}
          setLastFile={() => {}}
          isChecked={{}}
          setIsChecked={() => {}}
        />
      </div>
      {children}

      <div className="w-auto px-2 overflow-x-auto ">
        <Table data={dataSelect} type="" option={0} />
        {dataSelect.length > 0 && (
          <div className="w-fit mx-auto mt-2 p-1" onClick={() => postDataFollower()}>
            <Button type="Alert" rute="" name="Cargar datos" icon={iconSend} color="bg-green" loading={false} />
          </div>
        )}
      </div>
    </>
  );
};

FollowerReeleccion.propTypes = {
  rol: PropTypes.string.isRequired,
  mostrarNavbar: PropTypes.bool.isRequired,
  setMostrarNavbar: PropTypes.func.isRequired,
  dataSelect: PropTypes.array.isRequired,
  setDataSelect: PropTypes.func.isRequired,
  children: PropTypes.node,
  postDataFollower: PropTypes.func.isRequired,
};
