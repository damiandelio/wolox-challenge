import React from 'react'
import Header from '../../components/Header/Header'
import styles from './HomePage.module.scss'

export default function HomePage() {
   return (
      <>
         <Header />
         <main className={styles.main}></main>
      </>
   )
}
