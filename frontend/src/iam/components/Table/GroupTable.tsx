import {getCoreRowModel, useReactTable, flexRender, ExpandedState, ColumnDef, getFilteredRowModel, getExpandedRowModel, RowSelectionState, RowSelection} from '@tanstack/react-table'
import { useState } from 'react';
import Search from '../common/Search';
import { useGetSubGroupsQuery } from '../../features/groupsAPI';
import useCreateUserAccount from '../../submodules/managment/user/context/useCreateUserAccount';


interface TableProps {
  columns: any[];
  data: any[] ;
  
}

const GroupTable = ({columns, data}: TableProps) => {
  const [globalFilter, setGlobalFilter] = useState<string | number>('')
  const [expanded, setExpanded] = useState<ExpandedState>({})
  const [selectedRow, setSelectedRow] = useState<RowSelectionState>({})
  const { newUserAccount, setUserNewAccount } = useCreateUserAccount()

  const {data: Data} = useGetSubGroupsQuery()

  
  const handlesetSelectedRow = (selectedRows: any[]) => {
    // Update newUserAccount.group based on selectedRows
    const selectedGroups = selectedRows.map((row) => {
      const value = row.original;
      return {
        custom_group_abbreviation: value.custom_group_abbreviation,
        custom_group_name: value.custom_group_name
      };
    });

    setUserNewAccount((prevUserAccount) => ({
      ...prevUserAccount,
      group: selectedGroups
    }));
  };
  

    const table = useReactTable({
        data,
        columns,
        state: {
          globalFilter,
          expanded,
          rowSelection: selectedRow,
        },
        enableRowSelection: true,
        onExpandedChange: setExpanded,
        onRowSelectionChange: setSelectedRow,
        getSubRows: (row) => row.subRows,
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
                  <tr key={row.id}>
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
          {newUserAccount?.group?.length} of{' '}
          {/* {
            table.getSelectedRowModel().flatRows.map((s, index) => (
              <div className='' key={index}>
                {JSON.stringify(s.original)}
              </div>
            ))
          } */}

          {
            newUserAccount?.group?.map((t, index) => (
              <div className='' key={index}>
                <li>{t.custom_group_abbreviation}</li>
              </div>
            ))
          }
        
          </div>
        </div>
      </div>
    );
  }
  
  

export default GroupTable
