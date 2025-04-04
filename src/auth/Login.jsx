import React, { useEffect } from "react";
import { Auth } from "./AuthContext";
import { useContext } from "react";
const Login = () => {
   const {loginUsername, setLoginUsername, loginPassword, setLoginPassword, userAuth, setUserAuth} = useContext(Auth)
   
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUserAuth(JSON.parse(storedUser))
        }
    },[])

    const handleLogin = (e) => {
        e.preventDefault();
        if (loginUsername.trim().toLowerCase() === userAuth.username.trim().toLowerCase() && loginPassword.trim().toLowerCase() === userAuth.password.trim().toLowerCase()) {
            alert('succefully logged in')
            localStorage.setItem('isLoggIn', true)
        } else {
            alert('invalid creditendails')
        }
    }
  return (
    <>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setLoginUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="*****"
          onChange={(e) => setLoginPassword(e.target.value)}
          required
              />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
