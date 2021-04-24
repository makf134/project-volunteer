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

function createData(Volunteer, CodeStatus, HoursTotal) {
  return { Volunteer, CodeStatus, HoursTotal};
}

const rows = [
  createData('Christian', 'Passed', '1hr'),
  createData('Kurt', 'In Progress', '2hrs'),
  createData('Mary', 'Passed', '3hrs'),
  createData('Haku', 'In Progress', '4hrs'),
  createData('Yoona', 'Passed', '5hrs'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  name:{

  }
});

export default function Dashboard(props) {
  const classes = useStyles();

  return (
      <div>
    <Typography variant='h4' style={{marginBottom:'25px',fontFamily:'lato',fontWeight:'600',fontSize:'40px'}}>Dashboard</Typography>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align='center' style={{fontWeight:'bold',fontSize:'20px',padding:'30px'}}>Volunteer</StyledTableCell>
            <StyledTableCell align="center" style={{fontWeight:'bold',fontSize:'20px'}}>Code Status</StyledTableCell>
            <StyledTableCell align="center" style={{fontWeight:'bold',fontSize:'20px'}}>Total of Hours</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.info.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" align='center' style={{fontSize:'18px',padding:'20px'}}>
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center" style={{fontSize:'18px',padding:'20px'}}>{row.status}</StyledTableCell>
              <StyledTableCell align="center" style={{fontSize:'18px',padding:'20px'}}>{row.total}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}