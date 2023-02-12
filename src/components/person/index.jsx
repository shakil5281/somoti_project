import React from 'react'
import { Box, FormControl, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const Person = () => {

  const [sl, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  return (
    <>
      <Box>
        <Typography sx={{ fontWeight: 'bold', color: 'gray' }} variant='h6'>
          User List
        </Typography>
      </Box>
      <Paper sx={{ marginTop: 5, boxShadow: '-15px 15px 11px #0000000a', border: '1px solid #0000000a', borderRadius: '15px' }} elevation={0}>
        <Typography sx={{ padding: 2 }} variant='h5'>
          <Box sx={{ maxWidth: 200 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Sl</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sl}
                label="sl"
                onChange={handleChange}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Typography>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#3adf731c' }}>
              <TableCell sx={{ border: 'none' }}>Name</TableCell>
              <TableCell sx={{ border: 'none' }}>Positon</TableCell>
              <TableCell sx={{ border: 'none' }}>Interest</TableCell>
              <TableCell sx={{ border: 'none' }}>Total Amount</TableCell>
              <TableCell sx={{ border: 'none' }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              [1, 2, 34, 4].map(row => (
                <TableRow>
                  <TableCell sx={{ border: 'none', width: '250px' }}>
                    <img style={{ width: '40px', borderRadius: '25px' }} src="https://api-prod-minimal-v4.vercel.app/assets/images/avatars/avatar_3.jpg" alt="" />
                    <span style={{ position: 'absolute', margin: '10px 15px' }}>Shakil Hossen</span>
                  </TableCell>
                  <TableCell sx={{ border: 'none' }}>It Manager</TableCell>
                  <TableCell sx={{ border: 'none' }}>2500</TableCell>
                  <TableCell sx={{ border: 'none' }}>25000</TableCell>
                  <TableCell sx={{ border: 'none', color: 'blue' }}>
                    <TaskAltIcon />
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </Paper>
    </>
  )
}

export default Person