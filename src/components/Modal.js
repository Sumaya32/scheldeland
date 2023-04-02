import React, { useState } from 'react';
import styles from './modal.module.css'

export const Modal2 = ({ handelclick, children }) => {
    const [modalIsOpen, setIsOpen] = useState(false)

    const fun = () => {
        setIsOpen(false)
    }
    return (
        <div className={styles.container}>
        <div onClick={() => handelclick(fun)} className={styles.miniContainer} >
            {children}
            <button onClick={() => handelclick(fun)} className={styles.modalBtn}>Close</button>
        </div>
        </div>
    )
}