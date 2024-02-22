import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminRoutes from '../Routes/AdminRoutes'
import Sidebar from '../components/reusable/Sidebar'
import { Header, Footer } from '../components/reusable'
import TreeView from '../components/reusable/TreeView'
import menus from '../constants/data'
import SidebarMenu from '../components/reusable/SidebarMenu'


const Dashboard = () => {
  return (
    <>
      <div className='bg-[#f3f3f3]'>
        <div className='flex flex-1 h-screen'>
            <Sidebar />
            {/* <SidebarMenu /> */}
            {/* <TreeView menu={menus} /> */}
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

