import {
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  ListItemIcon,
  ListItemAvatar,
} from "@mui/material";
import { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import Task from "./Task";
import DeleteIcon from "@mui/icons-material/Delete";
import uniqid from "uniqid";
import TaskArea from "./TaskArea";
import TaskCreateForm from "./TaskCreateForm";

export default function Project(props) {
  const [expanded, setExpanded] = useState(false);
  const [task, setTask] = useState({ id: "", name: "" });
  const [tasks, setTasks] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (task.name) {
      setTasks((arr) => [...arr, task]);
    }
    setExpanded(props.openProject === props.index);
  }, [task, props.openProject]);
  function handleExpandClick() {
    props.chooseOpenProject(props.index);
  }
  function callBackSetTask(name) {
    setTask({ id: uniqid(), name: name });
  }
  function handleDeleteClick(e) {
    e.stopPropagation();
    const project = e.target.closest(".project");
    removeAllChildNodes(project.parentNode);
  }
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
    parent.parentNode.removeChild(parent);
  }
  function handleAddClick(e, open) {
    e.stopPropagation();
    setOpen(!open);
  }
  return (
    <List className="project">
      <ListItemButton
        onClick={handleExpandClick}
        className="project"
        key={props.id}
      >
        <IconButton className="delete-icon" onClick={handleDeleteClick}>
          <DeleteIcon />
        </IconButton>
        <IconButton
          className="add-icon"
          onClick={(e) => handleAddClick(e, open)}
        >
          <AddIcon />
        </IconButton>
        <span>{props.name}</span>
        {expanded ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <TaskArea tasks={tasks} expanded={expanded} />
      <TaskCreateForm
        setTask={callBackSetTask}
        open={open}
        toggleOpen={handleAddClick}
      ></TaskCreateForm>
    </List>
  );
}
