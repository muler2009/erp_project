import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import { sidebarItems } from '../../constants/sidebar'
import { Submenu } from '../reusable'
import * as AiIcons from 'react-icons/ai'
import * as BiIcons from 'react-icons/bi'

const SideBar = () => {
 
const [controller, setController] = useState<boolean>(true) // a temporary state for handling the collapsable menu
   
  return (
    <div className={`font-Poppins flex flex-col h-[96vh] shadow-md z-0 cursor-pointer overflow-x-hidden ${!controller ? 'w-[70px] bg-[#f9f9f9] text-white' : 'w-[25rem] bg-[#f9f9f9]'}`}>
        <div className={`relative`}>
            <div className={` ${controller ? 'bg-white flex justify-between items-center pr-5 after:content-[""] after:w-3/4 after:left-10 after:absolute after:top-[3.5rem] after:bg-gray-50 after:h-[1px] text-white' : 'block pt-5'  } `}>
                <div className={`py-2 ${!controller ? 'hidden': 'flex' }`}>
                    <div className='px-10 bg-inherit flex items-center flex-grow py-2 space-x-1 '>
                        <Link to="/erp"> 
                            <AiIcons.AiFillAppstore size={25} color='#05d876' />
                        </Link>
                        <h1 className='font-Rubik text-gray-600 text-[25px] font-semibold'>
                            Admin<span className='font-Poppins text-[20px] text-[#05d876] font-semibold'>User</span>
                        </h1>
                    </div>
                </div>
                <div className={` flex justify-center items-center ${!controller ? 'text-[25px] text-[#333]' : 'text-[#333] text-[18px] flex justify-center items-center' }`}>
                    {
                        !controller
                        ? <BiIcons.BiLinkAlt onClick={()=>setController(prev => ! prev)}/>
                        : <AiIcons.AiOutlineBars onClick={()=>setController(prev => ! prev)} />
                    }
                </div>
            </div>
        
            <div className='flex flex-col py-4 text-white pl-3 mt-10 '>
                {
                    sidebarItems?.map((sideParent, index) => {
                        return <Submenu key={index} sideParent={sideParent} controller={controller} />
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default SideBar

{/* <div className="flex flex-col">
{
    account?.map((account, index) => {
        return(
            <div className="relative px-3" key={index}>
                <Link className={`flex items-center justify-start space-x-2 py-3 px-5`} to={account.path} >
                    <div size={20}>{account.icon}</div>
                    <div className={`duration-500 font-Poppins text-sm ${!controller && 'opacity-0 translate-x-28 overflow-hidden'}`}>{account.label}</div>
                </Link>
            </div>
        )
    })
}
</div>    */}
