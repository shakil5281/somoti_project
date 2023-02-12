import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows } from '../components/navLinks/payment';
import { Button } from '@mui/material';


export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      >
      </DataGrid>
        <Button sx={{margin: 2}} color='secondary' variant='contained'>Submit</Button>
    </div>
  );
}