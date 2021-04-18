import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: 'aquamarine',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: 'aqua',
    },
  },
}))(TableRow);

function createData( Volunteer, Contact,Eventname,CodeStatus) {
  return {Volunteer, Contact,Eventname,CodeStatus};
}

const rows = [
  createData('Christian', 'christian@gmail.com', 'Project Tanglaw: Light 100 Homes with Solar','Passed'),
  createData('Christian', 'christian@gmail.com', 'Project Tanglaw: Light 100 Homes with Solar','Passed'),
  createData('Christian', 'christian@gmail.com', 'Project Tanglaw: Light 100 Homes with Solar','Passed'),
  createData('Christian', 'christian@gmail.com', 'Project Tanglaw: Light 100 Homes with Solar','Passed'),
  createData('Christian', 'christian@gmail.com', 'Project Tanglaw: Light 100 Homes with Solar','Passed'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

 function Volunteer(props) {
  const classes = useStyles();

  return (
      <div>
    <Typography variant='h4'>Volunteer</Typography>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableBody>
          {props.info.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
              <Avatar>h</Avatar>
              </StyledTableCell>
              <StyledTableCell align="left">
                <div styles={{display:'flex'}}>{row.name}</div>  
                <div styles={{display:'flex'}}>{row.email}</div>   
                <div styles={{display:'flex'}}>Registered at {row.eventname}</div> 
                <div styles={{display:'flex'}}>{row.status}</div>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default Volunteer;