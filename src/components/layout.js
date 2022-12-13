import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  footerNavLinks,
  footerNavLinkItem,
  FooterLinkText,
  copyright,
span2
} from './layout.module.css'

const Layout = ({pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
//     <title>{pageTitle} | {data.site.siteMetadata.title}</title>
//  <header><h1>{data.site.siteMetadata.title}</h1></header>
  return (
    <div className={container}>

  
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText} activeStyle={{color: "#74b4d1"}}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText} activeStyle={{color: "#74b4d1"}}>
              Over ons
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/contact" className={navLinkText} activeStyle={{color: "#74b4d1"}}>
              Contact
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/gerechten" className={navLinkText} activeStyle={{color: "#74b4d1"}}>
              Menu
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
  
      <footer>
      <span></span>
        <ul className={footerNavLinks}>
          <li className={footerNavLinkItem}>
            <a href="https://m.facebook.com/profile.php?id=1555690324520158&__tn__=C-R" className={FooterLinkText} target="_blank">
              Facebook
            </a>
          </li>
          <h5 className={span2}>|</h5>
          <li className={footerNavLinkItem}>
            <a href="https://m.facebook.com/profile.php?id=1555690324520158&__tn__=C-R" className={FooterLinkText} target="_blank">
              Twitter
            </a>
          </li>
     
        </ul>

        <li className={copyright}><div>Copyright © 2023 Sumaya MA</div></li>
      </footer>


    </div>
  )
}

export default Layout