import React, { Suspense } from 'react';


const HomeComponent = React.lazy(() => import('../components/HomeComponent'));



function Home() {

  return (

  
   <Suspense fallback={<div>Loading ... </div>}>
    <HomeComponent/>
 </Suspense>
   
  )
}
export default Home