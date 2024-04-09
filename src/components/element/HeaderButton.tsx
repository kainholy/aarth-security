'use client'
import React, { useState } from 'react'
import styles from '@/styles/element/HeaderButton.module.scss'

function HeaderButton({ open, onClick }: { open: boolean, onClick: () => void}){

    // const [open, setOpen] = useState(false)
    // const toggleFunction = () => {
    //     setOpen(!open)
    // }

  return (
    <button className={styles.headerButton + ' sp'} onClick={onClick} aria-expanded={open}>
        <span className={styles.line1}></span>
        <span className={styles.line2}></span>
    </button>
  )
}

export default HeaderButton
