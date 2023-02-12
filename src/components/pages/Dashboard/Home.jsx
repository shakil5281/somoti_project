import React from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

const Home = () => {
  return (
    <>
      <TableContainer component={Paper} sx={{width: 500}}>
        <Typography sx={{padding: 2}} variant='h5'>Summary</Typography>
        <Table size='medium'>
            <TableHead>
                <TableRow>
                  <TableCell>Description</TableCell>
                  <TableCell>Person</TableCell>
                  <TableCell align='center'>Total Amount</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            <TableRow>
                  <TableCell colSpan={2}>Manpower</TableCell>
                  <TableCell align='center' >40</TableCell>
            </TableRow>
            <TableRow>
                  <TableCell colSpan={1}>Share</TableCell>
                  <TableCell colSpan={1}>65</TableCell>
                  <TableCell align='center' >{65*2000}</TableCell>
            </TableRow>
            <TableRow>
                  <TableCell>Loan</TableCell>
                  <TableCell>10</TableCell>
                  <TableCell align='center'>84000</TableCell>
            </TableRow>
            <TableRow >
                  <TableCell colSpan={2}>Interest</TableCell>
                  <TableCell align='center'>35000</TableCell>
            </TableRow>
            <TableRow >
                  <TableCell colSpan={2}>Cash</TableCell>
                  <TableCell align='center'>{570000+35000-84000}</TableCell>
            </TableRow>
            <TableRow variant='footer' className='bg-blue-700 font-semibold'>
                  <TableCell style={{color: '#fff', fontSize: '1rem', fontWeight: 'bold', padding: '15px 10px'}} variant='footer' align='left' colSpan={2}> Total Net Amount</TableCell>
                  <TableCell style={{color: '#fff', fontSize: '1rem', fontWeight: 'bold', padding: '15px 10px'}} variant='footer' align="center">{870000+35000}</TableCell>
            </TableRow>
            </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default Home