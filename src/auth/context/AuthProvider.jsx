import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer';
import { type } from '../types/type';

// const initialState={
//     logged: false,
// }

const init=()=>{

  const user=  JSON.parse( localStorage.getItem('user') );   
  
  return {
    logged: !!user,
    user,
  }

}

export const AuthProvider = ({children}) => {

   const [state, dispatch ]= useReducer(authReducer, {}, init);

  const login=(name='')=>{
      const user= {
        id:'123',
        name: name,
      }
    const action={
      type: type.login,
      payload: user
    }

    localStorage.setItem('user', JSON.stringify( user));

    dispatch(action);
  }

  const logout=()=>{
    localStorage.removeItem('user');
    const action={
      type: type.logout
    }

    dispatch(action)
  }

  return (
    <AuthContext.Provider value={{ 
                                 ... state,
                                  login: login,
                                  logout: logout,
     }
     }>

        {children}

    </AuthContext.Provider>
    
  )
};
