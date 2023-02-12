import React from 'react'
import { Box, Paper, Typography } from '@mui/material'


const Summary = () => {
    return (
        <>
            <Box component={'div'} sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                    [1, 2, 3, 5, 7, 4].map(item => (
                        <Paper
                            sx={{ padding: '25px 20px', borderRadius: '10px', margin: '10px', boxShadow: '1px 15px 11px #0000000a', width: { xs: '100%', sm: '100%', md: '50%', lg: '26%' }, backgroundColor: '#44ffc2f0' }}
                            elevation={0}
                        >
                            <Box component={'div'}>
                                <Box>
                                    <Typography
                                        sx={{ marginBottom: 2 }}
                                        variant='body2'>
                                        Total Active Users
                                    </Typography>
                                    <Typography
                                        sx={{ fontWeight: 'bold', marginTop: 1, color: '#7b6f6f' }}
                                        variant='h5'>
                                        18,765
                                    </Typography>

                                </Box>
                            </Box>
                        </Paper>
                    ))
                }

                    <Paper
                        sx={{ padding: '25px 20px', borderRadius: '10px', margin: '10px', boxShadow: '1px 15px 11px #0000000a', width: '50%', backgroundColor: '#44ffc2f0' }}
                        elevation={0}
                    >
                        <Box component={'div'}>
                            <Box>
                                <Typography
                                    sx={{ marginBottom: 2 }}
                                    variant='body2'>
                                    Total Active Users
                                </Typography>
                                <Typography
                                    sx={{ fontWeight: 'bold', marginTop: 1, color: '#7b6f6f' }}
                                    variant='h5'>
                                    18,765
                                </Typography>

                            </Box>
                        </Box>
                    </Paper>
                    <Paper
                        sx={{ padding: '25px 20px', borderRadius: '10px', margin: '10px', boxShadow: '1px 15px 11px #0000000a', width: '34%', backgroundColor: '#44ffc2f0' }}
                        elevation={0}
                    >
                        <Box component={'div'}>
                            <Box>
                                <Typography
                                    sx={{ marginBottom: 2 }}
                                    variant='body2'>
                                    Total Active Users
                                </Typography>
                                <Typography
                                    sx={{ fontWeight: 'bold', marginTop: 1, color: '#7b6f6f' }}
                                    variant='h5'>
                                    18,765
                                </Typography>

                            </Box>
                        </Box>
                    </Paper>
                </Box>

        </>
    )
}

export default Summary