import React from 'react'
import { Box, Button, Paper, TextField, Typography } from '@mui/material'

const UpdateAcc = () => {
  return (
    <>
      <Box component={'div'} className='mx-auto w-2/3 my-8'>
        <Paper className='p-8'>
          <Typography variant='h5'>
            Update Your Account
          </Typography>
            <Box component={'form'}>
                <TextField variant="standard" type={'number'}  label='id'  sx={{margin: 2 ,width: '40%'}}/>
                <TextField variant="standard"  label='Full Name'  sx={{margin: 2 ,width: '40%'}}/>
                <TextField variant="standard"  label='Phone'  sx={{margin: 2 ,width: '40%'}}/>
                <TextField variant="standard"  label='Designation'  sx={{margin: 2 ,width: '40%'}}/>
                <TextField variant="standard" type={'number'}  label='Share'  sx={{margin: 2, width: '40%'}}  />
                <Button sx={{margin: 2, width: '40%', padding: 2}} variant='contained' type='submit'>Update Account</Button>
            </Box>
        </Paper>
      </Box>
    </>
  )
}

export default UpdateAcc