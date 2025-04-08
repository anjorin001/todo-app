import React, { useState } from 'react'
import { SupabaseClient } from '@supabase/supabase-js'
import { supabase } from './supabaseClient';
const Auth = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    // Email login ---
    const handleEmailLogin = async (e) => {
        e.preventDefault();
        setLoading(true)
        const { error } = await supabase.auth.signInWithOtp({ email })

        setLoading(false);
        if (error) {
            setMessage(`Error: ${error.message}`)
        } else {
            setMessage('Check your email for the login link')
        }
    };
    // Google login
    const handeGoogleLogin = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: 'http://localhost:5173/my-day'
            },
        });

        if (error) console.log('OAuth error:', error.message)
    };

  return (
      <div>
          <h2>Sign In</h2>
          <form action="" onSubmit={handleEmailLogin}>
              <input type="email"
                  placeholder='jhoneDoe@gmail.com'
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
              />
              <button>{loading ? 'Sending...' : 'Send Margic Link'}</button>
          </form>

          <hr />

          <button onClick={handeGoogleLogin}>Continue with Google</button>

          {message && <p>{message}</p> }
      </div>
  )
}

export default Auth