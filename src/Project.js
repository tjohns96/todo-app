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
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import Edit from "@mui/icons-material/Edit";

export default function Project(props) {
  const [expanded, setExpanded] = useState(false);
  function handleExpandClick() {
    setExpanded(!expanded);
  }
  return (
    <List className="project">
      <ListItemButton
        onClick={handleExpandClick}
        className="project"
        key={props.id}
      >
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            console.log("Hi");
          }}
        >
          <AddIcon />
        </IconButton>
        <span>{props.name}</span>
        {expanded ? (
          <ExpandLess className="expand-icon" />
        ) : (
          <ExpandMore className="expand-icon" />
        )}
      </ListItemButton>
      <Collapse in={expanded} timeout="auto">
        <ListItem sx={{ p: 0, pl: 8 }}>
          <ListItemText primary="First task" />
          <IconButton className="edit-icon">
            <Edit />
          </IconButton>
        </ListItem>
      </Collapse>
    </List>
  );
}
