import { Auth } from "./AuthContext";
import { useContext } from "react";
const Signup = () => {
    const {setUsername, username, setPassword, password, setEmail, email,setUser} = useContext(Auth)
    const handleSignup = (e) => {
        e.preventDefault();
        if (password.length < 5 || !email.includes('@') || username.trim() === '') {
            alert('fill in the form correctly')
            return;
        }
        setUser({
            username: username,
            password: password,
            email: email,
        })
    }
  return (
      <>
          <form action="" onSubmit={handleSignup}>
              <input type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)}  required/>
              <input type="password" placeholder='*****' onChange={(e) => setPassword(e.target.value)}  required/>
              <input type="email" placeholder='jhonDoe@gmail.com' onChange={(e) => setEmail(e.target.value)} required />
              <button type='submit'>Signup</button>
          </form>
          <label>password should not be less than 5 characters</label>
      </>
  )
}

export default Signup