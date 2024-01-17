import React from 'react'
import RoleTableStructure from '../../../../components/common/RoleTableStructure'
import { data1, columns } from '../../../../constants/columns'

const RoleList = () => {
  return (
    <div className='role'>
        <RoleTableStructure
            columns={columns}
            data={data1}
        />

    </div>
  )
}

export default RoleList
