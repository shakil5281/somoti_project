import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { loan } from '../components/navLinks/loan';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import { useSnackbar } from 'notistack'
import { useNavigate } from 'react-router-dom'




function Row(props) {

  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.user.name}
        </TableCell>
        <TableCell align="center">{row.user.sl}</TableCell>
        <TableCell align="center">{row.date}</TableCell>
        <TableCell align="center">00</TableCell>
        <TableCell align="center">00</TableCell>
        <TableCell align="center">{row.amount}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box component={'div'} sx={{ margin: 1 }} className='bg-blue-100 p-2 text-blue-800'>
              <Box component={'div'} className='flex justify-between items-center'>
                <Typography variant="h6" gutterBottom component="div">
                  History
                </Typography>
                <IconButton>
                  <FilterAltIcon />
                </IconButton>
              </Box>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell align="right">Month</TableCell>
                    <TableCell align="right">Payment</TableCell>
                    <TableCell align="right">Less</TableCell>
                    <TableCell align="right">Loan</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* {
                    Array.from(row.history).map((item, i) => (
                      <TableRow key={i.toString()}>
                        <TableCell component="th" scope="row">{item.date}</TableCell>
                        <TableCell align="right">{item.month}</TableCell>
                        <TableCell align="right">{item.payment}</TableCell>
                        <TableCell align="right">{item.less}</TableCell>
                        <TableCell align="right">{item.loan}</TableCell>
                      </TableRow>
                    ))
                  } */}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


export default function Loan() {
  const navigate = useNavigate()
  
  const { enqueueSnackbar } = useSnackbar();
  const [inputvalue, setinputvalue] = React.useState('')
  const [find, setfind] = React.useState('')
  const [loanList, setloanList] = React.useState({})


  const LoanList = async() =>{
    try{
      const data = await axios.get('/UserLoanList');
      setloanList(data.data.data)
    }catch(err){
      console.log(err)
    }
  }

  React.useEffect(()=>{
    LoanList()
  },[])


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setinputvalue(values => ({...values, [name]: value}))
  }


 const  LoaninputSubmitList =async() =>{
  try{
    const data = await axios.post('userloan', inputvalue)
    enqueueSnackbar('Loan Success', {variant: 'success'} );
    setinputvalue('')
    navigate(0)
  }catch(err){
    enqueueSnackbar(err.response.data.message, {variant: 'error'} );
    navigate('')
  }
 }


  const hendleSubmit = (event) =>{
    event.preventDefault()
    LoaninputSubmitList()
  }




const UserDataSearch = async() =>{
  try{
    
    const data = await axios.post('/UserLoanName',{id: find})
    setinputvalue(data.data.data)


  }catch(err){
    console.log('err')
    enqueueSnackbar(err.response.data.message, {variant: 'error'} );
  }
}

const hendleSearch = (e) =>{
  e.preventDefault();
  UserDataSearch()
}
  

  return (
    <>
      <Box component={'div'} className='my-8'>
        <Paper variant="outlined"
          sx={{ padding: 3 }}
        >
          <Box>
            <Typography variant='h5' sx={{ padding: 1 }}>Loan</Typography>
            <Box component={'form'} onSubmit= {hendleSubmit}>
              <TextField
              onChange={(e)=>setfind(e.target.value)}
              variant='outlined' size='small' sx={{ width: 80 }} label='id' />
              <Button onClick={hendleSearch}><SearchIcon /></Button>
              <TextField
                id="outlined-name"
                onChange={handleChange}
               value={inputvalue._id}
               name= '_id'
               focused 
              variant='standard' size='medium' sx={{ width: 200, margin: '0 10px', display: 'none' }} label='_id' />
              <TextField
                id="outlined-name"
                onChange={handleChange}
               value={inputvalue.name}
               name= 'name'
               focused 
              variant='standard' size='medium' sx={{ width: 200, margin: '0 10px' }} label='Name' />
              <TextField
              id="outlined-name"
              onChange={handleChange}
               value={inputvalue.designation}
               name= 'designation'
               focused 
              variant='standard' size='medium' sx={{ width: 200, margin: '0 10px' }} label='Designation' />
              <TextField 
              id="outlined-name"
              onChange={handleChange}
              name= 'amount'
              variant='standard' size='medium' sx={{ width: 200, margin: '0 10px' }} label='Amount' />
              <Button variant='contained' color='secondary' type='submit'>Submit</Button>
            </Box>
          </Box>
        </Paper>
      </Box>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Name</TableCell>
              <TableCell align="center">Id</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Total Payment</TableCell>
              <TableCell align="center">Total Less</TableCell>
              <TableCell align="center">Total Loan</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.from(loanList).map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}