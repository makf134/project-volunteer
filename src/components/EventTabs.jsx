import React, {useState,useEffect} from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Navigation from "./Navigation";
import {Grid} from '@material-ui/core';
import Dashboard from './Dashboard';
import {useParams} from 'react-router-dom';
import Timesheet from './Timesheet';
import Volunteer from './Volunteer'
import CircularProgress from '@material-ui/core/CircularProgress';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
const cardData=[{
  name:"John",
  eventname:"YolandaContentCreators",
  email:'johndoe@gmail.com',
  timein:'9:00am',
  total:'1hr',
  timeout:'10:00am',
  status:'passed',
  img:"https://images.unsplash.com/photo-1602631985686-1bb0e6a8696e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
},{
  name:"Mary",
  eventname:"YolandaContentCreators",
  email:'johndoe@gmail.com',
  timein:'3:00am',
  total:'2hr',
  timeout:'4:00am',
  status:'in progress',
  img:"https://images.unsplash.com/photo-1607930934636-279238005b0e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
}]
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
    width:'300px',
    marginLeft:'100px'
  },
  tabpanel:{
        // marginLeft:'500px',
        width:'1200px',
        marginLeft:'150px'
  },
  name:{
          fontFamily: 'Orelega One',
          fontWeight:'600',
          fontSize:'50px',
          marginTop:'100px'
          },
  tab:{
    fontSize:'20px',
    marginBottom:'15px',
  }
}));

export default function EventTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const {data,loading} = useFetch('https://api.randomuser.me/')
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const {eventname} = useParams();
  return (
    <div>
    <Navigation />
    <Typography variant='h4' style={{marginTop:'50px', marginLeft:'150px'}} className={classes.name}> {eventname} </Typography>
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
        <Tab label="Dashboard" {...a11yProps(0)} className={classes.tab} />
        <Tab label="Time Sheet" {...a11yProps(1)}  className={classes.tab}/>
        <Tab label="Volunteer" {...a11yProps(2)} className={classes.tab} />
      </Tabs>
      </Grid>
      <Grid item={8}>
      <TabPanel className={classes.tabpanel} value={value} index={0} >

          <Dashboard info={cardData} />
      </TabPanel>
      <TabPanel className={classes.tabpanel} value={value} index={1}>
          <Timesheet info={cardData} />
      </TabPanel>
      <TabPanel className={classes.tabpanel} value={value} index={2}>
        <Volunteer info={cardData} />
      </TabPanel>
      </Grid>
    </div>
    </Grid>
    </div>
  );
}