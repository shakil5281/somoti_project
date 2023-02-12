import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import { Box, Button, Paper, TextField, Typography } from '@mui/material'


const Account = () => {
  const navigate = useNavigate()
  const [inputs, setInputs] = React.useState({})

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const { enqueueSnackbar } = useSnackbar();


  const createuser = async() =>{
    try{
      const {data} = await axios.post('/api/v1/person', inputs)
      enqueueSnackbar(data.message, {variant: 'success'} );
      setInputs('')
      console.log(data)
      
    }catch(err){
      enqueueSnackbar(err.response.data.error, {variant: 'error'} );
      navigate('')
      console.log(err.response.data.error)
    }
  }

  const hendleSubmit = (e) =>{
    e.preventDefault();
    createuser()
    
  }

  

  
  return (
    <>
      <Box component={'div'} className='mx-auto w-2/3 my-8'>
        <Paper className='p-8'>
          <Typography variant='h5'>
            Create a New Account
          </Typography>
            <Box onSubmit={(e)=>hendleSubmit(e)} component={'form'}>
                <TextField 
                
                name="sl" 
                value={inputs.sl || ''} 
                onChange={handleChange}
                variant="standard" type={'number'}  label='id'  sx={{margin: 2 ,width: '40%'}}/>
                <TextField 
                
                name="name" 
                value={inputs.name || ""} 
                onChange={handleChange}
                variant="standard" type={'text'}  label='Full Name'  sx={{margin: 2 ,width: '40%'}}/>
                <TextField 
                
                name="phone" 
                value={inputs.phone || ""} 
                onChange={handleChange}
                variant="standard" type={'text'}  label='Phone'  sx={{margin: 2 ,width: '40%'}}/>
                <TextField 
                
                name="designation" 
                value={inputs.designation || ""} 
                onChange={handleChange}
                variant="standard" type={'text'}  label='Designation'  sx={{margin: 2 ,width: '40%'}}/>
                <TextField 
                
                name="share" 
                value={inputs.share || ""} 
                onChange={handleChange}
                variant="standard" type={'number'}  label='Share'  sx={{margin: 2, width: '40%'}}  />
                <Button sx={{margin: 2, width: '40%', padding: 2}} variant='contained' type='submit'>Add Account</Button>
            </Box>
        </Paper>
      </Box>
    </>
  )
}

export default Account