import React, { Suspense } from 'react'
const Layout = React.lazy(()=> import('./components/layout/'))

const App = () => {
  return (
   <>
      <Suspense fallback={<div>Loading...</div>}>
        <Layout />
      </Suspense>
   </>
  )
}

export default App