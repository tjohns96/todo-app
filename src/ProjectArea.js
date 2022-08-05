import { useState } from "react";
import Project from "./Project";
import { Grid, List } from "@mui/material";
export default function ProjectArea(props) {
  const [openProject, setOpenProject] = useState(-1);
  const chooseOpenProject = (n) => {
    if (n === openProject) {
      setOpenProject(-1);
      return;
    }
    setOpenProject(n);
  };
  const projects = props.projects;
  const projectItems = projects.map((project) => (
    <Project
      chooseOpenProject={chooseOpenProject}
      openProject={openProject}
      index={projects.indexOf(project)}
      key={project.id}
      name={project.name}
    ></Project>
  ));
  return <List className="project-area">{projectItems}</List>;
}
