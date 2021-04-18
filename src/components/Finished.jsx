import React, {useState,useEffect} from "react";
import Navigation from "./Navigation";
import {Grid,Typography} from "@material-ui/core";
import CardEvents from "./CardEvents"
import { makeStyles } from '@material-ui/core/styles';
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

const useStyles=makeStyles((theme) =>({
        banner:{
            marginBottom:"60px"
        }
        
  }));

  const cardData=[{
    name:"John",
    eventname:"YolandaContentCreators",
    description:"Typhoon Haiyan, known in the Philippines as Super Typhoon Yolanda, was one of the most powerful tropical cyclones ever recorded. On making landfall, Haiyan devastated portions of Southeast Asia, particularly the Philippines.",
    date:"12-04-2021",
    timestart:"3:00pm",
    end:"4:30pm",
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

function Finished(){
    const classes = useStyles();
    const {data,loading} = useFetch('https://api.randomuser.me/')
    return (
        <div>
        <Navigation />
        <Typography variant="h3" align="center" className={classes.banner}>FINISHED EVENTS</Typography>
        <Grid container spacing={5}>
                    {cardData.map((curr,index) =>{
                        return (
                        <Grid item xl={3}>
                        {loading?
                        <CircularProgress />
                        :
                        <CardEvents eventname={data.name.first} description={curr.description} image={curr.img} />
                        }
                        </Grid>);
                    })}
        </Grid>
        </div>
    );
}

export default Finished;