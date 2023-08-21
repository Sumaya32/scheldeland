import * as React from 'react'
import styles from './error.module.css'
import Layout from './layout'

export const Error = () => {

    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.contenContainer}>
                    <di className={styles.notFound}>404</di>
                    <p>Het spijt ons, er is iets mis gegaan. Probeer het opnieuw aub.</p>
                </div>
            </div>
        </Layout>
    )
}
