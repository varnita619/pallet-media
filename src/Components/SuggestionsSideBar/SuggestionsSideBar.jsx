import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";

export const SuggestionsSideBar = () => {
  const { users } = useSelector((state) => state.users);
  return (
    <Box display={{ lg: "block", xs: "none" }}>
      <List
        className="suggestions-main-container"
        dense
        sx={{
          width: "100%",
          height: "100vh",
          maxWidth: 310,
          bgcolor: "background.paper",
          paddingTop: 0,
          borderLeft: "2px solid #e6e1e1dd",
          position: "sticky",
          top: "0",
          padding: "1rem",
        }}
      >
        <h3>Suggestions for you</h3>
        {users.map((value) => {
          return (
            <ListItem key={value.id}>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar alt={value.username} src={value.avatar} />
                </ListItemAvatar>
                <ListItemText
                  primary={value.firstName + " " + value.lastName}
                />
              </ListItemButton>
              <Button
                variant="contained"
                sx={{ padding: "6px 10px", borderRadius: "5px" }}
              >
                Follow
              </Button>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
