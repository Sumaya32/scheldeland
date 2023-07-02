import * as React from "react"
import { createRef, useRef, useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import style from './header2.module.css'

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
                <a href="/" className={style.logo}>Home</a>
                <a href="/about" >Over ons</a>
                <a href="/contact" >Contact</a>
                <a href="/menu">Menu</a>
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
