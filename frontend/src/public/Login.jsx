import React, {useState, useEffect} from 'react'
import { products } from './constant'

const Login = () => {
 
  return (
    <div className='w-screen h-screen flex flex-col'>
      <div className='w-full h-[80px] bg-[#013243] flex justify-start items-center '>
          <div className='font-Poppins pl-10'>
              <h1 className="font-bold text-[25px] text-white">e-PCMS <span className="text-[#02e079]">ProV</span></h1>
          </div>
      </div>
    
      <div className=''>
        {
          products?.map((product, index) => (
            <div className='' key={index}>
              <h5>{product.name}</h5>
              <h6>{product.price}</h6>
              <p>{product.description}</p>
            </div>
          ))
        }
      </div>

     

    

  </div>

  
  )
}

export default Login

  