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
import UERewards from './UERewards'

const cardData=[{
  name:"Joohn",
  eventname:"#KAPONDITAPON: Spay and Neuter to Save Lives",
  description:"Typhoon Haiyan, known in the Philippines Typhoon Haiyan, known in the Philippines as Super Typhoon Yolanda, was one of the most powerful tropical cyclones ever recorded. On makiTyphoon Haiyan, known in the Philippines as Super Typhoon Yolanda, was one of the most powerful tropical cyclones ever recorded. On makias Super Typhoon Yolanda, was one of the most powerful tropical cyclones ever recorded. On making landfall, Haiyan devastated portions of Southeast Asia, particularly the Philippines.",
  date:"12-04-2021",
  timestart:"3:00pm",
  end:"4:30pm",
  img:"https://miro.medium.com/max/4400/1*ViNzlFd_9KzI4uXLBtdT_A.jpeg"
},{
  name:"Mary",
  eventname:"Join our team at 2KK Tulong sa Kapwa Kapatid!  ",
  description:"Typhoon Haiyan, known in the Philippines as Super Typhoon Yolanda, was one of the most powerful tropical cyclones ever recorded. On making landfall, Haiyan devastated portions of Southeast Asia, particularly the Philippines.",
  date:"12-04-2021",
  timestart:"3:00pm",
  end:"4:30pm",
  img:"https://media-exp1.licdn.com/dms/image/C4E12AQHKqihF3qiXfQ/article-cover_image-shrink_600_2000/0/1520132849929?e=1623283200&v=beta&t=lotZbSSGGVzfzYLAQwlxKcIwsHJOaICFF2oHJQ9IeXM"
},{
  name:"Mary",
  eventname:"AKLAYA: Mobile Classroom and Library for Students  ",
  description:"Typhoon Haiyan, known in the Philippines as Super Typhoon Yolanda, was one of the most powerful tropical cyclones ever recorded. On making landfall, Haiyan devastated portions of Southeast Asia, particularly the Philippines.",
  date:"12-04-2021",
  timestart:"3:00pm",
  end:"4:30pm",
  img:"https://s3.amazonaws.com/images.seroundtable.com/google-power-searching-certificate-1343216578.jpg"
},{
  name:"Mary",
  eventname:"2KK KAPesKWELA - April 17 (Rescheduled to April 24)  ",
  description:"Typhoon Haiyan, known in the Philippines as Super Typhoon Yolanda, was one of the most powerful tropical cyclones ever recorded. On making landfall, Haiyan devastated portions of Southeast Asia, particularly the Philippines.",
  date:"12-04-2021",
  timestart:"3:00pm",
  end:"4:30pm",
  img:"https://image.slidesharecdn.com/certificate-190610122641/95/google-certification-fundamentals-of-digital-marketing-1-638.jpg?cb=1560170636"
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
        marginTop:'0',
        marginLeft:'150px'
  },
  tab:{
    fontSize:'20px',
    marginBottom:'15px',
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
        <Tab label="Dashboard" {...a11yProps(0)} className={classes.tab}/>
        <Tab label="Time Sheet" {...a11yProps(1)} className={classes.tab}/>
        <Tab label="E-Certificates" {...a11yProps(2)}className={classes.tab} />
        <Tab label="Rewards" {...a11yProps(3)} className={classes.tab}/>
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
        <UECertificate info={cardData} loading={loading} />
      </TabPanel>
      <TabPanel className={classes.tabpanel} value={value} index={3}>
        <UERewards/>
      </TabPanel>
      </Grid>
    </div>
    </Grid>
    </div>
  );
}