import React, {useState} from 'react'
import * as AiIcons from 'react-icons/ai'
import * as MdIcons from 'react-icons/md'
import * as RxIcons from 'react-icons/rx'
import { Link } from 'react-router-dom'
import { iconNotify, dropdownItems } from '../../constants/dropdown'
import Tooltip from './Tooltip'
import { Input } from '../../../components/common'

const Header = () => {

    const [drop, setDrop] = useState<boolean>(false)


  return (
    <header className='bg-[#ffffff] border-b border-[#333] border-opacity-20 sticky top-bell 0 z-10'>
        <nav className='flex justify-between items-center text-[#000] py-4'>
            <div className=''>
                <h1 className='font-Poppins text-sm pl-5'>Dashboard</h1>
            </div>
            <div className='flex-grow px-10'>
                <input 
                    type='text'
                    placeholder='Search anything here'
                    className='input-md bg-[#f2f4f6] font-Poppins text-[13px]'        
                />
            </div>
            <div className='flex space-x-4 bg-inherit '>
                <div className='flex space-x-5 pl-4 text-[20px] cursor-pointer'>
                    {
                        iconNotify?.map((icon_notify, index) => {
                            return(
                                <div className='w-10 h-10 rounded-full shadow-md flex justify-center items-center text-[16px]' key={index}>
                                    <Tooltip content={icon_notify.content}>
                                        {
                                            icon_notify?.bool ? (
                                                <Link to={icon_notify.path || ""}>{icon_notify.icons}</Link>
                                            ): (
                                                <div className=''>
                                                    {icon_notify.icons}
                                                </div>
                                            )
                                        }  
                                    </Tooltip>
                                </div>
                            )
                        })
                    }
                </div>

              

                <div className='pr-2'>
                    <div className='flex space-x-3 items-center pl-7 bg-[#f1f1f1] cursor-pointer rounded-[2px] hover:bg-[#e6e6e6]' onClick={() => setDrop(prev => !prev)}>
                        <h1 className='text-[#333] font-Poppins text-sm'>
                            User
                        </h1>
                        <div className={`py-2 px-1 ${drop && 'bg-[#e6e6e6]'}`}>
                            {
                                drop
                                ? <RxIcons.RxCaretUp size={20} /> 
                                : <RxIcons.RxCaretDown size={20} /> 
                            } 
                        </div>

                        <div className='absolute  bg-white top-full mt-1 right-2 whitespace-nowrap w-[300px] z-50'>
                            {
                                drop && (
                                    <div className='relative shadow-md text-black flex flex-col gap-1 pt-0 pb-5 border'>
                                        <div className='font-Poppins text-sm flex justify-start bg-sky-50 py-2'>USER</div>
                                        {
                                            dropdownItems?.map((dropdown, index) => {
                                                if(dropdown.label === 'Logout'){
                                                    return (
                                                        <div className='font-Poppins py-2 text-[13px] flex justify-start items-center space-x-3 px-3 hover:bg-[#f5f3f3]' key={index} >
                                                        <span className='mr-2'>{dropdown.icon}</span>
                                                        {dropdown.label}
                                                        </div>
                                                    );
                                                } else {

                                                    return(
                                                        <Link to={dropdown.path || ""} className='font-Poppins py-2 text-[13px] flex justify-start items-center space-x-3 px-3 hover:bg-[#f5f3f3]' key={index} >
                                                            <span className='mr-2'>{dropdown.icon}</span>
                                                            {dropdown.label}
                                                        </Link>
                                                    )
                                                }
                                            })
                                        }
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    </header>
  )
}

export default Header
