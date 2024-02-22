import React from 'react'
import UserTableStructure from '../../../../components/common/UserTableStructure'
import { columns, data1 } from '../../../../constants/columns'
import { USER_COLUMNS, userData } from '../../constants/columns/userColumns'


const UserList = () => {
  return (
    <>
      <UserTableStructure 
          columns={USER_COLUMNS}
          data={userData}
      />

      
    
    </>

    
  )
}

export default UserList
