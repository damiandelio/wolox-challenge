import React, { useEffect } from 'react'
import { logIn } from '../../apiCalls'
import styles from './LoginPage.module.scss'

const email = 'user@wolox.com.ar'
const passwor = '12345678'

export default function LoginPage() {
   useEffect(() => {
      logIn({ email, passwor })
         .then(res => {
            console.log(res.data)
         })
         .catch(err => console.log(err))
   }, [])

   return <>Login</>
}
