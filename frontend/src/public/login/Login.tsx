import React from 'react'
import Header from './component/Header'
import LoginInputs from './component/LoginInputs'

const Login = () => {
  return (
    <div className='w-screen h-screen flex flex-col'>
      <Header />
      <LoginInputs />
    </div>
  )
}

export default Login
