import React from 'react'
import { GrTwitter } from 'react-icons/gr'
import Header from '../../components/Header/Header'
import { IlustraHero, IlustraHero2x, IlustraHero3x } from '../../images'
import {
   IcTecnologys,
   IcHour,
   IcBrain,
   IcDrinkSnacks,
   IcHomeOffice,
   IcLaptop,
   IcWorkshops
} from '../../svgs'
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
                  <div className={styles.woloxers}>
                     <h1>
                        <span>350 + </span>Woloxers
                     </h1>
                     <p>
                        <GrTwitter />
                        @Wolox
                     </p>
                     <a href='https://twitter.com/Wolox'>
                        <button>Siguenos</button>
                     </a>
                  </div>
                  <div>
                     <h2>
                        Trabajamos para
                        <br />
                        <strong>
                           convertir <span>ideas </span>
                        </strong>
                        en
                        <br />
                        productos.
                     </h2>
                  </div>
               </div>
               <p className={styles.benefitsTitle}>
                  Entre los beneficios que ofrecemos se encuentran
                  <span>{' ;)'}</span>
               </p>
               <div className={styles.benefitsContainer}>
                  <section>
                     <BenefitsCard
                        Icon={<IcHour />}
                        text='Flexibilidad<br>Horaria'
                     />
                     <BenefitsCard Icon={<IcHomeOffice />} text='Home Office' />
                     <BenefitsCard
                        Icon={<IcWorkshops />}
                        text='Capacitaciones<br>y workshops'
                     />
                     <BenefitsCard
                        Icon={<IcDrinkSnacks />}
                        text='Snacks, frutas<br>y bebidas gratis'
                     />
                     <BenefitsCard
                        Icon={<IcLaptop />}
                        text='Semana<br>Remota'
                     />
                     <BenefitsCard
                        Icon={<IcBrain />}
                        text='Trabajar<br>en ultimas<br>tecnologías'
                     />
                  </section>
               </div>
            </div>
         </main>
      </>
   )
}

function BenefitsCard({ Icon, text }) {
   return (
      <div className={styles.benefitsCard}>
         {Icon}
         <span dangerouslySetInnerHTML={{ __html: text }} />
      </div>
   )
}
