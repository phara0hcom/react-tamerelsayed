import React, { Component } from "react";
import logoWhite from "../../images/logo-white.png";

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header__logo-box">
                    <img src={logoWhite} alt="Logo" className="header__logo" />
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

                    <a href="#section-about" className="btn btn--white btn--animated">
                        About me
                    </a>
                </div>
            </header>
        )
    }
}