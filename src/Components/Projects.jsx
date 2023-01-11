import React, { useState, useEffect } from "react";
import ProjectsData from "../Components Data/ProjectsData";
import ProjectTile from "./ProjectTile";

export default function Projects({ handleScrollToContact, windowWidth }) {


  const PTiles = ProjectsData.map((project) => (
    <ProjectTile
      key={project.name}
      name={project.name}
      imgSrc={windowWidth > 1101 ? project.imgLarge : project.imgSmall}
      builtWith={project.builtWith}
    />
  ));

  return (
    <section className="projects">
      <div className="projects--text">
        <h2>Projects</h2>
        <button href="link" className="contact-me--button" onClick={handleScrollToContact}>
            CONTACT ME
        </button>
      </div>
      <div className="projects--tiles">
        {PTiles}
      </div>
    </section>
  );
}
