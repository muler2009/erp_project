
import { UserDropDownDef, UserTabNavigationDef } from "../../../models/management.model";
import * as RiIcons from "react-icons/ri";
import * as IoIcons from "react-icons/io";
import * as GrIcons from "react-icons/gr";
import UserList from "../user/views/UserList";
import { data } from "../../../constants/columns";
import { UserDashboardProps } from "../../../models/user.model";

export const userTabLink: UserTabNavigationDef[] = [
    { 
      label: "Available Users",
      tabContent: <UserList />,
      totalValues: data.length,
      total: true
    },
    { 
      tabContent: <h1>Test</h1>,
      label: "Groups",
      total: true
    },
    { 
      tabContent: <h1>Test</h1>,
      label: "Teams",
      total: true
    },
] 

export const userManagemenu: UserDashboardProps[] = [
  {
    label: "Actions",
    icon: <IoIcons.IoIosAdd size={18}/>,
    dropdownItems: [
      { label: "New identity",  onClick: () => console.log("Test"), icon: <RiIcons.RiUserAddFill size={15}/> },
      { label: "Action 2",  onClick: () => console.log("Test")  },
      // Add more dropdown items as needed
    ]
  },
  {
    label: "Notifications",
    icon: <IoIcons.IoIosAdd size={18}/>,
    // dropdownItems: [
    //   { label: "Notification 1", onClick: () => console.log("Notification 1 clicked") },
    //   { label: "Notification 2", onClick: () => console.log("Notification 2 clicked") },
    //   // Add more dropdown items as needed
    // ]
  },
];


export const userDropDown: UserDropDownDef[] = [
  {
    label: "New user",
    icon: <IoIcons.IoIosAdd size={18}/>
  },
  {
    label: "New Group",
    icon: <IoIcons.IoIosAdd size={18}/>
  },
  {
    label: "Action",
    icon: <GrIcons.GrActions size={15}/>
  }
]
