import React,{ useState } from 'react'
import * as Fa from 'react-icons/fa'
import { sidebarItems } from '../constants/sidebar'
import Sidemenu from './Sidemenu1'


const SideBar = () => {
 
const [controller, setController] = useState<boolean>(true) // a temporary state for handling the collapsable menu
   
  return (
    <div className="font-Poppins bg-[#fafafa] flex flex-col border-r-[1px] h-[100vh]">
        <div className={`${!controller ? 'w-20 cursor-pointer' : 'w-[19rem] cursor-pointer'}`}>
            <div className='flex space-x-4 px-5 my-10 '>
                <Fa.FaBars onClick={()=>setController(prev => ! prev)} className={`${!controller && 'text-[20px]'}`}/>
                <div className={`flex flex-col justify-center items-center  ${!controller && 'opacity-0 translate-x-28 overflow-hidden'} `}>
                    {
                        controller && (
                        <>
                            <h1 className={`font-bold text-[25px]`}>PCMS<span className="text-[#00bfdd] ml-2">ProV</span></h1>
                            {/* <p className="text-[#c4c0c0] text-xs">{user?.email}</p> */}
                        </>
                    )}
                    
                </div>
            </div>
        
            <div className='flex flex-col gap-5 py-5'>
                <h1 className="uppercase text-sm font-semibold">MAIN MENU</h1>
                <div className="">
                    {
                        sidebarItems?.map((sideParent, index) => {
                            return <Sidemenu key={index} sideParent={sideParent} controller={controller} />
                        })
                    }
                </div>
            </div>

            <div className="relative left-0 right-10 border-b-[1px] py-1 pt-12 mx-10 mb-5">
                <h1 className="text-sm font-semibold">System Configuration</h1>
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
