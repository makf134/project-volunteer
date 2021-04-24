import React,{useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid"
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button'
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

function createData(sponsor, sponsorimage, vcost,description,code) {
  return { sponsor, sponsorimage, vcost,description,code};
}



const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

 function UERewards() {
  const classes = useStyles();
  const [category, setCategory] = React.useState(10);
  const [available,setAvailable]= useState([
  createData('SM Megamall', 'https://pbs.twimg.com/profile_images/1296006785619427329/x5b0o5ie.jpg', 10,'Gift voucher of 1000 pesos','x23shw',),
  createData('Bantay Bata', 'http://www.projecthappyfeet.org/wp-content/uploads//2013/06/PHF_Bantay_Bata_163.png', 1000,'Gift voucher of 10,000 pesos','sasx23shw'),
  createData('PureGold', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwWWfKWi_CQB_3djJBKHE0s_BRGIjcMUfnT9cyJV547q2vEch8x1U65A_OMu5nIx3oDS4&usqp=CAU', 500,'Gift voucher of 100,000 pesos','x2asdshw'),
  createData('Mercury', 'data:image/png;base64,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', 300,'Gift voucher of 1,000 pesos','sdasdasx23shw'),
  createData('Ace Hardware', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOkUi9hB4PO3q2giB3MRiM0LqMJEcaw7mHHsCJ-YUe-_Tsayb1tC6t2J5AgxI5EKCl-h4&usqp=CAU', 100,'Gift voucher of 1,000 pesos','x22223shw'),
]);
const [purchased,setPurchased]=useState([]);
  const [vpoints,setVpoints] = React.useState(10000)
  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  function handlePurchase(id){
    setPurchased((prev) => {return [...prev,available[id]]})
    setAvailable(prevNotes => {
        return prevNotes.filter((noteItem, index) => {
          return index !== id;
        });
      });
  }
  return (
      <div>
        
    <Grid container justify='space-between'>
        <Grid item xl={7}>
        <Typography variant='h4'  style={{marginBottom:'25px',fontFamily:'lato',fontWeight:'600',fontSize:'40px'}}>Rewards</Typography>
        </Grid>
        <Grid item xl={2}>
        <Typography variant='h5' style={{marginBottom:'25px'}}>Points: {vpoints}</Typography>
        </Grid>
        <Grid item xl={2}>
        <InputLabel id="demo-simple-select-label">Select Category of Voucher</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          onChange={handleChange}
        >
          <MenuItem value={10}>List of Vouchers</MenuItem>
          <MenuItem value={20}>Purchased</MenuItem>
        </Select>
        </Grid>
    </Grid>
    <TableContainer component={Paper} style={{width:'1100px'}}>
      <Table className={classes.table} aria-label="customized table">
        <TableBody>
          {category== 10 ? (available.map((row,index) => (
            <StyledTableRow key={row.name} style={{height:'100px'}} id={index}>
              <StyledTableCell align="left" style={{height:'100px'}}>
                <img src={row.sponsorimage} style={{maxWidth:'100%',maxHeight:'100%',display:'block'}}/>
                <Typography variant='h6' style={{marginLeft:'15px'}}>{row.sponsor}</Typography>
              </StyledTableCell>
              <StyledTableCell align="center" style={{marginRight:'500px'}}>
                  <Typography>{row.description}</Typography>
                  <Typography>{row.vcost}</Typography>
              </StyledTableCell>
              <StyledTableCell align="left">
                    <Button variant="contained" color="primary" id={index}
                    onClick={ () =>{
                        const id=index;
                        setVpoints(vpoints-row.vcost)
                        handlePurchase(id)
                            
                        }}>
                         Purchase
                    </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))):(purchased.map((row,index) => (
            <StyledTableRow key={row.name} style={{height:'100px'}} id={index}>
              <StyledTableCell align="left" style={{height:'100px'}}>
                <img src={row.sponsorimage} style={{maxWidth:'100%',maxHeight:'100%',display:'block'}}/>
                <Typography variant='h6' style={{marginLeft:'15px'}}>{row.sponsor}</Typography>
              </StyledTableCell>
              <StyledTableCell align="center" style={{marginRight:'500px'}}>
                  <Typography>{row.description}</Typography>
              </StyledTableCell>
              <StyledTableCell align="left">
                    <Typography>{`Code: ${row.code}`}</Typography>
              </StyledTableCell>
            </StyledTableRow>
          ))) }
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default UERewards;