import { Button, Grid, IconButton, TextField } from "@mui/material";
import { Box } from "@mui/system";
import Clear from "@mui/icons-material/Clear";
import { useState } from "react";
export default function TaskCreateForm(props) {
  const [taskName, setTaskName] = useState("");
  function updateTaskName(e) {
    setTaskName(e.target.value);
  }
  return props.open ? (
    <div className="popup">
      <Box className="form-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            props.setTask(taskName);
            props.toggleOpen(e, props.open);
          }}
        >
          <Grid>
            <Grid item xs={12}>
              <TextField
                onChange={updateTaskName}
                required
                variant="standard"
                label="Project Name"
              ></TextField>
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" className="create-task-btn">
            Create task
          </Button>
        </form>
        <IconButton
          type="text"
          className="close-task-create"
          onClick={(e) => props.toggleOpen(e, props.open)}
        >
          <Clear></Clear>
        </IconButton>
      </Box>
    </div>
  ) : (
    ""
  );
}
