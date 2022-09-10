import { useState } from "react"
import styles from '../styles/Hamburger.module.css'

export default function Hamburger() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
      <div className={isNavExpanded ? styles.hamburgermenuopen : styles.hamburgermenu } onClick={() => {setIsNavExpanded(!isNavExpanded)}}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
  )
}