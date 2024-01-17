import { title } from 'process';
import React from 'react'
import * as Vsc from 'react-icons/vsc'

type ModalProps = {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isOpen: boolean;
    title: string;
  }

const CreateUserAccount = ({setIsOpen, isOpen, title} : ModalProps) => {
    return isOpen ? (
        <div className="bg-black bg-opacity-5 inset-0 fixed top-0 z-50 font-Poppins">
            <div className={`w-[50%] mx-auto bg-[#fff] flex flex-col gap-4 relative top-[10%] shadow-2xl rounded-[5px]`} >
                <div className='flex justify-between items-center px-5 py-3 border-b-[1px]'>
                    <h1 className='font-Rubik text-[17px] text-black text-opacity-50 text-center px-5'>
                        {title}
                    </h1>
                    <div className="w-5 h-5 flex justify-center items-center cursor-pointer rounded-full hover:bg-red-400 hover:text-white" 
                    onClick={() => setIsOpen(prevState => !prevState)}>
                        <Vsc.VscClose size={15} />
                    </div>
                </div>
                <div className=''>
                    sdasda
                </div>
            </div>
        </div>
      ) : null;
}

export default CreateUserAccount
