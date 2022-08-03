import { useState } from "react";
import { Grid } from "@mui/material";
export default function Sidebar(props) {
    const projects = props.projects;
    const projectItems = projects.map((project) => <li key={project.id}>{project.name}</li>)
    return(
        <Grid container>
            <Grid item>
                <ul>
                    {projectItems}
                </ul>
            </Grid>
        </Grid>
    );
}