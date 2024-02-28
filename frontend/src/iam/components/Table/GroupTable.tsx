import {getCoreRowModel, useReactTable, flexRender, ExpandedState, getFilteredRowModel, getExpandedRowModel, RowSelectionState} from '@tanstack/react-table'
import { useState } from 'react';
import Search from '../common/Search';

interface TableProps {
  columns: any[];
  data: any[] ;
  
}

interface RowData {
  custom_group_abbreviation: string,
  custom_group_name: string,
 
}

const GroupTable = ({columns, data}: TableProps) => {
  const [globalFilter, setGlobalFilter] = useState<string | number>('')
  const [expanded, setExpanded] = useState<ExpandedState>({})
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({}) 
  const [selectedRow, setSelectedRow] = useState<RowData | null>(null);
  
  const handleRowSelectionChange = (newSelectedRow: any) => {
    setRowSelection(newSelectedRow);
  };


  console.log(selectedRow)


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
        onRowSelectionChange: handleRowSelectionChange,
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
          {/* {newUserAccount?.group?.length} of{' '} */}
          {
            table.getSelectedRowModel().flatRows.map((s, index) => (
              <div className='' key={index}>
                {JSON.stringify(s.original)}
              </div>
            ))
          }
           {rowSelection && (
        <div>
          <h2>Selected Row</h2>
          <p>ID: {rowSelection.custom_group_abbreviation}</p>
          <p>Name: {rowSelection.custom_group_name}</p>
          {/* Render other properties of the selected row */}
        </div>
      )}
        
          </div>
        </div>
      </div>
    );
  }
  
  

export default GroupTable
