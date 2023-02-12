import React from 'react'
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import DraftsIcon from '@mui/icons-material/Drafts';

const Sideber = () => {

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (event, i) => {
        setSelectedIndex(i);
    };

    return (
        <>
            <Box component={'div'}
                sx={{ width: '270px', height: '100%', position: 'fixed', backgroundColor: '#6868680a' }}
            >
                <Box component={'div'}>
                    <Box component={'div'}>
                        <Typography
                            sx={{ padding: 3 }}
                            color={'primary'} variant='h5'>
                            Ekushe Tower
                        </Typography>
                    </Box>
                    <Box component={'div'}
                        sx={{ marginTop: '20px', marginBottom: '20px' }}
                    >
                        {
                            ['Summary', 'Person', 'Manpower'].map((nav, i) => (
                                <List
                                    key={i.toString()}
                                    sx={{ padding: '0' }}
                                >
                                    <ListItemButton
                                        selected={selectedIndex === i}
                                        onClick={(event) => handleListItemClick(event, i)}
                                    >
                                        <ListItemIcon>
                                            <DraftsIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primaryTypographyProps={{
                                                fontSize: 14,
                                                fontWeight: 'medium',
                                                letterSpacing: 0,
                                            }}
                                            primary={nav} />
                                    </ListItemButton>
                                </List>
                            ))
                        }
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Sideber