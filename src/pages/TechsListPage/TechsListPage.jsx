import React, { useState, useEffect } from 'react'
import { getAllTechs } from '../../apiCalls'
import styles from './TechsListPage.module.scss'

const RADIAL_GROUP = 'tech-type'

const FILTER_BACKEND = 'Back-End'
const FILTER_FRONTEND = 'Front-End'
const FILTER_MOBILE = 'Mobile'
const FILTER_ALL = 'FILTER_ALL'

const ORDER_NONE = 'None'
const ORDER_ASCENDING = 'Ascending'
const ORDER_DESCENDING = 'Descending'

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
            <div>
               {techsList.map((tech, index) => (
                  <TechCard tech={tech} key={index} />
               ))}
            </div>
            <div>technologies displayed: {techsList.length}</div>
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
   const [listOrder, setListOrder] = useState(ORDER_NONE)

   const applyFilters = ({
      filter = filterType,
      text = filterText,
      order = listOrder
   }) => {
      // apply text filter in the original techs array
      let result = originalTechsList.filter(el =>
         el.tech.toLowerCase().includes(text.toLowerCase())
      )
      // filters by type
      if (filter !== FILTER_ALL) {
         result = result.filter(el => el.type === filter)
      }
      // sorts
      if (order !== ORDER_NONE) {
         result = result.sort((a, b) => {
            let ret = a.tech < b.tech ? -1 : 1
            if (order === ORDER_DESCENDING) {
               ret = -ret
            }
            return ret
         })
      }

      setTechsList(result)
   }

   const handleTextInputChange = e => {
      const value = e.target.value
      setFilterText(value)
      applyFilters({ text: value })
   }

   const handleRadialGroupChange = e => {
      const value = e.target.value
      setFilterType(value)
      applyFilters({ filter: value })
   }

   const handleOrderChange = e => {
      const value = e.target.value
      setListOrder(value)
      applyFilters({ order: value })
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
         <fieldset>
            <label>Order</label>
            <select onChange={handleOrderChange}>
               <option value={ORDER_NONE}>{ORDER_NONE}</option>
               <option value={ORDER_ASCENDING}>{ORDER_ASCENDING}</option>
               <option value={ORDER_DESCENDING}>{ORDER_DESCENDING}</option>
            </select>
         </fieldset>
      </form>
   )
}
