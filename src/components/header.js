import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {
  navLinkItem,
  navLinkText,
  logo,
  menu,
  menuToggle,
  hamburgerSpan
} from './header.module.css'
//import { slide as Menu } from 'react-burger-menu'

const Header = () => {

  return (
    <header>
      <nav>  

      <div className={menuToggle}>       
        <input type="checkbox" />
        <span className={hamburgerSpan}></span>
        <span className={hamburgerSpan}></span>
        <span className={hamburgerSpan}></span>

        <ul className={menu}>
          <li className={navLinkItem}> <Link href="/" className={logo}>Logo</Link></li>

          <li className={navLinkItem}>
            <Link to="/" className={navLinkText} activeStyle={{ color: "#74b4d1" }}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText} activeStyle={{ color: "#74b4d1" }}>
              Over ons
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/contact" className={navLinkText} activeStyle={{ color: "#74b4d1" }}>
              Contact
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/gerechten" className={navLinkText} activeStyle={{ color: "#74b4d1" }}>
              Menu
            </Link>
          </li>
        </ul>
        </div>
      </nav>
    </header>
  )


}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
