import React from 'react'
import { InputWithDesc, TextInput } from '../../../../components/reusable'

const CreateGroupForm = () => {
  return (
    <form className='flex flex-col gap-5 w-2/3' onSubmit={(e) => e.preventDefault()}>
         <InputWithDesc 
            label='Group ID *'
            id= 'groupid_input'
            type='number'
            placeholder='identification'
            name='group_id'
            className='input-md font-Poppins text-[13px]'
            desc='Group Identification example: GRP001'
            // value={userAccount.firstName}
            // onChange={handleCreateAccInputChange}
        />
        <InputWithDesc 
            label='Group Name *'
            id= 'groupname_input'
            type='text'
            placeholder='Name '
            name='username'
            className='input-md font-Poppins text-[13px]'
            label_description='Enter a meaningful name to identify the group'
            desc="Manimum 100 character. Don't use special charachers '+, $,#,% ...'"
            // value={userAccount.firstName}
            // onChange={handleCreateAccInputChange}
        />
        {/* <TextInput 
            label='Description *'
            id= 'groupname_input'
            type='text'
            placeholder='Description...'
            name='group_desc'
            className='input-md font-Poppins text-[13px]'
            desc='Describe the group'
            rows={4}
            // value={userAccount.firstName}
            // onChange={handleCreateAccInputChange}
         /> */}

    </form>
    
  )
}

export default CreateGroupForm
