import { RoleInterface } from "../../models/role.models";

type valueProps = string | number;

export interface InputInterface {
    id: string;
    type: string;
    name: string;
    placeholder: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: valueProps ;
    label?: string;
    className: string;
}

type Option = {
    role_name: string | number
}

export interface SelectInterface {
   title: string;
   options: Option[] 
}