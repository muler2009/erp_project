import React from 'react'
import { Outlet } from 'react-router-dom'


export const Layout = () => {
  return (
    <React.Fragment>
        <div className="w-screen h-screen flex flex-col justify-between overflow-x-hidden">
            <Outlet />
        </div> 
    </React.Fragment>
  )
}