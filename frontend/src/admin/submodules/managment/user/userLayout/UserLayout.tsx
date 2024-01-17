import React, { useState } from 'react'
import UserTabNavigation from '../views/UserTabNavigation'
import CreateUserAccount from '../../modals/CreateUserAccount'
import * as RxIcons from 'react-icons/rx'
import { userDropDown } from '../../constants/usertabLink'

const UserLayout = () => {
  const [dropItems, setDropItems] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const createAccountClicked = (event: React.MouseEvent<HTMLButtonElement> ) => {
    event.preventDefault()
    setIsOpen(prevState => !prevState)
  }

    return (
      <>
        <div className='bg-[#f9fafb] bg-opacity-60 h-full flex flex-col'>
          <div className='flex justify-between items-center py-2 mt-2'>
            <div className=' px-10 font-Rubik'>
                <h1 className='font-[600] text-[20px] text-[#333] '>User Management</h1>
                <p className='text-[13px] text-[#333] text-opacity-50'>Views and manage User in your organization</p>
            </div>
            <div className='relative z-20 w-[12%] justify-end flex mr-10 cursor-pointer' onClick={() => setDropItems(prev => !prev)}>
              <div className={`py-2 px-1 flex bg-green-600 text-white rounded-[2px] ${dropItems && 'bg-[#e6e6e6]'}`} >
                <span className='font-Poppins mx-3 text-[13px]'>Action</span>
                {
                    dropItems ? <RxIcons.RxCaretUp size={20} /> : <RxIcons.RxCaretDown size={20} /> 
                } 
              </div>
              {
                dropItems && (
                  <div className='w-full bg-white flex flex-col absolute top-[40px] left-0 shadow-lg cursor-pointer py-2 z-10'>
                    {
                      userDropDown?.map((tab, index) => (
                        <>
                          <div key={index} className="px-2 py-2 font-Poppins text-[12px] hover:bg-gray-50 hover:bg-opacity-50 hover:text-[#333] hover:text-opacity-50" onClick={() =>setIsOpen(prev => !prev)} >
                            <div className='flex justify-start items-center'>
                                <span className='mr-3'>{tab.icon}</span>{tab.label}
                            </div>
                          </div>
                        </>
                    ))}
                  </div>
                )
              }
            </div>    
          </div>
          <div className='bg-[#ffffff] mx-2 my-5  shadow-sm h-full'>
            <UserTabNavigation />  
          </div>
        </div>
        <CreateUserAccount isOpen={isOpen} setIsOpen={setIsOpen} title="Create account" />
      </>
      )
}

export default UserLayout
