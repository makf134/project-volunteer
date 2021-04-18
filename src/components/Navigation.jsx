import React, {useState} from 'react';
import {AppBar, Toolbar, IconButton, Typography, Drawer,List,ListItem,ListItemText} from '@material-ui/core'
import {Menu} from '@material-ui/icons';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import AddBoxIcon from '@material-ui/icons/AddBox';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";


function Navigation(){
    const useStyles=makeStyles((theme) =>({
      link:{textDecoration:"none", color:theme.palette.text.primary}
    }))
    const classes= useStyles();
    const [open,setOpen]=useState(false);
    const handleDrawer= () =>{
        setOpen(true);
    }

    return (
    <div>
    <AppBar color='transparent' position='static'>
    <Toolbar>
      <IconButton onClick={handleDrawer} color='inherit' edge='start' aria-label='menu'>
        <Menu />
      </IconButton>
      <Typography style={{flexGrow:1}}>iVolunteer</Typography>
      <Link to="/host" className={classes.link}>
      <IconButton color='inherit' align='right' edge='start' aria-label='homeicon'>
        <HomeRoundedIcon/>
      </IconButton>
      </Link>
      <Link to="/host/addevent" className={classes.link}>
      <IconButton color='inherit' align='right' edge='start' aria-label='addbox'>
        <AddBoxIcon />
      </IconButton>
      </Link>
      <IconButton color='inherit' align='right' edge='start' aria-label='addbox'>
        <AccountCircleIcon/>
      </IconButton>
      <Typography>Kalachuchi</Typography> 
    </Toolbar>
  </AppBar>

  <Drawer anchor='left' open={open} onClose={() =>{ setOpen(false)}}>
      <List>
        <Link to="/host/" className={classes.link}>
        <div style={{height:"30px",width:"250px"}}></div>
          <ListItem button>
            <ListItemText primary={"ONGOING EVENTS"} />
          </ListItem>
        </Link>
        <Link to="/host/upcoming" className={classes.link}>
        <div style={{height:"30px",width:"250px"}}></div>
          <ListItem button>
            <ListItemText primary={"UPCOMING EVENTS"} />
          </ListItem>
        </Link>
        <Link to="/host/finished" className={classes.link}>
        <div style={{height:"30px",width:"250px"}}></div>
          <ListItem button>
            <ListItemText primary={"FINISHED EVENTS"} />
          </ListItem>
        </Link>
        <Link to="/host/settings" className={classes.link}>
        <div style={{height:"30px",width:"250px"}}></div>
          <ListItem button>
            <ListItemText primary={"SETTINGS"} />
          </ListItem>
        </Link>
      </List>
  </Drawer>
  </div>
  );

    

}

export default Navigation;