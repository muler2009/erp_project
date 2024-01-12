import {getCoreRowModel, useReactTable, flexRender, ColumnDef} from '@tanstack/react-table'
import { useState } from 'react';
import Filters from './Filters';


interface TableProps {
  columns: any[];
  data: any[] ;
  actions?: (hooks: any) => ColumnDef<any>[]
}

const RoleTableStructuretan = ({columns, data, actions}: TableProps) => {
    const [globalFilter, setGlobalFilter] = useState([])

    const table = useReactTable({
        data,
        columns,
        state: {
          globalFilter
        },
        getCoreRowModel: getCoreRowModel(),
        onGlobalFilterChange: setGlobalFilter,
      },      
    )  
    return (
      <div className='flex flex-col gap-5'>
        {/* <Filters /> */}
        <div className=''>
          <table className={`table table-sm table-border table-striped text-left mb-5 text-[14px]`}>
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
  
  

export default RoleTableStructuretan
