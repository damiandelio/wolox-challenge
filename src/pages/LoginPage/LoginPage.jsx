import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { authenticationState } from '../../state'
import { logIn } from '../../apiCalls'
import styles from './LoginPage.module.scss'

export default function LoginPage() {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [authentication, setAuthentication] = useRecoilState(
      authenticationState
   )

   // saves the user's credentials
   const authenticate = token => {
      setAuthentication({
         email,
         password,
         token,
         isAuthenticated: true
      })
   }

   const handleSubmit = e => {
      e.preventDefault()

      logIn({ email, password })
         .then(res => {
            const { token } = res.data
            token && authenticate(token)
         })
         .catch(err => console.log(err))
   }

   return (
      <>
         <main>
            <form onSubmit={handleSubmit} className={styles.loginBox}>
               <label>Email:</label>
               <input
                  type='email'
                  placeholder='email@example.com'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
               />
               <label>Password:</label>
               <input
                  type='password'
                  placeholder='password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
               />
               <button type='submit'>Log in</button>
            </form>
         </main>
      </>
   )
}
