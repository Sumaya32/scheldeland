import * as React from "react"
import { createRef, useRef, useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import style from './header2.module.css'
import { NavLink } from "react-router-dom"


const Header2 = () => {
    const [toggled, setToggled] = useState(false);
    const navRef = useRef();

    const showNavbar = () => {
        setToggled(!toggled)
    }

    const handleClick = ()=> {
        window.scrollTo({ top: 0 });
      }
      
    return (
        <header>
            <a href="/" className={style.logoContainer}><img src="/logo.png" className={style.logo}/></a>
            <nav ref={navRef} className={toggled ? style.responsive_nav : ""} >
                <NavLink to="/" className={({ isActive }) => (isActive ? `${style.active} ${style.navlink}` : `${style.inactive}`)} onClick={handleClick}>
                    Home
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => (isActive ? `${style.active} ${style.navlink}` : `${style.inactive}`)} onClick={handleClick}>
                    Over ons
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? `${style.active} ${style.navlink}` : `${style.inactive}`)} onClick={handleClick}>
                    Contact
                </NavLink>
                <NavLink to="/menu" className={({ isActive }) => (isActive ? `${style.active} ${style.navlink}` : `${style.inactive}`)} onClick={handleClick}>
                    Menu
                </NavLink>
                <button className={`${style.nav_btn} ${style.nav_close_btn}`} onClick={showNavbar}>
                    <FaTimes className={style.faTimes} />
                </button>
            </nav>

            <button className={style.nav_btn} onClick={showNavbar}>
                <FaBars className={style.faBars}/>
            </button>
        </header>
    )
}

export default Header2
