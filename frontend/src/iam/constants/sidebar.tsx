import React from "react";
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi';
import * as IoIcons from 'react-icons/io5';
import * as VscIcon from 'react-icons/vsc';

export interface SideBar {
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
        path: "/iam", 
        label: "Dashboard", 
        icon: <AiIcons.AiOutlineDashboard /> 
    },
    { 
        path: '.',
        label: "IDAM Module", 
        icon: <FaIcons.FaUserCog />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,    
        submenu: [
            {
                path: 'identity',
                label: 'Identity',
                icon: <FaIcons.FaRegUser />,
            },
            {
                path: 'role_management',
                label: 'Role Management',
                icon: <VscIcon.VscOrganization />,
            },
            {
                path: 'perm_management',
                label: 'Permission System',
                icon: <VscIcon.VscOrganization />,
            },
        ] 
    },
    { 
        path: "tasks", 
        label: "Tasks", 
        icon: <FaIcons.FaUserCog /> 
    },
    { 
        path: "reports", 
        label: "Report", 
        icon: <FaIcons.FaUserCog /> 
    },
    {
        path: "config", 
        label: 'System Configuration',
        icon: <VscIcon.VscOrganization />,
       

    },
]

