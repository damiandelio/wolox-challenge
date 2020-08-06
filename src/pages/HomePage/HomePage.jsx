import React from 'react'
import Header from '../../components/Header/Header'
import IlustraHero from '../../images/Ic_ilustra_Hero.png'
import styles from './HomePage.module.scss'

export default function HomePage() {
   return (
      <>
         <Header />
         <main className={styles.main}>
            <div className={styles.container}>
               <div className={styles.presentationContainer}>
                  <h2>
                     Bienvenido a tu
                     <br />
                     <strong>Entrevista Técnica</strong> en
                     <br />
                     <strong className={styles.woloxText}>Wolox</strong>
                  </h2>
                  <img src={IlustraHero} alt='Wolox tech illustration' />
                  <div></div>
               </div>
            </div>
         </main>
      </>
   )
}
