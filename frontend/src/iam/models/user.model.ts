import { Label } from "recharts";
import { GroupInterface } from "./group.model";

export interface ModalProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isOpen: boolean;
    title: string;
   
  }
export interface DropDowns{
  label: string;
  icon?: React.ReactElement;
  onClick?: any
}

export interface UserDashboardProps{
  label: string;
  icon?: React.ReactElement;
  abbrevation?: string; 
  dropdownItems?: DropDowns[]; 
}

export interface UserAccountInterface {
  username: string,
  accessType?: boolean,
  authentication?: boolean,
  autoPassword?: string,
  passwordType?: string,
  password?: string, 
  policy?: boolean,
  group?: GroupInterface[];
}

export interface UserAccountColumnsInterface {
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    username: string;
    password?: string;
    userType: string;
    status: string; 
    action?: unknown
}


export interface UserAccountDataInterface {
    firstName: string;
    lastName: string;
    email: string;
    phone: number ;
    username: string;
    password?: string;
    userType: string;
    isActive?: boolean;
    isStaff?: boolean;
}