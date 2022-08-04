import { useState } from "react";
import Project from "./Project";
import { Grid, List } from "@mui/material";
export default function ProjectArea(props) {
  const projects = props.projects;
  const projectItems = projects.map((project) => (
    <Project key={project.id} name={project.name}></Project>
  ));
  return <List className="project-area">{projectItems}</List>;
}
