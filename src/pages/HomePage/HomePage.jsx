import React from 'react'
import Header from '../../components/Header/Header'
import { IlustraHero, IlustraHero2x, IlustraHero3x } from '../../images'
import { ReactComponent as IcTecnologys } from '../../svgs/Ic_Tecnologys.svg'
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
                  <picture>
                     <source
                        media='(min-width: 50rem)'
                        srcSet={`${IlustraHero} 1x, ${IlustraHero2x} 2x, ${IlustraHero3x} 3x`}
                     />
                     <img src={IlustraHero} alt='Wolox tech illustration' />
                  </picture>
               </div>
               <div className={styles.technologiesContainer}>
                  <p>
                     Estamos buscando
                     <br />
                     para incorporar gente
                     <br />
                     increíble para estas
                     <br />
                     tecnologías:
                  </p>
                  <IcTecnologys />
               </div>
               <div className={styles.woloxersBanner}>
                  <div></div>
                  <div>
                     <p>
                        Trabajamos para
                        <br />
                        convertir ideas en
                        <br />
                        productos.
                     </p>
                  </div>
               </div>
            </div>
         </main>
      </>
   )
}
