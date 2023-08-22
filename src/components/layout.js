import * as React from 'react'

import style from './layout.module.css'
import Header2 from "./Header"
import Footer from "./footer"

const Layout = ({ pageTitle, children }) => {

  return (
    <div className={style.container}>
      <Header2 />
      <main>
        <h1 className={style.heading}>{pageTitle}</h1>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout;