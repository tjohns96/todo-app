import { Box, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import "./App.css";
import ProjectArea from "./ProjectArea";
import uniqid from "uniqid";
import Project from "./Project";

function App() {
  const [currInpVal, setCurrInpVal] = useState("");
  const [project, setProject] = useState({ id: "", name: "" });
  const [projects, setProjects] = useState([]);
  function handleProjectChange(e) {
    if (e.target.value.length < 25) {
      setCurrInpVal(e.target.value);
    } else {
      console.log("Error");
    }
  }
  function handleProjectSubmit(e) {
    e.preventDefault();
    setProject({ id: uniqid(), name: currInpVal });
    setCurrInpVal("");
  }
  useEffect(() => {
    if (project.name) {
      setProjects((arr) => [...arr, project]);
    }
  }, [project]);
  return (
    <Grid container>
      <Grid item xs={3}>
        <Grid
          container
          direction="column"
          alignItems="center"
          sx={{
            backgroundColor: "#FFFFFF",
            borderRight: "2px solid rgba(128, 128, 128, 0.2)",
            height: "100vh",
            overflow: "auto",
          }}
        >
          <div className="header">Add a project</div>
          <form
            onSubmit={(e) => {
              handleProjectSubmit(e);
            }}
          >
            <TextField
              label="Project"
              onChange={handleProjectChange}
              value={currInpVal}
            ></TextField>
          </form>
          <ProjectArea projects={projects}></ProjectArea>
        </Grid>
      </Grid>
      <Grid item xs={9}></Grid>
    </Grid>
  );
}

export default App;
