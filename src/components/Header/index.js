import React, { Component } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import logoRound_150 from "../../images/Round_logo_150x150.png";
import logoRound_250 from "../../images/Round_logo_250x250.png";

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header__logo-box">
                    <img 
                        src={logoRound_250}  
                        alt="Logo"
                        srcSet={`${logoRound_150} 150w,${logoRound_250} 250w`}
                        sizes="(max-width: 75em) 2vw, (max-width: 37.5em) 2vw, 45px"
                        className="header__logo" 
                    />
                </div>
                <div className="header__text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary--main">
                            Tamer
                        </span>
                        <span className="heading-primary--main">
                            Elsayed
                        </span>
                        <span className="heading-primary--sub">
                            Web-Designer
                        </span>
                    </h1>

                    <AnchorLink href="#section-about" className="btn btn--white btn--animated">
                        About me
                    </AnchorLink>
                </div>
            </header>
        )
    }
}