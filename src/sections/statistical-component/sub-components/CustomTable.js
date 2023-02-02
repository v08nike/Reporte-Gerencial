import PropTypes from 'prop-types';
// @mui
import {
  Card,
  CardHeader,
  Table,
  TableBody,
  TableFooter,
  TableContainer,
  TableRow,
  TableCell,
  Typography,
} from '@mui/material';
// hooks
import useTable, { getComparator, emptyRows } from '../../../hooks/useTable';
// components
import { TableEmptyRows, TableHeadCustom } from '../../../components/table';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

ProductTableRow.propTypes = {
  row: PropTypes.object,
};

function ProductTableRow({ row }) {
  const { name, value } = row;
  return (
    <TableRow hover>
      <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="subtitle2" noWrap>
          {name}
        </Typography>
      </TableCell>
      <TableCell align="right">{value.toLocaleString("en-US")}</TableCell>
    </TableRow>
  );
}

CustomTable.propTypes = {
  title: PropTypes.string,
  tableInfo: PropTypes.object,
  headerBgColor: PropTypes.string,
  headerFontColor: PropTypes.string,
};

export default function CustomTable({ title, tableInfo, headerBgColor, headerFontColor }) {
  const { tableHead, tableData } = tableInfo;

  const { dense, page, order, orderBy, rowsPerPage, onSort } = useTable({
    defaultOrderBy: 'createdAt',
  });

  const dataFiltered = applySortFilter({
    tableData,
    comparator: getComparator(order, orderBy),
  });

  return (
    <Card>
      <CardHeader title={title} />
      <TableContainer>
        <Table size="small">
          <TableHeadCustom
            order={order}
            orderBy={orderBy}
            headLabel={tableHead}
            rowCount={tableData.length}
            onSort={onSort}
            sx={{
              '& th': {
                background: headerBgColor,
                color: headerFontColor,
              },
              '& span': {
                color: `${headerFontColor}!important`,
              },
              '& svg': {
                color: `${headerFontColor}!important`,
              },
            }}
          />

          <TableBody>
            {dataFiltered.map((row, index) => (
              <ProductTableRow key={index} row={row} />
            ))}
            <TableEmptyRows height={60} emptyRows={emptyRows(page, rowsPerPage, tableData.length)} />
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="h6" noWrap>
                  Total
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6" noWrap>
                  {parseInt(tableData.reduce((sum, it) => parseFloat(sum) + parseFloat(it.value), 0).toFixed(5), 10).toLocaleString("en-US")}
                </Typography>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Card>
  );
}

// ----------------------------------------------------------------------

function applySortFilter({ tableData, comparator }) {
  const stabilizedThis = tableData.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  tableData = stabilizedThis.map((el) => el[0]);

  return tableData;
}
