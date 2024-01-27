import React, { useState } from 'react'
import UserTabNavigation from '../views/UserTabNavigation'
import CreateUserAccount from '../../modals/CreateUserAccount'
import * as RxIcons from 'react-icons/rx'
import { userDropDown, userManagemenu } from '../../constants/usertabLink'
import * as IoIcons  from "react-icons/io5";

const UserLayout = () => {
 
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [openModal, setOpenModal] = useState<boolean>(false)

  const createAccountClicked = (event: React.MouseEvent<HTMLButtonElement> ) => {
    event.preventDefault()
    setIsOpen(prevState => !prevState)
  }

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index: any) => {
    if (openDropdown === index) {
      setIsOpen(prev => !prev)
      setOpenDropdown(null);
    } else {
      setOpenDropdown(index);
    }
  };

  return (
    <>
      <div className='bg-[#f9fafb] bg-opacity-60 h-full flex flex-col'>
        <div className='flex justify-between'>
          <div className='px-10 font-Rubik mt-3 w-1/2'>
              <h1 className='font-[600] text-[20px] text-[#333] '>User Management</h1>
              <p className='text-[13px] text-[#333] text-opacity-50'>Views and manage User in your organization</p>
          </div>
          <div className='mr-10'>
            <div className='relative z-20 cursor-pointer'>
                <div className={`flex justify-start items-center rounded-[2px] pt-2`} >
                  {
                    userManagemenu.map((menuItem, index) => (
                      <div key={index} className='relative z-20 cursor-pointer' onClick={() => toggleDropdown(index)}>
                        <span className={`flex justify-start items-center font-Poppins px-3 py-1 text-[14px] text-gray-500 ${openDropdown === index && ' bg-[#e6e6e6] border-b-[2px] border-green-600'}`}>
                          <p className={`pr-1 ${openDropdown === index && 'text-black'}`}>{menuItem.label}</p>
                          {
                            openDropdown === index ? <IoIcons.IoCaretBackSharp size={13} className='' /> : <IoIcons.IoCaretForwardSharp size={13} /> 
                          }
                        </span>
                      
                        {
                          openDropdown === index && menuItem.dropdownItems && menuItem.dropdownItems.length > 0 && (
                            <div className='w-[200px] bg-white flex flex-col absolute top-[30px] -right-0 shadow-lg cursor-pointer pb-2 pt-1 z-10 border'>
                              {
                                menuItem.dropdownItems.map((dropdownItem, dropdownIndex) => (
                                  <>
                                    <div key={dropdownIndex}  className="px-2 py-2 font-Poppins text-[12px] hover:bg-gray-300 hover:bg-opacity-60"  onClick={dropdownItem.onClick} >
                                      <div className='flex justify-start items-center'>
                                          <div className='mr-3 flex items-center'>
                                            <span className='mr-1'>{dropdownItem.icon}</span>
                                            {dropdownItem.label}
                                          </div>
                                      </div>
                                    </div>
                                  </>
                                ))
                              }
                            </div>
                        )}
                      </div>
                  ))}
              </div>
            </div>
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

{/* <div className='relative z-20 mr-10 cursor-pointer' onClick={() => setDropItems(prev => !prev)}>
<div className={`flex justify-start items-center rounded-[2px] pt-2`} >
  <span className={`flex justify-start items-center font-Poppins px-3 py-1 text-[14px] text-gray-500 ${dropItems && 'bg-[#e6e6e6] border-b-[2px] border-green-600'}`}>
    <p className='pr-1'>Actions</p>
  {
      dropItems ? <IoIcons.IoCaretBackSharp size={15} className='' /> : <IoIcons.IoCaretForwardSharp size={15} /> 
  } 
  </span>
</div>
{
  dropItems && (
    <div className='w-[30%] bg-white flex flex-col absolute top-[40px] left-0 shadow-lg cursor-pointer pb-2 pt-1 z-10'>
      {
        userDropDown?.map((tab, index) => (
          <>
            <div key={index} className="px-2 py-2 font-Poppins text-[12px] hover:bg-gray-300 hover:bg-opacity-60" onClick={() =>setIsOpen(prev => !prev)} >
              <div className='flex justify-start items-center'>
                  <span className='mr-3'>{tab.icon}</span>{tab.label}
              </div>
            </div>
          </>
      ))}
    </div>
  )
}
</div> */}