import React, { Component } from "react";
import logoWhite from "../../images/logo-white.png";
import about_1 from "../../images/about_1.jpg";
import about_1__small from "../../images/about_1-small.jpg";
import about_2 from "../../images/about_2.jpg";
import about_2__small from "../../images/about_2-small.jpg";
import about_3 from "../../images/about_3.jpg";
import about_3__small from "../../images/about_3-small.jpg";
import my_CV from '../../cv/Tamer.Elsayed_CV.pdf';

export default class About extends Component {
    render() {
        return (
            <section className="section-about" id="section-about">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">About</h2>
                </div>
                <div className="row">
                    <div className="col-1-of-2">
                    <h3 class="heading-tertiary u-margin-bottom-small">Graphics Designer turned Web Designer</h3>
                        <p class="paragraph">
                            Even earlier in life I was always interested in technology and the web, but I started my career as a salesman. But after a few years I was unhappy with my trajectory. On my own I started learning Illustrator and Photoshop and got the opportunity at Dell to switch up my career. To improve more I also went back to school and started to work at Creative Clicks since they had more possibilities for me to grow and become a Web-Designer. During my career as a whole I always tried to improve my knowledge. And since I feel I outgrew my role within Creative Clicks I'm looking for my next challenge.
                        </p>
                        <a href={my_CV} className="btn-text">
                            My CV &rarr;
                        </a>
                    </div>
                    <div className="col-1-of-2">
                        <div className="composition">
                            <img 
                                srcSet={`${about_3__small} 300w,${about_3} 1000w`}
                                src={about_3}
                                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                                alt="Photo 3"
                                className="composition__photo composition__photo--p1"
                            />

                            <img 
                                srcSet={`${about_2__small} 300w,${about_2} 1000w`}
                                src={about_2}
                                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                                alt="Photo 2"
                                className="composition__photo composition__photo--p2"
                            />

                            <img
                                srcSet={`${about_1__small} 300w,${about_1} 1000w`}
                                src={about_1}
                                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                                alt="Photo 1"
                                className="composition__photo composition__photo--p3"
                            />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}