import * as React from 'react'
import style from './footer.module.css'


const Footer = () => {
    return (
        <footer>
          <div className={style.footerContainer}>
       
            <ul className={style.footerNavLinks}>
                <li className={style.footerNavLinkItem}>
                    <a href="https://m.facebook.com/profile.php?id=1555690324520158&__tn__=C-R" className={style.FooterLinkText} target="_blank" >
              <p className={style.fbIconText}> Volg ons op </p>
              <img className={style.fbIcon} src='/facebook.png' />
                       
                    </a>
                </li>
            </ul>

            
            <span className={style.footerUnderline}></span>

            <div className={style.copyright}>© 2023 SCHELDELAND - <a href='https://sumaya.be' target='_blank'>CREATED BY SUMAYA MA</a></div>
          </div>
        </footer>
    )
}

export default Footer;