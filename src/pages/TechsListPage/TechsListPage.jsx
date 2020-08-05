import React, { useState, useEffect } from 'react'
import { getAllTechs } from '../../apiCalls'
import styles from './TechsListPage.module.scss'

const FILTER_BACKEND = 'Back-End'
const FILTER_FRONTEND = 'Front-End'
const FILTER_MOBILE = 'Mobile'
const FILTER_ALL = 'FILTER_ALL'
const RADIAL_GROUP = 'tech-type'

let originalTechsList = [] // will contain the original list brought from the server

export default function TechsListPage() {
   const [techsList, setTechsList] = useState([])

   useEffect(() => {
      getAllTechs()
         .then(res => {
            originalTechsList = res.data
            setTechsList(originalTechsList)
         })
         .catch(err => console.log(err))
   }, [])

   return (
      <>
         <FilterBox setTechsList={setTechsList} />
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

function FilterBox({ setTechsList }) {
   const [filterText, setFilterText] = useState('')
   const [filterType, setFilterType] = useState(FILTER_ALL)

   const applyFilters = ({ filter = filterType, text = filterText }) => {
      // apply text filter in the original techs array
      let result = originalTechsList.filter(el =>
         el.tech.toLowerCase().includes(text.toLowerCase())
      )
      // filters by type
      if (filter !== FILTER_ALL) {
         result = result.filter(el => el.type === filter)
      }

      setTechsList(result)
   }

   const handleTextInputChange = e => {
      const value = e.target.value
      setFilterText(value)
      applyFilters({ text: value })
   }

   const handleRadialGroupChange = e => {
      let value = e.target.value
      setFilterType(value)
      applyFilters({ filter: value })
   }

   return (
      <form className={styles.filterBox}>
         <label className={styles.filterBoxTitle}>Filter</label>
         <label>Tech name:</label>
         <input
            type='text'
            value={filterText}
            onChange={handleTextInputChange}
         />
         <fieldset
            onChange={handleRadialGroupChange}
            className={styles.radialGroupContainer}
         >
            <label>
               <input
                  type='radio'
                  name={RADIAL_GROUP}
                  value={FILTER_ALL}
                  defaultChecked
               />
               All
            </label>
            <label>
               <input
                  type='radio'
                  name={RADIAL_GROUP}
                  value={FILTER_FRONTEND}
               />
               Front-End
            </label>
            <label>
               <input type='radio' name={RADIAL_GROUP} value={FILTER_BACKEND} />
               Back-End
            </label>
            <label>
               <input type='radio' name={RADIAL_GROUP} value={FILTER_MOBILE} />
               Mobile
            </label>
         </fieldset>
      </form>
   )
}
