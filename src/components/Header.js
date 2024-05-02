import * as React from "react"
import {useRef, useState, useEffect } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import style from './header.module.css'
import { NavLink } from "react-router-dom"


const Header = () => {
    const [toggled, setToggled] = useState(false);
    const [xIsVisible, setXIsVisible] = useState(false);
    const [hamburgerIsvisible, setHamburgerIsvisible] = useState(true);
    
    const navRef = useRef();

    const showNavbar = () => {
        setToggled(!toggled)
    }

    const hamburgerAndX = () => {
       if(xIsVisible === true){setHamburgerIsvisible(true);}
       setXIsVisible(false)
    }

    useEffect(()=>{
        hamburgerAndX();
        // eslint-disable-next-line
    },[xIsVisible, hamburgerIsvisible])

    const handleClick = ()=> {
        window.scrollTo({ top: 0 });
      }
      
    return (
        <header>
            <a href="/" className={style.logoContainer}><img src="/logo.png" className={style.logo} alt="Logo"/></a>
            <nav ref={navRef} className={toggled ? style.responsive_nav : ""} >
                <NavLink to="/" className={({ isActive }) => (isActive ? `${style.active} ${style.navlink}` : `${style.inactive}`)} onClick={()=> {handleClick(); setToggled(false)}}>
                    Home
                </NavLink>
                <NavLink to={"/over-ons"} className={({ isActive }) => (isActive ? `${style.active} ${style.navlink}` : `${style.inactive}`)} onClick={()=> {handleClick(); setToggled(false)}}>
                    Over ons
                </NavLink>
                <NavLink to="/menu" className={({ isActive }) => (isActive ? `${style.active} ${style.navlink}` : `${style.inactive}`)} onClick={()=> {handleClick(); setToggled(false)}}>
                    Menu
                </NavLink>
                <NavLink to="/contact" href='' className={({ isActive }) => (isActive ? `${style.active} ${style.navlink}` : `${style.inactive}`)} onClick={()=> {handleClick(); setToggled(false)}}>
                    Contact
                </NavLink>
                <button className={`${style.nav_btn} ${style.nav_close_btn}`} onClick={showNavbar}>
                    <FaTimes className={style.faTimes} onClick={()=> { hamburgerAndX(); setXIsVisible(true)}}/>
                </button>
            </nav>
            <button className={style.nav_btn} onClick={showNavbar}>
                <FaBars className={`${style.faBars}  ${hamburgerIsvisible !== true ? style.hideHamburger : style.showHamburger}`} onClick={()=> {hamburgerAndX(); setHamburgerIsvisible(false)}}/>
            </button>
        </header>
    )
}

export default Header
