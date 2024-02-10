import { title } from 'process';
import React from 'react'
import * as Vsc from 'react-icons/vsc'
import { Input, ModalBody, ModalContainer, ModalFooter, ModalHeader, ModalWrapper } from '../../../components/reusable';
import { ModalProps } from '../../../models/user.model';
import Select from '../../../components/reusable/Select';
import { useGetRolesQuery } from '../../../features/roleAPI';
import useUserAccount from '../../../hooks/useUserAccount';
import UserDetail from '../user/views/UserDetail';

const CreateNewAccount = ({setIsOpen, isOpen, title} : ModalProps) => {

    const {data, isSuccess, isLoading} = useGetRolesQuery()
    const userRoles = data || []

    const {userAccount, canSave, handleCreateAccInputChange} = useUserAccount()
    
    const closeModal = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setIsOpen(prevState => !prevState)
    }

    return isOpen ? (
        <ModalWrapper>
            <ModalContainer className={`w-[60%] mx-auto bg-[#fff] flex flex-col gap-4 relative top-[5%] shadow-2xl rounded-[5px]`} >
                <ModalHeader className='flex justify-between items-center px-5 py-3 border-b-[1px]'>
                    <h1 className='font-Rubik text-[17px] text-black text-opacity-50 text-center px-5'>
                        {title}
                    </h1>
                    <div className="w-5 h-5 flex justify-center items-center cursor-pointer rounded-full hover:bg-red-400 hover:text-white" 
                    onClick={(event) => setIsOpen(prevState => !prevState)}>
                        <Vsc.VscClose size={15} />
                    </div>
                </ModalHeader>
                <ModalBody className='flex flex-col gap-1 px-16 relative h-[60vh]'>
                    <UserDetail />
                </ModalBody>
                <ModalFooter className='px-4 py-4 flex space-x-3 border-t'>
                    <div className='mx-5 flex space-x-3'>
                        <button className={`px-5 text-slate-200 text-sm disabled:bg-gray-200`}
                                onClick={()=> alert("successfully submitted")}
                                disabled={!canSave}>Save</button>
                        <button className='px-5 text-[#333] text-sm btn-sm border-[1px] border-gray-500 border-opacity-40 disabled:bg-gray-50'
                                onClick={(event) => closeModal(event)}>
                            Cancel
                        </button>

                    </div>
                </ModalFooter>
            </ModalContainer>
        </ModalWrapper>
      ) : null;
}





export default CreateNewAccount