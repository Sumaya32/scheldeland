import * as React from 'react'
import styles from './error.module.css'

export const Error = () => {

    return (
            <div className={styles.container}>
                <div className={styles.contenContainer}>
                    <di className={styles.notFound}>Error</di>
                    <p>Het spijt ons, er is iets mis gegaan. Probeer het opnieuw aub.</p>
                </div>
            </div>
    )
}
