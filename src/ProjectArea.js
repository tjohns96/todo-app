import { useState } from "react";
import Project from "./Project";
import { Grid } from "@mui/material";
export default function ProjectArea(props) {
  const projects = props.projects;
  const projectItems = projects.map((project) => (
    <li key={project.id}>{project.text}</li>
  ));
  return <ul>{projectItems}</ul>;
}
