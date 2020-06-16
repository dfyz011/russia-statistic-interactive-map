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

const IndicatorTable = ({
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
                  <TableCell>Регион</TableCell>
                  <TableCell>Значение</TableCell>
                  <TableCell>Единицы измерения</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((statisticRow) => (
                  <TableRow key={statisticRow.id}>
                    <TableCell>{`${statisticRow.place}/85`}</TableCell>
                    <TableCell>{statisticRow.Region.reg_alias_human_name}</TableCell>
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


export default IndicatorTable;
