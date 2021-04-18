import React,{useState,useEffect} from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import UNavigation from "../user components/UNavigation";
import UTimesheet from '../user components/UTimesheet'
import {Grid} from '@material-ui/core';
import UDashboard from '../user components/UDashboard';
import {useParams} from 'react-router-dom';
import UECertificate from '../user components/UECertificate';
import CircularProgress from '@material-ui/core/CircularProgress';
const useFetch= url =>{
    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(true);

useEffect(async () =>{
    const response=await fetch(url);
    const data=await response.json();
    const [item]=data.results;
    setData(item);
    setLoading(false);
},[]);

    return {data,loading};
};
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (

    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 500,
    width:'100%',
    // border: '2px solid black',
    marginTop:'50px',
    // marginLeft:'500px'
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    maxwidth:'250px',
    // marginLeft:'500px'
  },
  tabpanel:{
        // marginLeft:'500px',
        width:'1200px',
        marginTop:'0'
  }
}));

export default function EventTabs() {
    const {data,loading} = useFetch('https://api.randomuser.me/')
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
    <UNavigation />
    <Grid>
    <div className={classes.root}>
    <Grid item={4}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Dashboard" {...a11yProps(0)} />
        <Tab label="Time Sheet" {...a11yProps(1)} />
        <Tab label="E-Certificates" {...a11yProps(2)} />
      </Tabs>
      </Grid>
      <Grid item={8}>
      <TabPanel className={classes.tabpanel} value={value} index={0} >
          <UDashboard />
      </TabPanel>
      <TabPanel className={classes.tabpanel} value={value} index={1}>
          <UTimesheet />
      </TabPanel>
      <TabPanel className={classes.tabpanel} value={value} index={2}>
        <UECertificate />
      </TabPanel>
      </Grid>
    </div>
    </Grid>
    </div>
  );
}