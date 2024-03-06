import {getCoreRowModel, useReactTable, flexRender, ExpandedState, getFilteredRowModel, getExpandedRowModel, RowSelectionState} from '@tanstack/react-table'
import { useState } from 'react';
import Search from '../common/Search';
import useUserAccount from '../../hooks/useUserAccount';
import useCreateUserAccount from '../../submodules/managment/user/context/useCreateUserAccount';

interface TableProps {
  columns: any[];
  data: any[] ;
  
}


const GroupTable = ({columns, data}: TableProps) => {
  const [globalFilter, setGlobalFilter] = useState<string | number>('')
  const [expanded, setExpanded] = useState<ExpandedState>({})
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({}) 
  const [values, setValues] = useState([])
  const { newUserAccount } = useCreateUserAccount()
  
  const handleRowSelectionChange = (newSelectedRow: any) => {
    setRowSelection(newSelectedRow);
  };

  console.log(rowSelection)
  const table = useReactTable({
        data,
        columns,
        state: {
          globalFilter,
          expanded,
          rowSelection
          
        },
        enableRowSelection: true,
        onExpandedChange: setExpanded,
        onRowSelectionChange: setRowSelection,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getExpandedRowModel: getExpandedRowModel(),
        onGlobalFilterChange: setGlobalFilter,
      },      
    )  

    return (
      <div className='flex flex-col gap-5'>
        <Search 
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
        {/* <Filters /> */}
        <div className='group'>
          <table className={`table table-sm table-border table-striped text-left mb-5 text-[14px] `}>
            <thead>
              {table.getHeaderGroups().map((headerGroup) => {
                return (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <th id={header.id}>
                          {" "}
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </th>
                      );
                    })}
                  </tr>
                );
              })}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => {
                return (
                  <tr key={row.id} className={`${row.getIsSelected() ? 'Selected' : null}`} onClick={row.getToggleSelectedHandler()}>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td key={cell.id}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className=''>
          {/* {newUserAccount?.group?.length} of{' '} */}
          {/* {
            table.getSelectedRowModel().flatRows.map((s, index) => (
              <div className='' key={index}>
                {JSON.stringify(s.original)}
              </div>
            ))
          } */}
         <div>
          <h2>Selected Row: {newUserAccount?.group}</h2>
         
          
        </div>
           
        
          </div>
        </div>
      </div>
    );
  }
  
  

export default GroupTable
