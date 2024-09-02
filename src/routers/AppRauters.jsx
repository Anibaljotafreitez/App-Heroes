import React from 'react'
import { Route, Routes } from 'react-router'
import { LoginPage } from '../auth'
import { HeroesRauter } from '../heroes/routers/HeroesRauter';
import { PrivateRauter } from './PrivateRauter';
import { PublicRouter } from './PublicRouter';


export const AppRauters = () => {
  return (
    <>
    
    <Routes>
       
    <Route path='/login' element={
      <PublicRouter>
        <LoginPage/>
      </PublicRouter>
      }/> 

    <Route path='/*' element={
      <PrivateRauter>
        <HeroesRauter/>
      </PrivateRauter>
    }/>

    {/* // <Route path='/*' element={<HeroesRauter/>}/> */}
     
    </Routes>
    
    </>
  )
}

  