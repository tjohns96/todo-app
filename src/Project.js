import { IconButton, List, ListItemText } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function Project(props) {
  return (
    <List>
      <IconButton>
        <AddIcon />
      </IconButton>
      <ListItemText id={props.id} primary={props.name} />
    </List>
  );
}
