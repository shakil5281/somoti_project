import React from 'react'
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const Emi = () => {
  return (
    <>
      <Box component={'div'} className='my-8'>
      <Paper  variant="outlined" 
        sx={{padding: 3 }}
      >
        <Box>
          <Typography variant='h5' sx={{padding: 1}}>EMI</Typography>
            <Box>
              <TextField variant='outlined' size='small' sx={{width: 80}} label='id' />
              <Button><SearchIcon /></Button>
              <TextField variant='standard' size='medium' sx={{width: 200, margin: '0 10px'}} label='Name' />
              <TextField variant='standard' size='medium' sx={{width: 200, margin: '0 10px'}} label='Amount' />
              <TextField variant='standard' size='medium' sx={{width: 200, margin: '0 10px'}} label='Interest' />
              <Button variant='contained' color='secondary' type='submit'>Submit</Button>
            </Box>
        </Box>
      </Paper>
    </Box>
    <Box>
      <TableContainer component={Paper}>
        <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell component="th" scope="row">Name</TableCell>
                <TableCell align='center'>Designation</TableCell>
                <TableCell align='center'>Loan</TableCell>
                <TableCell align='center'>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            <TableRow>
                <TableCell>1</TableCell>
                <TableCell>Shakil</TableCell>
                <TableCell align='center'>IT officer</TableCell>
                <TableCell align='center'>50000</TableCell>
                <TableCell align='center'>125400</TableCell>
              </TableRow>
            </TableBody>
        </Table>
      </TableContainer>
    </Box>
    </>
  )
}

export default Emi