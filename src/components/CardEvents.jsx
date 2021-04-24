import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";


const useStyles=makeStyles((theme) =>({
    link:{textDecoration:"none", color:theme.palette.text.primary},
    
        root: {
          maxWidth: 345,
          marginLeft:"40px"
        },
        media: {
          height: 140,
        
        }, typography:{
          fontFamily: 'Orelega One',
          fontWeight:'600',
          fontSize:'30px'
        }
  }));

export default function CardEvents(props) {
  const classes = useStyles();

  return (
    <Link to={`/host/event/${props.eventname}`} className={classes.link} >
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.typography}>
            {props.eventname.slice(0,18)}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description.slice(0,224)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Link>
  );
}