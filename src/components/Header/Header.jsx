import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants'
import logo from '../../images/logo_full_color.svg'
import styles from './Header.module.scss'

export default function Header() {
   return (
      <header className={styles.header}>
         <nav>
            <img src={logo} alt='Wolox' />
            <div>
               <Link to={ROUTES.HOME}>Inicio</Link>
               <Link to={ROUTES.TECHS_LIST}>Tecnologías</Link>
               <Link to={'/benefits'}>Beneficions</Link>
               <Link to={'/requirements'}>Requerimientos</Link>
               <Link to={ROUTES.LOGIN} className={styles.buttonLink}>
                  <button>Login</button>
               </Link>
            </div>
         </nav>
      </header>
   )
}
