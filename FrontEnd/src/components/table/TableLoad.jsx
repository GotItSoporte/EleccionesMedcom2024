import PropTypes from 'prop-types';
import { Table } from './Table';
import { TableEdicion } from './TableEdicion';

export const TableLoad = ({ type, data }) => {
  if (type === '') return <Table data={data ? data : []} />;
  if (type === 'Edicion') return <TableEdicion data={data ? data : []} />;
};

TableLoad.propTypes = {
  data: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
};
