import React, { useState } from 'react'
import { UserAccountInterface } from '../../../../models/user.model'


export type ContextType = {
  newUserAccount: UserAccountInterface;
  setUserNewAccount: React.Dispatch<React.SetStateAction<UserAccountInterface>>;
  handleUserCreateInputChanges: (event: React.ChangeEvent<HTMLInputElement>) => void;
  canSave: boolean;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  disableNext: boolean;
  disablePrev: boolean;
  prevHide: boolean | undefined | any;
  nextHide: boolean | undefined | any;
  submitHide: boolean | undefined | any;
  canSubmit: boolean;
  userCreationStep: any
};

const useCreateUserAccount = (): ContextType => {

      const userCreationStep = {
        0: "UserDetail",
        1: "Permission",
        2: "Preview",
        3: "Complete"    
    }

    const [newUserAccount, setUserNewAccount] = useState<UserAccountInterface>({
        username: "",
        accessType: false,
        authentication: false,
        passwordType: "",
        autoPassword: "",
        password: "",
        policy: false     
    })

    const [page, setPage] = useState(0)

    const handleUserCreateInputChanges = (event: React.ChangeEvent<HTMLInputElement> ) => {

      const {type, name, value, checked} = event.target

      setUserNewAccount((prevData) => ({
          ...prevData,
          [name]:  type === 'checkbox' ? checked : value
      }))
    }

    const canSave = [...Object.values(setUserNewAccount)].every(Boolean)

    const disablePrev = page === 0;

    const disableNext =  (page === Object.keys(userCreationStep).length - 1)

    const prevHide = page === 0 && "remove-button"

    const nextHide = page === Object.keys(userCreationStep).length - 1 && "remove-button"

    const submitHide = page !== Object.keys(userCreationStep).length - 1 && "remove-button"

    const canSubmit = [...Object.values(newUserAccount)].every(Boolean) && page === Object.keys(userCreationStep).length - 1

  return {
    newUserAccount,
    setUserNewAccount,
    handleUserCreateInputChanges, 
    canSave,
    page,
    setPage,
    userCreationStep,
    disableNext,
    disablePrev,
    prevHide,
    nextHide,
    submitHide, canSubmit
  }
}

export default useCreateUserAccount
