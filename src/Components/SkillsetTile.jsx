import React from "react";

export default function Tile(props) {
    return(
        <div className="skillset--tile">
            <h3>{props.skill}</h3>
            <p>{props.years} Years Experience</p>
        </div>
    )
}