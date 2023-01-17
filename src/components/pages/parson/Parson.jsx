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
import { people } from '../../navLinks/people';
import FilterAltIcon from '@mui/icons-material/FilterAlt';



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
          {row.name}
        </TableCell>
        <TableCell align="right">{row.sl}</TableCell>
        <TableCell align="right">{row.interest}</TableCell>
        <TableCell align="right">{row.loan}</TableCell>
        <TableCell align="right">{row.deposit}</TableCell>
        <TableCell align="right">{row.totalAmount}</TableCell>
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
                    <TableCell align="right">Interest</TableCell>
                    <TableCell align="right">Loan</TableCell>
                    <TableCell align="right">Deposit</TableCell>
                    <TableCell align="right">Total Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
              
                <TableRow>
                        <TableCell component="th" scope="row">{row.history.date}</TableCell>
                        <TableCell align="right">{row.history.month}</TableCell>
                        <TableCell align="right">{row.history.interest}</TableCell>
                        <TableCell align="right">{row.history.loan}</TableCell>
                        <TableCell align="right">{row.history.deposit}</TableCell>
                        <TableCell align="right">{row.history.totalAmount}</TableCell>
                    </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">Interest</TableCell>
            <TableCell align="right">Loan</TableCell>
            <TableCell align="right">Deposit</TableCell>
            <TableCell align="right">Total Ammount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {people.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}