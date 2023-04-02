import * as React from 'react'
import style from './footer.module.css'


const Footer = () =>{
    /*
     <h5 className={span2}></h5>
        <li className={footerNavLinkItem}>
            <a href="https://m.facebook.com/profile.php?id=1555690324520158&__tn__=C-R" className={FooterLinkText} target="_blank">
                Twitter
            </a>
        </li>
    */
   //    <li className={footerNavLinkItem}><p className={FooterLinkText}>Volg ons op </p></li><pre> </pre>
    return(
<footer>
    <span className={style.footerUnderline}></span>
    <ul className={style.footerNavLinks}>
    
        <li className={style.footerNavLinkItem}>
            <a href="https://m.facebook.com/profile.php?id=1555690324520158&__tn__=C-R" className={style.FooterLinkText} target="_blank">
            Volg ons op Facebook
            </a>
        </li>       

    </ul>

    <li className={style.copyright}><div>Copyright © 2023 Scheldeland</div></li>
</footer>
    )
}

export default Footer;