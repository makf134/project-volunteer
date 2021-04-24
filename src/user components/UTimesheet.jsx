import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: 'grey',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(even)': {
      backgroundColor: 'aqua',
    },
  },
}))(TableRow);

function createData(Volunteer, TimeIn, TimeOut) {
  return { Volunteer, TimeIn, TimeOut};
}

const rows = [
  createData('Christian', '3AM', '10PM'),
  createData('Kurt', '4PM', '11PM'),
  createData('Mary', '5PM', '12AM'),
  createData('Haku', '6PM', '1AM'),
  createData('Yoona', '7PM', '2AM'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

 function UTimesheet() {
  const classes = useStyles();

  return (
      <div>
    <Typography variant='h4' style={{marginBottom:'25px',fontFamily:'lato',fontWeight:'600',fontSize:'40px'}}>Timesheet</Typography>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center" style={{fontWeight:'bold',fontSize:'20px',padding:'30px'}}>Event</StyledTableCell>
            <StyledTableCell align="center" style={{fontWeight:'bold',fontSize:'20px'}}>Time Submitted</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" align="center" style={{fontSize:'18px',padding:'20px'}}>
                {row.Volunteer}
              </StyledTableCell>
              <StyledTableCell align="center" style={{fontSize:'18px',padding:'20px'}}>{row.TimeOut}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default UTimesheet;