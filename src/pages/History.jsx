import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Account from './Account';
import UpdateAcc from './UpdateAcc';
import Trash from './Trash';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function History() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: '#fff', width: '100%' }}>
      <AppBar sx={{backgroundColor: '#fff', borderRadius: 20}} position="static">
        <Tabs
          sx={{backgroundColor: '#fff', color: 'black', padding: '0 60px'}}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab sx={{borderRadius: "25px", padding: 3}} label="Create New Account" {...a11yProps(0)} />
          <Tab sx={{borderRadius: "25px", padding: 3}} label="Account Update" {...a11yProps(1)} />
          <Tab sx={{borderRadius: "25px", padding: 3}} label="Account Delete" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Account />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <UpdateAcc />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <Trash />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}