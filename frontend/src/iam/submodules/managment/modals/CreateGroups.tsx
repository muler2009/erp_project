import React from 'react';
import * as Vsc from 'react-icons/vsc';
import { ModalBody, ModalContainer, ModalFooter, ModalHeader, ModalWrapper, Input, InputWithDesc } from '../../../components/reusable'
import CreateGroupForm from '../groups/groupviews/CreateGroupForm';

type CreateGroupsProps = {
    isOpen: boolean,
    title: string,
    handleIsOpenCloseMenu: () => void
}

const CreateGroups = ({isOpen,title, handleIsOpenCloseMenu}: CreateGroupsProps) => {
  return (
    isOpen ? (
        <ModalWrapper>
            <ModalContainer className={`w-[40%] mx-auto bg-[#fff] flex flex-col relative top-[5%] shadow-2xl rounded-[5px]`}>
                <ModalHeader className='flex justify-between items-center px-5 py-3 border-b-[1px]'>
                    <h1 className='font-Rubik text-[17px] text-black text-opacity-50 text-center px-5'>
                        {title}
                    </h1>
                    <div className="w-5 h-5 flex justify-center items-center cursor-pointer rounded-full hover:bg-red-400 hover:text-white" onClick={handleIsOpenCloseMenu} > 
                        <Vsc.VscClose size={15} />
                    </div>
                </ModalHeader>
                <ModalBody className='px-10 pb-5 pt-4 bg-gray-50 bg-opacity-50'>
                    <CreateGroupForm />           
                </ModalBody>
                <ModalFooter className='flex justify-start px-10 pt-3 pb-5 border-t space-x-3'>
                    <button className='bg-opacity-70 bg-green-500 hover:bg-green-600 px-5 py-1 btn-sm text-white'>Save</button>
                    <button className='bg-opacity-70 bg-red-500 hover:bg-red-600 px-5 py-1 btn-sm text-white'>Clear</button>
                </ModalFooter>
            </ModalContainer>

        </ModalWrapper>

    ): null
      
    
  )
}

export default CreateGroups
