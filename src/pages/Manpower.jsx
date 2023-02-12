import React from 'react'
import axios from 'axios'
import { Box, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import FilterAltIcon from '@mui/icons-material/FilterAlt';


const Manpower = () => {

  const [data, setdata] = React.useState({})

  const manpower = async () => {
    const mapower = await axios.get('/manpower')
    setdata(mapower.data.User)
  }


  React.useEffect(() => {
    manpower()
  }, [])
  return (
    <>
      <Box>
        <TableContainer component={Paper}>
          <Box component={'div'} className='flex justify-between items-center px-4 py-2'>
            <Box>
              <Typography variant='h5'>
                ManPower
              </Typography>
            </Box>
            <Box>
              <IconButton>
                  <FilterAltIcon />
              </IconButton>
            </Box>
          </Box>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Designation</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Share</TableCell>
                <TableCell>Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                Array.from(data).map((item, i) => (
                  <TableRow key={i.toString()}>
                    <TableCell>{item.sl}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.designation}</TableCell>
                    <TableCell>{item.phone}</TableCell>
                    <TableCell>{item.share}</TableCell>
                    <TableCell>{item.amount * item.share}</TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  )
}

export default Manpower