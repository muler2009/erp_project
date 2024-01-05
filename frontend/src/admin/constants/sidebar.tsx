import React from "react";
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi';
import * as IoIcons from 'react-icons/io5';
import * as VscIcon from 'react-icons/vsc';

interface SideBar {
    label: string;
    path?: string; 
    icon: React.ReactElement;
    iconClosed?: React.ReactElement;
    iconOpened?: React.ReactElement;
    submenu?: SubMenuItems[];
}
  
interface SubMenuItems extends SideBar{
    path: string;
    label: string;
    icon: React.ReactElement;
}

export const sidebarItems: SideBar[] = [
    { 
        path: "/admin", 
        label: "Dashboard", 
        icon: <AiIcons.AiOutlineDashboard /> 
    },
    { 
        label: "Account", 
        icon: <FaIcons.FaUserCog />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,    
        submenu: [
            {
                path: 'user',
                label: 'User',
                icon: <FaIcons.FaRegUser />,
            },
            {
                path: 'company',
                label: 'Company',
                icon: <VscIcon.VscOrganization />,
            },
        ] 
    },
    { 
        label: "e-Tender", 
        icon: <AiIcons.AiFillAppstore />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,    
        submenu: [
            {
                path: 'tender_category',
                label: 'Category Manager',
                icon: <FaIcons.FaRegUser />,
            },
            {
                path: 'tender_detail',
                label: 'Open-TM ',
                icon: <BiIcons.BiFolderOpen />,
            },
            {
                path: 'bidder',
                label: 'Bidder',
                icon: <VscIcon.VscOrganization />,
            },  
        ] 
    },
   
    {
        path: 'e-hrm',
        label: 'e-HRM',
        icon: <VscIcon.VscOrganization />,

    },
]

