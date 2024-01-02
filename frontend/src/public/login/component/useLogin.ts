import React, {ChangeEvent, useState} from 'react'

interface LoginData {
    username: string
    password: string
}

const useLogin = () => {
    const [loginData, setLoginData] = useState<LoginData>({
        username: "",
        password: "" 
    })

    const handleInputLoginChanges = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        const { type, name, value,  checked } = event.target
        const inputValue = type === 'checkbox' ? checked : value

        setLoginData({
          ...loginData, 
          [name] : inputValue
        })
    }

  return {
    loginData,
    setLoginData,
    handleInputLoginChanges
  }
}

export default useLogin
