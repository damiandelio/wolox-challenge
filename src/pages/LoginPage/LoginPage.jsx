import React, { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { useHistory } from 'react-router-dom'
import { sessionTokenState } from '../../state'
import { logIn } from '../../apiCalls'
import { ROUTES, STORAGE_SESSION_KEY } from '../../constants'
import styles from './LoginPage.module.scss'

export default function LoginPage() {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [isSaveSession, setIsSaveSession] = useState(false)
   const [sessionToken, setSessionToken] = useRecoilState(sessionTokenState)

   const history = useHistory()

   useEffect(() => {
      // if the user is logged, redirects to techs list page
      sessionToken && history.push(ROUTES.TECHS_LIST)
   }, []) // eslint-disable-line

   const handleSubmit = e => {
      e.preventDefault()

      logIn({ email, password })
         .then(res => {
            const { token } = res.data
            if (token) {
               setSessionToken(token)
               isSaveSession && localStorage.setItem(STORAGE_SESSION_KEY, token)
               history.push(ROUTES.TECHS_LIST)
            }
         })
         .catch(err => console.log(err))
   }

   return (
      <>
         <main className={styles.main}>
            <h2>Log In</h2>
            <form onSubmit={handleSubmit} className={styles.loginBox}>
               <label>Email:</label>
               <input
                  type='email'
                  placeholder='email@example.com'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className={styles.textInput}
               />
               <label>Password:</label>
               <input
                  type='password'
                  placeholder='password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className={styles.textInput}
               />
               <label>
                  <input
                     type='checkbox'
                     onClick={() => setIsSaveSession(prevState => !prevState)}
                     className={styles.checkbox}
                  />
                  Stay logged in
               </label>
               <button type='submit'>Log in</button>
            </form>
         </main>
      </>
   )
}
