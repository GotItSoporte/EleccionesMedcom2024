import PropTypes from 'prop-types';
import { Table } from './Table';

export const TableLoad = ({ data }) => {
  return <Table data={data ? data : []} />;
};

TableLoad.propTypes = {
  data: PropTypes.array.isRequired,
};
