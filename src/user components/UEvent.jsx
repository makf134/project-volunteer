import UNavigation from './UNavigation';
import React,{useState,useEffect} from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SendIcon from '@material-ui/icons/Send';
import EventIcon from '@material-ui/icons/Event';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import GroupIcon from '@material-ui/icons/Group';
import PersonIcon from '@material-ui/icons/Person'; 
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import Button from '@material-ui/core/Button';
import {useParams} from 'react-router-dom';
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
const cardData=[{
    hostname:"John Doe",
    medium:'Zoom Conference',
    eventname:"Yolanda Content Creators",
    description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo assumenda laborum modi tempora suscipit consequatur corporis molestias! Eos assumenda numquam perferendis veritatis commodi deleniti magni quisquam suscipit incidunt! Voluptate animi ducimus veritatis reprehenderit asperiores debitis quis atque sapiente cupiditate laborum? Fuga doloribus nobis sed libero quod, quasi eligendi hic sequi voluptate cupiditate impedit consequatur. Expedita, incidunt quasi impedit omnis deserunt provident eius temporibus quaerat ipsum repellendus minus adipisci veritatis non explicabo quibusdam iure porro vero voluptatibus voluptates laudantium. Excepturi vitae harum corporis quidem libero cumque hic tempora. Ex delectus, eius dolorum quibusdam exercitationem quia! Est autem magni eveniet molestiae necessitatibus",
    date:"12-04-2021",
    timestart:"3:00pm",
    contact:'09444446737',
    organization:'kalakuchi co.',
    end:"4:30pm",
    email:'kalakuchico@gmail.com',
    img:"https://images.unsplash.com/photo-1602631985686-1bb0e6a8696e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
},{
    name:"Mary",
    eventname:"Youtube Content Creators",
    description:"Typhoon Haiyan, known in the Philippines as Super Typhoon Yolanda, was one of the most powerful tropical cyclones ever recorded. On making landfall, Haiyan devastated portions of Southeast Asia, particularly the Philippines.",
    date:"12-04-2021",
    timestart:"3:00pm",
    end:"4:30pm",
    img:"https://images.unsplash.com/photo-1607930934636-279238005b0e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
}]
const useStyles = makeStyles({
    root: {
      width: '100%',
      maxWidth: 500,
    },
    grid:{
        marginTop:'70px',
        width:'60%',
        marginLeft:'20%'
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      },
    typography:{
        padding:'5px'
    }
  });

function UEvent(){
      const classes = useStyles();
      const {data,loading} = useFetch('https://api.randomuser.me/')
      const {eventname} = useParams();
      return (
        <div>
        <UNavigation />
        <Grid
        container
        direction="row"
        justify="center"
        className={classes.grid} 
        spacing={3}
        >
            <Grid item xl={12}>
                <Paper elevation={3} style={{padding:'30px'}}>
                <Typography variant="h3" component="h2" gutterBottom className={classes.typography}>
                {eventname}
                </Typography>
                </Paper>
            </Grid>
            <Grid item xl={12}>
                <Typography variant='h5'>
                {cardData[0].date} ||
                Volunteer Event
                </Typography>
            </Grid>
            <Grid item xl={6}>
            <img className={classes.img} src={cardData[0].img}></img>
            </Grid>
            <Grid item xl={6}>
                <Paper elevation={3} style={{height:'400px'}}>
                    <Typography variant='h5' className={classes.typography}>
                        <SendIcon />
                          Via:{cardData[0].medium}
                    </Typography>
                    <Typography variant='h5' className={classes.typography}>
                        <EventIcon />
                          Date:{cardData[0].date}
                    </Typography>
                    <Typography variant='h5' className={classes.typography}>
                        <AccessAlarmIcon />
                          Time:{cardData[0].timestart} - {cardData[0].end}
                    </Typography>
                    <Typography variant='h5' className={classes.typography}>
                        <GroupIcon />
                          Organization :{cardData[0].organization}
                    </Typography>
                    <Typography variant='h5' className={classes.typography}>
                        <PersonIcon />
                          Contact Person:{cardData[0].hostname}
                    </Typography>
                    <Typography variant='h5' className={classes.typography}>
                        <CallIcon />
                          Contact:{cardData[0].contact}
                    </Typography>
                    <Typography variant='h5' className={classes.typography} >
                        <EmailIcon />
                          Email:{cardData[0].email}
                    </Typography>
                    <Button 
                    variant="contained"
                     color="primary" 
                     style={{padding:'10px 15px 10px 15px', 
                            marginLeft:'40%',
                            marginTop:'10px'}}
                     onClick={() => alert('{Volunteered:true}')}
                     >
                        Volunteer
                    </Button>
                </Paper>
            </Grid>
            <Grid item xl={12} style={{marginTop:'40px'}}>
                <Typography variant='h5'>
                {cardData[0].description}
                </Typography>
            </Grid>
        </Grid>
        </div>
      );
    }



export default UEvent;