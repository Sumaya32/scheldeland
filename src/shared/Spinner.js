import React from 'react';
import styles from './spinner.module.css'
export const Spinner = () => {
    return (
        <body>
         <div className={styles.spinContainer}>   <div className={styles.spin}></div></div>
        </body>
    )
}