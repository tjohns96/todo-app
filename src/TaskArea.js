import { useState } from "react";
import Task from "./Task";
import { Grid, List } from "@mui/material";
export default function TaskArea(props) {
  const tasks = props.tasks;
  const taskItems = tasks.map((task) => (
    <Task key={task.id} name={task.name} expanded={props.expanded}></Task>
  ));
  return (
    <List className="task-area">
      <Task id="first" name="First task" expanded={props.expanded}></Task>
      {taskItems}
    </List>
  );
}
