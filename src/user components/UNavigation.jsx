import React, {useState} from 'react';
import {AppBar, Toolbar, IconButton, Typography, Drawer,List,ListItem,ListItemText} from '@material-ui/core'
import {Menu} from '@material-ui/icons';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Menuu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
const notifData=[{event:'Abs-cbn volunteer'},{event:'Youtube Content Creator'}, {event:'Yolanda Volunteer'}]
function Navigation(){
    const useStyles=makeStyles((theme) =>({
      link:{textDecoration:"none", color:theme.palette.text.primary}
    }))
    const [anchorEl, setAnchorEl] = useState(null);
    const [not, setNot] = useState(null);

    const vpoints=13;
     const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClickNot = (event) => {
      setNot(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleCloseNot = () => {
      setNot(null);
    };
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
      <Link to="/user" className={classes.link}>
      <IconButton color='inherit' align='right' edge='start' aria-label='homeicon'>
        <HomeRoundedIcon/>
      </IconButton>
      </Link>
      <IconButton color='inherit' align='right' edge='start' aria-label='addbox' >
      <NotificationsIcon aria-controls="notifications" aria-haspopup="true" onClick={handleClick}/>
          <Menuu
          id="notifications"
          anchorEl={not}
          keepMounted
          open={Boolean(not)}
          onClose={handleCloseNot}
          >
            <Link to='/user/account' className={classes.link}><MenuItem onClick={handleClose}>Account</MenuItem></Link>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menuu>
      </IconButton>
      <Typography>VPOINTS: {vpoints}</Typography>
      <IconButton color='inherit' align='right' edge='start' aria-label='addbox' >
        <Button aria-controls="account" aria-haspopup="true" onClick={handleClickNot}>
        <Avatar>H</Avatar><Typography style={{marginLeft:'10px'}}>Kalachuchi</Typography> 
          <Menuu
          id="account"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          >
            {notifData.map(curr =>{
              return (<Link to='/user/ongoing' className={classes.link}>
                    <MenuItem onClick={handleCloseNot}><SnackbarContent message={`Your event in ${curr.event} is about to start`} /></MenuItem>
                    </Link>
                    );
            })}
          </Menuu>
          </Button>
      </IconButton>
    </Toolbar>
  </AppBar>

  <Drawer anchor='left' open={open} onClose={() =>{ setOpen(false)}}>
      <List>
        <Link to="/user" className={classes.link}>
        <div style={{height:"30px",width:"250px"}}></div>
          <ListItem button>
            <ListItemText primary={"ALL EVENTS"} />
          </ListItem>
        </Link>
        <Link to="/user/ongoing" className={classes.link}>
        <div style={{height:"30px",width:"250px"}}></div>
          <ListItem button>
            <ListItemText primary={"ONGOING EVENTS"} />
          </ListItem>
        </Link>
        <Link to="/user/upcoming" className={classes.link}>
        <div style={{height:"30px",width:"250px"}}></div>
          <ListItem button>
            <ListItemText primary={"UPCOMING EVENTS"} />
          </ListItem>
        </Link>
        <Link to="/user/finished" className={classes.link}>
        <div style={{height:"30px",width:"250px"}}></div>
          <ListItem button>
            <ListItemText primary={"FINISHED EVENTS"} />
          </ListItem>
        </Link>
        <Link to="/user/settings" className={classes.link}>
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