import React from 'react'
import UserTableStructure from '../../../../components/common/UserTableStructure'
import { columns, data1 } from '../../../../constants/columns'

const UserList = () => {
  return (
    <UserTableStructure 
        columns={columns}
        data={data1}
    />
  )
}

export default UserList
