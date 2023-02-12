import { Box } from '@mui/material'
import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Loding from './components/layout/Loading'
const Layout = React.lazy(()=> import('./components/layout/'))

const App = () => {
  return (
   <>
      <Suspense fallback={<Loding/>}>
        <Layout />
        <Box component={'div'}
        sx={{paddingLeft: '270px'}}
        >
          <Box component={'div'} sx={{padding: 3}}>
          <Outlet />
          </Box>
        </Box>
      </Suspense>
   </>
  )
}

export default App