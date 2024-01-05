import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminRoutes from '../Routes/AdminRoutes'
import Sidebar from '../components/Sidebar'

const Dashboard = () => {
  return (
    <div className='bg-[#fff]'>
        <Sidebar />
       <div className='w-full flex flex-col'>
            <Outlet />
            <AdminRoutes />
       </div>
    </div>
  )
}

export default Dashboard


{/* <main className='flex flex-1 h-screen'>
            <SideBar />
            <InnerContainer className='w-full flex flex-col'>
                <Topbar />
                <Outlet />
                <AdminRoutes />
            </InnerContainer>
        </main> */}