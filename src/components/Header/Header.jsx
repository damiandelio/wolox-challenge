import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { sessionTokenState } from '../../state'
import { ROUTES } from '../../constants'
import logo from '../../images/logo_full_color.svg'
import styles from './Header.module.scss'

export default function Header({ withMargin }) {
   const sessionToken = useRecoilValue(sessionTokenState)

   return (
      <>
         <div className={withMargin && styles.withMargin} />
         <header className={styles.header}>
            <nav>
               <img src={logo} alt='Wolox' />
               <div>
                  <Link to={ROUTES.HOME}>Inicio</Link>
                  <Link to={ROUTES.TECHS_LIST}>Tecnologías</Link>
                  <Link to={'/benefits'}>Beneficions</Link>
                  <Link to={'/requirements'}>Requerimientos</Link>
                  {!sessionToken && (
                     <Link to={ROUTES.LOGIN} className={styles.buttonLink}>
                        <button>Login</button>
                     </Link>
                  )}
               </div>
            </nav>
         </header>
      </>
   )
}
