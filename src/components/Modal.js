import React, { useState } from 'react';
import styles from './modal.module.css'

export const Modal2 = ({ handelclick, children }) => {
    const [modalIsOpen, setIsOpen] = useState(false)

    const modalFunction = () => {
        setIsOpen(false)
    }
    return (
        <div className={styles.container}>
        <div className={styles.miniContainer} >
            {children}
            <button onClick={() => handelclick(modalFunction)} className={styles.modalBtn}>Close</button>
        </div>
        </div>
    )
}