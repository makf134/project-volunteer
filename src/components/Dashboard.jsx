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
});

export default function Dashboard(props) {
  const classes = useStyles();

  return (
      <div>
    <Typography variant='h4'>Dashboard</Typography>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Volunteer</StyledTableCell>
            <StyledTableCell align="right">Code Status</StyledTableCell>
            <StyledTableCell align="right">Total of Hours</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.info && props?.info?.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name.first}
              </StyledTableCell>
              <StyledTableCell align="right">{row.name.first}</StyledTableCell>
              <StyledTableCell align="right">{row.name.first}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}