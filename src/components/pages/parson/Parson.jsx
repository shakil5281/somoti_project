import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows } from '../../navLinks/person';


export default function Person() {
  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </div>
  );
}