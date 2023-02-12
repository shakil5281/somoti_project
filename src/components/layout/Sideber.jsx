import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import DraftsIcon from '@mui/icons-material/Drafts';
import { MainSummary } from '../navLinks';
import { NavLink } from 'react-router-dom';

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
                            sx={{ padding: 3, fontWeight: 'bold'}}
                            color={'primary'} variant='h5'>
                            Ekushe Tower
                        </Typography>
                    </Box>
                    <Box component={'div'}
                        sx={{ marginTop: '20px', marginBottom: '20px' }}
                    >
                        {
                            MainSummary.map((nav, i) => (
                                <List
                                    key={i.toString()}
                                    sx={{ padding: '0' }}
                                >
                                    <ListItem>
                                    <ListItemButton
                                       component={NavLink} to={`${nav.id}`}
                                        selected={selectedIndex === i}
                                        onClick={(event) => handleListItemClick(event, i)}
                                    >
                                        <ListItemIcon>
                                            {nav.icon}
                                        </ListItemIcon>
                                        <ListItemText
                                            primaryTypographyProps={{
                                                fontSize: 16,
                                                letterSpacing: 0,
                                                color: '#827d7d'
                                            }}
                                            primary={nav.title} />
                                    </ListItemButton>
                                    </ListItem>
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