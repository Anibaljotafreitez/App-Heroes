import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {
const navigate=useNavigate();
const {login} = useContext(AuthContext);

const onLogin=()=>{

  login ('Anibal Jota');

  navigate('/',{
    replace:true,
  })
};

  return (
    <div className='cotainer'>
      <h1>LoginPage</h1>
      <hr />
      <button className='btn btn-danger'
              onClick={onLogin}
      >
          Login
      </button>
    </div>
  )
}
