import React from 'react';
import { connect } from 'react-redux';
import {
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Table,
  TableContainer,
  Paper,
} from '@material-ui/core';

const MainTable = ({
  data,
}) => {
  return (
    <>
      {data && data.length > 0 && (
        <>
          <TableContainer
            border={1}
            component={Paper}
            style={{ marginTop: '16px' }}
          >
            <Table>
              <TableHead className="table-head">
                <TableRow>
                  <TableCell>Название субъекта</TableCell>
                  <TableCell>Год</TableCell>
                  <TableCell>Значение</TableCell>
                  <TableCell>Единицы измерения</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((statisticRow) => (
                  <TableRow key={statisticRow.id}>
                    <TableCell>{statisticRow.Region.reg_alias_human_name}</TableCell>
                    <TableCell>{statisticRow.year}</TableCell>
                    <TableCell>{statisticRow.value}</TableCell>
                    <TableCell>{statisticRow.measurement_unit}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </>
  );
};


export default connect(
  state => {
    return {
    };
  },
  {
  },
)(MainTable);
