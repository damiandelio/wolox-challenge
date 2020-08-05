import React, { useState, useEffect } from 'react'
import { getAllTechs } from '../../apiCalls'
// import styles from './TechsListPage.module.scss'

export default function TechsListPage() {
   const [techsList, setTechsList] = useState([])

   useEffect(() => {
      getAllTechs()
         .then(res => {
            const techs = res.data
            console.log(techs)
            setTechsList(techs)
         })
         .catch(err => console.log(err))
   }, [])

   return (
      <>
         <main>
            {techsList.map((tech, index) => (
               <TechCard tech={tech} key={index} />
            ))}
         </main>
      </>
   )
}

function TechCard({ tech }) {
   return (
      <article>
         <h2>{tech.tech}</h2>
         <div>{tech.year}</div>
         <div>{tech.author}</div>
         <div>{tech.license}</div>
         <div>{tech.language}</div>
         <div>{tech.type}</div>
         <img src={tech.logo} alt={tech.tech} />
      </article>
   )
}
