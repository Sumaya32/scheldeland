import * as React from "react"
import { createRef, useRef, useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import style from './header.module.css'
import { NavLink } from "react-router-dom"


const Header = () => {
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
            <a href="/" className={style.logoContainer}><img src="/logo2.png" className={style.logo}/></a>
            <nav ref={navRef} className={toggled ? style.responsive_nav : ""} >
                <NavLink to="/" className={({ isActive }) => (isActive ? `${style.active} ${style.navlink}` : `${style.inactive}`)} onClick={()=> {handleClick(); setToggled(false)}}>
                    Home
                </NavLink>
                <NavLink to={"/over-ons"} className={({ isActive }) => (isActive ? `${style.active} ${style.navlink}` : `${style.inactive}`)} onClick={()=> {handleClick(); setToggled(false)}}>
                    Over ons
                </NavLink>
                <NavLink to="/contact" href='' className={({ isActive }) => (isActive ? `${style.active} ${style.navlink}` : `${style.inactive}`)} onClick={()=> {handleClick(); setToggled(false)}}>
                    Contact
                </NavLink>
                <NavLink to="/menu" className={({ isActive }) => (isActive ? `${style.active} ${style.navlink}` : `${style.inactive}`)} onClick={()=> {handleClick(); setToggled(false)}}>
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

export default Header
