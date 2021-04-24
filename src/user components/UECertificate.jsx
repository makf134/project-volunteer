import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import UCardCertificate from './UCardCertificate';
import CircularProgress from '@material-ui/core/CircularProgress'
import UDialog from './UDialog'


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function UECertificate(props) {
  const classes = useStyles();

  return (
    <div>
        <Typography variant='h4' style={{marginBottom:'25px',fontFamily:'lato',fontWeight:'600',fontSize:'40px'}}>E-Certificate</Typography>
        <Grid container spacing={8}>
                    {props.info.map((curr,index) =>{
                        return (
                        <Grid item xl={4}>
                        {props.loading?
                        <CircularProgress />
                        :
                        <UDialog eventname={curr.eventname} description={curr.description} image={curr.img} />
                        }
                        </Grid>);
                    })}
        </Grid>
    </div>
  );
}