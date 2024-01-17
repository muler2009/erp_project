import React from 'react'
import * as MdIcons from 'react-icons/md'
import * as IoIcons from 'react-icons/io'

interface TableInstanceProps {
    table: any
}

const PaginationController = ({ table }: TableInstanceProps) => {
  return (
    <>
      <div className="flex justify-center items-center gap-2">
        {/* <div className="flex items-center gap-1 text-[13px]">
            <p className='pr-2'>Jump to</p>
            <input
              type="number"
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={e => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0
                table.setPageIndex(page)
              }}
              className="border border-gray-200 py-1 pr-1 pl-3 rounded-none w-14 focus:outline-none"
            />
        </div> */}
        <div className='flex space-x-3'>
          <div className='flex items-center gap-1'>
            <button className={`px-2 ${table.getCanPreviousPage() === true ? 'btn-sm rounded-none bg-green-600 text-white' : 'btn btn-sm rounded-none bg-gray-100'}`} 
                    onClick={() => table.setPageIndex(0)}>
                <MdIcons.MdKeyboardDoubleArrowLeft />
            </button>

            <button className={`px-2 ${table.getCanPreviousPage() === true ? 'btn-sm rounded-none bg-green-600 text-white' : 'btn btn-sm rounded-none bg-gray-100'}`} 
                onClick={() => table.previousPage()} >
                <IoIcons.IoIosArrowBack />
            </button>
          </div>
          <div  className="flex items-center gap-1 text-[13px]">
            <p>Page</p>
             
                {table.getState().pagination.pageIndex + 1} of {' '}
                {table.getPageCount()}
              
          </div>
          </div>
          <div className='flex items-center gap-1'>
            <button className={`px-2 ${table.getCanNextPage() === true ? 'btn-sm rounded-none bg-green-600 text-white' : 'btn btn-sm rounded-none bg-gray-100'}`} 
                onClick={() => table.nextPage()}>
                <IoIcons.IoIosArrowForward />
            </button>

            <button className={`px-2 ${table.getCanNextPage() === true ? 'btn-sm rounded-none bg-green-600 text-white' : 'btn btn-sm rounded-none bg-gray-100'}`} 
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
                <MdIcons.MdKeyboardDoubleArrowRight />
            </button>
          </div>
      </div>
     
    </>
     
    
  )
}

export default PaginationController

{/* */}

       
        
      