import React, {createContext} from 'react'
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
