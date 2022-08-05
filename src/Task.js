import {
  Collapse,
  IconButton,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import Edit from "@mui/icons-material/Edit";
import { useState } from "react";
export default function Task(props) {
  const [currInpVal, setCurrInpVal] = useState(props.name);
  const [disabled, setDisabled] = useState(true);
  function handleClickEdit(e) {
    setDisabled(!disabled);
    const input = e.target.closest(".icon-parent").firstChild;
    input.focus();
    input.select();
  }
  function handleTaskChange(e) {
    if (e.target.value.length < 25) {
      setCurrInpVal(e.target.value);
    }
  }
  function handleTaskEnter(e, onBlur) {
    if (e.key === "Enter" || onBlur) {
      setDisabled(true);
      document.activeElement.blur();
    }
  }
  return (
    <Collapse
      key={props.id}
      in={props.expanded}
      timeout="auto"
      className="task"
    >
      <ListItem sx={{ p: 0, pl: 8 }} className="icon-parent">
        <input
          className="task-name"
          type="text"
          value={currInpVal}
          onChange={disabled ? () => {} : handleTaskChange}
          onKeyDown={handleTaskEnter}
          onBlur={(e) => {
            handleTaskEnter(e, true);
          }}
        />
        <IconButton onClick={handleClickEdit}>
          <Edit />
        </IconButton>
      </ListItem>
    </Collapse>
  );
}
