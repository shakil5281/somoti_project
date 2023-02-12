import React from 'react'
import axios from 'axios'
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'



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
        <TableContainer>
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