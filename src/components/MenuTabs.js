import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import School from '@material-ui/icons/School';
import Public from '@material-ui/icons/Public';
import Work from '@material-ui/icons/Work';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AboutMe from './tabs/AboutMe';
import Works from './tabs/Works';
import Colleges from './tabs/Colleges';
import TechTalks from './tabs/TechTalks';
import Skills from './tabs/Skills';
import Networks from './tabs/Networks';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    'aria-controls': `scrollable-prevent-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    backgroundColor: "#2f383b"
}
}));

export default function MenuTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.title}>
      
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="off"
          aria-label="scrollable prevent tabs example"
        >
          <Tab icon={<PersonPinIcon  />} aria-label="person " {...a11yProps(0)} />
          <Tab icon={<FavoriteIcon />} aria-label="favorite" {...a11yProps(1)} />
          <Tab icon={<Work />} aria-label="work" {...a11yProps(2)} />
          <Tab icon={<School />} aria-label="school" {...a11yProps(3)} />
          <Tab icon={<SubscriptionsIcon/>} aria-label="classadviser" {...a11yProps(4)} />
          <Tab icon={<Public />} aria-label="social" {...a11yProps(5)} />
          <Tab icon={<HelpIcon />} aria-label="help" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
      <TabPanel value={value} index={0} dir={theme.direction}>
        <AboutMe/>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <Skills/>
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <Works/>
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
        <Colleges/>
      </TabPanel>
      <TabPanel value={value} index={4} dir={theme.direction}>
        <TechTalks/>
      </TabPanel>
      <TabPanel value={value} index={5} dir={theme.direction}>
        <Networks/>
      </TabPanel>
      <TabPanel value={value} index={6} dir={theme.direction}>
        About this Site
      </TabPanel>
      </SwipeableViews>
    </div>
  );
}
