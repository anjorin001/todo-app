import React, { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'
import { useNavigate } from 'react-router-dom';

const LoggedUser = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate()
    useEffect(() => {
        supabase.auth.getUser().then(({ data: { user } }) => {
            setUser(user);
        })

        const { data: listener } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                setUser(session?.user ?? null)
            }
        )

        return () => {
            listener.subscription.unsubscribe();
        }
        
    }, [])

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
          console.error('Logout error:', error.message);
        } else {
          window.location.href = '/';
        }
      };
  return (
      <div>
          {user ? <div><p>{user.name}</p> <p>{user.email}</p></div> : <button onClick={() => navigate('/signup')}>SignUp</button> }
         {user &&  <button onClick={handleLogout}>logout</button>}
      </div>
  )
}

export default LoggedUser