import React from 'react'
import { Input } from '../../../../components/reusable'
import { Link } from 'react-router-dom'

const UserDetail = () => {
  return (
    <div className='flex flex-col gap-5'>
        <div className='flex justify-between '>
            <div className='flex-grow flex items-end'>
                <h1>User Account</h1>
            </div>
            <div className='flex space-x-5'>
                <div className='w-8 h-8 bg-green-600 rounded-full flex justify-center items-center text-white'>
                    <h1>1</h1>
                </div>
                <div className='w-8 h-8 bg-green-600 rounded-full flex justify-center items-center text-white'>
                    <h1>2</h1>
                </div>
                <div className='w-8 h-8 bg-green-600 rounded-full flex justify-center items-center text-white'>
                    <h1>3</h1>
                </div>
            </div>
        </div>

        <div className='flex flex-col gap-3'>
            <div className='flex flex-col'>
                <h1 className='text-xl font-Rubik text-[#333] text-opacity-70 border-b py-1'>Set user details</h1>
                <div className='bg-gray-50 rounded-[2px] border-l-[5px] border-gray-600 mt-1 py-1'>
                    <p className=' mx-3 text-[13px] text-[#333] text-opacity-50 '>Add single user once with the predefined access type and permission</p>
                </div>
            </div>
            <div className='mt-4 w-1/2'>
                <Input 
                    label='Username *'
                    id= 'username_input'
                    type='text'
                    placeholder='Username'
                    name='username'
                    className='input-md font-Poppins text-[13px] '
                    
                    // value={userAccount.firstName}
                    // onChange={handleCreateAccInputChange}
                />
            </div>

        </div>

        <div className='flex flex-col'>
            <h1 className='text-[20px] font-Rubik text-[#333] text-opacity-70 border-b py-1'>Select access type</h1>
            <div className='bg-gray-50 rounded-[2px] border-l-[5px] border-gray-600 mt-1 py-3'>
                <p className=' mx-3 text-[12px] text-[#333] text-opacity-50 '>
                    Select how the user will primarily access the ERP. if you choose only programmatic access, it does NOT prevent user from accessing the console using an assumed role. Access keys and autogenertated password are provided in the last step. 
                    <Link to={"."} className='text-blue-400 text-sm'>{" "}Learn more</Link>
                </p>
            </div>
        </div>

        <div className=''>

        </div>
      
    </div>
  )
}

export default UserDetail
