import React from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import logoRound_150 from "../../images/Round_logo_150x150.png";
import logoRound_250 from "../../images/Round_logo_250x250.png";
import logoFull_x1 from "../../images/full_logo_x1.png";
import logoFull_x2 from "../../images/full_logo_x2.png";

const Footer = () => {

        return (
            <footer className="footer" id="section-contact">
                <picture className="footer__logo">
                    <source 
                        srcSet={`${logoRound_150} 1x, ${logoRound_250} 2x`}
                        media="( max-width: 37.5em )"
                    />
                    <img
                        className="footer__logo-img"
                        srcSet={`${logoFull_x1} 1x, ${logoFull_x2} 2x`}
                        alt="Full logo"
                        src={logoFull_x2}
                    />
                </picture>
                <div className="footer__social">
                    <ul className="footer__list">
                        <li className="footer__item">
                            <a href="" target="_blank" ></a>
                        </li>
                    </ul>
                </div>
                <div className="footer__navigation">
                    <ul className="footer__list">
                        <li className="footer__item">
                            <AnchorLink href="#section-about" className="footer__link">About</AnchorLink>
                        </li>
                        <li className="footer__item">
                            <AnchorLink href="#section-skills" className="footer__link">Skills</AnchorLink>
                        </li>
                        <li className="footer__item">
                            <AnchorLink href="#section-portfolio" className="footer__link">Portfolio</AnchorLink>
                        </li>
                    </ul>
                </div>
            </footer>
        )
    
}

export default Footer;