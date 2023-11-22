import PropTypes from 'prop-types';
import { Table } from './Table';

export const TableLoad = ({ admin, data, setSelectIdDelete, setMostrarDelete, setMostrarEdit }) => {
  return (
    <Table
      admin={admin}
      data={data ? data : []}
      setSelectIdDelete={setSelectIdDelete}
      setMostrarDelete={setMostrarDelete}
      setMostrarEdit={setMostrarEdit}
    />
  );
};

TableLoad.propTypes = {
  admin: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
  setSelectIdDelete: PropTypes.func.isRequired,
  setMostrarDelete: PropTypes.func.isRequired,
  setMostrarEdit: PropTypes.func.isRequired,
};
