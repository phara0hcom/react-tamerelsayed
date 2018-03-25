import React from "react";
import ImageGallery from "react-image-gallery";
import {portfolioItems } from "./portfolioItems"

const Portfolio = (props) => {
    return <section className="section-portfolio">
        <ImageGallery items={portfolioItems} />
    </section>
};
export default Portfolio;