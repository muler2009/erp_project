import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminRoutes from '../Routes/AdminRoutes'
import Sidebar from '../components/reusable/Sidebar'
import { Header, Footer } from '../components/reusable'


const Dashboard = () => {
  return (
    <>
      <div className='bg-[#fff]'>
        <div className='flex flex-1 h-screen'>
            <Sidebar />
            <div className='w-full flex flex-col'>
                <Header />
                <Outlet />
                <AdminRoutes />
            </div>
        </div>
      </div>
      <Footer />
    </>
    
  )
}

export default Dashboard

