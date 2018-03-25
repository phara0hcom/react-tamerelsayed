import React from "react";
import { MySkills } from "./skills"
import svgSprite from "../../images/sprite.svg";

const createSkillList = (data, i) => {
    return (
        <div key={`skillB_nr${i}`} className="skills__box">
            <svg className="skills__icon">
                <use xlinkHref={`${svgSprite}#${data.icon}`} ></use>
            </svg>
            <div className="skills__details">
                <div className="skills__type">{data.type}</div>
                <div className="skills__name">{data.name}</div>
            </div>
        </div>
    )
}
const Skills = (props) => {
    return <section className="section-skills">
                <div className="row skills">
                    { MySkills.map( (data, i) => createSkillList(data, i) ) }
                </div>
            </section>;

};
export default Skills;