import React, { useState, useCallback } from 'react'
import GroupList from '../../groups/groupviews/GroupList'
import CreateGroups from '../../modals/CreateGroups'

const AssignUserToGroup = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleIsOpenCloseMenu = useCallback(() => {setIsOpen(prevOpen => !prevOpen)}, [isOpen])

  return (
    <>
      <div className='flex flex-col justify-center gap-3 items-start bg-gray-100 bg-opacity-45 py-2 px-3'>
        <h1 className='text-[12px] text-[#333] text-opacity-70 pt-3'>Attach user to group</h1>
        <div className='flex space-x-5'>
            <button className='bg-green-600 btn-sm px-5 text-[13px] text-white bg-opacity-70 hover:bg-green-700' onClick={() => setIsOpen(prev => !prev)}>Create Group</button>
            <button className='bg-green-600 btn-sm px-5 text-[13px] text-white bg-opacity-70 hover:bg-green-700'>Refresh</button>
        </div>
      </div>
      <div className='pt-1'>
        <GroupList />
      </div>

      <CreateGroups isOpen={isOpen} handleIsOpenCloseMenu={handleIsOpenCloseMenu} title="New Group" />
    </>
  )
}

export default AssignUserToGroup
