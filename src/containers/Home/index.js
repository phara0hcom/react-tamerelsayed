import React, { Component } from "react";
import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Portfolio from "../../components/Portfolio/Portfolio";
import Footer from "../../components/Footer/Footer";


import "!style-loader!css-loader!resolve-url-loader!sass-loader?sourceMap!../../sass/main.scss";

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <main>
                    <About />
                    <Skills />
                    <Portfolio />
                    <Footer />
                </main>
            </div>
        )
    }
}