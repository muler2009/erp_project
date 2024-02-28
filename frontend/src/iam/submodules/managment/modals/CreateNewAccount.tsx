import React from 'react'
import * as Vsc from 'react-icons/vsc'
import { Input, ModalBody, ModalContainer, ModalFooter, ModalHeader, ModalWrapper } from '../../../components/reusable';
import { ModalProps } from '../../../models/user.model';
import { useGetRolesQuery } from '../../../features/roleAPI';
import UserDetail from '../user/views/UserDetail';
import { CreateUserAccountContextProvider } from '../user/context/CreateUserAccountContext';
import * as GrIcons from 'react-icons/gr'
import useCreateUserAccount from '../user/context/useCreateUserAccount';
import { LiaStackExchange } from "react-icons/lia";
import { CompleteUserCreation, Permission, UserCreationSummary } from '../user/views';
import * as MdIcons from "react-icons/md";

interface UserContainerInterface {
    [key: number]: React.ReactNode;
  }


const CreateNewAccount = ({setIsOpen, isOpen, title} : ModalProps) => {

    const {data, isSuccess, isLoading} = useGetRolesQuery()
    const userRoles = data || []

    // const {userAccount, canSave, handleCreateAccInputChange} = useUserAccount()

    const {prevHide, submitHide, nextHide, disableNext, disablePrev, setPage, page, userCreationStep} = useCreateUserAccount()


    const handlePrev = () => setPage(prev => prev - 1)
   
    const handleNext = () => setPage(prev => prev + 1)
         
    const display: UserContainerInterface = {
        0: <UserDetail />,
        1: <Permission />,
        2: <UserCreationSummary />,
        3: <CompleteUserCreation />  
    }

   


    return isOpen ? (
        <CreateUserAccountContextProvider>
            <form onSubmit={(event) => event.preventDefault()}>
                <ModalWrapper>
                    <ModalContainer className={`w-[65%] mx-auto bg-[#fff] flex flex-col gap-4 relative top-[5%] shadow-2xl rounded-[5px]`} >
                        <ModalHeader className='flex justify-between items-center px-5 py-3 border-b-[1px] bg-[#efefef] bg-opacity-50 font-Poppins'>
                            <h1 className='font-Rubik text-[17px] text-black text-opacity-50 text-center px-5'>
                                {title}
                            </h1>
                            <div className="w-5 h-5 flex justify-center items-center cursor-pointer rounded-full hover:bg-red-400 hover:text-white" 
                            onClick={(event) => setIsOpen(prevState => !prevState)}>
                                <Vsc.VscClose size={15} />
                            </div>
                        </ModalHeader>
                        <ModalBody className='flex flex-col relative h-[65vh] overflow-y-scroll'>
                            {/* <StepperBar /> */}
                            <div className='flex justify-between px-16 border-b pb-4 border-opacity-80 border-gray-100 sticky top-0 bg-white '>
                                {
                                    Object.values(userCreationStep)?.map((title, index) => {
                                        const isActive = index === page
                                        return(
                                            <div key={index} className={`flex space-x-3 py-3 cursor-pointer relative  ${index < page && "complete"} ${Object.keys(userCreationStep).length - 1 !== index && 'after:content-[""] after:absolute after:w-[150px] after:bg-black after:top-[50%] after:left-[150px] after:border after:border-dashed'} ${isActive && 'after:content-[""] after:absolute after:w-[150px] after:bg-black after:top-[50%] after:left-[150px] after:border after:border-solid'}`}>
                                                <div className={`border rounded-full flex justify-center items-center w-12 h-12 ${isActive ? 'text-white transition duration-700 ease-in-out bg-green-500' : 'bg-white shadow-lg'}`} onClick={() => setPage(index)}>
                                                    {
                                                        isActive ?  <LiaStackExchange /> : <MdIcons.MdModeEdit />
                                                    
                                                    } 
                                                </div>
                                                <div className={`flex flex-col items-start`} >  
                                                    <h1 className='text-sm uppercase'>Step - <span>{index + 1}</span></h1>
                                                    <h1 className='text-sm text-green-600'>{userCreationStep[index]}</h1>
                                                                
                                                    {/* <h5 className='text-center text-[13px] px-5 font-Poppins' onClick={() => setPage(index)}>{userCreationStep[index]}</h5> */}
                                                </div>          
                                            </div>        
                                        )
                                    })
                                }
                            </div>                        
                            <div className='flex flex-col'>
                                {display[page]}
                            </div>
                        </ModalBody>
                        <ModalFooter className='px-4 py-4 flex justify-end space-x-3 border-t'>
                            <div className="flex justify-end space-x-5 pr-5 ">
                                <button className={`btn-sm text-[12px] px-3 py-1 border text-[#333] hover:bg-[#005bb3] hover:text-white ${prevHide}`} onClick={handlePrev} disabled={disablePrev}>
                                    <div className='flex justify-start items-center'>
                                        <GrIcons.GrFormPrevious  size={15}/>
                                        <p className='font-Poppins text-[14px]'>Prev</p>
                                    </div>
                                </button>

                                <button  className={`btn-sm text-[12px] px-3 py-1 border bg-green-600 text-white hover:bg-[#005bb3] hover:text-white  ${nextHide}`} onClick={handleNext} disabled={disableNext}>
                                    <div className='flex justify-start items-center hover:text-white'>
                                        <p className='font-Poppins text-[14px]'>Next: <span className='font-bold text-sm'>{userCreationStep[page + 1]}</span></p>
                                        <GrIcons.GrFormNext size={15} />
                                    </div>
                                </button>

                                <button className={`btn-sm stext-[12px] px-4 bg-[#005bb3] text-white ${submitHide}`}>Cretae user</button>
                            </div>
                        </ModalFooter>
                    </ModalContainer>
                </ModalWrapper>
            </form>
        </CreateUserAccountContextProvider>
      ) : null;
}

export default CreateNewAccount