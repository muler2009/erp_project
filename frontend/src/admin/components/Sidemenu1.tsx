import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

interface SideBar {
  label: string;
  path?: string;
  icon: React.ReactElement;
  iconClosed?: React.ReactElement;
  iconOpened?: React.ReactElement;
  submenu?: SubMenuItems[];
}

interface SubMenuItems {
  path?: string;
  label: string;
  icon: React.ReactElement;
}

interface SidemenuProps {
  sideParent: SideBar;
  controller: boolean;
}


const Sidemenu = (props: SidemenuProps) => {
  
    const { sideParent, controller } = props
    const [subnav, setSubnav] = useState<boolean>(false);
    const showSubnav = () => setSubnav(!subnav);
  
    return(
      <React.Fragment>
       <div className='flex flex-col text-[14px] border-t-[1px] ml-4 font-Rubik'>
          <NavLink to={sideParent.path || ""} onClick={sideParent?.submenu && showSubnav} className={`flex justify-between px-2 ${!controller && 'hover:bg-inherit hover:border-none focus:border-none'} text-[#4c586e] font-semibold hover:bg-[#EEE] hover:text-[#006] hover:scale-[1.005] focus:bg-[#eee] focus:border-r-[5px] focus:border-green-700`}>
            <div className={`flex items-center justify-center space-x-2 py-3 px-3`}>
              <div>{sideParent.icon}</div>
                <h2 className={`duration-500 font-Rubik font-normal text-sm ${!controller && 'opacity-0 translate-x-28 overflow-hidden'}`}>
                  {sideParent.label}
                </h2>
              </div>

            <div className={`flex pr-4 items-center ${!controller && 'opacity-0 translate-x-28 overflow-hidden'}`}>
              {
                sideParent.submenu && subnav
                ? sideParent.iconOpened
                : sideParent.submenu
                ? sideParent.iconClosed
                : null}
            </div>
          </NavLink>

          <div className="pl-6 ">
            {
              subnav && sideParent.submenu?.map((item, index) => {
                return(
                  <Link to={item.path || ''} key={index} className={`pl-5 flex items-center space-x-3 hover:rounded-none focus:border-r-[5px] hover:bg-[#ebecf0] focus:bg-[#eee] focus:border-green-700`}>
                    {item.icon}
                    <h1 className={`py-2 text-[14px] duration-500 font-RUbik ${!controller && 'opacity-0 translate-x-28 overflow-hidden'}`}>{item.label}</h1>
                  </Link>
                )
              }) 
            }
          </div> 
        </div>       
      </React.Fragment>
    )
}


  export default Sidemenu;
