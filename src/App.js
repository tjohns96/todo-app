import { Box, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import "./App.css";
import ProjectArea from "./Project";
import uniqid from "uniqid";
import Project from "./Project";

function App() {
  const [currInpVal, setCurrInpVal] = useState("");
  const [project, setProject] = useState({ id: "", name: "" });
  const [projects, setProjects] = useState([]);
  function handleProjectChange(e) {
    setCurrInpVal(e.target.value);
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
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            borderRight: "2px solid rgba(128, 128, 128, 0.3)",
            height: "100vh",
            overflow: "auto",
          }}
        >
          <form
            onSubmit={(e) => {
              handleProjectSubmit(e);
            }}
          >
            <TextField
              sx={{ mt: 5 }}
              label="Project"
              onChange={handleProjectChange}
              value={currInpVal}
            ></TextField>
          </form>
          <ProjectArea projects={projects}></ProjectArea>
        </Box>
      </Grid>
      <Grid item xs={9}></Grid>
    </Grid>
  );
}

export default App;
