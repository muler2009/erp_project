import React from 'react'
import { Column } from 'react-table'
import RoleTableStructure from '../../../../components/common/RoleTableStructure'
import RoleTableStructuretan from '../../../../components/common/RoleTableStructuretan'
import { ROLE_COLUMN, columns, data, data1 } from '../../../../constants/columns'
import { ColumnDef } from '@tanstack/react-table'


const RoleLayout = () => {

  // const actions = (hooks: any) => {
  //   hooks.visibleColumns.push((columns: ColumnDef<any>[]) => [
  //     ...columns,
  //     {
  //       id: 'actions',
  //       Header: 'Actions',
  //       cell: () => {
  //         return(
  //           <div className=''>
  //             test
  //           </div>
  //         )
  //       }
  //     }
  //   ]);
  // }; 

  return (
    <div className='bg-[#f9fafb] bg-opacity-60 h-full flex flex-col'>
      <div className='py-2 mt-2 px-10 font-Poppins border-b'>
            <h1 className='font-[700] text-[20px] text-[#333] '>Role Management</h1>
            <p className='text-[13px] text-[#333] text-opacity-50'>Views and manage role in your organization</p>
      </div>
      <div className='bg-[#ffffff] px-2 mx-4 my-5 border border-gray-100 shadow-sm h-full'>
        <div className='strucutre'>
          <RoleTableStructuretan
            columns={columns}
            data={data1}
            
          />

        </div>
         {/* <RoleTableStructure />
        tableing  */}
      </div>
    </div>
  )
}

export default RoleLayout
