import * as React from "react"
import PropTypes from "prop-types"
import { NavLink } from "react-router-dom" 
import style from './header.module.css'
//import { slide as Menu } from 'react-burger-menu'

const Header = () => {

  return (
    <header>
      <nav>  

      <div className={style.menuToggle}>       
        <input type="checkbox" />
        <span className={style.hamburgerSpan}></span>
        <span className={style.hamburgerSpan}></span>
        <span className={style.hamburgerSpan}></span>

        <ul className={style.menu}>
          <li className={style.navLinkItem}> <NavLink to="/" className={style.logo}>Logo</NavLink></li>

          <li className={style.navLinkItem}>
            <NavLink to="/" className={({ isActive }) => (isActive ? `${style.active} ${style.navlink}` :  `${style.inactive}`)}>
              <div>Home</div>
            </NavLink>
          </li>
          <li className={style.navLinkItem}>
            <NavLink to="/about" className={({ isActive }) => (isActive ? `${style.active} ${style.navlink}` :  `${style.inactive}`)}>
           <div>Over ons</div>
            </NavLink>
          </li>
          <li className={style.navLinkItem}>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? `${style.active} ${style.navlink}` :  `${style.inactive}`)} >
             <div>Contact</div>
            </NavLink>
          </li>
          <li className={style.navLinkItem}>
            <NavLink to="/menu" className={({ isActive }) => (isActive ? `${style.active} ${style.navlink}` :  `${style.inactive}`)}>
              <div>Menu</div>
            </NavLink>
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
