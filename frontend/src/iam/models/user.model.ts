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

export type UserGroup = {
  custom_group_abbreviation: string,
  custom_group_name: string,
}

export interface UserAccountInterface {
  username: string,
  email: string,
  accessType?: boolean,
  authentication?: boolean,
  autoPassword?: string,
  passwordType?: string,
  password?: string, 
  policy?: boolean,
  group?: string | undefined
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

export interface ContextType {
  newUserAccount: UserAccountInterface;
  setUserNewAccount: React.Dispatch<React.SetStateAction<UserAccountInterface>>
  handleUserCreateInputChanges: (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
  canSave: boolean;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  userCreationStep: { [key: number]: string };
  disableNext: boolean;
  disablePrev: boolean;
  prevHide?: string; // Make it nullable
  nextHide: string;
  submitHide: string;
  canSubmit: boolean;
}