import PropTypes from 'prop-types';
import { Table } from './Table';
import { TableEdicion } from './TableEdicion';
import { useData } from '../../context';
import editDataInTable from '../../apis/EditDataInTable';

export const TableLoad = ({ type, data }) => {
  const { checkPlurinominal, setCheckPlurinominal, setDelayCheckPlurinominal } = useData();

  async function HandleDataSubmit(winnerPlurinominal, identificationNumber) {
    setCheckPlurinominal(true);
    const editedData = {
      ganadorPlurinominal: winnerPlurinominal,
      cedula: identificationNumber,
    };

    await editDataInTable(editedData);
    setDelayCheckPlurinominal(true);
  }

  if (type === '') return <Table data={data ? data : []} />;
  if (type === 'Edicion')
    return (
      <TableEdicion data={data ? data : []} HandleDataSubmit={HandleDataSubmit} checkPlurinominal={checkPlurinominal} />
    );
};

TableLoad.propTypes = {
  data: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
};
