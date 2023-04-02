import * as React from 'react'

import style from './layout.module.css'
import Header from "./header"
import Footer from "./footer"

const Layout = ({ pageTitle, children }) => {

  return (
    <div className={style.container}>
      <Header />
      <main>
        <h1 className={style.heading}>{pageTitle}</h1>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout;