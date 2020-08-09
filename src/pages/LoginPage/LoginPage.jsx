import React, { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { useHistory } from 'react-router-dom'
import { sessionTokenState } from '../../state'
import { logIn } from '../../apiCalls'
import { ROUTES, STORAGE_SESSION_KEY } from '../../constants'
import { isValidEmail } from './../../utils'
import Header from '../../components/Header/Header'
import styles from './LoginPage.module.scss'

const MIN_PASSWORD_LENGHT = 4

export default function LoginPage() {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [isSaveSession, setIsSaveSession] = useState(false)
   const [sessionToken, setSessionToken] = useRecoilState(sessionTokenState)
   const [isValidForm, setIsValidForm] = useState(false)

   const history = useHistory()

   useEffect(() => {
      // if the user is logged, redirects to techs list page
      sessionToken && history.replace(ROUTES.TECHS_LIST)
   }, []) // eslint-disable-line

   const handleSubmit = e => {
      e.preventDefault()

      logIn({ email, password })
         .then(res => {
            const { token } = res.data
            if (token) {
               setSessionToken(token)
               isSaveSession && localStorage.setItem(STORAGE_SESSION_KEY, token)
               history.replace(ROUTES.TECHS_LIST)
            }
         })
         .catch(err => console.log(err))
   }

   function validateForm({ e = email, p = password }) {
      setIsValidForm(isValidEmail(e) > 0 && p.length >= MIN_PASSWORD_LENGHT)
   }

   return (
      <>
         <Header withMargin />
         <main className={styles.main}>
            <h2>Log In</h2>
            <form onSubmit={handleSubmit} className={styles.loginBox}>
               <label>Email:</label>
               <input
                  type='email'
                  placeholder='email@example.com'
                  value={email}
                  onChange={e => {
                     const newEmail = e.target.value
                     setEmail(newEmail)
                     validateForm({ e: newEmail })
                  }}
                  className={styles.textInput}
               />
               <label>Password:</label>
               <input
                  type='password'
                  placeholder='password'
                  value={password}
                  onChange={e => {
                     const newPassword = e.target.value
                     setPassword(newPassword)
                     validateForm({ p: newPassword })
                  }}
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
               <button disabled={!isValidForm} type='submit'>
                  Log in
               </button>
            </form>
         </main>
      </>
   )
}
