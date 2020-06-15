import React from 'react';
import {
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Table,
  TableContainer,
  Paper,
} from '@material-ui/core';

const RegionTable = ({
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
                  <TableCell>Место</TableCell>
                  <TableCell>Индикатор</TableCell>
                  <TableCell>Значение</TableCell>
                  <TableCell>Единицы измерения</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((statisticRow) => (
                  <TableRow key={statisticRow.id}>
                    <TableCell>{`${statisticRow.place}/85`}</TableCell>
                    <TableCell>{statisticRow.Indicator.title}</TableCell>
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


export default RegionTable;
