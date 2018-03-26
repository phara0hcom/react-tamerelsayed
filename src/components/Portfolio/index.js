import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import { portfolioItems } from "./portfolioItems"

export default class Portfolio extends Component {
    render() {
        return (
            <section className="section-portfolio">
                <ImageGallery items={portfolioItems} />
            </section>
        )
    }
}