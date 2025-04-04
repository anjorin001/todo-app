import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
export const Auth = createContext()
const AuthContext = ({ children }) => {
    // Sigup.jsx
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [user, setUser] = useState({
        username: '',
        password: '',
        email: '',
    })
        if (user && user.username.trim().length > 0) {
            localStorage.setItem('user', JSON.stringify(user));
    }
    
    // Login.jsx
    const [loginUsername, setLoginUsername] = useState();
    const [loginPassword, setLoginPassword] = useState();
    const [userAuth, setUserAuth] = useState(null)
  return (
      <>
          <Auth.Provider value={{setUsername, username, setPassword, password, setEmail, email,setUser, user, loginUsername, setLoginUsername, loginPassword, setLoginPassword, userAuth, setUserAuth}}>
              {children}
        </Auth.Provider>
      </>
  )
} 

export default AuthContext