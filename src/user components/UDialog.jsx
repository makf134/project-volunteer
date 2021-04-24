import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import UCardCertificate from './UCardCertificate';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';

const useStyles=makeStyles((theme) =>({
    link:{textDecoration:"none", color:theme.palette.text.primary},

        buttoncard: {
          width:'300px',
          marginLeft:"40px"
        }
  }));

export default function UDialog(props) {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div className={classes.root}>
        <Button color="primary" onClick={handleClickOpen} style={{width:'400px'}}>
          <UCardCertificate eventname={props.eventname} image={props.image} description={props.description}/>
          </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{`Certificate of ${props.eventname}`}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
                <img src={props.image} style={{maxWidth:'100%'}}/>
                <Typography>{props.description}</Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
              Okay
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }