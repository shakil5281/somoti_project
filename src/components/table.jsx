import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <>
      <Box component={'div'} className='flex '>
        <Paper elevation={3} className='w-1/3 p-6 mx-6'>
            <Box>
                <Typography sx={{margin: 1}} variant='h5'>
                  Summary
                </Typography>
                <Box component={'div'} className='flex justify-between items-center'>
                  <Typography>
                    Total ManPower
                  </Typography>
                  <Typography>
                    50
                  </Typography>
                </Box>
                <Box component={'div'} className='flex justify-between items-center'>
                  <Typography>
                    Total Share
                  </Typography>
                  <Typography>
                    70
                  </Typography>
                </Box>
                <Box component={'div'} className='flex justify-between items-center'>
                  <Typography>
                    Total Interest
                  </Typography>
                  <Typography>
                    25000
                  </Typography>
                </Box>
                <Box component={'div'} className='flex justify-between items-center'>
                  <Typography>
                    Total Loan
                  </Typography>
                  <Typography>
                    25000
                  </Typography>
                </Box>
                <Box component={'div'} className='flex justify-between items-center'>
                  <Typography>
                    Total Ammount
                  </Typography>
                  <Typography>
                    700000
                  </Typography>
                </Box>
                <hr />
                <Box component={'div'} className='flex justify-between items-center'>
                  <Typography variant='h6'>
                    Net Ammount
                  </Typography>
                  <Typography variant='h6'>
                    3052000
                  </Typography>
                </Box>
            </Box>
        </Paper>
        <Paper elevation={3} className='w-1/3 p-6 mx-6'>
            <Box>
                <Typography sx={{margin: 1}} variant='h5'>
                  Summary
                </Typography>
                <Box component={'div'} className='flex justify-between items-center'>
                  <Typography>
                    Total ManPower
                  </Typography>
                  <Typography>
                    50
                  </Typography>
                </Box>
                <Box component={'div'} className='flex justify-between items-center'>
                  <Typography>
                    Total Share
                  </Typography>
                  <Typography>
                    70
                  </Typography>
                </Box>
                <Box component={'div'} className='flex justify-between items-center'>
                  <Typography>
                    Total Interest
                  </Typography>
                  <Typography>
                    25000
                  </Typography>
                </Box>
                <Box component={'div'} className='flex justify-between items-center'>
                  <Typography>
                    Total Ammount
                  </Typography>
                  <Typography>
                    700000
                  </Typography>
                </Box>
                <hr />
                <Box component={'div'} className='flex justify-between items-center'>
                  <Typography variant='h6'>
                    Net Ammount
                  </Typography>
                  <Typography variant='h6'>
                    3052000
                  </Typography>
                </Box>
            </Box>
        </Paper>
      </Box>
    </>
  )
}

export default Home