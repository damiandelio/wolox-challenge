import React, { useEffect } from 'react'
import { getAllTechs } from '../../apiCalls'
import styles from './TechsListPage.module.scss'

export default function TechsListPage() {
   useEffect(() => {
      getAllTechs()
         .then(res => {
            console.log(res.data)
         })
         .catch(err => console.log(err))
   }, [])

   return <>Tech List</>
}
