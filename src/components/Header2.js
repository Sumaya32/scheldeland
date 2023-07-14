import * as React from "react"
import { createRef, useRef, useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import style from './header2.module.css'
import { NavLink } from "react-router-dom"


const Header2 = () => {
    const [toggled, setToggled] = useState(false);
    const navRef = useRef();
    const showNavbar = () => {
        // navRef.current.transform("none")
        setToggled(!toggled)
    }
    return (
        <header>
            <a href="/" className={style.logo}>Logo</a>
            <nav ref={navRef} className={toggled ? style.responsive_nav : ""}>
                <NavLink to="/" className={({ isActive }) => (isActive ? `${style.active} ${style.navlink}` : `${style.inactive}`)} >
                    Home
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => (isActive ? `${style.active} ${style.navlink}` : `${style.inactive}`)} >
                    Over ons
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? `${style.active} ${style.navlink}` : `${style.inactive}`)} >
                    Contact
                </NavLink>
                <NavLink to="/menu" className={({ isActive }) => (isActive ? `${style.active} ${style.navlink}` : `${style.inactive}`)} >
                    Menu
                </NavLink>
                <button className={`${style.nav_btn} ${style.nav_close_btn}`} onClick={showNavbar}>
                    <FaTimes className={style.faTimes} />
                </button>
            </nav>

            <button className={style.nav_btn} onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    )


}




export default Header2
