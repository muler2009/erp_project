import React, {createContext, useState} from 'react'
import { UserAccountInterface } from '../../../../models/user.model'
import useCreateUserAccount, {ContextType} from './useCreateUserAccount'


type ChildrenType = {
    children?: React.ReactElement | undefined
}



// export const CreateUserAccountContext = createContext<ReturnType<typeof useCreateUserAccount> | undefined>(undefined);

const CreateUserAccountContext = createContext<ContextType | undefined>(undefined);

export const CreateUserAccountContextProvider = ({ children }: ChildrenType)  => {
    const userAccountContextValue = useCreateUserAccount();
  
    return (
      <CreateUserAccountContext.Provider value={userAccountContextValue}>
        {children}
      </CreateUserAccountContext.Provider>
    );
  };

export default CreateUserAccountContext
