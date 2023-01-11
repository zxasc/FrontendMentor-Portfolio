import React from "react";
import skillsetData from "../Components Data/SkillsetData";
import Tile from "./SkillsetTile";

export default function Skillset() {

    const STiles = skillsetData.map(skill => (
        <Tile
            key={skill.skillName}
            skill={skill.skillName}
            years={skill.yearsOfExperience}
        />
    ))

    return (
        <section className="skillset">
            <img src="/images/pattern-rings.svg" alt="" className="bg--ring2" />
            {STiles}
        </section>
    )
}