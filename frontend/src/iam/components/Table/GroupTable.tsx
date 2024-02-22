import {getCoreRowModel, useReactTable, flexRender, ExpandedState, ColumnDef, getFilteredRowModel, getExpandedRowModel} from '@tanstack/react-table'
import { useState } from 'react';
import Search from '../common/Search';
import { useGetSubGroupsQuery } from '../../features/groupsAPI';


interface TableProps {
  columns: any[];
  data: any[] ;
  
}

const GroupTable = ({columns, data}: TableProps) => {
  const [globalFilter, setGlobalFilter] = useState<string | number>('')
  const [expanded, setExpanded] = useState<ExpandedState>({})

  const {data: Data} = useGetSubGroupsQuery()

  const subRows = [
    {abbreviation: "somethinf", name: "kememedsdfsa"},
    {abbreviation: "somethinf", name: "kememedsdfsa"}
  ]
  

    const table = useReactTable({
        data,
        columns,
        state: {
          globalFilter,
          expanded
        },
        onExpandedChange: setExpanded,
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
        </div>
      </div>
    );
  }
  
  

export default GroupTable
