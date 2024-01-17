
import { UserDropDownDef, UserTabNavigationDef } from "../../../models/management.model";
import { FaUber } from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as GrIcons from "react-icons/gr";
import UserList from "../user/views/UserList";

export const userTabLink: UserTabNavigationDef[] = [
    { 
      label: "Available Users",
      tabContent: <UserList />,
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

export const userDropDown: UserDropDownDef[] = [
  {
    label: "Create User",
    icon: <IoIcons.IoIosAdd size={18}/>
  },
  {
    label: "Create Group",
    icon: <IoIcons.IoIosAdd size={18}/>
  },
  {
    label: "Action",
    icon: <GrIcons.GrActions size={15}/>
  }
]
