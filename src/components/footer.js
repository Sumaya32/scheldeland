import * as React from "react";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={style.footerContainer}>
        <div className={style.ulContainer}>
          <ul className={style.footerNavLinks}>
            <li>
              <p className={style.flowUs}> Volg ons op </p>
            </li>
            <li className={style.footerNavLinkItem}>
              <a
                href="https://m.facebook.com/profile.php?id=1555690324520158&__tn__=C-R"
                className={style.FooterLinkText}
                target="_blank"
              >
                <img
                  className={`${style.icons} ${style.fbIcon}`}
                  src="/facebook.png"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/tavernescheldeland?igsh=MWx0YmR4MG9zdjVvYg%3D%3D&utm_source=qr"
                className={style.FooterLinkText}
                target="_blank"
              >
                <img
                  className={`${style.icons} ${style.InstaIcon}`}
                  src="/instagram.png"
                />
              </a>
            </li>
          </ul>
        </div>

        <span className={style.footerUnderline}></span>

        <div className={style.copyright}>
          © 2024 SCHELDELAND -{" "}
          {/* <a href="https://sumaya.be" target="_blank"> */}
            CREATED BY SUMAYA MA
          {/* </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
