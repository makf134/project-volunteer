import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import Grid from '@material-ui/core/Grid'

const useStyles=makeStyles((theme) =>({
    link:{textDecoration:"none", color:theme.palette.text.primary},
    
        root: {
          maxWidth: '500px',
          width:'1000px'
        },
        media: {
          height: 140,
            width:'400px'
        },
        cardcontent:{
            width:'300px',
            textAlign:'center',
            height:'140px'
        }
  }));

export default function UCardCertificate(props) {
  const classes = useStyles();

  return (
    <Grid container style={{width:'100%',height:'100%'}}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.cardcontent} >
          <Typography gutterBottom variant="h6" component="h2">
            {props.eventname}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
  );
}