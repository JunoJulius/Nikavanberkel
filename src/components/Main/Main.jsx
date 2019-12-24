import React, { useState, useEffect } from "react";
import { projectsLoader } from "../../assets/projects/projects";
import { ProjectImage } from "../../styled_components/ProjectImage";
import { ImageWrapper } from "../../styled_components/ImageWrapper";
import { NavWrapper } from "../../styled_components/NavWrapper";

import { NavLink } from "react-router-dom";
import "./Main.css";

export const Main = () => {
  const [projects, projectsSet] = useState([]);
  const [name, setName] = useState(false);

  useEffect(() => {
    const projects = projectsLoader();
    projectsSet(projects);
  }, []);

  const onMouseEnter = () => {
    setName(true);
  };

  const onMouseOut = () => {
    setName(false);
  };

  return (
    <>
      <NavWrapper>
        {projects.map(({ id, title, route, src }) => (
          <ImageWrapper key={id}>
            <NavLink
              activeClassName="active"
              className="Nav_link"
              exact={true}
              to={`/${route}`}
            >
              <ProjectImage
                src={src}
                alt={title}
                onMouseEnter={onMouseEnter}
                onMouseOut={onMouseOut}
              />
              {name && <p>{title}</p>}
            </NavLink>
          </ImageWrapper>
        ))}
      </NavWrapper>
    </>
  );
};
