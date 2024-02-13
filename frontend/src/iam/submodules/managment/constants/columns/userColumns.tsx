import {createColumnHelper} from '@tanstack/react-table'
import { UserAccountColumnsInterface } from '../../../../models/user.model'
import StatusChanger from '../../user/views/StatusChanger'




const userColumn = createColumnHelper<UserAccountColumnsInterface>()
export const USER_COLUMNS = [
    userColumn.accessor(col => `${col.firstName} ${col.lastName}`, {
        id: 'Full Name'
    }),
    userColumn.accessor(col => col.phone, {
        id: 'Phone number',
        cell: info => info.getValue(), 
        enableSorting: false
    }),
    userColumn.accessor(col => col.email, {
        id: 'Email Address',
        cell: info => info.getValue(), 
    }),
    userColumn.accessor(col => col.username, {
        id: 'Username',
        cell: info => info.getValue(), 
        enableSorting: false
    }),
    userColumn.accessor(col => col.status, {
        id: 'Status',
        enableSorting: false,
        cell: StatusChanger
        // cell: info => {
        //     return(
        //         <div className='w-[60%] text-center rounded-[5px]'>
        //             <p className='bg-green-50 py-1 text-black px-4'>Active</p>
        //         </div>
        //     )
        // }, 
    }),
    userColumn.accessor(col => col.userType, {
        id: 'Access Level',
        cell: info => info.getValue(), 
        enableSorting: false
    }),
]

export const userData = [
    {firstName: "Muleta", lastName: "Taye", phone: '+25191015623', email: 'tayemuleta@FaYahoo.com', username: "erp" , userType: "Admin" },
    {firstName: "Kebede", lastName: "Abebe", phone: '+25191015623', email: 'kebede@FaYahoo.com', username: "erp" , userType: "Admin" },
    {firstName: "Mancherster", lastName: "United", phone: '+25191015623', email: 'fan@manutd.com', username: "manutd" , userType: "Admin" },
]