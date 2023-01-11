import React from "react";

export default function ProjectTile(props) {
    return(
        <div className="projects--tile">
            <img className="projects--tile--img" src={props.imgSrc} />
            <h5 className="projects--tile--name">{props.name}</h5>
            <p className="projects--tile--buildingBlocks">{props.builtWith}</p>
            <div className="projects--tile--hoverbtns">
                <button className="projects--tile--button">VIEW PROJECT</button>
                <button className="projects--tile--button">VIEW CODE</button>
            </div>
        </div>
    )
}