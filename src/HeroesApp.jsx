import React from 'react'
import { AppRauters } from './routers/AppRauters'
import { AuthProvider } from './auth/context/AuthProvider'

export const HeroesApp = () => {


  return (
    <AuthProvider>

       <AppRauters/>
     
    </AuthProvider>
  
  )
}
